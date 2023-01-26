import { FastifyInstance } from 'fastify'
import { prisma } from './lib/prism'
import { z } from 'zod'
import dayjs from 'dayjs'

export async function appRoutes(app: FastifyInstance) {
    app.post('/habits', async (request) => {

        const createMobitBody = z.object({
            tittle: z.string(),
            weekDays: z.array(z.number().min(0).max(6))
        })

        const { tittle, weekDays } = createMobitBody.parse(request.body)

        const today = dayjs().startOf('day').toDate()

        await prisma.habit.create({
            data: {
                tittle,
                created_at: today,
                weekDays: {
                    create: weekDays.map(weekDay => {
                        return {
                            week_day: weekDay
                        }
                    })
                }
            }
        })
})

app.get('/day', async (request) => {
    const getDayParams = z.object({
        date: z.coerce.date()
    })

    const { date } = getDayParams.parse(request.query)

    const parsedDate = dayjs(date).startOf('day')

    const weekDay = dayjs(date).get("day")

    const possibleHabits = await prisma.habit.findMany({ 
        where: {
            created_at: {
                lte: date,
            },
            weekDays: {
                some: {
                    week_day:  weekDay
                }
            }
        }
    })

    const day = await prisma.day.findUnique({
        where: {
            date: parsedDate.toDate(),
        },
        include: {
            dayHabit: true
        }
    })

    const completedHabits = day?.dayHabit.map(
        dayHabit => {
            return dayHabit.habit_id
        }
    )

    return {
        possibleHabits,
        completedHabits,
    }
})
}
import { Header, NewHabit, Text } from './style'

import { Feather } from '@expo/vector-icons'

import Logo from '../../assets/logo.svg'

export function HeaderScreen() {
    return (
    
        <Header>
            <Logo />
            <NewHabit activeOpacity={0.7}>
                <Feather name='plus' color='#8B5CF6' size={20} />
                <Text>Novo habito</Text>
            </NewHabit>
        </Header>
    
    )
}
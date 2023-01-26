import logo from "../../assets/Logo.svg";

import { Plus } from "phosphor-react";

import { Logo, NewHabit, HeaderPage  } from "./style";

export function Header() {
  return (
    <HeaderPage>
      <Logo src={logo} />
      <NewHabit>
        <Plus size={20} color="#8B5CF6"></Plus>
        Novo Habito
      </NewHabit>
    </HeaderPage>
  );
}

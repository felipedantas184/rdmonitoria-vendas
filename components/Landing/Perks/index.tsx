import { Perk, PerkSubtitle, PerkTitle, Section, Wrapper } from "./styles";
import { GoVerified } from "react-icons/go";
import { MdOutlineSecurity, MdOutlineVpnKey } from "react-icons/md";

const Perks = () => {
  return ( 
    <Section>
      <Wrapper>
        <Perk>
          <MdOutlineVpnKey size={32} color="#765D19" />
          <PerkTitle>Acesso Imediato</PerkTitle>
          <PerkSubtitle>Seu acesso estará totalmente liberado logo após o processamento do pagamento na plataforma.</PerkSubtitle>
        </Perk>
        <Perk>
          <GoVerified size={32} color="#765D19" />
          <PerkTitle>7 dias de garantia</PerkTitle>
          <PerkSubtitle>Sua inscrição com risco zero. Você poderá pedir a devolução de 100% do seu dinheiro dentro de 7 dias.</PerkSubtitle>
        </Perk>
        <Perk>
          <MdOutlineSecurity size={32} color="#765D19" />
          <PerkTitle>Pagamento Seguro</PerkTitle>
          <PerkSubtitle>Somos parceiros da maior e melhor plataforma de cursos online do Brasil. Seu pagamento está 100% seguro.</PerkSubtitle>
        </Perk>
      </Wrapper>
    </Section>
   );
}
 
export default Perks;
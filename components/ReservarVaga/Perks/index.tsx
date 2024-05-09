import { Perk, PerkSubtitle, PerkTitle, Section, Wrapper } from "./styles";
import { GoVerified } from "react-icons/go";
import { MdOutlineSecurity, MdOutlineVpnKey } from "react-icons/md";

const Perks = () => {
  return ( 
    <Section>
      <Wrapper>
        <Perk>
          <MdOutlineVpnKey size={32} color="#765D19" />
          <PerkTitle>Vagas Limitadas</PerkTitle>
          <PerkSubtitle>Garanta que você fará parte do curso antes que as vagas acabem! Entre no grupo e <strong>reserve sua vaga!</strong></PerkSubtitle>
        </Perk>
        <Perk>
          <GoVerified size={32} color="#765D19" />
          <PerkTitle>Super Desconto</PerkTitle>
          <PerkSubtitle>Quem entrar no grupo e reservar a vaga no curso receberá um <strong>desconto de R$300,00</strong> na inscrição!</PerkSubtitle>
        </Perk>
        <Perk>
          <MdOutlineSecurity size={32} color="#765D19" />
          <PerkTitle>Aprenda Conosco</PerkTitle>
          <PerkSubtitle>Dois ex-vestibulandos que <strong>já fizeram +900 em matemática</strong> e querem te ensinar o método pra isso!</PerkSubtitle>
        </Perk>
      </Wrapper>
    </Section>
   );
}
 
export default Perks;
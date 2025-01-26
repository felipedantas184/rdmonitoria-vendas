import Image from "next/image";
import { First, HeroSubtitle, HeroTitle, ImageWrapper, LogoWrapper, PrimaryButton, Second, Section, Wrapper } from "./styles";
import { sendContactForm } from "@/lib/api";

const Hero = () => {
  const FirstButton = async (e: any) => {
      sendContactForm({
        name: 'Novo Clique - Hero Botão',
        email: 'felipedantas184@gmail.com',
        subject: 'Novo Clique - Com quem vai aprender Botão',
        observations: 'Novo interessado no curso'
      })
    }

  return (
    <Section>
      <Wrapper>
        <First>
          <LogoWrapper>
            <Image src={'/assets/images/smallLogo.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} priority />
          </LogoWrapper>
          <HeroTitle>Domine agora a Matemática do ENEM e melhore de vez o seu desempenho nos Simulados!</HeroTitle>
          <PrimaryButton onClick={FirstButton} href="https://pay.hotmart.com/C92879724V?off=w5v30h66&bid=1737662961012" target="_blank" >Garantir Vaga com Desconto</PrimaryButton>
        </First>
        <Second>
          <ImageWrapper>
            <Image src={'/assets/images/imagehero.jpeg'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
          </ImageWrapper>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default Hero;
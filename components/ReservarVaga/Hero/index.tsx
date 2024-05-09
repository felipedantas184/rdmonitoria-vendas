import Image from "next/image";
import { First, HeroSubtitle, HeroTitle, ImageWrapper, LogoWrapper, PrimaryButton, Second, Section, Wrapper } from "./styles";

const Hero = () => {
  return (
    <Section>
      <Wrapper>
        <First>
          <LogoWrapper>
            <Image src={'/assets/images/smallLogo.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} priority />
          </LogoWrapper>
          <HeroTitle>Domine agora a Matemática do ENEM e melhore de vez o seu desempenho nos Simulados Enem!</HeroTitle>
          <HeroSubtitle>É a solução que você precisa para alcançar uma pontuação excelente no vestibular e também ficar mais próximo da sua aprovação dos sonhos!</HeroSubtitle>
          <PrimaryButton href="https://chat.whatsapp.com/CedVt5xVH841NdmexVpGl2" target="_blank" >Reservar Vaga Com Desconto</PrimaryButton>
        </First>
        <Second>
          <ImageWrapper>
            <Image src={'/assets/images/heroImage.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
          </ImageWrapper>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default Hero;
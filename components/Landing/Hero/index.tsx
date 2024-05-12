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
          <HeroTitle>Domine agora a Matemática do ENEM e melhore de vez o seu desempenho nos Simulados!</HeroTitle>
          <PrimaryButton href="https://pay.hotmart.com/C92879724V" target="_blank" >Garantir Vaga com Desconto</PrimaryButton>
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
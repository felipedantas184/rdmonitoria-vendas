import Image from "next/image";
import { ImageWrapper, Perk, PerkSubtitle, PerkTitle, PerkTopline, PrimaryButton, Section, SectionTitle, TestimonialsWrapper, Topline, Wrapper } from "./styles";
import { sendContactForm } from "@/lib/api";

const Testimonials = () => {
  const FirstButton = async (e: any) => {
    sendContactForm({
      name: 'Novo Clique - Depoimentos Botão',
      email: 'felipedantas184@gmail.com',
      subject: 'Novo Clique - Com quem vai aprender Botão',
      observations: 'Novo interessado no curso'
    })
  }

  return (
    <Section>
      <Wrapper>
        <Topline>O QUE DIZEM OS ALUNOS?</Topline>
        <SectionTitle>Depoimentos dos nossos alunos!</SectionTitle>
      </Wrapper>

      <TestimonialsWrapper>
        <ImageWrapper>
          <Image src={'/assets/images/testimonial01.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={'/assets/images/testimonial02.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={'/assets/images/testimonial03.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={'/assets/images/testimonial04.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={'/assets/images/testimonial05.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={'/assets/images/testimonial06.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={'/assets/images/testimonial07.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
        </ImageWrapper>
      </TestimonialsWrapper>
      <Wrapper>
        <PrimaryButton onClick={FirstButton} href="https://pay.hotmart.com/C92879724V?off=w5v30h66&bid=1737662961012V" target="_blank" >Garantir Vaga com Desconto</PrimaryButton>
      </Wrapper>
    </Section>
  );
}

export default Testimonials;
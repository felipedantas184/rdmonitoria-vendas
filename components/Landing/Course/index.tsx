import { FaCheck } from "react-icons/fa6";
import { First, ImageWrapper, PrimaryButton, Second, Section, SectionSubtitle, SectionTitle, Topic, TopicSpan, Topline, Wrapper } from "./styles";
import Image from "next/image";

const Course = () => {
  return (
    <Section>
      <Wrapper>
        <First>
          <Topline>Sobre o Curso</Topline>
          <SectionTitle>Colocamos neste curso aquilo que gostaria de ter aprendido no começo</SectionTitle>
          <SectionSubtitle>Trazendo tudo o que eu gostaríamos de ter aprendido logo que iniciamos nossa jornada de vestibulando, sem ter que ficar perdido com dicas e métodos soltos pela internet.</SectionSubtitle>
          <Topic><FaCheck size={16} color="#765D19" /><TopicSpan>Toda a nossa experiência em matemática reunida em um curso;</TopicSpan></Topic>
          <Topic><FaCheck size={16} color="#765D19" /><TopicSpan>Ideal para quem está começando ou está preso em uma pontuação;</TopicSpan></Topic>
          <Topic><FaCheck size={16} color="#765D19" /><TopicSpan>Te ajudar a conquistar a vaga dos sonhos na univesidade;</TopicSpan></Topic>
          <Topic><FaCheck size={16} color="#765D19" /><TopicSpan>O passo a passo para aumentar a pontuação.</TopicSpan></Topic>
          <PrimaryButton href="https://chat.whatsapp.com/CedVt5xVH841NdmexVpGl2" target="_blank" >Reservar Vaga Com Desconto</PrimaryButton>
        </First>
        <Second>
          <ImageWrapper>
            <Image src={'/assets/images/laptop.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
          </ImageWrapper>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default Course;
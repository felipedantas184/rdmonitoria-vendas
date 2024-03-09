import Image from "next/image";
import { First, ImageWrapper, Second, Section, SectionParagraph, SectionTitle, Topic, TopicSpan, Topline, Wrapper, WrapperTwo } from "./styles";
import { FaCheck } from "react-icons/fa6";

const About = () => {
  return (
    <Section>
      <Wrapper>
        <First>
          <ImageWrapper>
            <Image src={'/assets/images/andreisac.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
          </ImageWrapper>
        </First>
        <Second>
          <Topline>Com quem você vai aprender</Topline>
          <SectionTitle>André Isac</SectionTitle>
          <SectionParagraph>Me chamo André e fui aprovado para Medicina na UFPI e na UESPI. Atualmente ajudo alunos a conquistarem sua aprovação com a nota do Enem!</SectionParagraph>
          <SectionParagraph>Me chamo Felipe e sou acadêmico de Medicina pela UFPI. Eu e o André nos juntamos para ajudar cada vez mais estudantes a conquistarem uma vaga na Universidade!</SectionParagraph>
          <Topic><FaCheck size={16} color="#09CF83" /><TopicSpan>Aprovado <strong>Medicina UFPI</strong>;</TopicSpan></Topic>
          <Topic><FaCheck size={16} color="#09CF83" /><TopicSpan>Aprovado <strong>Medicina UESPI</strong>;</TopicSpan></Topic>
          <Topic><FaCheck size={16} color="#09CF83" /><TopicSpan>Nota <strong>926 em Matemática</strong> no Enem</TopicSpan></Topic>
        </Second>
      </Wrapper>
      <WrapperTwo>
        <First>
          <ImageWrapper>
            <Image src={'/assets/images/felipedantas.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
          </ImageWrapper>
        </First>
        <Second>
          <Topline>Com quem você vai aprender</Topline>
          <SectionTitle>Felipe Dantas</SectionTitle>
          <SectionParagraph>Me chamo André e fui aprovado para Medicina na UFPI e na UESPI. Atualmente ajudo alunos a conquistarem sua aprovação com a nota do Enem!</SectionParagraph>
          <SectionParagraph>Me chamo Felipe e sou acadêmico de Medicina pela UFPI. Eu e o André nos juntamos para ajudar cada vez mais estudantes a conquistarem uma vaga na Universidade!</SectionParagraph>
          <Topic><FaCheck size={16} color="#09CF83" /><TopicSpan>Aprovado <strong>Medicina UFPI</strong>;</TopicSpan></Topic>
          <Topic><FaCheck size={16} color="#09CF83" /><TopicSpan>Aprovado Engenharia da Computação <strong>USP</strong>;</TopicSpan></Topic>
          <Topic><FaCheck size={16} color="#09CF83" /><TopicSpan>Nota <strong>980 em Matemática</strong> no Enem</TopicSpan></Topic>       
        </Second>
      </WrapperTwo>
    </Section>
  );
}

export default About;
import Image from "next/image";
import { Achieve, First, ImageWrapper, Second, Section, Subtitle, TeacherAchieves, TeacherName, TeacherWrapper, Teachers, TextWrapper,  TimeWrapper,  Title, TitleWhite, Topline, ToplineGreen, WhatsAppButtom, Wrapper } from "./styles";

const Desconto = () => {
  return (
    <Section>
      <Wrapper>
        <First>
          <TextWrapper>
            <Topline>Terceiro</Topline>
            <Title>Aulão de Matemática</Title>
            <Subtitle>Resolução de questões, revisão teórica e dicas rápidas</Subtitle>
          </TextWrapper>
          <Teachers>
            <TeacherWrapper>
              <ImageWrapper>
                <Image src={'/assets/images/andreisac.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
              </ImageWrapper>
              <TeacherName>André Isac</TeacherName>
              <TeacherAchieves>
                <Achieve>926 em Matemática</Achieve>
                <Achieve>Medicina UFPI</Achieve>
                <Achieve>Medicina UESPI</Achieve>
              </TeacherAchieves>
            </TeacherWrapper>
            <TeacherWrapper>
              <ImageWrapper>
                <Image src={'/assets/images/felipedantas.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
              </ImageWrapper>
              <TeacherName>Felipe Dantas</TeacherName>
              <TeacherAchieves>
                <Achieve>980 em Matemática</Achieve>
                <Achieve>Medicina UFPI</Achieve>
                <Achieve>Eng. Comp. USP</Achieve>
              </TeacherAchieves>
            </TeacherWrapper>
          </Teachers>
        </First>
        <Second>
          <TimeWrapper>
            <ToplineGreen>Aula Aberta</ToplineGreen>
            <TitleWhite>Domingo - 21/04<br />ÀS 14h00</TitleWhite>
          </TimeWrapper>
          <WhatsAppButtom href="https://chat.whatsapp.com/LBVAK6ZhzH6LgBawKFpgxh" target="_blank" >Quero Participar!</WhatsAppButtom>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default Desconto;
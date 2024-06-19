import { Achieve, First, ImageWrapper, LogoWrapper, Perk, PerkSubtitle, PerkTitle, ProgressBar, Second, Section, Subtitle, TeacherAchieves, TeacherName, TeacherWrapper, Teachers, TextWrapper, TimeWrapper, Title, TitleWhite, Topline, ToplineGreen, ToplineRed, WhatsAppButtom, Wrapper } from "./styles";
import { MdOutlineVpnKey } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { BiBookContent, BiVideo } from "react-icons/bi";
import Image from "next/image";
import { BsQuestionCircle } from "react-icons/bs";

const Minicurso = () => {
  return (
    <Section>
      <Wrapper>
        <First>
          <LogoWrapper>
            <Image src={'/assets/icons/LogoMinicurso.png'} alt="Minicurso de Férias - Matemática | RD Monitoria" fill className={'image'} />
          </LogoWrapper>
          <TextWrapper>
            <Subtitle>Resolução de questões, revisão teórica e dicas rápidas</Subtitle>
          </TextWrapper>
          <Second>
            <TimeWrapper>
              <ToplineGreen>Gratuito</ToplineGreen>
              <TitleWhite>Entre no Grupo e Garanta sua Vaga 👇</TitleWhite>
            </TimeWrapper>
            <WhatsAppButtom href="https://chat.whatsapp.com/EP8cF2BaFm7LNSLwjWpzLO" target="_blank" >Quero Participar!</WhatsAppButtom>
          </Second>
        </First>
        <First>
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
      </Wrapper>
      <Wrapper>
        <Second style={{ maxWidth: 500, alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <TimeWrapper>
            <ToplineRed>Vagas Limitadas</ToplineRed>
            <TitleWhite>Corre que as Vagas são Limitadas! 👇</TitleWhite>
          </TimeWrapper>
          <ProgressBar><span></span></ProgressBar>
          <WhatsAppButtom style={{ marginTop: 16 }} href="https://chat.whatsapp.com/EP8cF2BaFm7LNSLwjWpzLO" target="_blank" >Quero Participar!</WhatsAppButtom>
        </Second>
        <First>
          <LogoWrapper>
            <Image alt="Cronograma" src={'/assets/images/cronogramaminicurso.png'} fill className={'image'} />
          </LogoWrapper>
        </First>
      </Wrapper>
      <Wrapper>
        <Perk>
          <BiVideo size={32} color="#020024" />
          <PerkTitle>Aulas Ao Vivo</PerkTitle>
          <PerkSubtitle>O Minicurso acontecerá de forma ONLINE E GRATUITA do dia 24/06 (próxima segunda) ao dia 27/06 (quinta-feira)! Para participar basta entrar no Grupo do Minicurso de Férias!</PerkSubtitle>
        </Perk>
        <Perk>
          <BsQuestionCircle size={32} color="#020024" />
          <PerkTitle>Questões Modelo</PerkTitle>
          <PerkSubtitle>Todos os dias, você receberá uma lista com os modelos de questões que mais caem no ENEM, separadas por bloco de assuntos para você aprender da maneira mais eficiente possível!</PerkSubtitle>
        </Perk>
        <Perk>
          <BiBookContent size={32} color="#020024" />
          <PerkTitle>Revisão Teórica</PerkTitle>
          <PerkSubtitle>Além da resolução das questões das listas de questões, durante as aulas nós também revisaremos a parte teórica dos assuntos de forma objetiva para te ajudar a fixar o conhecimento!</PerkSubtitle>
        </Perk>
      </Wrapper>
      <Wrapper>
        <Second>
          <TimeWrapper>
            <ToplineRed>VAGAS LIMITADAS</ToplineRed>
            <TitleWhite>Entre no Grupo e Garanta sua Vaga 👇</TitleWhite>
          </TimeWrapper>
          <WhatsAppButtom href="https://chat.whatsapp.com/EP8cF2BaFm7LNSLwjWpzLO" target="_blank" >Quero Participar!</WhatsAppButtom>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default Minicurso;
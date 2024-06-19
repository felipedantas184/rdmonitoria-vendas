import { Achieve, First, ImageWrapper, LogoWrapper, ProgressBar, Second, Section, Subtitle, TeacherAchieves, TeacherName, TeacherWrapper, Teachers, TextWrapper, TimeWrapper, Title, TitleWhite, Topline, ToplineGreen, ToplineRed, WhatsAppButtom, Wrapper } from "./styles";
import { Perk, PerkSubtitle, PerkTitle } from "../Landing/Perks/styles";
import { MdOutlineSecurity, MdOutlineVpnKey } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { BiVideo } from "react-icons/bi";
import Image from "next/image";

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
            <WhatsAppButtom href="https://chat.whatsapp.com/LBVAK6ZhzH6LgBawKFpgxh" target="_blank" >Quero Participar!</WhatsAppButtom>
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
          <WhatsAppButtom style={{ marginTop: 16 }} href="https://chat.whatsapp.com/LBVAK6ZhzH6LgBawKFpgxh" target="_blank" >Quero Participar!</WhatsAppButtom>
        </Second>
        <First>
          <LogoWrapper>
            <Image alt="Cronograma" src={'/assets/images/cronogramaminicurso.png'} fill className={'image'} />
          </LogoWrapper>
        </First>
      </Wrapper>
      <Wrapper>
        <Perk>
          <MdOutlineVpnKey size={32} color="#765D19" />
          <PerkTitle>Aulas Ao Vivo</PerkTitle>
          <PerkSubtitle>Ao entrar no nosso grupo você receberá todas as informações para participar do nosso Terceiro Aulão de Matemática.</PerkSubtitle>
        </Perk>
        <Perk>
          <GoVerified size={32} color="#765D19" />
          <PerkTitle>Questões Modelo</PerkTitle>
          <PerkSubtitle>No grupo você também encontra o link para o nosso drive com as listas dos Aulões, simulados e provas antigas do ENEM</PerkSubtitle>
        </Perk>
        <Perk>
          <BiVideo size={32} color="#765D19" />
          <PerkTitle>Revisão Teórica</PerkTitle>
          <PerkSubtitle>Você terá acesso às listas anteriores e às gravações dos aulões e das resoluções do SAS 01 de 2024!</PerkSubtitle>
        </Perk>
      </Wrapper>
      <Wrapper>
        <Second>
          <TimeWrapper>
            <ToplineRed>VAGAS LIMITADAS</ToplineRed>
            <TitleWhite>Entre no Grupo e Garanta sua Vaga 👇</TitleWhite>
          </TimeWrapper>
          <WhatsAppButtom href="https://chat.whatsapp.com/LBVAK6ZhzH6LgBawKFpgxh" target="_blank" >Quero Participar!</WhatsAppButtom>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default Minicurso;
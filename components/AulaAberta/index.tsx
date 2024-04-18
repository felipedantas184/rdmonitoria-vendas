import Image from "next/image";
import { Achieve, First, ImageWrapper, Second, Section, Subtitle, TeacherAchieves, TeacherName, TeacherWrapper, Teachers, TextWrapper, TimeWrapper, Title, TitleWhite, Topline, ToplineGreen, WhatsAppButtom, Wrapper } from "./styles";
import { Perk, PerkSubtitle, PerkTitle } from "../Landing/Perks/styles";
import { MdOutlineSecurity, MdOutlineVpnKey } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { BiVideo } from "react-icons/bi";

const AulaAberta = () => {
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
      <Wrapper>
        <Perk>
          <MdOutlineVpnKey size={32} color="#765D19" />
          <PerkTitle>Acesso à Aula Gratuita</PerkTitle>
          <PerkSubtitle>Ao entrar no nosso grupo você receberá todas as informações para participar do nosso Terceiro Aulão de Matemática.</PerkSubtitle>
        </Perk>
        <Perk>
          <GoVerified size={32} color="#765D19" />
          <PerkTitle>Super Drive</PerkTitle>
          <PerkSubtitle>No grupo você também encontra o link para o nosso drive com as listas dos Aulões, simulados e provas antigas do ENEM</PerkSubtitle>
        </Perk>
        <Perk>
          <BiVideo size={32} color="#765D19" />
          <PerkTitle>Listas e Gravações</PerkTitle>
          <PerkSubtitle>Você terá acesso às listas anteriores e às gravações dos aulões e das resoluções do SAS 01 de 2024!</PerkSubtitle>
        </Perk>
      </Wrapper>
      <Wrapper>
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

export default AulaAberta;
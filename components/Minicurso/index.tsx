import { Achieve, First, ImageWrapper, LogoWrapper, Perk, PerkSubtitle, PerkTitle, ProgressBar, Second, Section, Subtitle, TeacherAchieves, TeacherName, TeacherWrapper, Teachers, TextWrapper, TimeWrapper, Title, TitleWhite, Topline, ToplineGreen, ToplineRed, WhatsAppButtom, Wrapper } from "./styles";
import { MdOutlineVpnKey } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { BiBookContent, BiVideo } from "react-icons/bi";
import Image from "next/image";
import { BsQuestionCircle } from "react-icons/bs";
import { sendContactForm } from "@/lib/api";

const Minicurso = () => {
  const FirstButton = async (e: any) => {
		sendContactForm({
			name: 'Novo Clique - Primeiro Botão',
			email: 'felipedantas184@gmail.com',
			subject: 'Novo Clique - Primeiro Botão',
			observations: 'Novo interessado no curso'
		})
	}
  const SecondButton = async (e: any) => {
		sendContactForm({
			name: 'Novo Clique - Segundo Botão',
			email: 'felipedantas184@gmail.com',
			subject: 'Novo Clique - Segundo Botão!',
			observations: 'Novo interessado no curso'
		})
	}
  const ThirdButton = async (e: any) => {
		sendContactForm({
			name: 'Novo Clique - Terceiro Botão',
			email: 'felipedantas184@gmail.com',
			subject: 'Novo Clique - Terceiro Botão',
			observations: 'Novo interessado no curso'
		})
	}

  return (
    <Section>
      <Wrapper>
        <First>
          <LogoWrapper>
            <Image src={'/assets/icons/LogoMinicurso.png'} alt="Minicurso de Férias - Matemática | RD Monitoria" fill className={'image'} priority />
          </LogoWrapper>
          <TextWrapper>
            <Subtitle>Resolução de questões, revisão teórica e dicas rápidas</Subtitle>
          </TextWrapper>
          <Second>
            <TimeWrapper>
              <ToplineGreen>Gratuito</ToplineGreen>
              <TitleWhite>Entre no Grupo e Garanta sua Vaga 👇</TitleWhite>
            </TimeWrapper>
            <WhatsAppButtom onClick={FirstButton} href="https://chat.whatsapp.com/EP8cF2BaFm7LNSLwjWpzLO" target="_blank" >Quero Participar!</WhatsAppButtom>
          </Second>
        </First>
        <First>
          <Teachers>
            <TeacherWrapper>
              <ImageWrapper>
                <Image src={'/assets/images/andreisac.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} priority />
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
                <Image src={'/assets/images/felipedantas.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} priority />
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
          <WhatsAppButtom onClick={SecondButton} style={{ marginTop: 16 }} href="https://chat.whatsapp.com/EP8cF2BaFm7LNSLwjWpzLO" target="_blank" >Quero Participar!</WhatsAppButtom>
        </Second>
        <First>
          <LogoWrapper>
            <Image alt="Cronograma" src={'/assets/images/cronogramaminicurso.png'} fill className={'image'} />
          </LogoWrapper>
        </First>
      </Wrapper>
      <Wrapper>
        <Second>
          <TimeWrapper>
            <ToplineRed>VAGAS LIMITADAS</ToplineRed>
            <TitleWhite>Entre no Grupo e Garanta sua Vaga 👇</TitleWhite>
          </TimeWrapper>
          <WhatsAppButtom onClick={ThirdButton} href="https://chat.whatsapp.com/EP8cF2BaFm7LNSLwjWpzLO" rel="noreferrer" target="_blank" >Quero Participar!</WhatsAppButtom>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default Minicurso;
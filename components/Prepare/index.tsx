import Image from "next/image";
import styled from "styled-components";
import { Perk, PerkSubtitle, PerkTitle } from "../Landing/Perks/styles";
import { MdOutlineVpnKey } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { BiVideo } from "react-icons/bi";

const Prepare = () => {
  return (
    <Section>
      <Wrapper>
        <First>
          <TextWrapper>
            <Topline>RD Monitoria</Topline>
            <Title>Grupo Exclusivo</Title>
            <Subtitle>Acompanhamento SISU 2025, Materiais Gratuitos e Interação com a Comunidade</Subtitle>
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
            <ToplineGreen>Link para o Grupo Exclusivo</ToplineGreen>
            <TitleWhite>Conteúdos Gratuitos</TitleWhite>
            <PerkSubtitle>Junte-se ao nosso grupo exclusivo no WhatsApp e largue na frente para fazer de 2025 o seu melhor ano!</PerkSubtitle>
          </TimeWrapper>
          <WhatsAppButtom href="https://chat.whatsapp.com/LVPlkEp6Ss87pj1drcgoBU" target="_blank" >Quero Participar!</WhatsAppButtom>
        </Second>
      </Wrapper>
      <Wrapper>
        <Perk style={{ flex: 1 }}>
          <MdOutlineVpnKey size={32} color="#765D19" />
          <PerkTitle>Encontros SISU 2025</PerkTitle>
          <PerkSubtitle>Teremos encontros para tirar dúvidas sobre o SISU 2025 e para acompanhar as notas de corte de vários cursos!</PerkSubtitle>
        </Perk>
        <Perk style={{ flex: 1 }}>
          <GoVerified size={32} color="#765D19" />
          <PerkTitle>Super Drive</PerkTitle>
          <PerkSubtitle>No grupo você também encontra o link para o nosso drive com as listas dos Aulões, simulados e provas antigas do ENEM</PerkSubtitle>
        </Perk>
        <Perk style={{ flex: 1 }} >
          <BiVideo size={32} color="#765D19" />
          <PerkTitle>Listas e Gravações</PerkTitle>
          <PerkSubtitle>Você terá acesso a listas e a gravações de aulões da RD Monitoria e resoluções de simulados!</PerkSubtitle>
        </Perk>
      </Wrapper>
      <Wrapper>
        <Second>
          <TimeWrapper>
            <ToplineGreen>Link para o Grupo Exclusivo</ToplineGreen>
            <TitleWhite>Conteúdos Gratuitos</TitleWhite>
            <PerkSubtitle>Junte-se ao nosso grupo exclusivo no WhatsApp e largue na frente para fazer de 2025 o seu melhor ano!</PerkSubtitle>
          </TimeWrapper>
          <WhatsAppButtom href="https://chat.whatsapp.com/LVPlkEp6Ss87pj1drcgoBU" target="_blank" >Quero Participar!</WhatsAppButtom>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default Prepare;


const Section = styled.section`
  background: rgb(89, 45, 144);
  background: linear-gradient(135deg, rgba(89,45,144,1) 0%, rgba(19,0,40,1) 50%);
  padding: 25px 0;
  min-height: 100vh;
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 16px;
	margin-left: auto;
	margin-right: auto;
  margin-top: auto;
  margin-left: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
  gap: 32px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`
const First = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`
const Second = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 8px;
`
const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Title = styled.h1`
  color: #FFFFFF;
  font-size: 42px;
  line-height: 60px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.1;
`
const Subtitle = styled.h3`
  color: #F6F6F6;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
const Topline = styled.span`
  color: #E2E2E2;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`
const Teachers = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`
const TeacherWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 270px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;    
  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
    }
  }
`
const TeacherName = styled.h3`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`
const TeacherAchieves = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`
const Achieve = styled.li`
  color: #E2E2E2;
  font-size: 14px;
  text-align: center;
`
const TimeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  padding: 8px;
  text-align: center;
`
const ToplineGreen = styled.span`
  color: green;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
`
const TitleWhite = styled.h1`
  color: #1C0936;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
`
const WhatsAppButtom = styled.a`
  width: 100%;
  margin: 0;
  padding: 16px 12px;

  background: rgb(89, 45, 144);
  background: linear-gradient(135deg, rgba(89,45,144,1) 0%, rgba(19,0,40,1) 90%);
  background-clip: padding-box;

  border: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;

  color: #fff;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  -webkit-tap-highlight-color: transparent;

  &:hover, &:focus {
    background-color: #13131A;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #13131A;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`
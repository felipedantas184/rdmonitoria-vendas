import { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardsWrapper, FooterCard, FooterCards, HeroSubtitle, HeroTitle, HeroWrapper, LogoWrapper, Section, Span, Title, VideoWrapper, Wrapper } from "./styles";
import { FaBook, FaDownload, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";

const Event = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const defaultHeight = 495;
  const [videoHeight, setVideoHeight] = useState<number>(
    iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight
  );

  const handleChangeVideoWidth = useCallback(() => {
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
          ? 1.2
          : window.innerWidth > 400
            ? 1.45
            : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 1.5625
      : defaultHeight;
    return setVideoHeight(Math.floor(height * ratio));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleChangeVideoWidth);
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
          ? 1.2
          : window.innerWidth > 400
            ? 1.25
            : 1.30;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    setVideoHeight(Math.floor(height * ratio));
    return function cleanup() {
      window.removeEventListener("resize", handleChangeVideoWidth);
    };
  }, [videoHeight, handleChangeVideoWidth]);


  return (
    <Section>
      <Wrapper>
        <HeroWrapper>
          <LogoWrapper>
            <Image src={'/assets/icons/RDMonitoriaBranco.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} priority />
          </LogoWrapper>
          <HeroTitle>Semana da Aprovação <br />RD Monitoria</HeroTitle>
          <HeroSubtitle>Tudo o que gostaríamos de saber antes de fazer o ENEM!</HeroSubtitle>
        </HeroWrapper>
        <CardsWrapper>
          <Card href={'/semana-da-aprovacao/video-01'} style={{ backgroundColor: '#25d366' }} >
            <Span>01</Span>
            <Title>Como eu estudava?</Title>
          </Card>
          <Card href={'/semana-da-aprovacao/video-01'} style={{ backgroundColor: '#2A2A2A', cursor: 'not-allowed' }}>
            <Span>01</Span>
            <Title>Como eu estudava?</Title>
          </Card>
          <Card href={'/semana-da-aprovacao/video-01'} style={{ backgroundColor: '#2A2A2A', cursor: 'not-allowed' }}>
            <Span>01</Span>
            <Title>Como eu estudava?</Title>
          </Card>
        </CardsWrapper>
        <iframe
          ref={iframeRef}
          title={'title'}
          width="100%"
          height={`${videoHeight}px`}
          src={'https://www.youtube.com/embed/1z71O3PLXpo?si=fBDEcnuwtBhHV9iR'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: 8 }}
        />
        <FooterCards>
          <FooterCard href={'https://chat.whatsapp.com/LBVAK6ZhzH6LgBawKFpgxh'} target="_blank" >
            <FaWhatsapp size={24} color="25d366" />
            <Title>Grupo<br />Exclusivo</Title>
          </FooterCard>
          <FooterCard href={'https://chat.whatsapp.com/LBVAK6ZhzH6LgBawKFpgxh'} target="_blank" >
            <FaDownload size={24} color="25d366" />
            <Title>Baixar<br />Cronograma</Title>
          </FooterCard>
          <FooterCard href={'https://chat.whatsapp.com/LBVAK6ZhzH6LgBawKFpgxh'} target="_blank" >
            <FaBook size={24} color="25d366" />
            <Title>Baixar<br />eBook</Title>
          </FooterCard>
          <FooterCard href={'https://chat.whatsapp.com/LBVAK6ZhzH6LgBawKFpgxh'} target="_blank" >
            <FaBook size={24} color="25d366" />
            <Title>Grupo<br />Exclusivo</Title>
          </FooterCard>
        </FooterCards>
      </Wrapper>
    </Section>
  );
}

export default Event;
import { FaKey } from "react-icons/fa6";
import { Card, CardSubtitle, CardTitle, CardsWrapper, Section, SectionTitle, Topline, Wrapper } from "./styles";
import { IoIosPeople } from "react-icons/io";
import { BsCollectionPlay } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";
import { MdOutlineCardGiftcard } from "react-icons/md";

const HowItWorks = () => {
  return (
    <Section>
      <Wrapper>
        <Topline>Como funciona o Curso?</Topline>
        <SectionTitle>O que está incluso no Curso e como terei acesso?</SectionTitle>
        <CardsWrapper>
        <Card>
            <TbTargetArrow size={32} color="#411551" />
            <CardTitle>12 Módulos Diretos ao Ponto</CardTitle>
            <CardSubtitle>A metodologia conta com 12 módulos especiais e únicos que tratam desde os pilares e fundamentos, até dicas específicas para melhores resultados no simulado.</CardSubtitle>
          </Card>
          <Card>
            <LuRefreshCcw size={32} color="#411551" />
            <CardTitle>Resolução de Simulados</CardTitle>
            <CardSubtitle>Quem estiver inscrito no curso terá <strong>encontros ao vivo e exclusivos para resolver e comentar diversos simulados</strong> até o ENEM, como o SAS e o Bernoulli.</CardSubtitle>
          </Card>
          <Card>
            <BsCollectionPlay size={32} color="#411551" />
            <CardTitle>Aulas 100% Online</CardTitle>
            <CardSubtitle>Todas as aulas são 100% online, basta ter um acesso a internet e você pode assistir o Curso onde você quiser, quando quiser, sem perder tempo.</CardSubtitle>
          </Card>
          <Card>
            <IoIosPeople size={32} color="#411551" />
            <CardTitle>Área de Membros Exclusiva</CardTitle>
            <CardSubtitle>Após garantir a sua vaga no Curso Matemática Ativa você terá acesso a uma área de membros exclusiva, onde poderá ver tudo independente de onde esteja.</CardSubtitle>
          </Card>
          <Card>
            <FaKey size={32} color="#411551" />
            <CardTitle>Teoria e Prática sem Mistério</CardTitle>
            <CardSubtitle>O Curso te traz toda a parte teórica para você dominar os principais assuntos, e claro, a parte prática que é quando nós começamos fazer a coisa acontecer.</CardSubtitle>
          </Card>
          <Card>
            <MdOutlineCardGiftcard size={32} color="#411551" />
            <CardTitle>5 Bônus Especiais</CardTitle>
            <CardSubtitle>Ao garantir o seu acesso a Formação você também recebe 5 bônus especiais que vão impulsionar o seu resultado em tempo recorde e facilitar o seu aprendizado.</CardSubtitle>
          </Card>
        </CardsWrapper>
      </Wrapper>
    </Section>
  );
}

export default HowItWorks;
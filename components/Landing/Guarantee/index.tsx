import Image from "next/image";
import { First, ImageWrapper, Second, Section, SectionParagraph, SectionTitle, Wrapper } from "./styles";

const Guarantee = () => {
  return (
    <Section>
      <Wrapper>
        <First>
          <ImageWrapper>
            <Image src={'/assets/images/selo-garantia.png'} alt="Curso Matemática Ativa RD Monitoria" fill className={'image'} />
          </ImageWrapper>
        </First>
        <Second>
          <SectionTitle>Garantia Incondicional</SectionTitle>
          <SectionParagraph>Aproveite a nossa garantia 100% incondicional de 7 dias para experimentar o Curso Matemática Ativa e ver se é interessante para você.</SectionParagraph>
          <SectionParagraph>Se em até 7 dias da compra do produto, você não estiver satisfeito, basta entrar em contato solicitando o cancelamento e devolução do produto, bem como o reembolso de todo o seu dinheiro, sem qualquer questionamento ou burocracia.</SectionParagraph>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default Guarantee;
import { FaCheckSquare } from "react-icons/fa";
import { First, ImageWrapper, PrimaryButton, Second, Section, SectionTitle, Topic, TopicSpan, Topline, Wrapper } from "./styles";
import Image from "next/image";

const ForWho = () => {
  return (
    <Section>
      <Wrapper>
        <First>
          <ImageWrapper>
            <Image src={'/assets/images/smartphones.png'} alt="Notas RD Monitoria ENEM" fill className={'image'} />
          </ImageWrapper>
          <span style={{textAlign: 'center', fontSize: 14}}>Nossas notas no ENEM! Queremos que você chegue lá também!</span>
        </First>
        <Second>
          <Topline>Será que é pra mim?</Topline>
          <SectionTitle>Pra quem é o Matemática Ativa?</SectionTitle>
          <Topic><FaCheckSquare size={32} color="#13131A" style={{flex: 1}} /><TopicSpan><strong>Para iniciantes:</strong> Quem está começando do zero e deseja ter resultados acima da média, se destacar nos simulados e alcançar melhores pontuações em matemática.</TopicSpan></Topic>
          <Topic><FaCheckSquare size={32} color="#13131A" style={{flex: 1}} /><TopicSpan><strong>Para estagnados:</strong> Quem já faz pontuações não tão baixas, mas que sente que não consegue sair daquele mesma quantidade de acertos na prova de matemática.</TopicSpan></Topic>
          <Topic><FaCheckSquare size={32} color="#13131A" style={{flex: 1}} /><TopicSpan><strong>Para quem quer mais:</strong> Quem está a procura de uma oportunidade de finalmente  romper a barreira dos 35 acertos no bloco de matemática do Enem.</TopicSpan></Topic>
          <Topic><FaCheckSquare size={32} color="#13131A" style={{flex: 1}} /><TopicSpan><strong>Para instáveis:</strong> Se você tem pontuações que oscilam muito entre um simulado e outro, provavelmente te falta uma consolidação melhor dos modelos que mais caem no Enem.</TopicSpan></Topic>
          <PrimaryButton href="https://pay.hotmart.com/C92879724V?off=w5v30h66&bid=1737662961012" target="_blank" >Garantir Vaga com Desconto</PrimaryButton>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default ForWho;
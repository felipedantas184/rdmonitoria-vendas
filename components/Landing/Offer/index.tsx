import { FaCheckCircle } from "react-icons/fa";
import { BonusBox, First, OfferBigPrice, OfferBox, OfferCoin, OfferSpan, OfferSubtitle, OfferTitle, PrimaryButton, Second, Section, Topic, TopicBold, TopicGroup, TopicPrice, TopicSpan, TopicSpanTitle, TotalTopic, Wrapper } from "./styles";

const Offer = () => {
  return ( 
    <Section>
      <Wrapper>
        <First>
          <BonusBox>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpanTitle>Curso Matemática Ativa</TopicSpanTitle></TopicGroup><TopicPrice style={{textDecoration: 'line-through', marginTop: 'auto', marginBottom: 'auto', marginRight: 0, marginLeft: 0}} >R$ 497,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 01:</TopicBold> Todos os slides dos módulos teóricas do curso</TopicSpan></TopicGroup><TopicPrice style={{textDecoration: 'line-through'}} >R$ 97,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 02:</TopicBold> Resolução escrita das mais 180 questões do curso</TopicSpan></TopicGroup><TopicPrice style={{textDecoration: 'line-through'}} >R$ 97,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 03:</TopicBold> Acesso ao grupo exclusivo no WhatsApp</TopicSpan></TopicGroup><TopicPrice style={{textDecoration: 'line-through'}} >R$ 97,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 04:</TopicBold> Check-list assuntos para estudar em matemática</TopicSpan></TopicGroup><TopicPrice style={{textDecoration: 'line-through'}} >R$ 97,00</TopicPrice></Topic>
            <TotalTopic><TopicGroup><TopicSpan>TOTAL:</TopicSpan></TopicGroup><TopicPrice style={{fontWeight: 600, fontSize: 18, margin: 0}}>R$ 247,00</TopicPrice></TotalTopic>
          </BonusBox>
        </First>
        <Second>
          <OfferBox>
            <OfferTitle>Tudo isso por</OfferTitle>
            <OfferSubtitle>Apenas 5 vezes de</OfferSubtitle>
            <OfferBigPrice><OfferCoin>R$</OfferCoin>49,40</OfferBigPrice>
            <OfferSubtitle>ou R$ 247,00 à vista</OfferSubtitle>
            <PrimaryButton>Comprar Curso</PrimaryButton>
            <OfferSpan>Menos de R$ 1,70 por dia você tem acesso a todo o Curso e aos Bônus Exclusivos.</OfferSpan>
            <OfferSpan>Oferta por tempo limitado! Esse preço vai mudar.</OfferSpan>
          </OfferBox>
        </Second>
      </Wrapper>
    </Section>
   );
}
 
export default Offer;
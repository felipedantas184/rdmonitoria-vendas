import { FaCheckCircle } from "react-icons/fa";
import { BonusBox, First, OfferBigPrice, OfferBox, OfferCoin, OfferSpan, OfferSubtitle, OfferTitle, PrimaryButton, Second, Section, Topic, TopicBold, TopicGroup, TopicPrice, TopicSpan, TopicSpanTitle, TotalTopic, Wrapper } from "./styles";

const Offer = () => {
  return ( 
    <Section>
      <Wrapper>
        <First>
          <BonusBox>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpanTitle>Curso Matemática Ativa</TopicSpanTitle></TopicGroup><TopicPrice style={{textDecoration: 'line-through', marginTop: 'auto', marginBottom: 'auto', marginRight: 0, marginLeft: 0}} >R$ 497,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 01:</TopicBold> Resolução ao longo do ano de Simulados, como SAS e Bernoulli</TopicSpan></TopicGroup><TopicPrice style={{textDecoration: 'line-through'}} >R$ 247,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 02:</TopicBold> Todos os aulões de matemática com listas exclusivas</TopicSpan></TopicGroup><TopicPrice style={{textDecoration: 'line-through'}} >R$ 97,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 03:</TopicBold> Acesso ao grupo exclusivo no WhatsApp para dicas e dúvidas</TopicSpan></TopicGroup><TopicPrice style={{textDecoration: 'line-through'}} >R$ 97,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 04:</TopicBold> Todos os slides dos módulos teóricas do curso</TopicSpan></TopicGroup><TopicPrice style={{textDecoration: 'line-through'}} >R$ 47,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 05:</TopicBold> Ebook O Guia Completo da Aprovação ENEM</TopicSpan></TopicGroup><TopicPrice style={{textDecoration: 'line-through'}} >R$ 47,00</TopicPrice></Topic>
            <TotalTopic><TopicGroup><TopicSpan style={{fontWeight: 700, fontSize: 20}}>TOTAL:</TopicSpan></TopicGroup><TopicPrice style={{fontWeight: 600, fontSize: 22, margin: 0, textAlign: 'right'}}><TopicPrice style={{fontWeight: 600, color: 'red', fontSize: 18, textDecoration: 'line-through', marginRight: 8}} >R$ 547,00<br/></TopicPrice><span  style={{fontSize: 14}}>6x</span> R$ 45,43<br/><span style={{fontSize: 12, fontWeight: 400}}>(Só pra quem entrar no grupo de reservas)</span></TopicPrice></TotalTopic>
          </BonusBox>
        </First>
        <Second>
          <OfferBox>
            <OfferTitle>Tudo isso por</OfferTitle>
            <OfferSubtitle>Em até 6 vezes de</OfferSubtitle>
            <OfferBigPrice><OfferCoin>R$</OfferCoin>45,43<OfferSpan>/mês</OfferSpan></OfferBigPrice>
            <OfferSubtitle>ou R$ 247,00 à vista</OfferSubtitle>
            <PrimaryButton href="https://pay.hotmart.com/C92879724V" target="_blank" >Garantir Vaga com Desconto</PrimaryButton>
            <OfferSpan>Menos de R$ 1,60 por dia você tem acesso a todo o Curso e aos Bônus Exclusivos.</OfferSpan>
            <OfferSpan style={{fontWeight: 600}} >Oferta por tempo limitado! Esse preço vai mudar.</OfferSpan>
          </OfferBox>
        </Second>
      </Wrapper>
    </Section>
   );
}
 
export default Offer;
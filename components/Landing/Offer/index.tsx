import { FaCheckCircle } from "react-icons/fa";
import { BonusBox, First, OfferBigPrice, OfferBox, OfferCoin, OfferSpan, OfferSubtitle, OfferTitle, PrimaryButton, Second, Section, Topic, TopicBold, TopicGroup, TopicPrice, TopicSpan, TopicSpanTitle, TotalTopic, Wrapper } from "./styles";
import { sendContactForm } from "@/lib/api";

const Offer = () => {
  const FirstButton = async (e: any) => {
    sendContactForm({
      name: 'Novo Clique - Oferta Botão',
      email: 'felipedantas184@gmail.com',
      subject: 'Novo Clique - Com quem vai aprender Botão',
      observations: 'Novo interessado no curso'
    })
  }

  return (
    <Section>
      <Wrapper>
        <First>
          <BonusBox>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpanTitle>Curso Matemática Ativa</TopicSpanTitle></TopicGroup><TopicPrice style={{ textDecoration: 'line-through', marginTop: 'auto', marginBottom: 'auto', marginRight: 0, marginLeft: 0 }} >R$ 497,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 01:</TopicBold> Resolução ao longo do ano de Simulados, como SAS e Bernoulli</TopicSpan></TopicGroup><TopicPrice style={{ textDecoration: 'line-through' }} >R$ 247,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 02:</TopicBold> Todos os aulões de matemática com listas exclusivas</TopicSpan></TopicGroup><TopicPrice style={{ textDecoration: 'line-through' }} >R$ 97,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 03:</TopicBold> Acesso ao grupo exclusivo no WhatsApp para dicas e dúvidas</TopicSpan></TopicGroup><TopicPrice style={{ textDecoration: 'line-through' }} >R$ 97,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 04:</TopicBold> Todos os slides dos módulos teóricas do curso</TopicSpan></TopicGroup><TopicPrice style={{ textDecoration: 'line-through' }} >R$ 47,00</TopicPrice></Topic>
            <Topic><TopicGroup><FaCheckCircle size={16} color="#09CF83" /><TopicSpan><TopicBold>BÔNUS 05:</TopicBold> Ebook O Guia Completo da Aprovação ENEM</TopicSpan></TopicGroup><TopicPrice style={{ textDecoration: 'line-through' }} >R$ 47,00</TopicPrice></Topic>
            <TotalTopic><TopicGroup><TopicSpan style={{ fontWeight: 700, fontSize: 20 }}>TOTAL:</TopicSpan></TopicGroup><TopicPrice style={{ fontWeight: 600, fontSize: 22, margin: 0, textAlign: 'right' }}><TopicPrice style={{ fontWeight: 600, color: 'red', fontSize: 18, textDecoration: 'line-through', marginRight: 8 }} >R$ 547,00<br /></TopicPrice><span style={{ fontSize: 14 }}>12x</span> R$ 29,64<br /><span style={{ fontSize: 12, fontWeight: 400 }}>(Apenas para os primeiros alunos)</span></TopicPrice></TotalTopic>
          </BonusBox>
        </First>
        <Second>
          <OfferBox>
            <OfferTitle>Tudo isso por</OfferTitle>
            <OfferSubtitle>Em até 12 vezes de</OfferSubtitle>
            <OfferBigPrice><OfferCoin>R$</OfferCoin>29,64<OfferSpan>/mês</OfferSpan></OfferBigPrice>
            <OfferSubtitle>ou R$ 297,00 à vista</OfferSubtitle>
            <PrimaryButton onClick={FirstButton} href="https://pay.hotmart.com/C92879724V?off=w5v30h66&bid=1737662961012" target="_blank" >Garantir Vaga com Desconto</PrimaryButton>
            <OfferSpan>Menos de R$ 1,00 por dia você tem acesso a todo o Curso e aos Bônus Exclusivos.</OfferSpan>
            <OfferSpan style={{ fontWeight: 600 }} >Oferta por tempo limitado! Esse preço vai mudar.</OfferSpan>
          </OfferBox>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default Offer;
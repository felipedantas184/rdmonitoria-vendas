import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import { First, PrimaryButton, QuestionsBox, Second, Section, SectionSubtitle, SectionTitle, Topic, TopicAnswer, TopicGroup, TopicQuestion, Topline, Wrapper } from "./styles";
import { useState } from "react";

const FAQ = () => {
  const Questions = [
    {
      id: '1',
      question: 'Sou iniciante, o curso serve pra mim?',
      answer: 'Serve sim! O Curso Matemática Ativa é pra quem quer dominar os principais assuntos e modelos de questão da prova de matemática do ENEM! Se você é iniciante, vai se dar muito bem com os módulos teóricos e com as resoluções de questões!'
    },
    {
      id: '2',
      question: 'Tenho pouco tempo disponível, vou conseguir ter resultados?',
      answer: 'Uma das vantagens do Curso Matemática Ativa é justamente você poder fazer os seus próprios horários de estudo! As aulas ficam gravadas, assim como as resoluções de questões e você pode fazer quando tiver tempo disponível!'
    },
    {
      id: '3',
      question: 'Durante quanto tempo terei acesso ao curso?',
      answer: 'Ao adquirir o Curso Matemática Ativa você terá acesso ao conteúdo durante todo o ano de 2024! Vamos juntos até a realização da sua prova do ENEM!'
    },
    {
      id: '4',
      question: 'Como faço para tirar minhas dúvidas?',
      answer: 'Estamos disponíveis para tirar todas as suas dúvidas sobre o Curso Matemática Ativa através do nosso instagram @rdmonitoria ou por meio do nosso email rdmonitoria.contato@gmail.com! Não deixe de nos enviar sua dúvida!'
    },
    {
      id: '5',
      question: 'Quais são as formas de pagamento?',
      answer: 'Aceitamos quase todas as formas de pagamentos disponíveis no mercado! Você pode pagar no boleto, no pix ou por meio dos cartões de crédito ou débito!'
    },
  ]

  const [openAnswer, setOpenAnswer] = useState('')

  const handleAnswer = (id: string) => {
    if (openAnswer === id) {
      setOpenAnswer('')
    } else {
      setOpenAnswer(id)
    }
  }

  return (
    <Section>
      <Wrapper>
        <First>
          <Topline>F.A.Q</Topline>
          <SectionTitle>Perguntas Frequentes</SectionTitle>
          <SectionSubtitle>Ainda precisa de ajuda? Entre em contato e fale com um dos nossos especialistas clicando no botão abaixo:</SectionSubtitle>
          <PrimaryButton href={'https://api.whatsapp.com/send/?phone=5586995185757'} target='_blank' >Quero falar com o suporte</PrimaryButton>
        </First>
        <Second>
          <QuestionsBox>
            {Questions.map((item) => (
              <Topic key={item.id}>
                <TopicGroup>
                  <TopicQuestion>{item.question}</TopicQuestion>
                  {(openAnswer === item.id) ? (
                  <TopicAnswer>{item.answer}</TopicAnswer>
                  ) : (
                  <></>
                  )}
                </TopicGroup>
                {(openAnswer === item.id) ? (
                  <FaMinusSquare size={24} color="#A48C42" style={{ flex: 1, cursor: 'pointer' }} onClick={() => handleAnswer(item.id)} />
                ) : (
                  <FaPlusSquare size={24} color="#A48C42" style={{ flex: 1, cursor: 'pointer' }} onClick={() => handleAnswer(item.id)} />
                )}
              </Topic>
            ))}
          </QuestionsBox>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default FAQ;
import { FaKey } from "react-icons/fa6";
import { Card, CardSubtitle, CardTitle, CardsWrapper, PrimaryButton, Section, SectionTitle, Topline, Wrapper } from "./styles";
import { IoIosPeople } from "react-icons/io";
import { BsCollectionPlay } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { RiNumber0, RiNumber1 } from "react-icons/ri";

const Schedule = () => {

  const Modules = [
    {
      id: '01',
      title: 'Módulo Teórico 01',
      description: 'Grandezas Proporcionais & Aritmética Básica'
    },
    {
      id: '02',
      title: 'Módulo Teórico 02',
      description: 'Porcentagem & Estatística'
    },
    {
      id: '03',
      title: 'Módulo Teórico 03',
      description: 'Equações Elementares & Funções'
    },
    {
      id: '04',
      title: 'Módulo Teórico 04',
      description: 'Gráficos e Tabelas & Sequências e Matemática Financeira'
    },
    {
      id: '05',
      title: 'Módulo Teórico 05',
      description: 'Geometria Plana & Geometria Espacial'
    },
    {
      id: '06',
      title: 'Módulo Teórico 06',
      description: 'Combinatória & Probabilidade'
    },
    {
      id: '07',
      title: 'Módulo Mix 01',
      description: 'Revisão de assuntos e mix de questões'
    },
    {
      id: '08',
      title: 'Módulo Mix 02',
      description: 'Revisão de assuntos e mix de questões'
    },
    {
      id: '09',
      title: 'Módulo Mix 03',
      description: 'Revisão de assuntos e mix de questões'
    },
    {
      id: '10',
      title: 'Módulo Mix 04',
      description: 'Revisão de assuntos e mix de questões'
    }, {
      id: '11',
      title: 'Módulo Mix 05',
      description: 'Revisão de assuntos e mix de questões'
    },
    {
      id: '12',
      title: 'Módulo Mix 06',
      description: 'Revisão de assuntos e mix de questões'
    },
  ]

  return (
    <Section>
      <Wrapper>
        <Topline>Cronograma do Curso</Topline>
        <SectionTitle>Quais são os módulos do curso?</SectionTitle>
        <CardsWrapper>
          {Modules.map((item) => (
            <Card key={item.id} >
              <Topline style={{ padding: 0 }} >Módulo {item.id}</Topline>
              <CardTitle>{item.title}</CardTitle>
              <CardSubtitle>{item.description}</CardSubtitle>
            </Card>
          ))}
        </CardsWrapper>
        <PrimaryButton href="https://pay.hotmart.com/C92879724V?off=w5v30h66&bid=1737662961012" target="_blank" >Garantir Vaga com Desconto</PrimaryButton>
      </Wrapper>
    </Section>
  );
}

export default Schedule;
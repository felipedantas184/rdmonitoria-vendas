import { FaCheck, FaX } from "react-icons/fa6";
import { First, Perk, PerkSubtitle, PerkTitle, PerkTopline, PrimaryButton, Second, Section, SectionTitle, TestimonialsWrapper, Topic, TopicSpan, Wrapper } from "./styles";
import { MdOutlineSecurity, MdOutlineVpnKey } from "react-icons/md";
import { GoVerified } from "react-icons/go";

const Tired = () => {
  return (
    <Section>
      <Wrapper>
        <First>
          <SectionTitle>Você está cansado de:</SectionTitle>
          <Topic><FaX size={18} color="#F63300" /><TopicSpan>Ficar preocupado com seu desempenho nos simulados;</TopicSpan></Topic>
          <Topic><FaX size={18} color="#F63300" /><TopicSpan>Se sentir inseguro por não saber como fazer as questões;</TopicSpan></Topic>
          <Topic><FaX size={18} color="#F63300" /><TopicSpan>Demorar demais no bloco de matemática do simulado.</TopicSpan></Topic>
        </First>
        <Second>
          <SectionTitle>A nossa proposta é:</SectionTitle>
          <Topic><FaCheck size={20} color="#00B61C" /><TopicSpan>Te fazer melhorar a sua pontuação praticando as questões certas;</TopicSpan></Topic>
          <Topic><FaCheck size={20} color="#00B61C" /><TopicSpan>Trazer segurança nos simulados resolvendo os modelos que mais caem;</TopicSpan></Topic>
          <Topic><FaCheck size={20} color="#00B61C" /><TopicSpan>Acelerar sua resolução de questões para sobrar tempo nas provas.</TopicSpan></Topic>
        </Second>
      </Wrapper>
      <Wrapper>
        <SectionTitle style={{fontSize: 20, width: '100%', textAlign: 'center', borderTop: '1px dashed #DFDFDF', paddingTop: 8}} >Exatamente como foi para nossos alunos:</SectionTitle>
      </Wrapper>
      <TestimonialsWrapper>
        <Perk>
          <PerkTopline>Aluna da Turma 02</PerkTopline>
          <PerkTitle>Anna Bonfim</PerkTitle>
          <PerkSubtitle>Aprovado em Medicina na UFPI, com nota 842 em matemática no Enem 2022</PerkSubtitle>
        </Perk>
        <Perk>
          <PerkTopline>Aluna da Turma 01</PerkTopline>
          <PerkTitle>Carol Pires</PerkTitle>
          <PerkSubtitle>Aprovado em Medicina na UESPI e em Medicina UFMA com as notas do Enem 2022</PerkSubtitle>
        </Perk>
        <Perk>
          <PerkTopline>Aluno da Turma 01 e 02</PerkTopline>
          <PerkTitle>Pedro Augusto</PerkTitle>
          <PerkSubtitle>Aprovado em Medicina na UESPI com as notas do Enem 2023</PerkSubtitle>
        </Perk>
        <Perk>
          <PerkTopline>Aluna da Turma 02</PerkTopline>
          <PerkTitle>Mariana Cabral</PerkTitle>
          <PerkSubtitle>Aprovado em Nutrição na UFPI com as notas do Enem 2022</PerkSubtitle>
        </Perk>
        <Perk>
          <PerkTopline>Aluno da Turma 02</PerkTopline>
          <PerkTitle>Leonardo Cabral</PerkTitle>
          <PerkSubtitle>Aprovado em Direito na UESPI com as notas do Enem 2022</PerkSubtitle>
        </Perk>
        <Perk>
          <PerkTopline>Aluna da Turma 02</PerkTopline>
          <PerkTitle>Julianna</PerkTitle>
          <PerkSubtitle>Aprovado em Medicina na UNINOVAFAPI com as notas do Enem 2023</PerkSubtitle>
        </Perk>
        <div></div>
        <PrimaryButton href="https://pay.hotmart.com/C92879724V" target="_blank" >Garantir Vaga com Desconto</PrimaryButton>
      </TestimonialsWrapper>
    </Section>
  );
}

export default Tired;
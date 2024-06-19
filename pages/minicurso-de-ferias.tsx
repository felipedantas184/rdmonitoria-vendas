import AulaAberta from '@/components/AulaAberta'
import Minicurso from '@/components/Minicurso'
import Head from 'next/head'

export default function MentoriaPage() {
  return (
    <>
      <Head>
        <title>Minicurso de Férias - Matemática | RD Monitoria</title>
        <meta name="description" content="Vem aí o Segundo Minicurso de Férias - Matemática da RD Monitoria! Um minicurso de férias pra gente resolver alguns dos modelos de questões que mais aparecem no ENEM e pra dar dicas de como resolver mais rápid as questões!*" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="Aulão de Matemátoca | RD Monitoria"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Vem aí o Segundo Minicurso de Férias - Matemática da RD Monitoria! Um minicurso de férias pra gente resolver alguns dos modelos de questões que mais aparecem no ENEM e pra dar dicas de como resolver mais rápido as questões!"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="RD Monitoria"/>

        <meta property="twitter:title" content="Aulão de Matemátoca | RD Monitoria"/>
        <meta property="twitter:description" content="Vem aí o Segundo Minicurso de Férias - Matemática da RD Monitoria! Um minicurso de férias pra gente resolver alguns dos modelos de questões que mais aparecem no ENEM e pra dar dicas de como resolver mais rápido as questões!"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>
      <Minicurso />
    </>
  )
}

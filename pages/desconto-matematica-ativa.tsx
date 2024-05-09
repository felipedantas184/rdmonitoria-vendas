import About from '@/components/Landing/About'
import Course from '@/components/Landing/Course'
import FAQ from '@/components/Landing/FAQ'
import ForWho from '@/components/Landing/ForWho'
import HowItWorks from '@/components/Landing/HowItWorks'
import Schedule from '@/components/Landing/Schedule'
import Tired from '@/components/Landing/Tired'
import Hero from '@/components/ReservarVaga/Hero'
import Offer from '@/components/ReservarVaga/Offer'
import Perks from '@/components/ReservarVaga/Perks'
import Head from 'next/head'

export default function DiscountPage() {
  return (
    <>
      <Head>
        <title>Matemática Ativa - Reserve Sua Vaga | RD Monitoria</title>
        <meta name="description" content="Domine agora a Matemática do ENEM e melhore de vez o seu desempenho nos Simulados Enem e Reserve sua vaga com R$300 de desconto!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="Matemática Ativa - Reserve Sua Vaga | RD Monitoria"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Domine agora a Matemática do ENEM e melhore de vez o seu desempenho nos Simulados Enem e Reserve sua vaga com R$300 de desconto!"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="RD Monitoria"/>

        <meta property="twitter:title" content="Matemática Ativa - Reserve Sua Vaga | RD Monitoria"/>
        <meta property="twitter:description" content="Domine agora a Matemática do ENEM e melhore de vez o seu desempenho nos Simulados Enem e Reserve sua vaga com R$300 de desconto!"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>
      <Hero />
      <Perks />
      <Course />
      <ForWho />
      <HowItWorks />
      <Tired />
      <Schedule />
      <About />
      <Offer />
      <FAQ />
    </>
  )
}

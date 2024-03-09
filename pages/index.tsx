import About from "@/components/Landing/About";
import Course from "@/components/Landing/Course";
import FAQ from "@/components/Landing/FAQ";
import ForWho from "@/components/Landing/ForWho";
import Guarantee from "@/components/Landing/Guarantee";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";
import Offer from "@/components/Landing/Offer";
import Tired from "@/components/Landing/Tired";
import Perks from "@/components/Landing/Perks";
import Head from "next/head";
import Schedule from "@/components/Landing/Schedule";

export default function Home() {
  return (
    <>
      <Head>
        <title>Curso Matemática Ativa ENEM | RD Monitoria</title>
        <meta name="description" content="Domine agora a Matemática do ENEM e melhore de vez o seu desempenho nos Simulados Enem!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Curso Matemática Ativa ENEM | RD Monitoria" />
        <meta property="og:type" content="school" />
        <meta property="og:description" content="Domine agora a Matemática do ENEM e melhore de vez o seu desempenho nos Simulados Enem!" />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:site_name" content="RD Monitoria" />

        <meta property="twitter:title" content="Curso Matemática Ativa ENEM | RD Monitoria" />
        <meta property="twitter:description" content="Domine agora a Matemática do ENEM e melhore de vez o seu desempenho nos Simulados Enem!" />
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
      <Guarantee />
      <FAQ />
    </>
  );
}

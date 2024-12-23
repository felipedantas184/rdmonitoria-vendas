import Prepare from '@/components/Prepare'
import Head from 'next/head'

export default function Preparacao() {
  return (
    <>
      <Head>
        <title>Prepare-se para 2025 com a RD Monitoria | ENEM & Vestibulares</title>
        <meta name="description" content="Junte-se ao nosso grupo exclusivo no WhatsApp e largue na frente para fazer de 2025 o seu melhor ano!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="Prepare-se para 2025 com a RD Monitoria | ENEM & Vestibulares"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Junte-se ao nosso grupo exclusivo no WhatsApp e largue na frente para fazer de 2025 o seu melhor ano!"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="RD Monitoria"/>

        <meta property="twitter:title" content="Prepare-se para 2025 com a RD Monitoria | ENEM & Vestibulares"/>
        <meta property="twitter:description" content="Junte-se ao nosso grupo exclusivo no WhatsApp e largue na frente para fazer de 2025 o seu melhor ano!"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>
      <Prepare />
    </>
  )
}

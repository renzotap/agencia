import CasesList from "components/cases/CaseList"
import Header from "components/cases/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from 'react-helmet-async';



function Cases(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
                <title>BrainRemoteControl | Casos de estudio</title>
                <meta name='description' content='Soluciones de control de dispositivos a través de multiplataforma web'></meta>
                <meta name='keywords' content='control, domotica, web, aplicacion, dispositivos, tecnología, internet de las cosas'></meta>
                <meta name='robots' content='all'/>
                <link rel='cannonical' href="https://brainremotecontrol.com/" />
                <meta name='author' content='BrainRemoteControl' />
                <meta name='publisher' content='BrainRemoteControl' />

                {/* Social Media Tags */}
                <meta property="og:title" content='ControlBrain | Domótica' />
                <meta property="og:description" content='Soluciones de control de dispositivos a través de multiplataforma web' />
                <meta property="og:url" content="https://brainremotecontrol.com/" />
                <meta property="og:image" content='http://www.w3.org/2000/svg' />

                <meta name="twitter:title" content='BrainRemoteControl | Domótica' />
                <meta
                    name="twitter:description"
                    content='Soluciones de control de dispositivos a través de multiplataforma web.'
                />
                <meta name="twitter:image" content='http://www.w3.org/2000/svg' />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                <div className="mx-auto max-w-1700 px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                    <div className="mx-auto max-w-1700">
                        <Header/>
                        <CasesList/>
                    </div>
                </div>
            </div>
            
                <Footer/>
        </Layout>
    )
}
export default Cases
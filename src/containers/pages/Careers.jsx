import Features from "components/careers/Features"
import Header from "components/careers/Header"
import PositionsList from "components/careers/PositionsList"
import Testimonial from "components/cases/Testimonial"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from 'react-helmet-async';



function Careers(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
                <title>BrainRemoteControl | Carreras</title>
                <meta name='description' content='Soluciones de control de dispositivos a través de multiplataforma web'></meta>
                <meta name='keywords' content='control, domotica, web, aplicacion, dispositivos, tecnología, internet de las cosas'></meta>
                <meta name='robots' content='all'/>
                <link rel='cannonical' href="https://brainremotecontrol.com/" />
                <meta name='author' content='BrainremoteControl' />
                <meta name='publisher' content='BrainremoteControl' />

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
                <Header/>
                <Testimonial/>
                <div className="bg-gray-50">
                <div className=" mx-12 pt-8 pb-12">
                        <h3 className="lg:text-3xl text-3xl px-4 font-bold leading-6 text-gray-900">Work with top notch companies</h3>
                    </div>
                    <div className="mx-12 lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                            className="h-12"
                            src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                            alt="Transistor"
                        />
                        </div>
                        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                            className="h-12"
                            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                            alt="Workcation"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                <Features/>
                <PositionsList/>
            </div>
            
                <Footer/>
        </Layout>
    )
}
export default Careers
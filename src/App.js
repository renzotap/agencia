import store from './store';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import AnimatedRoutes from 'Routes';

function App() {
  
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>BrainRemoteControl | Control</title>
        <meta name='description' content='Soluciones de control de dispositivos a través de multiplataforma web'></meta>
        <meta name='keywords' content='control, domotica, web, aplicacion, dispositivos, tecnología, internet de las cosas'></meta>
        <meta name='robots' content='all'/>
        <link rel='cannonical' href="https://brainremotecontrol.com/" />
        <meta name='author' content='BrainRemoteControl' />
        <meta name='publisher' content='BrainRemoteControl' />

         {/* Social Media Tags */}
        <meta property="og:title" content='BrainRemoteControl | Control' />
        <meta property="og:description" content='Soluciones de control de dispositivos a través de multiplataforma web' />
        <meta property="og:url" content="https://brainremotecontrol.com/" />
        <meta property="og:image" content='http://www.w3.org/2000/svg' />

        <meta name="twitter:title" content='BrainRemoteControl | Control' />
        <meta
            name="twitter:description"
            content='Soluciones de control de dispositivos a través de multiplataforma web.'
        />
        <meta name="twitter:image" content='http://www.w3.org/2000/svg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Provider store={store}>
            <Router>              
              <AnimatedRoutes/>
            </Router>
      </Provider>

    </HelmetProvider>

  );
}

export default App;

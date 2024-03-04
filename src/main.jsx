import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "flatpickr/dist/themes/light.css";
import { BrowserRouter } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-tabs/style/react-tabs.css";
import 'react-international-phone/style.css';
import 'react-phone-input-2/lib/style.css'
import "react-datepicker/dist/react-datepicker.css";
import QatarSvg from './Common/QatarSvg.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<BrowserRouter> 
{/* <QatarSvg/> */}
<App />
</BrowserRouter>


  </React.StrictMode>,
)

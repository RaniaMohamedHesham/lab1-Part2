import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/header';
import About from './AboutMe/aboutme';
import Skills from './Skills/skills';
import Portofolio from './Portofolio/portofolio';
import Footer from './footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <About/>
  <h1>Skills</h1>
    <Skills name="C++" persentage="30%"/>
    <Skills name="C#" persentage="25%"/>
    <Skills name="Java Programming Language" persentage="50%"/>
    <Skills name="Bootstrap" persentage="40%"/>
    <hr></hr>
    <h1>Portfolio </h1>
    <div className="row">
     <div className="col-sm-6">
    <Portofolio name="Cloud " img="../src/img/pic.jpg"/>
    <Portofolio name="Web" img="../src/img/pic.jpg"/>
    <Portofolio name="Flutter" img="../src/img/pic.jpg"/>
  </div>
  </div>
   <Footer/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

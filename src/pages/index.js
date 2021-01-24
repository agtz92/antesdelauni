import React from "react"
import Layout from "../layouts/layout"
import Heading from "../components/heading"
import PostBlockLarge from "../components/postBlockLarge"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import unam from "../images/UNAM.jpg"
import examen from "../images/examen.jpg"
import resumen from "../images/resumen.jpg"
import partner from "../images/partner.jpg"

export default function Home() {
  return (

    <Layout>
        <Heading color="dark" alignment="center">Bancos de Preguntas para Examen Universitario y Resumenes para Estudio</Heading>
        
  <div className="grid-layout">
    <div className="gridsection">
    
    <div id="w-node-6f651d7f57c9-c67b1059" className="divgrid">
      <img srcSet={examen} loading="lazy" alt="" className="imagegrid"/>
      <div className="gridcontent">
        <div className="categblock">
        </div>
        <Heading color="dark" alignment="left">Examenes Simulacro para UNAM, IPN, UAM, UAEM</Heading>
        <a href="https://www.antesdelexamen.com/categorias/preguntas-de-examen/"><div className="div-tag">Ir a examenes</div></a>
        <div className="autdate">
          <div className="autor">Antes del Examen</div>
          <div className="fecha">Enero 2021</div>
        </div>
      </div>
    </div>
    <div id="w-node-0e5382ecacb1-c67b1059" className="divgrid">
      <img srcSet={resumen} loading="lazy" alt="" className="imagegrid"/>
      <div className="gridcontent">
        <div className="categblock">
        </div>
        <Heading color="dark" alignment="left">Estudia por Materia. Resumen de todas las materias para examen</Heading>
        <a href="https://www.antesdelexamen.com/categorias/"><div className="div-tag">Ir a categorias</div></a>
        <div className="autdate">
          <div className="autor">Antes del Examen</div>
          <div className="fecha">Enero 2021</div>
        </div>
      </div>
    </div>
    <div id="w-node-b206073a141c-c67b1059" className="divgrid">
      <img srcSet={partner} loading="lazy" alt="" className="imagegrid"/>
      <div className="gridcontent">
        <div className="categblock">
        </div>
        <Heading color="dark" alignment="left">Partners. Ve quienes ayudan a este proyecto</Heading>
        <a href="https://www.antesdelexamen.com/partners/"><div className="div-tag">Ir a partners</div></a>
        <div className="autdate">
          <div className="autor">Antes del Examen</div>
          <div className="fecha">Enero 2021</div>
        </div>
      </div>
    </div>
    <div id="w-node-436f8c51704c-c67b1059" className="divgrid">
      <img srcSet={unam} loading="lazy" alt="" className="imagegrid"/>
      <div className="gridcontent">
        <div className="categblock">
        </div>
        <Heading color="dark" alignment="left">Guías de examen oficiales. Puedes descargarlas gratis aquí</Heading>
        <a href="https://www.antesdelexamen.com/guias/"><div className="div-tag">Ir a guias</div></a>
        <div className="autdate">
          <div className="autor">Antes del Examen</div>
          <div className="fecha">Enero 2021</div>
        </div>
      </div>
    </div>
  </div>
  </div>


  


    </Layout>
    
  ) 
}

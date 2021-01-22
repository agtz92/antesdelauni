import React from "react"
import Layout from "../layouts/layout"
import Heading from "../components/heading"
import PostBlockLarge from "../components/postBlockLarge"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import imagetest from "../images/test.jpg"

export default function Home() {
  return (

    <Layout>
        <Heading color="color1" alignment="center">Shitposters</Heading>
        
  <div className="grid-layout">
    <div className="gridsection">
    <div id="w-node-6f651d7f57c9-c67b1059" className="divgrid">
      <img srcSet={imagetest} loading="lazy" alt="" className="imagegrid"/>
      <div className="gridcontent">
        <div className="categblock">
          <div className="div-tag">Categoría</div>
        </div>
        <Heading color="color1" alignment="left">Shitposters</Heading>
        <div className="autdate">
          <div className="autor">Autor</div>
          <div className="fecha">Fecha</div>
        </div>
      </div>
    </div>
    <div id="w-node-0e5382ecacb1-c67b1059" className="divgrid">
      <img srcSet={imagetest} loading="lazy" alt="" className="imagegrid"/>
      <div className="gridcontent">
        <div className="categblock">
          <div className="div-tag">Categoría</div>
        </div>
        <Heading color="color1" alignment="left">Shitposters</Heading>
        <div className="autdate">
          <div className="autor">Autor</div>
          <div className="fecha">Fecha</div>
        </div>
      </div>
    </div>
    <div id="w-node-b206073a141c-c67b1059" className="divgrid">
      <img srcSet={imagetest} loading="lazy" alt="" className="imagegrid"/>
      <div className="gridcontent">
        <div className="categblock">
          <div className="div-tag">Categoría</div>
        </div>
        <Heading color="color1" alignment="left">Shitposters</Heading>
        <div className="autdate">
          <div className="autor">Autor</div>
          <div className="fecha">Fecha</div>
        </div>
      </div>
    </div>
    <div id="w-node-436f8c51704c-c67b1059" className="divgrid">
      <img srcSet={imagetest} loading="lazy" alt="" className="imagegrid"/>
      <div className="gridcontent">
        <div className="categblock">
          <div className="div-tag">Categoría</div>
        </div>
        <Heading color="color1" alignment="left">Shitposters</Heading>
        <div className="autdate">
          <div className="autor">Autor</div>
          <div className="fecha">Fecha</div>
        </div>
      </div>
    </div>
  </div>
  <div className="_5050-holder">
    <div className="_5050-div">
    <PostBlockLarge img={imagetest} title="ShitPosters" description="LOREM IPSUM DESCRIPCION" categoria="Categoria"/>  
    </div>
    <div className="_5050-div">
      <h1>Heading</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
    </div>
  </div>
  </div>


  


    </Layout>
    
  ) 
}

import React from "react"
import { Link } from "gatsby"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import logoChico from "../images/logo_small.png"

export default function Footer() {
    
    return(
        <footer id="footer" className="footer">
            <div className="container w-container">
                <div className="footer-flex-container">
                <Link to="/"><img
                    loading="lazy"
                    style={{width:"70px", height:"45px", paddingTop:"5px"}}
                    srcSet={logoChico}
                    alt="soynuevologo"
                    className="image"
                />
                </Link>
                    <div>
                    <h2 className="footer-heading">Links rápidos</h2>
                    <ul  className="list-footer w-list-unstyled">
                        
                        <li ><a className="footer-link"  href="https://www.antesdelexamen.com/categorias/preguntas-de-examen/">Preguntas de examen</a></li>
                        <li ><a className="footer-link"  href="https://www.antesdelexamen.com/categorias/">Materias</a></li>
                        <li ><a className="footer-link"  href="https://www.antesdelexamen.com/partners/">Partners</a></li>
                        <li ><a className="footer-link"  href="https://www.antesdelexamen.com/search//">Búsqueda</a></li>
                    </ul>
                    </div>
                    
                </div>
                <div className="text-bottom-footer">Copyright © 2020 antesdelexamen.com . Todos los derechos reservados.</div>
                <div className="text-bottom-footer">En este sitio se recolectan cookies utilizados para Google Analytics</div>
                </div>
        </footer>
    );
    
    }


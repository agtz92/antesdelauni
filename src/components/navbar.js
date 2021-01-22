import React, { Component } from "react";
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import { Link } from "gatsby"
import logoChico from "../images/logo_small.png"

var navStyle =
    {
        transform: `translate(0px, 0px)`,
        transition: `transform 400ms ease 0s`,

    };
export default class NavBar extends Component{
    
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(function (prevState) {
            return { isToggleOn: !prevState.isToggleOn };
        });
    }

render(){
    return (


        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navbar w-nav ">
            <div className="divcontainernavbar">
                <Link to="/"><img
                    loading="lazy"
                    style={{width:"70px", height:"45px", paddingTop:"5px"}}
                    srcSet={logoChico}
                    alt="soynuevologo"
                    className="image"
                />
                </Link>
                <nav role="navigation" className="w-nav-menu" >
                    <a className="nav-link w-nav-link"  activeClassName="w--current" href="https://www.antesdelexamen.com/categorias/preguntas-de-examen/">Preguntas de examen</a>
                    <a className="nav-link w-nav-link"  activeClassName="w--current" href="https://www.antesdelexamen.com/categorias/">Materias</a>
                    <a className="nav-link w-nav-link"  activeClassName="w--current" href="https://www.antesdelexamen.com/partners/">Partners</a>
                    <a className="nav-link w-nav-link"  activeClassName="w--current" href="https://www.antesdelexamen.com/search//">Búsqueda</a>
                    
                </nav>
                <div className={'w-nav-button ' + (this.state.isToggleOn ? "w--open" : "")} onClick={this.handleClick} aria-hidden="true" >
                    <div className="w-icon-nav-menu"></div>
                </div>

            </div>
            <div className={'w-nav-overlay mobileNav '  + (this.state.isToggleOn ? 'showing' : 'not-showing')} data-wf-ignore="" id="w-nav-overlay-0">
                <nav role="navigation" className="w-nav-menu" style={navStyle} data-nav-menu-open="">
                    <a className="nav-link w-nav-link w--nav-link-open"  activeClassName="w--current" href="https://www.antesdelexamen.com/categorias/preguntas-de-examen/">Preguntas de examen</a>
                     <a className="nav-link w-nav-link w--nav-link-open"  activeClassName="w--current" href="https://www.antesdelexamen.com/categorias/">Materias</a>
                      <a className="nav-link w-nav-link w--nav-link-open"  activeClassName="w--current" href="https://www.antesdelexamen.com/partners/">Partners</a>
                       <a className="nav-link w-nav-link w--nav-link-open"  activeClassName="w--current" href="https://www.antesdelexamen.com/search//">Búsqueda</a>
                    
                </nav>
            </div>
        </div>

    );
}
}

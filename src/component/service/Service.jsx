import React, { useState } from 'react'
import "./service.css"
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { BiLogoReact, BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";


const Service = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    } 


  return (
    <section className="services section" id='services'>
        <h2 className='section__title'>Service</h2>
        <span className='section__subtitle'>Apa yang bisa saya tawarkan</span>

        <div className="service__container container grid">
           <div className="services__content">
            <div>
                <AiFillHtml5 style={{fontSize: '3rem'}}/>
                <BiLogoCss3 style={{fontSize: '3rem'}}/>
                <BiLogoJavascript style={{fontSize: '3rem'}}/>
                <h3 className='services__title'>Frontend html,css,JS</h3>
            </div>
                <span className='services__button' onClick={() => toggleTab(1)}>View more 
                    <AiOutlineArrowRight className='services__button-icon'/>
                </span>
            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    
                    <AiOutlineCloseCircle onClick={() =>  toggleTab(0)} className='services__modal-close'/>
                    <h3 className='services__modal-title'>Frontend</h3>
                    <p className='services__modal-description'>
                        Service more than 3 years experience. Providing quality work to client and company
                    </p>

                    <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                            <AiFillCheckCircle/>
                            <p className='services__modal-info'>saya develop user Interface</p>
                        </li>

                        <li className='services__modal-service'>
                            <AiFillCheckCircle/>
                            <p className='services__modal-info'>webpage development</p>
                        </li>

                        <li className='services__modal-service'>
                            <AiFillCheckCircle/>
                            <p className='services__modal-info'>saya membuat element interaction</p>
                        </li>

                        <li className='services__modal-service'>
                            <AiFillCheckCircle/>
                            <p className='services__modal-info'>position your company brand</p>
                        </li>

                        <li className='services__modal-service'>
                            <AiFillCheckCircle/>
                            <p className='services__modal-info'>Design anf mockup of product for companies</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div> 

            <div className="services__content">
            <div>
                <BiLogoReact style={{fontSize: '3rem'}}/>
                <h3 className='services__title'>Frontend ReactJS</h3>
                   
            </div>
                <span className='services__button'  onClick={() => toggleTab(1)}>View more 
                    <AiOutlineArrowRight className='services__button-icon'/>
                </span>
            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <AiOutlineCloseCircle onClick={() =>  toggleTab(0)} className='services__modal-close' />
                    <h3 className='services__modal-title'>Frontend</h3>
                    <p className='services__modal-description'>
                        Service more than 3 years experience. Providing quality work to client and company
                    </p>

                    <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                            <AiFillCheckCircle/>
                            <p className='services__modal-info'>saya develop user Interface</p>
                        </li>

                        <li className='services__modal-service'>
                            <AiFillCheckCircle/>
                            <p className='services__modal-info'>webpage development</p>
                        </li>

                        <li className='services__modal-service'>
                            <AiFillCheckCircle/>
                            <p className='services__modal-info'>saya membuat element interaction</p>
                        </li>

                        <li className='services__modal-service'>
                            <AiFillCheckCircle/>
                            <p className='services__modal-info'>position your company brand</p>
                        </li>

                        <li className='services__modal-service'>
                            <AiFillCheckCircle/>
                            <p className='services__modal-info'>Design anf mockup of product for companies</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Service
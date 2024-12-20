import React, { useEffect } from 'react'
import './Home.css'
import Navbar from '../components/Navbar';
import iphone from '../assets/hero.png'
import Promo from '../components/Promo';

const Home = () => {

    useEffect(() => {
        document.title = 'Apple Redesign'
        let bodyElement = document.body
        let rootElement = document.getElementById('root')

        if (bodyElement && rootElement) {
            bodyElement.style.minHeight = '202.5vh'
            rootElement.style.height = '200vh'
        }
    }, [])

  return (
    <>
        <Navbar />
        <section className='hero'>
            <div className='hero__container-1'>
                <h1 className='hero__container-1__text'>
                    <span>Powered</span> <br />
                    <span>By Intellect</span> <br />
                    <span>Driven By Values</span> 
                </h1>
                <div className='hero__container-1__buttons'>
                    <a className='buttons'>Buy Now</a>
                    <a className='hero__container-1__buttons__learn'>Learn More</a>
                </div>
            </div>
            <div className='hero__container-2'>
                <div className='hero__container-2__image__wrap'>
                    <img src={iphone} alt="iphone" className='hero__container-2__image'/>
                </div>
            </div>
        </section>
        <Promo />
    </>
  )
}

export default Home
import React from 'react'
import heroimg from '../../Assets/lightning bolt.svg'

function Hero() {
    return (
        <div className="bg-color">
            <div className='container'>
                <div className="row mt-4 py-5 justify-content-center align-items-center flex-column-reverse flex-md-row">
                    <div className="col-sm-12 col-md-6 col-lg-7  text-md-start">
                        <h1 className='mb-5 mt-3 hero-title fw-bold'>
                            LET’S <span>SUPERCHARGE</span> YOUR BUSINESS
                        </h1>
                        <p className='mb-5 hero-p'>
                            Have a unique idea for your website? Dreaming of a fresh redesign or
                            an innovative app? We're here to make it happen. Whether you're a 
                            corporate business, a small-scale enterprise, or even an individual, 
                            Berserk Designs is dedicated to helping you succeed through outstanding design.
                            Our custom websites and apps are designed to engage users and enhance your online presence.
                        </p>
                        <button className='bg-white px-4 py-2 fst-5 border-0 text-black'>
                            Discuss Project
                        </button>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5 mb-4 mb-md-0 text-center">
                        <img className="img-fluid" src={heroimg} alt="Lightning Bolt" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

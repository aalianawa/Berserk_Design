import React from 'react'
import business from '../../Assets/business 1.svg'
import startgy from '../../Assets/strategy 1.svg'
import profit from '../../Assets/profit 1.svg'
import suport from '../../Assets/support 1.svg'

function Design() {
    return (
        <div className='container mt-4 py-4'>
            <h2 className="text-center mb-5">Your Design Partner for the Long Run</h2>
            <div className="row">
                <div className="col-md-6 col-lg-6 mb-4">
                    <div className="card px-4 rounded-4 py-3 h-100 text-center text-md-start">
                        <div className="card-body">
                            <img src={business} alt="Business" className="mb-4 img-fluid" />
                            <h6 className="card-title mt-4">Creative and Innovative Designs</h6>
                            <p className="card-text mt-3">
                                At Berserk Designs, You are at the heart of our creativity. <br />
                                Your project deserves designs that don’t just meet the <br /> standard—they redefine it.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 mb-4">
                    <div className="card px-4 rounded-4 py-3 h-100 text-center text-md-start">
                        <div className="card-body">
                            <img src={startgy} alt="Strategy" className="mb-4 img-fluid" />
                            <h6 className="card-title mt-4">Strategic Approach</h6>
                            <p className="card-text mt-3">
                                Design with us isn’t just about looking good; it’s about <br /> aligning every visual element with Your brand’s strategy <br /> and goals.
                                Together, we'll create designs that don’t just <br /> catch eyes but drive results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-6 mb-4">
                    <div className="card px-4 rounded-4 py-3 h-100 text-center text-md-start">
                        <div className="card-body">
                            <img src={profit} alt="Profit" className="mb-4 img-fluid" />
                            <h6 className="card-title mt-4">Cost-effective</h6>
                            <p className="card-text mt-3">
                            You deserve top-tier designs without breaking the bank. <br /> Our services
                             are competitively priced, delivering <br /> exceptional value without ever compromising on quality.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 mb-4">
                    <div className="card px-4 rounded-4 py-3 h-100 text-center text-md-start">
                        <div className="card-body">
                            <img src={suport} alt="Support" className="mb-4 img-fluid" />
                            <h6 className="card-title mt-4">Continual Support</h6>
                            <p className="card-text mt-3">
                            Your journey with Berserk Designs doesn’t end when the <br />
                             project wraps up. We’re committed to Your success, <br /> offering ongoing 
                              support to ensure Your design needs <br /> are met, today and into the future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design

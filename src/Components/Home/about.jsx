import React from 'react';
import elisp from '../../Assets/Ellipse 3.svg';
import arrow1 from '../../Assets/Arrow.svg';
import arrow2 from '../../Assets/Arrow (1).svg';

function About() {
    return (
        <div className="container py-4">
            <div className="row align-items-center">
                <div className="col-md-10 col-12">
                    <p className="fs-1 fw-boldest">See How We Made a Difference for Others</p>
                </div>
                <div className="col-md-2 col-12 text-md-end text-center mt-3 mt-md-0">
                    <img src={arrow1} alt="Previous" className="arrow-icon" />
                    <span>1/8</span>
                    <img src={arrow2} alt="Next" className="arrow-icon" />
                </div>
            </div>
            <div className="mb-4">
                <div className="container-fluid py-5">
                    <div className="d-flex flex-column flex-md-row p-2 mx-3 align-items-center">
                        <img src={elisp} alt="Sarah T" className="img-fluid mb-3 mb-md-0" />
                        <div className="mx-md-3 text-center text-md-left">
                            <h5>Sarah T</h5>
                            <span>ABC Corp</span>
                        </div>
                    </div>
                    <p className="col-md-12  text-md-left">
                        Working with Berserk Designs was a fantastic experience. Their team was incredibly creative and professional, and they truly
                        listened to our vision and brought it to life in a way we never could have imagined. The end result exceeded all of our
                        expectations and has received rave reviews from our clients. We would highly recommend Berserk Designs to anyone looking
                        for a top-notch design agency.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;

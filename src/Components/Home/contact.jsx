import React from 'react'

function Contact() {
    return (
        <div className='container mb-4 mt-4 py-4'>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-7 col-md-8 col-12">
                    <h2 className="featurette-heading fw-boldest mb-4 text-center text-md-start">Don’t be shy, tell us about <br /> your project 😉</h2>
                    <div className="bg-body-tertiary py-3 rounded-2 mt-4 px-3">
                        <p className='mx-3 mt-3 fs-5 text-center text-md-start'>Service</p>
                        <div className="d-flex flex-wrap justify-content-center justify-content-md-start mt-3">
                            <div className="py-2 px-3 rounded-5 bg-white me-2 mb-2"><p className="mb-0 fs-6">Web Design</p></div>
                            <div className="py-2 px-3 rounded-5 bg-white me-2 mb-2"><p className="mb-0 fs-6">Product Design</p></div>
                            <div className="py-2 px-3 rounded-5 bg-white me-2 mb-2"><p className="mb-0 fs-6">Copywriting</p></div>
                        </div>
                        <p className='mt-4 mx-3 fs-5 text-center text-md-start'>Budget in USD</p>
                        <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 mt-4">
                            <div className="py-2 px-3 rounded-5 bg-white me-2 mb-2"><p className="mb-0 fs-6">Not sure</p></div>
                            <div className="py-2 px-3 rounded-5 bg-white me-2 mb-2"><p className="mb-0 fs-6">100 - 500 $</p></div>
                            <div className="py-2 px-3 rounded-5 bg-white me-2 mb-2"><p className="mb-0 fs-6">500- 1000 $</p></div>
                            <div className="py-2 px-3 rounded-5 bg-white me-2 mb-2"><p className="mb-0 fs-6">1000 - 3000 $</p></div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 mt-4">
                            <div className="py-2 px-3 rounded-5 bg-white me-2 mb-2"><p className="mb-0 fs-6">3000 - 5000 $</p></div>
                            <div className="py-2 px-3 rounded-5 bg-white me-2 mb-2"><p className="mb-0 fs-6">More than 5000 $</p></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-8 col-12 mt-4">
                    <form action="#" className='mt-4'>
                        <div className="d-flex flex-column flex-md-row gap-4">
                            <input className='border border-secondary rounded-2 py-2 px-3 w-100' type="text" placeholder='Name' />
                            <input className='border border-secondary rounded-2 py-2 px-3 w-100' type="email" placeholder='Email' />
                        </div>
                        <div className='d-grid gap-2 mt-3'>
                            <textarea className='border border-secondary rounded-2 py-2 px-4 w-100' name="Project-details" id="" rows="5" placeholder='Project Details'></textarea>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn bg-black text-white px-5 mt-3 " type="button">Discuss Project</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

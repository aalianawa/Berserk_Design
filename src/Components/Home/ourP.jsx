import React from 'react'
import project from '../../Assets/Frame 1099.svg'
import Project2 from '../../Assets/Frame 1100.svg'
import project3 from '../../Assets/Frame 1101.svg'
function OurP() {
    return (
        <div className='container mt-5 py-4'>
            <h2>Featured Projects</h2>
            <div className="row">
                <div className="col-sm-6 col-md-5 col-lg-6">
                    <img className='img-fluid' width={540} src={project} alt="" />
                </div>
                <div className="col-sm-6 col-md-5 col-lg-6">
                    <img className='img-fluid' width={540} src={Project2} alt="" />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-6 col-md-5 col-lg-6">
                    <img className='img-fluid' width={540} src={project3} alt="" />
                </div>
                <div className="col-sm-6 col-md-5 col-lg-6"></div>
            </div>
        </div>
    )
}

export default OurP
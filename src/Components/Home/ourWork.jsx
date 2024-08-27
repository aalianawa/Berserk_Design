import React from 'react';

function OurWork() {
    return (
        <div>
            <div className="container px-4 mt-4 py-5" id="icon-grid">
                <h2 className="mb-5">How We Work</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div className="col d-flex flex-column align-items-start text-md-left">
                        <span className="fs-3">01</span>
                        <div>
                            <h3 className="mb-2 fs-5">Introductory Call</h3>
                            <p className="p-1">In a 30 min call, we will discuss how we can provide value to you and your business.</p>
                        </div>
                    </div>

                    <div className="col d-flex flex-column align-items-start text-md-left">
                        <span className="fs-3">01</span>
                        <div>
                            <h3 className="mb-2 fs-5">Requirements & Scope</h3>
                            <p className="p-1">Our team will gather all the information needed to start the project and provide you with a proposal.</p>
                        </div>
                    </div>

                    <div className="col d-flex flex-column align-items-start text-md-left">
                        <span className="fs-3">01</span>
                        <div>
                            <h3 className="mb-2 fs-5">Designing</h3>
                            <p className="p-1">The team works in iterations with frequent communication with you to deliver the best possible result.</p>
                        </div>
                    </div>

                    <div className="col d-flex flex-column align-items-start  text-md-left">
                        <span className="fs-3">01</span>
                        <div>
                            <h3 className="mb-2 fs-5">Handover & Support</h3>
                            <p className="p-1">After you get the result, you have the option of ongoing maintenance and development of new features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurWork;

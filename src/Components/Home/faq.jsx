import React from 'react'

function FAQ() {
    return (
        <div className="container mt-5 p-5 ">
            <div className='col-12'>
                <p className='text-center justify-content-center mb-4 fs-1 fw-boldest'>Frequently Asked Questions</p>
                <div class="accordion accordion-flush mx-3 me-3" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How do I start a project with your agency?
                            </button>
                        </h2>
                        
                    </div>
                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What is your process for designing a project?
                            </button>
                        </h2>
                        
                    </div>
                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How long does a typical project take?
                            </button>
                        </h2>
                       
                    </div>

                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Can you work with our existing brand guidelines?
                            </button>
                        </h2>
                        
                    </div>

                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            What if I need changes after the project is completed?
                            </button>
                        </h2>
                        
                    </div>

                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How much does it cost to work with your agency?
                            </button>
                        </h2>
                        
                    </div>

                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How do you ensure the quality of your designs?
                            </button>
                        </h2>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
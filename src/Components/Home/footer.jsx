import React from 'react'

function Footer() {
  return (
    <div>
        <footer class="bg-dark  p-5 mt-4">
    <div className="container">
        <div className="row">
            
            <div className="col-md-4 mb-4 mb-md-0">
                <p className="mb-2 text-light">Get in touch</p>
                <h3 className="text-white">support@berserkdesigns.org</h3>
            </div>

            
            <div className="col-md-4 d-none d-md-block"></div>

            
            <div className="col-md-2 mb-4 mb-md-0">
                <ul className="list-unstyled">
                    <li><a href="#" class="text-white">WhatsApp</a></li>
                    <li><a href="#" class="text-white">Linkedin</a></li>
                    <li><a href="#" class="text-white">Behance</a></li>
                </ul>
            </div>

            
            <div className="col-md-2">
                <ul className="list-unstyled">
                    <li><a href="#" class="text-white">Portfolio</a></li>
                    <li><a href="#" class="text-white">About Us</a></li>
                    <li><a href="#" class="text-white">Services</a></li>
                    <li><a href="#" class="text-white">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div className="text-center align-items-center justify-content-center mt-5">
            <h6 className="text-white mb-0 mt-5 pt-5">© Berserk Designs 2024</h6>
        </div>
    </div>
</footer>

    </div>
  )
}

export default Footer
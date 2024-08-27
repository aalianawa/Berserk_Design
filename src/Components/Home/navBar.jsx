import React from 'react'
import close from '../../Assets/Frame 42.svg'
import logo from '../../Assets/Logo.svg'
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <button className='btn bg-black mx-4 px-4 py-2 text-white ms-auto mb-2 mb-lg-1'>Contact Us</button>

            <form className="d-flex" role="search">
              <img className='mx-2' src={close} alt="" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
};
export default NavBar;
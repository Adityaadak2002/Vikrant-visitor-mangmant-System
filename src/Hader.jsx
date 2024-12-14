import React from 'react'
import './Hader.css'

function Hader() {
  return (
    <>
    {/* Hedder part */}

    <header className="main_header">
        <div className="logo_section">
          <img className="logo" src="logo.png" alt="Logo" />
        </div>
        <div className="contact_section">
          <ul className='email_box'>
            <li className="email"> <i class="fa-regular fa-envelope"></i> info@vitmindore.com</li>
          </ul>
        </div>
        <nav className="menu_list">
          <ul>
            <li className="list_item">Home</li>
            <li className="list_item">Visitors</li>
          </ul>
        </nav>
      </header>
      
      {/* Hedar is Complete */}
    </>
  )
}

export default Hader
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Navbar() {
  return (
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                <li className={'nav-item'}><a className="nav-link active" aria-current="page" href="#">Home</a></li>
                <li className={'nav-item'}><a className="nav-link" href="#">Features</a></li>
                <li className={'nav-item'}><a className="nav-link" href="#">Pricing</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  )
}

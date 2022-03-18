import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
<nav className="NavLinkbar NavLinkbar-expand-lg NavLinkbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="NavLinkbar-brand" to="/admin">Dashboard</NavLink>
    <button className="NavLinkbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavLinkbarSupportedContent" aria-controls="NavLinkbarSupportedContent" aria-expanded="false" aria-label="Toggle NavLinkigation">
      <span className="NavLinkbar-toggler-icon" />
    </button>
    <div className="collapse NavLinkbar-collapse" id="NavLinkbarSupportedContent">
      <ul className="NavLinkbar-NavLink me-auto mb-2 mb-lg-0">
        <li className="NavLink-item">
          <NavLink className="NavLink-link active" aria-current="page" to="#">Home</NavLink>
        </li>
        <li className="NavLink-item">
          <NavLink className="NavLink-link" to="/product">Products</NavLink>
        </li>
       
        <li className="NavLink-item">
          <NavLink className="NavLink-link disabled" to="">Category</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Header
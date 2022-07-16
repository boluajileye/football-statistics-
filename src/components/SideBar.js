import React from 'react';
import { Link } from 'react-router-dom';

export const SideBar = () => {
  return (
    <>
    
        <div className="col-auto col-md-3 col-xl-2 px-sm-1 px-0 bg-light sticky-top h-100">
            <div className="d-flex flex-column align-items-center px-3 pt-2 text-white min-vh-100">
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li>
                        <Link to="/" className="nav-link px-0 align-middle">
                            <i className="fs-1 bi-bootstrap-fill"></i> <h2 className="font-weight-bold text-primary text-center d-none d-sm-inline">OLUSPORT</h2> </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/team" className="nav-link align-middle px-0">
                            <i className="fs-1 bi-people"></i>  <h2 className="font-weight-bold text-primary text-center d-none d-sm-inline">Team</h2></Link>
                    </li>
                </ul>
            </div>
            
        </div>
</>
  );
}

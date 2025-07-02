
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Algae International Japan</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mother-vegetables">Mother Vegetables</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mv-factory">MVファクトリー</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sustainable-vision">Sustainable Vision</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/company">会社概要</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

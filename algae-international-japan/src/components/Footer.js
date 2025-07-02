
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Algae International Japan</h5>
            <p>
              “地球のはじまりの植物” で世界を満たす。
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-dark">Home</Link>
              </li>
              <li>
                <Link to="/mother-vegetables" className="text-dark">Mother Vegetables</Link>
              </li>
              <li>
                <Link to="/mv-factory" className="text-dark">MVファクトリー</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">More Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/sustainable-vision" className="text-dark">Sustainable Vision</Link>
              </li>
              <li>
                <Link to="/shop" className="text-dark">Shop</Link>
              </li>
              <li>
                <Link to="/company" className="text-dark">会社概要</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Algae International Japan Co.,Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

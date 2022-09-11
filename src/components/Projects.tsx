// Make cards for portofolio with bootstrap

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Projects() {
  return (
    <div className="container" id='projects'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                <img src="https://random.pepsi.pics/" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Coming Soon!</h5>
                    <p className="card-text">
                    Coming Soon!
                    </p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="https://random.pepsi.pics/" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Coming Soon!</h5>
                    <p className="card-text">
                    Coming Soon!
                    </p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="https://random.pepsi.pics/" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Coming Soon!</h5>
                    <p className="card-text">
                    Coming Soon!
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
  );
}

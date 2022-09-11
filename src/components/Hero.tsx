// Make hero section for portfolio website with react-bootstrap

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Hero() {
    return (
        <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
            <h1 className="display-5 fw-bold text-white">Nicholas Rassya Nugraha</h1>
            <div className="col-lg-6 mx-auto">
                <p className="fs-5 mb-4 text-purple">I am a software engineer who is passionate about making open-source more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include ReactJS, NodeJS, and Python.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Button variant="primary" size="lg" href="#contacts">Contact Me</Button>
                </div>
            </div>
        </div>
    </div>
    );
}
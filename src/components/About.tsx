//Make about section for portofolio with react-bootstrap

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function About() {
    return (
        <div className="bg-white text-secondary px-4 py-5 text-center" id='about'>
            <div className="py-5">
                <h1 className="display-5 fw-bold text-dark">About Me</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4 text-gray">I am a software engineer who is passionate about making open-source more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include ReactJS, NodeJS, and Python.</p>
                </div>
            </div>
        </div>
    );
}
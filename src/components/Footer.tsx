// Make a footer section with react-bootstrap

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Footer() {
    return (
        <div className="bg-dark text-center lg-start">
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            © 2022 Copyright:
            <a className="text-light" href="https://nicholasrassya.my.id"> Nicholas Rassya Nugraha</a>
            </div>
        </div>
    );
}
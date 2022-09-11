// Make contact me for portofolio with react-bootstrap

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-black text-secondary px-4 py-5 text-center" id="contacts">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Contact Me</h1>
      <div className="mx-auto pt-4">
        <div>
          <a
            className="btn btn-primary"
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/nugraha_nicholas/"
            role="button"
          >
            <FaInstagram />
          </a>
          {/* Github */}
          <a
            className="btn btn-primary"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/xcgc"
            role="button"
          >
            <FaGithub />
          </a>
          {/* Twitter */}
          <a
            className="btn btn-primary"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/BinnicR"
            role="button"
          >
            <FaTwitter/>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

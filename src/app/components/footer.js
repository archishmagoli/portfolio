"use client";
import React from "react";
import Container from 'react-bootstrap/Container';
import { SocialIcon } from 'react-social-icons';
import { FaEnvelope, FaEnvelopeSquare, FaGithub, FaHeart, FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <Container fluid className="footer">
                <br></br>
                <div className="row">
                    <div className="col-sm">
                        <h5>Contact Me</h5>
                        <p>I&#39;m open to internship/research opportunities, as well as networking/having a chat!</p>
                    </div>
                    <div className="col-sm">
                        <h5>Email</h5>
                        <FaEnvelope /> <a href="mailto:agoli6@gatech.edu"> agoli6@gatech.edu</a>
                        <br></br>
                        <FaMailBulk /> <a href="mailto:archishma.goli@gmail.com"> archishma.goli@gmail.com</a>
                    </div>
                    <div className="col-sm">
                        <h5>Socials</h5>
                        <FaLinkedin /> <a href="https://www.linkedin.com/in/archishma-goli/"> LinkedIn</a>
                        <br></br>
                        <FaGithub /> <a href="https://www.github.com/archishmagoli"> GitHub</a>
                    </div>
                </div>
                <br></br>
            </Container>
        </>
    );
}
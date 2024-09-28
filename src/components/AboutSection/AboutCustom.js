import React from 'react';
import {SubjectsImages} from "@/data/subjectsSection";
import {Col, Container, Image, Row} from "react-bootstrap";

const AboutCustom = () => {
    return (
        <Container>
        <div className="auto-container mt-4">
            <h2 style={{marginBottom: 40}} className="sec-title-six text-center sec-title-six__title mb-4">About Us</h2>
            <Row className="mt-4 mb-4" style={{rowGap: 30, marginTop: 20,}}>
                <h3 style={{fontSize: 24, marginBottom: -15}} className="sec-title-six sec-title-six__title">Who We Are?</h3>
                <p>
                    British American Journals is a platform dedicated to advancing
                    research and innovation through open access publishing. We cover
                    various academic disciplines, providing a space for researchers
                    to share their findings and contribute to knowledge. We use peer
                    review and modern publishing practices to ensure quality. By
                    collaborating with institutions globally, we have published in
                    diverse fields, promoting research quality and ethics.
                </p>
                <h3 style={{fontSize: 24, marginBottom: -15}} className="sec-title-six sec-title-six__title">What We Do?</h3>
                <ul>
                    <li>Publish academic journals, books, and conference proceedings</li>
                    <li>Offer research promotion services and support programs</li>
                    <li>Organize conferences and workshops</li>
                    <li>Provide research training for lecturers</li>
                    <li>Foster international research networks</li>
                    <li>Offer awards and grants to recognize the achievements of researchers</li>
                </ul>
            </Row>
        </div>
        </Container>
    );
};

export default AboutCustom;
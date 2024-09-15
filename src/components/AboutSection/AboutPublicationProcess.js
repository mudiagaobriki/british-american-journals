import React from 'react';
import {SubjectsImages} from "@/data/subjectsSection";
import {Col, Container, Image, Row} from "react-bootstrap";

const AboutPublicationProcess = () => {
    return (
        <Container>
        <div className="auto-container mt-4">
            <h2 style={{marginBottom: 40}} className="sec-title-six text-center sec-title-six__title mb-4">Publication Process</h2>
            <Row className="mt-4 mb-4" style={{rowGap: 30, marginTop: 20,}}>
                <h3 style={{fontSize: 24, marginBottom: -15}} className="sec-title-six sec-title-six__title">Publication
                    Process</h3>
                <ul>
                    <li>Articles will be reviewed by two (2) experts in the subject area with extensive teaching and
                        research experience.
                    </li>
                    <li>The reviewers will be anonymous to the authors throughout the review process.</li>
                    <li>The review result will decide whether the article is published or not.</li>
                    <li>If the article is approved, the author will get an acceptance letter informing them of the
                        publishing date and publication fee.
                    </li>
                    <li>Reviews take approximately two weeks.</li>
                    <li>The authors will be contacted once the article is published online.</li>
                </ul>
            </Row>
        </div>
        </Container>
    );
};

export default AboutPublicationProcess;
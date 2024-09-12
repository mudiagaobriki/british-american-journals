import React from 'react';
import {SubjectsImages} from "@/data/subjectsSection";
import {Col, Container, Image, Row} from "react-bootstrap";

const Subjects = () => {
    return (
        <Container>
        <div className="auto-container mt-4">
            <h2 style={{marginBottom: 40}} className="sec-title-six text-center sec-title-six__title mb-4">Journals By Subject</h2>
            <Row className="mt-4" style={{ rowGap: 30, marginTop: 20,}}>
            {
                SubjectsImages?.map((image, index) => {
                    return <Col xs={3} key={index}>
                        <Image src={image.src} width="auto" alt="subject image" />
                    </Col>
                })
            }
            </Row>
        </div>
        </Container>
    );
};

export default Subjects;
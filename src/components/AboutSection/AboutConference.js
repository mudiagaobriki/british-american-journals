import React from 'react';
import {SubjectsImages} from "@/data/subjectsSection";
import {Col, Container, Image, Row} from "react-bootstrap";

const AboutConference = () => {
    return (
        <Container>
        <div className="auto-container mt-4">
            <h2 style={{marginBottom: 40}} className="sec-title-six text-center sec-title-six__title mb-4">Conference Proceeding/Special Issue</h2>
            <Row className="mt-4 mb-4" style={{rowGap: 30, marginTop: 20,}}>
                <p>
                    We collaborate with various national and international workshops, training programs, and
                    conferences. Our conferences are known for their excellent content, networking possibilities, and
                    memorable experiences.

                    If you are a conference organizer interested in publishing your conference proceedings, we offer
                    open-access publishing with a quick turnaround. All conference articles will be published online
                    right after the conference.

                    To learn more, reach out to us at info@bajournals.com.
                </p>
                <h3 style={{fontSize: 24, marginBottom: -15}} className="sec-title-six sec-title-six__title">Benefits of Attending our Conferences</h3>
                <ul>
                    <li><strong>Networking Opportunities:</strong> Conferences provide a platform to connect with
                        professionals in your field, fostering valuable relationships for collaboration and career
                        growth.
                    </li>
                    <li><strong>Knowledge Acquisition:</strong> Attend presentations, workshops, and panel discussions
                        to gain insights into the latest industry trends, research findings, and best practices.
                    </li>
                    <li><strong>Skill Enhancement:</strong> Participate in interactive sessions and hands-on activities
                        to develop new skills or refine existing ones, enhancing your professional capabilities.
                    </li>
                    <li><strong>Inspiration and Motivation:</strong> Hear from industry leaders and successful
                        individuals, gaining inspiration, motivation, and new perspectives to fuel your passion and
                        ambition.
                    </li>
                    <li><strong>Exposure to New Ideas:</strong> Discover innovative products, services, and solutions
                        through exhibits and demonstrations, expanding your knowledge and awareness.
                    </li>
                    <li><strong>Career Advancement:</strong> Attending conferences demonstrates your commitment to
                        professional development, making a positive impression on potential employers or clients.
                    </li>
                    <li><strong>Community Building:</strong> Connect with like-minded individuals who share your
                        interests and goals, fostering a sense of community and belonging.
                    </li>
                </ul>
            </Row>
        </div>
        </Container>
    );
};

export default AboutConference;
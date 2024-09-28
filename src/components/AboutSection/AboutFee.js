import React from 'react';
import {SubjectsImages} from "@/data/subjectsSection";
import {Col, Container, Image, Row} from "react-bootstrap";

const AboutFee = () => {
    return (
        <Container>
        <div className="auto-container mt-4">
            {/*<h2 style={{marginBottom: 40}} className="sec-title-six text-center sec-title-six__title mb-4">Conference Proceeding/Special Issue</h2>*/}
            <Row className="mt-4 mb-4" style={{rowGap: 30, marginTop: 20,}}>
                <p>
                    All articles we publish are freely accessible online. Submitting your work is free, but if we accept it, you'll need to pay an Article Processing Charge (APC).
                    Download this document for a step by step guide
                    <a href="https://firebasestorage.googleapis.com/v0/b/charis-a9e91.appspot.com/o/Publishing.pdf?alt=media&token=649f149e-950d-45a7-92b0-68e0f5f19ac9" download target="_blank"> Publishing Process and Fee</a>
                    <br/>
                    To learn more, reach out to us at <a href="#">info@bajournals.com</a>.
                </p>
                <h3 style={{fontSize: 24, marginBottom: 0}} className="sec-title-six sec-title-six__title">Fee - $25 (at 95% from the actual price of $500)</h3>
                <h3 style={{fontSize: 24, marginBottom: -15}} className="sec-title-six sec-title-six__title">Note</h3>
                <ul>
                    <li><strong>Publishing Fees and Acceptance:</strong></li>
                    <ul>
                        <li>Article Processing Charges (APCs) are payable only after your manuscript has been formally accepted for publication in one of our journals.</li>
                        <li>Please note that APCs are non-refundable. We encourage authors to review our author guidelines and journal policies carefully before submission.</li>
                    </ul><br/>
                    <li><strong>Content and Liability:</strong></li>
                    <ul>
                        <li>The content of published articles is the sole responsibility of the authors. British American Journals does not endorse or take responsibility for the accuracy, completeness, or validity of any claims or information presented in published works.</li>
                        <li>While we strive to maintain high standards of quality and peer review, publication in our journals does not guarantee the impact or future citations of your work.</li>
                        <li>British American Journals and its staff will not be held liable for any damages, losses, or claims arising from the publication or use of content published in our journals.</li>
                    </ul>
                    <li><strong>By submitting your manuscript to British American Journals, you acknowledge and agree to the terms of this disclaimer.</strong></li>
                    {/*<li><strong>For further information, please refer to our full Author Guidelines and Publication Policies.</strong></li>*/}
                    <li><strong>If you have any questions, please contact our editorial team at <a href="">info@bajournals.com.</a></strong></li>
                    <li><strong>Thank you for considering British American Journals for your scholarly publications.</strong></li>
                </ul>
            </Row>
        </div>
        </Container>
    );
};

export default AboutFee;
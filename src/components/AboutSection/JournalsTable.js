import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

const JournalsTable = () => {
    const journals = [
        { name: 'International Journal of Research in Nursing and Health', issn: '1234-5678', if: '4.5' },
        { name: 'International Journal of Research in Midwifery', issn: '2345-6789', if: '3.8' },
        { name: 'International Journal of Research in Finance and Economics and Management Sciences', issn: '3456-7890', if: '5.2' },
        { name: 'International Journal of Modern Multidisciplinary Research', issn: '1234-5678', if: '4.5' },
        { name: 'Asian Journal of Innovation in Engineering and Sciences', issn: '2345-6789', if: '3.8' },
        { name: 'Asian Journal of Research in Education', issn: '3456-7890', if: '5.2' },
    ];

    return (
        <div className="auto-container mt-5">
            <h2 style={{marginBottom: 40}} className="sec-title-six text-center sec-title-six__title mb-4">Journals</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Journals Name</th>
                    <th>ISSN</th>
                    <th>IF</th>
                </tr>
                </thead>
                <tbody>
                {journals.map((journal, index) => (
                    <tr key={index}>
                        <td>{journal.name}</td>
                        <td>{journal.issn}</td>
                        <td>{journal.if}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <h3 style={{fontSize: 24, marginBottom: 25,}} className="sec-title-six sec-title-six__title mt-5">Copyrights</h3>
            <p>
                The author(s) retain all copyrights, with first publishing rights given to BA journals.
                When an author submits a manuscript to any BA-journal for review and publication, it means that the
                author has given the journal explicit permission/consent to publish the paper without additional
                permission/consent from the editor.
                Authors who want to withdraw their submissions must formally notify the Editor within one month of
                submission; otherwise, the work will be published at a later date. All Copyright claims should be sent
                to <a style={{color: 'blue'}}>info@bajoournals.com</a> <br/>
                All articles published are open-access articles distributed under the terms and conditions of the
                Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0).
            </p>
        </div>
    );
};

export default JournalsTable;
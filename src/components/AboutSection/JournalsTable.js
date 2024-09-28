import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import storage from "../../firebase"

const JournalsTable = () => {
    const [fetching, setFetching] = useState(true);
    const [journalCategories, setJournalCategories] = useState([]);

    // const storage = firebase.storage();

    const journals = [
        { name: 'International Journal of Research in Nursing and Health', issn: '1234-5678', if: '4.5' },
        { name: 'International Journal of Research in Midwifery', issn: '2345-6789', if: '3.8' },
        { name: 'International Journal of Research in Finance and Economics and Management Sciences', issn: '3456-7890', if: '5.2' },
        { name: 'International Journal of Modern Multidisciplinary Research', issn: '1234-5678', if: '4.5' },
        { name: 'Asian Journal of Innovation in Engineering and Sciences', issn: '2345-6789', if: '3.8' },
        { name: 'Asian Journal of Research in Education', issn: '3456-7890', if: '5.2' },
    ];

    // const listFolders = async (folderRef) => {
    //     try {
    //         const listResult = await folderRef.listAll();
    //         listResult.prefixes.forEach((subfolderRef) => {
    //             console.log(`Folder: ${subfolderRef.name}`);
    //             setJournalCategories(prevState => [...prevState, subfolderRef.name]);
    //             listFolders(subfolderRef); // Recursively call for subfolders
    //         });
    //     } catch (err) {
    //         alert(err.message);
    //     }
    // };
    const listFolders = async (folderRef, parentFolder) => {
        try {
            const listResult = await folderRef.listAll();
            const subfolders = [];
            listResult.prefixes.forEach((subfolderRef) => {
                const newFolder = {
                    name: subfolderRef.name,
                    subfolders: []
                };
                subfolders.push(newFolder);
                listFolders(subfolderRef, newFolder); // Recursively call for subfolders
            });
            parentFolder.subfolders = subfolders;
        } catch (err) {
            alert(err.message);
        }
    };

    // const listItem = () => {
    //     storage
    //         .ref()
    //         // .child("images/")
    //         .listAll()
    //         .then((res) => {
    //             res.prefixes.forEach((folderRef) => {
    //                 console.log(`Folder: ${folderRef.name}`);
    //                 setJournalCategories(prevState => [...prevState, folderRef.name]);
    //             });
    //         })
    //         .catch((err) => {
    //             alert(err.message);
    //         });
    // };

    // const listItem = () => {
    //     storage.ref()
    //         .listAll()
    //         .then((res) => {
    //             res.prefixes.forEach((folderRef) => {
    //                 console.log(`Folder: ${folderRef.name}`);
    //                 setJournalCategories(prevState => [...prevState, folderRef.name]);
    //                 listFolders(folderRef); // Start recursive listing
    //             });
    //         })
    //         .catch((err) => {
    //             alert(err.message);
    //         });
    // };

    const listItem = () => {
        const folderList = {
            folders: []
        };
        storage.ref()
            .listAll()
            .then((res) => {
                res.prefixes.forEach((folderRef) => {
                    const newFolder = {
                        name: folderRef.name,
                        subfolders: []
                    };
                    folderList.folders.push(newFolder);
                    listFolders(folderRef, newFolder); // Start recursive listing
                });
                // Update state or UI with folderList data
                setJournalCategories(folderList.folders);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    useEffect(() => {
        listItem()
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setFetching(false);
        },3000)
    }, []);

    useEffect(() => {
        console.log({journalCategories});
    },[journalCategories])


    return (
        <div className="auto-container mt-5">
            <h2 style={{marginBottom: 40}} className="sec-title-six text-center sec-title-six__title mb-4">Journals</h2>
            {
                journalCategories.length > 0 && !fetching && journalCategories.map((item, index) => {
                    return (
                        <>
                            <h3 style={{fontSize: 24, marginBottom: 10,}} key={index} className="sec-title-seven  sec-title-seven__title">{item.name}</h3>
                            {item.subfolders.length > 0 && ( // Check if subfolders exist
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Journals Name</th>
                                        <th>ISSN</th>
                                        <th>IF</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {item.subfolders.map((subfolder, index2) => (
                                        <tr key={index2}>
                                            <td>
                                                <a onClick={() => alert(subfolder?.name)}>{subfolder.name}</a>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            )}
                        </>
                    );
                })
            }
            {/*<Table striped bordered hover>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*    <th>Journals Name</th>*/}
            {/*        <th>ISSN</th>*/}
            {/*        <th>IF</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {journals.map((journal, index) => (*/}
            {/*        <tr key={index}>*/}
            {/*            <td>{journal.name}</td>*/}
            {/*            <td>{journal.issn}</td>*/}
            {/*            <td>{journal.if}</td>*/}
            {/*        </tr>*/}
            {/*    ))}*/}
            {/*    </tbody>*/}
            {/*</Table>*/}
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
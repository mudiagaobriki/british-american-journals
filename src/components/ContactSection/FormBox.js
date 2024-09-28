import React, {useRef, useState} from "react";
import {Button, Col, Modal, Row} from "react-bootstrap";
import emailjs from "@emailjs/browser"

const FormBox = ({ inputs = [] }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState(' ');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach(({ name }) => (data[name] = formData.get(name)));
    console.log(data);
    sendEmail(e)
  };

  const handleCloseSuccess = () => {
      setShowSuccess(false);
      window.location.reload();
  }

  const handleCloseError = () => {
      setShowError(false);
  }

  const sendEmail = (e) => {
    // e.preventDefault();
    console.log("sendEmail");
    emailjs
        .sendForm('bajournals', 'template_eesviem', form.current, {
          publicKey: 'N4AIYvdIPt5eFPjqG',
        })
        .then(
            () => {
              // console.log('SUCCESS!');
                setShowSuccess(true);
            },
            (error) => {
              // console.log('FAILED...', error.text);
                setShowError(true);
                setErrorText(error.text);
            },
        )
        .finally(() => {
            setLoading(false);
        })
  };

  return (
    <div className="form-box">
      <div className="sec-title">
        {/*<h2>*/}
        {/*  Write Us a Message<span className="dot">.</span>*/}
        {/*</h2>*/}
        <h3 style={{fontSize: 24, marginBottom: -15}} className="sec-title-six sec-title-six__title">Write Us a Message</h3>
      </div>
      <div className="default-form">
        <form ref={form} onSubmit={handleSubmit} id="contact-form">
          <Row className="clearfix">
          {inputs.map(({ name, type, placeholder, required, fullwidth }) => (
              <Col
                key={name}
                lg={type ? fullwidth ? 12: 6 : 12}
                md={type ? fullwidth ? 12: 6 : 12}
                sm={12}
                className="form-group"
              >
                <div className="field-inner">
                  {type ? (
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      required={required}
                    />
                  ) : (
                    <textarea
                      name={name}
                      placeholder={placeholder}
                      required={required}
                    ></textarea>
                  )}
                </div>
              </Col>
            ))}
            <Col lg={12} md={12} sm={12} className="form-group">
              <button disabled={loading} className="theme-btn btn-style-one">
                <i className="btn-curve"></i>
                <span className="btn-title text-white">
                    {loading? 'Sending...': 'Send message'}
                </span>
              </button>
            </Col>
          </Row>
        </form>
      </div>
        <Modal show={showSuccess} onHide={handleCloseSuccess} centered>
            <Modal.Header closeButton>
                <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">

                    <i className="fas fa-check-circle fa-5x text-success mb-3"></i>
                    <p>We have received your message.</p>
                    <p style={{marginTop: -10}}>We will contact you shortly!</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseSuccess}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={showError} onHide={handleCloseError} centered>
            <Modal.Header closeButton>
                <Modal.Title>Oops! Something went wrong.</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className="text-center">
                    <i className="fas fa-exclamation-triangle fa-5x text-danger mb-3"></i>
                    <p>{errorText}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseError}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
};

export default FormBox;

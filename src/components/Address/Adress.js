import React from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Address() {
  return (
    <div>
       <Container className='address-section'>
      <Row className='address'>
        <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0728840437946!2d69.2012376755285!3d41.28551820230848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1suz!2s!4v1719639525334!5m2!1suz!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Address;

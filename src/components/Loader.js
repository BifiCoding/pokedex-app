import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';

export default function Loader() {
  return (
    <div>
      <div className='d-flex justify-content-center pt-5'>
        <Row>
          <Col>
            <Spinner
              className='spinner-border spinner-border-lg'
              role='status'
              style={{ height: 40, width: 40, color: 'red' }}
            ></Spinner>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='my-2 mx-3'>
              <h5> Loading... </h5>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

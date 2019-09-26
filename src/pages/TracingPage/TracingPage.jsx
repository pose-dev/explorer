import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { StandardTemplate } from 'templates';
import Tracing from './components/Tracing';
import { PageTitleDivStyled } from 'styled';

class TracingPage extends Component {

  render() {
    return (
      <StandardTemplate>
        <div className="TracingPage">
          <Row>
            <Col sm="12">
              <PageTitleDivStyled>Tracing</PageTitleDivStyled>
            </Col>
          </Row>
          <Row>
            <Col sm="12">              
              <Tracing/>
            </Col>
          </Row>
        </div>
      </StandardTemplate>
    );
  }
}
export default TracingPage;

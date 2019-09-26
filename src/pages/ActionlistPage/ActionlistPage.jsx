import React, { Component } from 'react';
import { CardBody, Col, Row } from 'reactstrap';

import { StandardTemplate } from 'templates';
import Actionlist from './components/Actionlist';
import { PageTitleDivStyled } from 'styled';
import { CardStyled, CardHeaderStyled } from 'styled';
import styled from 'styled-components';

const FirstCardStyled = styled(CardStyled)`
  border-top: solid 2px #f1e9d4;
`

class ActionlistPage extends Component {

  render() {

    return (
      <StandardTemplate>
        <div className="ActionlistPage">
          <Row>
            <Col xs="12">
              <PageTitleDivStyled>Actions</PageTitleDivStyled>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FirstCardStyled>
                <CardHeaderStyled>
                  Action List
                </CardHeaderStyled>
                <CardBody>
                  <Actionlist/>
                </CardBody>
              </FirstCardStyled>
            </Col>
          </Row>
        </div>
      </StandardTemplate>
    );
  }
}

export default ActionlistPage;

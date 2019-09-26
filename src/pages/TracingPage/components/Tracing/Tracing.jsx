import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import { fetchStart, paramsSet } from './TracingReducer';
import isObjectEmpty from 'helpers/is-object-empty';
import pathNameConsumer from 'helpers/pathname-consumer';
import { CardBody, Col, Row, Form, FormGroup, CardTitle} from 'reactstrap';
import styled from 'styled-components';
import { CodeViewer, LoadingSpinner } from 'components';
import { Link } from 'react-router-dom';
import { CardStyled, CardHeaderStyled, TableStyled, ErrorButton, ErrorDivStyled, ButtonPrimary, InputStyled } from 'styled';

const FirstCardStyled = styled(CardStyled)`
  border-top: solid 2px #f1e9d4;
`

const DivFlexStyled = styled.div`
  display: flex;
  justify-content: center;
`
const SearchInputStyled = styled(InputStyled)`
  width: 38%;
  margin-right: 10px;
`

const CustomTable = styled(TableStyled)`
  thead tr{
    background-color: #ffffff;
  }
`
                                                       
const Tracing = (props) => {

  useEffect(()=>{
    let { router: { location: {pathname} } } = props;
    props.paramsSet({id: pathNameConsumer(pathname)})
    if (/^\/tracing\/\w+/.test(pathname)) props.fetchStart();
  }, [])

  let { tracing: { isFetching, data, params } } = props;
  let { payload, error } = data;

  // input value
  const [inputValue, setInputValue] = useState('');
  
  return (
    <div className="Tracing">
      <FirstCardStyled>
        <CardHeaderStyled>Tracing By OrderId</CardHeaderStyled>
        <CardBody>
          <CardTitle>
            <DivFlexStyled>
              <SearchInputStyled
                    placeholder="Order Id"
                    value={inputValue}
                    onKeyDown={
                      evt => {
                        if (evt.key === 'Enter') {
                          setInputValue("");
                          if(inputValue !== "")
                            props.push('/tracing/'+inputValue)
                        }
                      }
                    }
                    onChange={evt=>{setInputValue(evt.target.value)}}/>
              <ButtonPrimary
                    onClick={evt=> {
                      // setInputValue("");
                      if(inputValue !== "")
                        props.push('/tracing/'+inputValue)
                    }}>
              SEARCH</ButtonPrimary>
            </DivFlexStyled>
          </CardTitle>
        </CardBody>
      </FirstCardStyled>
      <div>{ error
              ? 
                <>
                  {!isObjectEmpty(error) && <p className="text-danger">{JSON.stringify(error)}</p>}
                  <ErrorButton onClick={props.fetchStart}>Connection error, click to reload</ErrorButton>
                </>
              : isFetching           
                ? <LoadingSpinner />
                : payload.length === 0 
                  ? ''
                  : <div>
                      <Row>
                        <Col sm="12">
                          <FirstCardStyled>
                            <CardHeaderStyled>Order Details</CardHeaderStyled>
                            <CardBody>                              
                              <Form>
                                <FormGroup row>
                                  <Col sm={2}>Order ID:</Col>
                                  <Col sm={10} className="hashText">
                                    {payload[0].action_traces[0].act.data.orderid}
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col sm={2}>Transaction ID:</Col>
                                  <Col sm={10} className="hashText">
                                    <Link to={`/transacton/${payload[0].id}`}>{payload[0].id}</Link>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col sm={2}>Timestamp:</Col>
                                  <Col sm={10} className="hashText">
                                    {payload[0].createdAt}
                                  </Col>
                                </FormGroup>
                              </Form>
                            </CardBody>
                          </FirstCardStyled>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12}>
                          <CardStyled>
                            <CardHeaderStyled>Order Raw JSON</CardHeaderStyled>
                            <CardBody>
                              <CodeViewer
                                language="json"
                                value={JSON.stringify(JSON.parse(payload[0].action_traces[0].act.data.details), null, 2)}
                                readOnly={true}
                                height={600}
                              />                            
                            </CardBody>
                          </CardStyled>                          
                        </Col>
                      </Row>
                    </div>
            }
      </div>
    </div>
  );
}

export default connect(
  ({ tracingPage: { tracing }, router}) => ({
    tracing,
    router
  }),
  {
    fetchStart,
    paramsSet,
    push
  }

)(Tracing);

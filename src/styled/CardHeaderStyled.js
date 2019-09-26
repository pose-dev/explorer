import { CardHeader } from 'reactstrap';
import styled from 'styled-components';

export default styled(CardHeader)`
  height: auto;
  min-height: 40px;
  border-bottom: solid 1px transparent;
  background-color: #f9f6ef;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 0;
  :first-child{
    border-radius: 0;
  }
`

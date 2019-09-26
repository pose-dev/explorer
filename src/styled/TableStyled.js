import { Table } from 'reactstrap';
import styled from 'styled-components';

export default styled(Table)`

  tr{
    border: solid 1px #e8ebf0;
  }  
  tbody tr:nth-of-type(odd){
    background-color: #fbfbfc;
  }
  
  tbody tr:hover{
    background-color: #edf5fd;
    cursor: pointer;
  }
`

import './Header.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {  Nav, NavItem } from 'reactstrap';
//import { AppNavbarBrand } from '@coreui/react';
import styled from 'styled-components';

// import { panelSelect } from 'pages/PermissionPage/PermissionPageReducer';

import ConnectionIndicator from './components/ConnectionIndicator';

const EosioLogoSmallSVG = ({className}) =>
  <svg {...{className}} width="116px" height="35px" viewBox="0 0 116.6 34.7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <style>{`.st0{fill:#E79500;}.st1{fill:#666666;}`}</style>
    <g>
      <path class="st0" d="M26.3,11.1c0-0.1-5.3-6.9-5.3-6.9L13.2,0L5.6,4.2l-5.4,6.6l6.9,17.4c0,0,0.1,0,0,0h0.1c0,0,1.1-12.1,1.1-12.1
        l4.5,17.9l0.4,0.8c0,0,0.5-0.8,0.5-0.8l4.7-17.9l0.9,12.1l7-16.8c0,0,0-0.1,0-0.1l0,0l0,0C26.3,11.3,26.3,11.2,26.3,11.1L26.3,11.1
        z M18.1,12.1L18.1,12.1l-4.4,18.3L14,8.2l5.7-2.5L18.1,12.1C18.1,12.1,18.1,12.1,18.1,12.1z M19.5,11.9l1.2-5l1.2,5.9L19.5,11.9z
        M7.2,11.8L5.1,13l1.1-6.3L7.2,11.8z M3.9,12.9l-2.2-1.8l3.4-4.3L3.9,12.9z M4.9,14l2.4-1.1L7,24.9L4.9,14z M6.8,5.8l6,2.5v22.1
        L6.8,5.8z M23.1,12.9l-1.3-6l3.3,4.2L23.1,12.9z M13.7,6.8V1.3l5.6,3.2L13.7,6.8z M12.6,7L7.1,4.7l5.5-3.2V7z M1.7,12.2L1.7,12.2
        l2.1,2.1l1.9,8.6L1.7,12.2z M22.1,14.2L20,24.9l-0.6-11.8L22.1,14.2z M23.2,14.3l1.2-1.1L22,19.4l-0.1,0.3L23.2,14.3z"/>
    </g>
    <g>
      <path class="st1" d="M29.9,24.9V8.4h4.4c0.8,0,1.5,0.1,2.1,0.3s1.2,0.5,1.7,0.9s0.8,0.9,1,1.5s0.3,1.4,0.3,2.3
        c0,0.7-0.1,1.4-0.2,1.9c-0.1,0.5-0.3,1-0.7,1.4c-0.4,0.5-0.9,1-1.6,1.3c-0.7,0.3-1.5,0.5-2.6,0.5h-1.5v6.4
        C32.8,24.9,29.9,24.9,29.9,24.9z M32.8,10.6v5.6h1.4c0.6,0,1-0.1,1.4-0.2c0.3-0.1,0.6-0.3,0.7-0.6c0.2-0.2,0.2-0.5,0.3-0.9
        c0-0.3,0-0.7,0-1.1c0-0.4,0-0.8,0-1.1s-0.1-0.7-0.3-0.9c-0.2-0.3-0.4-0.5-0.7-0.6s-0.7-0.2-1.3-0.2C34.3,10.6,32.8,10.6,32.8,10.6z
        "/>
      <path class="st1" d="M41.4,12.3c0-0.7,0.1-1.2,0.4-1.8c0.3-0.5,0.7-0.9,1.1-1.3c0.5-0.3,1-0.6,1.6-0.7c0.6-0.2,1.2-0.3,1.8-0.3
        s1.2,0.1,1.8,0.3s1.1,0.4,1.6,0.7s0.8,0.8,1.1,1.3s0.4,1.1,0.4,1.8V21c0,0.7-0.1,1.3-0.4,1.8c-0.3,0.5-0.7,0.9-1.1,1.2
        c-0.5,0.3-1,0.6-1.6,0.8c-0.6,0.2-1.2,0.3-1.8,0.3s-1.2-0.1-1.8-0.3C44,24.6,43.4,24.3,43,24c-0.5-0.3-0.9-0.7-1.1-1.2
        c-0.3-0.5-0.4-1.1-0.4-1.8L41.4,12.3L41.4,12.3z M44.3,21c0,0.6,0.2,1,0.6,1.3c0.4,0.3,0.9,0.4,1.4,0.4s1-0.1,1.4-0.4
        s0.6-0.7,0.6-1.3v-8.7c0-0.6-0.2-1-0.6-1.3c-0.4-0.3-0.9-0.4-1.4-0.4s-1,0.1-1.4,0.4c-0.4,0.3-0.6,0.7-0.6,1.3V21z"/>
      <path class="st1" d="M63.2,13.2h-2.9v-0.5c0-0.5-0.2-1-0.5-1.4s-0.8-0.6-1.6-0.6c-0.4,0-0.7,0.1-1,0.2c-0.2,0.1-0.4,0.3-0.6,0.5
        c-0.2,0.2-0.3,0.4-0.3,0.7c-0.1,0.3-0.1,0.5-0.1,0.8s0,0.6,0,0.8s0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.4c0.2,0.1,0.5,0.2,0.9,0.4
        l2.2,0.7c0.6,0.2,1.2,0.4,1.6,0.7c0.4,0.3,0.7,0.6,0.9,0.9c0.2,0.4,0.4,0.8,0.4,1.3c0.1,0.5,0.1,1,0.1,1.6c0,0.7-0.1,1.3-0.3,1.9
        s-0.4,1.1-0.8,1.5c-0.4,0.4-0.9,0.8-1.6,1c-0.7,0.2-1.4,0.4-2.4,0.4c-0.7,0-1.4-0.1-2-0.3c-0.6-0.2-1.1-0.5-1.6-0.8
        c-0.4-0.4-0.8-0.8-1-1.2c-0.3-0.5-0.4-1-0.4-1.5v-0.9h2.9V21c0,0.4,0.2,0.8,0.5,1.2c0.3,0.3,0.8,0.5,1.6,0.5c0.5,0,0.9-0.1,1.2-0.2
        s0.5-0.3,0.6-0.5c0.2-0.2,0.2-0.5,0.3-0.8c0-0.3,0-0.6,0-1s0-0.8-0.1-1.1c0-0.3-0.1-0.5-0.2-0.7c-0.1-0.2-0.3-0.3-0.5-0.4
        s-0.5-0.2-0.9-0.3L56.5,17c-1.3-0.4-2.1-1-2.5-1.7s-0.6-1.5-0.6-2.6c0-0.6,0.1-1.2,0.3-1.8s0.5-1,0.9-1.4s0.9-0.7,1.5-1
        c0.6-0.2,1.4-0.4,2.2-0.4c0.7,0,1.4,0.1,2,0.3s1.1,0.5,1.6,0.9c0.9,0.7,1.3,1.6,1.3,2.5V13.2z"/>
      <path class="st1" d="M65.4,24.9V8.4h8.7v2.2h-5.8v4.8h5v2.2h-5v4.8h5.8v2.4L65.4,24.9L65.4,24.9z"/>
      <path class="st1" d="M76.1,24.9V8.4H79v16.4h-2.9V24.9z"/>
      <path class="st1" d="M81.8,24.9V8.4h4.3c1.7,0,3,0.4,3.8,1.1c0.9,0.7,1.3,1.8,1.3,3.1v7.7c0,1.5-0.5,2.7-1.4,3.4
        c-0.9,0.7-2.3,1.1-4,1.1h-4V24.9z M84.7,10.6v12H86c0.8,0,1.4-0.2,1.7-0.5c0.3-0.3,0.5-0.9,0.5-1.6v-7.9c0-0.6-0.2-1.1-0.5-1.5
        s-0.9-0.5-1.8-0.5H84.7z"/>
      <path class="st1" d="M93.8,12.3c0-0.7,0.1-1.2,0.4-1.8c0.3-0.5,0.7-0.9,1.1-1.3c0.5-0.3,1-0.6,1.6-0.7c0.6-0.2,1.2-0.3,1.8-0.3
        s1.2,0.1,1.8,0.3c0.6,0.2,1.1,0.4,1.6,0.7s0.8,0.8,1.1,1.3c0.3,0.5,0.4,1.1,0.4,1.8V21c0,0.7-0.1,1.3-0.4,1.8s-0.7,0.9-1.1,1.2
        c-0.5,0.3-1,0.6-1.6,0.8c-0.6,0.2-1.2,0.3-1.8,0.3s-1.2-0.1-1.8-0.3c-0.6-0.2-1.1-0.4-1.6-0.8c-0.5-0.3-0.9-0.7-1.1-1.2
        c-0.3-0.5-0.4-1.1-0.4-1.8V12.3z M96.8,21c0,0.6,0.2,1,0.6,1.3s0.9,0.4,1.4,0.4s1-0.1,1.4-0.4s0.6-0.7,0.6-1.3v-8.7
        c0-0.6-0.2-1-0.6-1.3s-0.9-0.4-1.4-0.4s-1,0.1-1.4,0.4c-0.4,0.3-0.6,0.7-0.6,1.3V21z"/>
      <path class="st1" d="M106.1,24.9V8.4h2.8l4.4,9.9h0.1V8.4h2.9v16.4h-2.7l-4.5-9.9H109v9.9h-2.9V24.9z"/>
    </g>
  </svg>

const StyledEosioLogoSmallSVG = styled(EosioLogoSmallSVG)`
  width: auto;
  height: 48px;
  display: block;
`;

const NavWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 40px;
  padding: 0 0 0 10px;
  :nth-child(1){
    flex: 1.5 0 0;
  }
  :nth-child(2){
    flex: 5 0 0;
    .last-item{
      padding-right: 0 !important;
      flex: none;
    }
    @media screen and (max-width: 1280px){
      flex: 4 0 0;
    }
    @media screen and (max-width: 1120px){
      .last-item{
        flex: 0 1 0;
      }
    }

  }
  :nth-child(3){
    flex: 0.4 1 0;
    padding: 0;
    @media screen and (max-width: 1280px){
      flex: 0.1 1 0;
    }
  }
  :nth-child(4){
    flex: 3 0 0;
    .px-3{
      flex: none;
      padding-right: 0 !important;
    }
    @media screen and (max-width: 1280px){
      flex: 2.7 0 0;
      .px-3{
        padding-right: 0 !important;
      }
    }
    @media screen and (max-width: 1120px){
      flex: 2 0 0;
      .px-3{
        flex: 0 1 0;
      }
    }

  }
  :nth-child(5){
    flex: 0.3 0 0;
    @media screen and (max-width: 1280px){
      padding: 0;
    }
  }
  :nth-child(6){
    flex: 0.6 0 0;
    padding: 0;
    .px-3{
      padding-right: 0 !important;
    }
    @media screen and (max-width: 1120px){
      padding-right: 10px;
      .px-3{
        padding-right: 1rem !important;
      }
    }

  }
`

const NavWrapperRow = styled(NavWrapper)`
  flex-direction: row;
  justify-content: space-around;
`

// const NavHead = styled.div`
//   font-size: 9px;
//   color: #bcbcbc;
//   padding-top: 1px;
// `

// const VerticalLine = styled.div`
//   height: 40px;
//   width: 1px;
//   margin: auto 0;
//   background-color: #e8ebf0;
// `

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const AppName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 4px;
  line-height: 1;
  color:#443f54;
  font-weight: normal;
  height: 40px;
  font-weight: 500;
  text-align: left;
  >div{
    &:first-child{
      font-size: 12px;
      margin-top: 0;
    }
    }
  }
`

const WrappedLink = styled(Link)`
  display: flex;
  color: inherit;
  margin-right: 2em;
  :hover{
    text-decoration: none;
    color: inherit;
  }
`
const NavStyled = styled(Nav)`
  padding-top: 10px;
`

const matchPath = (pathname, path) => {
  let splitArr = pathname.split("/");
  if(splitArr.find(el => el === path)){
    return true;
  }else{
    return false;
  }
}

const Header = (props) => {

  // let { router: { location: {pathname} }, panelSelect } = props;
  let { router: { location: {pathname} } } = props;

  return (
    <div className="Header">
        <NavWrapper>
          <WrappedLink to={`/`}>
            <Nav className="nav-items d-md-down-none" navbar>
              <LogoWrapper>
                <StyledEosioLogoSmallSVG/>
                <AppName>
                  <div>Explorer</div>
                </AppName>
              </LogoWrapper>
            </Nav>
          </WrappedLink>
        </NavWrapper>
        <NavWrapper>
          {/* <NavHead>INSPECT</NavHead> */}
          <NavStyled className="nav-items d-md-down-none" navbar>
            <NavItem className="px-3">
              <Link to={`/`} className={`nav-link ${pathname === `/` ? `active` : ``}`}>INFO</Link>
            </NavItem>
            <NavItem className="px-3">
              <Link to={`/block-list`} className={`nav-link ${pathname === `/block-list` || pathname === `/block-list/` || matchPath(pathname, 'block') ? `active` : ``}`}>BLOCKS</Link>
            </NavItem>
            <NavItem className="px-3">
              <Link to={`/transaction-list`} className={`nav-link ${pathname === `/transaction-list` || pathname === `/transaction-list/` || matchPath(pathname, 'transaction') ? `active` : ``}`}>TRANSACTIONS</Link>
            </NavItem>
            {/* <NavItem className="px-3">
              <Link to={`/tracing`} className={`nav-link ${pathname === `/tracing` || pathname === `/tracing/` || matchPath(pathname, 'tracing') ? `active` : ``}`}>TRACING</Link>
            </NavItem> */}
            <NavItem className="px-3">
              <Link to={`/action-list`} className={`nav-link ${pathname === `/action-list` || pathname === `/action-list/` || matchPath(pathname, 'action') ? `active` : ``}`}>ACTIONS</Link>
            </NavItem>
            <NavItem className="px-3">
              <Link to={`/account`} className={`nav-link ${pathname === `/account` || matchPath(pathname, 'account') ? `active` : ``}`}>ACCOUNTS</Link>
            </NavItem>
            <NavItem className="px-3 last-item">
              <Link to={`/contract`} className={`nav-link ${pathname === `/contract` || matchPath(pathname, 'contract') ? `active` : ``}`}>SMART CONTRACT</Link>
            </NavItem>
          </NavStyled>
        </NavWrapper>
        <NavWrapper></NavWrapper>
        {/* <NavWrapper>
          <NavHead>INTERACT</NavHead>
          <NavStyled className="nav-items d-md-down-none" navbar>
            <NavItem className="px-3">
              <Link onClick={()=>panelSelect("permission-list")} to={`/permission`} className={`nav-link ${pathname === `/permission` || pathname === `/permission/` ? `active` : ``}`}>MANAGE ACCOUNTS</Link>
            </NavItem>
            <NavItem className="px-3">
              <Link to={`/deploy`} className={`nav-link ${pathname === `/deploy` || pathname === `/deploy/` ? `active` : ``}`}>DEPLOY CONTRACTS</Link>
            </NavItem>
            <NavItem className="px-3">
              <Link to={`/push-action`} className={`nav-link ${pathname === `/push-action` || pathname === `/push-action/` ? `active` : ``}`}>PUSH ACTIONS</Link>
            </NavItem>
          </NavStyled>
        </NavWrapper> */}
        {/* <NavWrapperRow>
          <VerticalLine>&nbsp;</VerticalLine>
        </NavWrapperRow> */}
        <NavWrapperRow>
          <Nav className="nav-items d-md-down-none" navbar>
            <NavItem className="px-3">
              <ConnectionIndicator/>
            </NavItem>
          </Nav>
        </NavWrapperRow>
        <div style={{display:"none"}}>
          <Link to={`/page-not-found`} ></Link>
        </div>
    </div>
  )
}

export default connect(
  ({router}) => ({
    router
  }),
  {
    // panelSelect
  }

)(Header);

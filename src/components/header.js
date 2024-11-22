// import React from 'react'
// import styled from 'styled-components'
// import { MdMenu } from 'react-icons/md';
// consool.log(MenuIcon)
// function Header() {
//   return (


//     <Container>
//       <a>
//         <img src="/Assets/logo.svg" alt="" />
//       </a>
//       <Menu>
//           <p><a href="#">Model S</a></p>
//           <p><a href="#">Model Y</a></p>
//           <p><a href="#">Model 3</a></p>
//           <p><a href="#">Model X</a></p>
//       </Menu>

//       <RightMenu>
//           <a href="#">Shop</a>
//           <a href="#">Tesla Account</a>
//       </RightMenu>
//     </Container>
//   )
// }

// export default Header

// const Container = styled.div`
//   min-height: 60px;
//   position: fixed;
//   display: flex;
//   align-items: center;
//   padding: 0 20px;
//   top: 0;
//   left: 0;
//   right: 0;

// `
// const Menu = styled.div`
//     display: flex;
//     aligh-items: center;
//     justify-content: center;
//     flex: 1;

//   a {
//     font-weight: 600;
//     text-transform: uppercase;
//     padding: 0 20px;
//     flex-wrap: nowrap;

//   }

// `

// const RightMenu = styled.div`
//      a {
//       font-weight: 600;
//       text-transform: uppercase;
//       margin-right: 10px;
    
//   }

// `


// GPT-code

import React, { useState } from 'react';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/Assets/logo.svg" alt="Tesla Logo" />
      </a>
      <Menu>
        <p><a href="#">Model S</a></p>
        <p><a href="#">Model Y</a></p>
        <p><a href="#">Model 3</a></p>
        <p><a href="#">Model X</a></p>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 20px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MdMenu)`
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;
  font-size: 30px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 2;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s;

  li {
    padding: 15px 0;

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(MdClose)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

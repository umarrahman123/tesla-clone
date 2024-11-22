import React from 'react';
import styled from 'styled-components';



function Section({title, Discription, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    
    <Wrap bgImage={backgroundImg}>
     
      <ItemText>
        <h1 style={{ color: 'black' }}>{title}</h1>
        <p style={{ color: 'gray' }}>{Discription}</p>
      </ItemText>
      
      <ButtonContainer>
        <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          {rightBtnText && 



          
          <RightButton>
          {rightBtnText}
          </RightButton>

          }
          
        </ButtonGroup>
        <DownArrow src="/Assets/down-arrow.svg" />
      </ButtonContainer>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // background-image: url('{/Assets/model-s.jpg}');
  display: flex;
  flex-direction: column;
  justify-content: space-between; // vertical alignment
  align-items: center; // horizontal alignment
  overflow: hidden; // prevents overflow
  background-image: ${props => `url("/Assets/${props.bgImage}")`}
`;

const ItemText = styled.div`
  padding-top: 10vh;
  text-align: center;
   transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  /* Visible state */
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; // Prevents overflow issues from buttons
`;

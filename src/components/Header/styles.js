import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: white;
  z-index: 3;
  align-items: center;
  ${'' /* position: absolute; */}
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  margin-left: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 64em){
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${'' /* width: 200px; */}
  @media (max-width: 18em){
      width: 100px;
  }
  
`;

export const LogoTxt = styled.p`
  color: white;
  width: 100px;
  font-size: 18px;
  
`;


export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 30%;

  @media (max-width: 64em){
    position: fixed;
    top: ${props => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100%;
    ${'' /* height: ${props => `calc(100vh - ${props.theme.navHeight})`}; */}
    z-index: 50;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    
    transform: ${props => props.click ? 'translateY(15%)':'translateY(100%)'};
    ${'' /* transition: all 0.3s ease; */}
    flex-direction: column;
    justify-content: center;

  }

`;

export const menuRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const menuLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const userName = styled.p`
  font-size: 15px;
  color: #929292;
  margin-right: 55px;
`;

export const MenuBtn = styled.button`
  font-size: 14px;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0 1rem;
  color: #00000088;
  &.active {
    color: #484F72;
    font-weight: 700;
  }

  @media (max-width: 64em){
    margin: 1rem 0;
  }
  &:hover {
    color: #484F72;
    font-weight: 700;
  }
`;

export const HamburgerMenu = styled.span`
  width: ${props => props.click ? '2rem':'1.5rem'};
  height: 2px;
  background: rgba(255,153,0,1);

  position: absolute;
  left: 50%;
  transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)':'translateX(-50%) rotate(0)'};

  display: none;
  justify-content: center;
  align-item: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em){
    display: flex;
  }

  &::after, &::before{
    content:' ';
    width: ${props => props.click ? '1rem':'1.5rem'};
    height: 2px;
    right: ${props => props.click ? '-2px':'0'};
  background: rgba(255,153,0,1);
  position: absolute;
  }

  &::after{
    top: ${props => props.click ? '0.3rem':'0.5rem'};
    background: rgba(255,153,0,1);
    transform: ${props => props.click ? 'rotate(-40deg)':'rotate(0)'};
  }

  &::before{
    bottom: ${props => props.click ? '0.3rem':'0.5rem'};
    background: rgba(255,153,0,1);
    transform: ${props => props.click ? 'rotate(40deg)':'rotate(0)'};

  }
`;


export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const mainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background:rgba(0, 0, 0, 0.5);
`;

export const mainImg = styled.img`
  width: 100%;
  background: rgba(0,0,0,1);
  z-index: -1;
   @media (max-width: 64em){
    height: 500px;
   }
`;

export const centerImg = styled.img`
position: absolute;
  width: 25%;
  z-index: 1;
  transform: translate(-50%, -50%);
  top: 35%;
  left: 50%;
  @media (max-width: 64em){
    width: 200px;
   }
`;


export const textContainer = styled.div`

  position: absolute;
  z-index: 1;
  transform: translate(-50%, -50%);
  top: 70%;
  left: 50%;
  text-align: center;
  @media (max-width: 64em){
    top: 75%;
   }
`;

export const text1 = styled.p`
  font-size: 3.5rem;
  font-weight: bold;
  color: rgba(255,153,0,1);
  margin: 0px 5px;
  @media (max-width: 64em){
    font-size: 32px;
   }
`;

export const text2 = styled.p`
  font-size: 3.5rem;
  font-weight: bold;
  color: #fff;
  margin:0px 5px;
  @media (max-width: 64em){
    font-size: 32px;
    white-space: nowrap;
   }
`;

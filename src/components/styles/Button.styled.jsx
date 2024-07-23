import styled from 'styled-components';

const ButtonBg = styled.div`
  width: 36px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 25px;
  border: 1px solid #ffffff33;
  transition: border ease-in-out 0.5s, background ease-in-out 0.5s;

  &:hover {
    border: 1px solid #ffffff4d;
    background-color: #ffffff1a;
  }
`;

const ButtonStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonImg = styled.img`
  width: 16px;
  height: 16px;
`;

export { ButtonBg, ButtonStyled, ButtonImg };

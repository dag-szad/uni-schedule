import styled from 'styled-components';

const Overlay = styled.div`
  pointer-events: none;

  background-color: #000;
  position: fixed;
  z-index: 10;
  opacity: 0;
  inset: 0;

  transition: opacity 0.3s ease-in-out;
`;

const SideContainer = styled.div`
  pointer-events: auto;

  width: 80%;
  max-width: 500px;
  height: 100vh;

  padding: 100px 15px;
  margin: ${(props) => (props.$type === 'left' ? '0 auto 0 0' : '0 0 0 auto')};

  background-color: #ffffff1a;

  border-radius: ${(props) =>
    props.$type === 'left' ? '0 15px 15px 0' : '15px 0 0 15px;'};
  border: 1px solid #ffffff1a;
  transition: border ease-in-out 0.5s;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  &:hover {
    border: 1px solid #ffffff33;
  }
`;

export { Overlay, SideContainer };

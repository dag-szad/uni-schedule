import styled from 'styled-components';

const Container = styled.section`
  width: 90%;
  max-width: 500px;
  padding: 15px;
  margin: 0 auto 25px;
  background-color: #ffffff1a;

  border-radius: 15px;
  border: 1px solid #ffffff1a;
  transition: border ease-in-out 0.5s;

  &:hover {
    border: 1px solid #ffffff33;
  }
`;

export { Container };

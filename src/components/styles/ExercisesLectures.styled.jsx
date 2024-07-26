import styled from 'styled-components';

const Container = styled.div`
  display: ${(props) => (props.$active ? 'block' : 'none')};

  background-color: #ffffff1a;
  border: 1px solid #ffffff1a;
  border-radius: 15px;
  min-height: 5px;
  padding: 10px;

  transition: border-color ease-in-out 0.5s;

  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    border: 1px solid #ffffff33;
  }
`;

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 auto 10px;
`;

const SubTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff4d;
  margin: 0;
`;

const Lecturer = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #75a6eb;
  margin: 0;
`;

export { Title, SubTitle, Lecturer, Container, ContainerLayout };

import { TextButton } from '../styles/Button.styled';

const SaveButton = ({ saveHandler }) => {
  return <TextButton onClick={() => saveHandler()}>Zapisz grupę</TextButton>;
};

export { SaveButton };

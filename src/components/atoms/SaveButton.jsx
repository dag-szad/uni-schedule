import { TextButton } from '#components/styles/Button.styled';

const SaveButton = ({ saveHandler, type }) => {
  return (
    <TextButton onClick={() => saveHandler()}>
      {type === 'left' ? 'Zapisz semestr' : 'Zapisz grupę'}
    </TextButton>
  );
};

export { SaveButton };

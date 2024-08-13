import { useEffect } from 'react';

const PageTitle = ({ selectedTerm }) => {
  useEffect(() => {
    document.title = `Plan zajęć | ${selectedTerm} semestr`;
  }, [selectedTerm]);

  return null;
};

export { PageTitle };

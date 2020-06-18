import { useState } from 'react';

// SAVE ID
const useLocalState = (localItem) => {
  const [loc, setState] = useState(JSON.parse(sessionStorage.getItem(localItem)));

  const setLoc = (newItem) => {
    sessionStorage.setItem(localItem, newItem);
    setState(newItem);
  };
  return [loc, setLoc];
};

export default useLocalState;

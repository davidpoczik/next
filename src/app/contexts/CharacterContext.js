'use client'
import { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [selectedCharacterIds, setSelectedCharacterIds] = useState([]);

  const addCharacterId = (characterId) => {
    setSelectedCharacterIds((prevIds) => [...prevIds, characterId]);
  };

  const removeCharacterId = (characterId) => {
    setSelectedCharacterIds((prevIds) =>
      prevIds.filter((id) => id !== characterId)
    );
  };

  const clearCharacterIds = () => {
    setSelectedCharacterIds([]);
  };

  const isCharacterSelected = (characterId) => {
    return selectedCharacterIds.includes(characterId);
  };

  return (
    <CharacterContext.Provider
      value={{
        selectedCharacterIds,
        addCharacterId,
        removeCharacterId,
        clearCharacterIds,
        isCharacterSelected,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  return useContext(CharacterContext);
};
import React, { useState } from "react";

const useSymbolsCount = ({ maxNumber }: { maxNumber: number }) => {
  const [inputLength, setInputLength] = useState<number>(0);
  const [isTooManyCharacters, setIsTooManyCharacters] = useState(false);

  const getSymbolsCount = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValueLength = e.target.value.length;
    setInputLength(inputValueLength);
    if (inputValueLength >= maxNumber) {
      setIsTooManyCharacters(true);
    } else {
      setIsTooManyCharacters(false);
    }
  };

  return {
    getSymbolsCount,
    inputLength,
    isTooManyCharacters,
  };
};

export default useSymbolsCount;

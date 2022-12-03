import { useEffect, useState } from "react";

export type Dictionary = string[];

const fetchDictionary = async (): Promise<Dictionary> => {
  const data = await fetch(
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt"
  );
  const text = await data.text();
  return text.split("\r\n");
};

export const useDictionary = () => {
  const [dictionary, setDictionary] = useState<Dictionary>([]);
  useEffect(() => {
    fetchDictionary().then(setDictionary);
  }, []);

  return dictionary;
};

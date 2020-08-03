import { useState } from "react";

type UseInput = {
  value: string;
  onChangeText: (val: string) => void;
};

export const useInput = (initialValue: string): UseInput => {
  const [value, setValue] = useState(initialValue);
  return { value, onChangeText: (val: string) => setValue(val) };
};

import { useState } from "react";

export type UseInputResult = {
  value: string;
  onChangeText: (val: string) => void;
};

export const useInput = (initialValue: string): UseInputResult => {
  const [value, setValue] = useState(initialValue);
  return { value, onChangeText: (val: string) => setValue(val) };
};

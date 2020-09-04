import { useState, useEffect } from "react";

export const useDisplayTime = (unixTime: number): string => {
  const [dateValue, setDateValue] = useState<string>("");
  let date = new Date(unixTime);
  let diff = new Date().getTime() - date.getTime();
  let d = new Date(diff);

  useEffect(() => {
    if (d.getUTCFullYear() - 1970) {
      setDateValue(d.getUTCFullYear() - 1970 + "年前");
      return;
    } else if (d.getUTCMonth()) {
      setDateValue(d.getUTCMonth() + "ヶ月前");
      return;
    } else if (d.getUTCDate() - 1) {
      setDateValue(d.getUTCDate() - 1 + "日前");
      return;
    } else if (d.getUTCHours()) {
      setDateValue(d.getUTCHours() + "時間前");
      return;
    } else if (d.getUTCMinutes()) {
      setDateValue(d.getUTCMinutes() + "分前");
      return;
    } else {
      setDateValue(d.getUTCSeconds() + "秒前");
      return;
    }
  }, [d]);

  return dateValue;
};

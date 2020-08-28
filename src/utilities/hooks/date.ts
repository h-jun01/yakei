import { useState, useEffect } from "react";

export const useDisplayTime = (unixTime: Date) => {
  const [dateValue, setDateValue] = useState("");
  let date = new Date(unixTime);
  let diff = new Date().getTime() - date.getTime();
  let d = new Date(diff);

  useEffect(() => {
    if (d.getUTCFullYear() - 1970) {
      setDateValue(d.getUTCFullYear() - 1970 + "年前");
    } else if (d.getUTCMonth()) {
      setDateValue(d.getUTCMonth() + "ヶ月前");
    } else if (d.getUTCDate() - 1) {
      setDateValue(d.getUTCDate() - 1 + "日前");
    } else if (d.getUTCHours()) {
      setDateValue(d.getUTCHours() + "時間前");
    } else if (d.getUTCMinutes()) {
      setDateValue(d.getUTCMinutes() + "分前");
    } else {
      setDateValue(d.getUTCSeconds() + "秒前");
    }
  }, [d]);

  return dateValue;
};

export const sendPushFavoriteNotification = async (token: string) => {
  const message = {
    to: token,
    sound: "default",
    title: "Original Title",
    body: "And here is the body!",
    data: { data: "goes here" },
    _displayInForeground: true,
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};

export const sendPushCommentNotification = async (token: string) => {
  const message = {
    to: token,
    sound: "default",
    title: "Original Title",
    body: "And here is the body!",
    data: { data: "goes here" },
    _displayInForeground: true,
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};

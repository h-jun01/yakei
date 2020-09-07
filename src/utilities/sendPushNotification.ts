export const sendPushFavoriteNotification = async (
  token: string,
  opponentName: string
) => {
  const message = {
    to: token,
    sound: "default",
    body: `${opponentName}さんがあなたの投稿にいいねしました。`,
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

export const sendPushCommentNotification = async (
  token: string,
  opponentName: string,
  commentValue: string
) => {
  const message = {
    to: token,
    sound: "default",
    body: `あなたの投稿にコメントされました。${"\n"}${opponentName}：${commentValue}`,
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

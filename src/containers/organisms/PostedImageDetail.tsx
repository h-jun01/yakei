import React, { FC } from "react";
import PostedImageDetail from "../../components/organisms/PostedImageDetail";
import { photoFireStore } from "../../firebase/photoFireStore";
import { accountFireStore } from "../../firebase/accountFireStore";

type Props = {
  route: any;
};

const PostedImageDetailContainer: FC<Props> = ({ route }) => {
  const {
    photo_id,
    uid,
    createTime,
    url,
    favoriteNumber,
    latitude,
    longitude,
  } = route.params;

  const [postUserName, setPostUserName] = React.useState<string>("");

  //   React.useEffect(() => {
  //     photoFireStore.getPostDocument(photo_id).then(async (res) => {
  //       await accountFireStore
  //         .getUserName(res)
  //         .then((res: React.SetStateAction<string>) => {
  //           res && setPostUserName(res);
  //         })
  //         .catch(() => {
  //           setPostUserName("Anonymous");
  //         });
  //     });
  //   }, []);

  return (
    <PostedImageDetail
      photo_id={photo_id}
      uid={uid}
      createTime={createTime}
      url={url}
      favoriteNumber={favoriteNumber}
      latitude={latitude}
      longitude={longitude}
    />
  );
};

export default PostedImageDetailContainer;

export default function PostHeader(props) {
  const { userProfileImage, user } = props.data;
  return (
    <div class="post-header">
      <div>
        <img src={userProfileImage} alt="" />
        <strong>{user}</strong>
      </div>
      <img class="more" src="./img/more.svg" alt="" />
    </div>
  );
}

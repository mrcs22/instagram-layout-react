export default function Interactions(props) {
  const { userWhoLikedImage, userWhoLiked, likesNumber } = props.data;
  return (
    <div class="interactions">
      <img src={userWhoLikedImage} alt="" />
      <span>
        Curtido por <strong>{userWhoLiked}</strong> e
        <strong>outras {likesNumber} pessoas</strong>
      </span>
    </div>
  );
}

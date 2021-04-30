export default function Comment(props) {
  const { userWhoCommented, comment } = props.data;
  return (
    <div>
      <p class="comment">
        <strong>{userWhoCommented}</strong>
        {comment}
      </p>
      <ion-icon name="heart-outline"></ion-icon>
    </div>
  );
}

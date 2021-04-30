export default function Profile(props) {
  return (
    <div class="side-profile">
      <div>
        <img src={props.image} alt="" />
        <div>
          <strong>{props.user}</strong>
          <p>{props.userName}</p>
        </div>
      </div>
      <a href="#">mudar</a>
    </div>
  );
}

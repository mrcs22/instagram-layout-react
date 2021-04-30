export default function Storie(props) {
  return (
    <div class="storie">
      <div>
        <img src={props.storieImage} alt="" />
      </div>
      <p>{props.user}</p>
    </div>
  );
}

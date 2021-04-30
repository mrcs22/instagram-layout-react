export default function SuggestedProfile(props) {
  return (
    <div class="suggested-profile">
      <div>
        <img src={props.image} alt="" />
        <div>
          <strong>{props.name}</strong>
          <p>{props.subtitle}</p>
        </div>
      </div>
      <a href="#">seguir</a>
    </div>
  );
}

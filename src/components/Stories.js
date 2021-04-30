import fakeApi from "../fakeApi";

const stories = fakeApi.GET("www.my-fake-something/stories.com");

export default function Stories() {
  return (
    <div class="stories">
      {stories.map((storie) => (
        <Storie storieImage={storie.storieImage} user={storie.user} />
      ))}

      <ion-icon id="next" name="chevron-forward-circle-sharp"></ion-icon>
    </div>
  );
}

function Storie(props) {
  return (
    <div class="storie">
      <div>
        <img src={props.storieImage} alt="" />
      </div>
      <p>{props.user}</p>
    </div>
  );
}

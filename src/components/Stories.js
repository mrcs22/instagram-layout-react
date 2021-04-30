import Storie from "./Storie";
import fakeHttpClient from "../fakeHttpClient";

const stories = fakeHttpClient.GET("www.my-fake-something/stories.com");

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

import Stories from "./Stories";
import Post from "./Post";

import fakeApi from "../fakeApi";
const posts = fakeApi.GET("fake-url");

export default function Container() {
  return (
    <div class="container">
      <div class="content">
        <Stories />

        {posts.map((post) => (
          <Post postData={post} />
        ))}
      </div>
    </div>
  );
}

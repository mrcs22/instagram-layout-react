import Stories from "./Stories";
import Post from "./Post";

import fakeHttpClient from "../fakeHttpClient";
const posts = fakeHttpClient.GET("www.my-fake-something/posts.com");

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

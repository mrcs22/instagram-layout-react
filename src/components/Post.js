import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import Interactions from "./PostInteractions";
import CommentOutput from "./PostCommentOutput";
import CommentInput from "./PostCommentInput";

export default function Post(props) {
  const { postContent, postInteractions, commentsOutput } = props.postData;
  const { postMedia } = postContent;

  return (
    <div class="post">
      <PostHeader data={postContent} />

      {postMedia.indexOf("img") > 0 ? (
        <img src={postMedia} alt="" />
      ) : (
        <video id="video-1" src={postMedia} alt="" autoPlay muted />
      )}

      <PostFooter />
      <Interactions data={postInteractions} />
      <CommentOutput data={commentsOutput} />
      <CommentInput />
    </div>
  );
}

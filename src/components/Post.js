import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import Interactions from "./PostInteractions";
import CommentOutput from "./PostCommentOutput";
import CommentInput from "./PostCommentInput";

export default function Post(props) {
  const { postContent, postInteractions, commentsOutput } = props.postData;

  return (
    <div class="post">
      <PostHeader data={postContent} />
      <img src={postContent.postImage} alt="" />
      <PostFooter />
      <Interactions data={postInteractions} />
      <CommentOutput data={commentsOutput} />
      <CommentInput />
    </div>
  );
}

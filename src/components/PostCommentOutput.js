import Comment from "./PostComment";

export default function CommentOutput(props) {
  const { commentsNumber, comments } = props.data;
  return (
    <div class="comment-output">
      <span class="see-more">Ver todos os {commentsNumber} comentários</span>

      {comments.map((comment) => (
        <Comment data={comment} />
      ))}
    </div>
  );
}

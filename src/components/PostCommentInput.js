export default function CommentInput() {
  return (
    <div class="comment-input">
      <input
        type="text"
        name="comment"
        placeholder="Adicione um comentário..."
        id="new-comment"
      />
      <button>Publicar</button>
    </div>
  );
}

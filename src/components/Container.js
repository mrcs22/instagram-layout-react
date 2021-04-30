import Stories from "./Stories";
import Post from "./Post";

export default function Container() {
  return (
    <div class="container">
      <div class="content">
        <Stories />
        <Post postData={postData} />
        <div class="post">
          <div class="post-header">
            <div>
              <img src="./img/meowed.png" alt="" />
              <strong>meowed</strong>
            </div>
            <img class="more" src="./img/more.svg" alt="" />
          </div>
          <video id="video-1" src="./video/discretos.mp4" autoplay muted>
            Seu navegador não suporta esse tipo de vídeo
          </video>
          <div class="post-footer">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <img class="chat" src="./img/chat.svg" alt="" />
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <img class="bookmark" src="/img/bookmark.svg" alt="" />
          </div>
          <div class="interactions">
            <img src="./img/9gag.png" alt="" />
            <span>
              Curtido por <strong>9gag</strong> e
              <strong>outras 207.289 pessoas</strong>
            </span>
          </div>
          <div class="comment-output">
            <span class="see-more">Ver todos os 302 comentários</span>
            <div>
              <p class="comment">
                <strong>moraes_marcus_21</strong>
                <a href="#">@respondeai</a> 😂😂😂😂
              </p>
              <ion-icon name="heart-outline"></ion-icon>
            </div>
            <div>
              <p class="comment">
                {" "}
                <strong>respondeai</strong> Kkkkk acontece
              </p>
              <ion-icon name="heart-outline"></ion-icon>
            </div>
          </div>
          <div class="comment-input">
            <input
              type="text"
              name="comment"
              placeholder="Adicione um comentário..."
              id="new-comment"
            />
            <button>Publicar</button>
          </div>
        </div>

        <div class="post">
          <div class="post-header">
            <div>
              <img src="./img/barked.png" alt="" />
              <strong>barked</strong>
            </div>
            <img class="more" src="./img/more.svg" alt="" />
          </div>
          <img src="./img/dog.jpg" alt="" />
          <div class="post-footer">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <img class="chat" src="./img/chat.svg" alt="" />
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <img class="bookmark" src="/img/bookmark.svg" alt="" />
          </div>
          <div class="interactions">
            <img src="./img/adorableanimals.png" alt="" />
            <span>
              Curtido por <strong>adorable_animals</strong> e outras
              <strong>99.159 pessoas</strong>
            </span>
          </div>
          <div class="comment-output">
            <span class="see-more">Ver todos os 302 comentários</span>
            <div>
              <p class="comment">
                <strong>moraes_marcus_21</strong>
                <a href="#">@respondeai</a> 😂😂😂😂
              </p>
              <ion-icon name="heart-outline"></ion-icon>
            </div>
            <div>
              <p class="comment">
                {" "}
                <strong>respondeai</strong> iti S2
              </p>
              <ion-icon name="heart-outline"></ion-icon>
            </div>
          </div>
          <div class="comment-input">
            <input
              type="text"
              name="comment"
              placeholder="Adicione um comentário..."
              id="new-comment"
            />
            <button>Publicar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const postData = {
  postContent: {
    userProfileImage: "./img/meowed.png",
    user: "meowed",
    postImage: "./img/gato-telefone.png",
  },
  postInteractions: {
    userWhoLikedImage: "./img/respondeai.png",
    userWhoLiked: "respondeai",
    likesNumber: 101.523,
  },
  commentsOutput: {
    commentsNumber: 302,
    comments: [
      { userWhoCommented: "moraes_marcus_21", comment: "@respondeai 😂😂😂😂" },
      { userWhoCommented: "respondeai", comment: "Kkkkk" },
    ],
  },
};
function PostHeader(props) {
  const { userProfileImage, user } = props.data;
  return (
    <div class="post-header">
      <div>
        <img src={userProfileImage} alt="" />
        <strong>{user}</strong>
      </div>
      <img class="more" src="./img/more.svg" alt="" />
    </div>
  );
}

function PostFooter() {
  return (
    <div class="post-footer">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
        <img class="chat" src="./img/chat.svg" alt="" />
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <img class="bookmark" src="/img/bookmark.svg" alt="" />
    </div>
  );
}

function Interactions(props) {
  const { userWhoLikedImage, userWhoLiked, likesNumber } = props.data;
  return (
    <div class="interactions">
      <img src={userWhoLikedImage} alt="" />
      <span>
        Curtido por <strong>{userWhoLiked}</strong> e
        <strong>outras {likesNumber} pessoas</strong>
      </span>
    </div>
  );
}

function CommentOutput(props) {
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

function Comment(props) {
  const { userWhoCommented, comment } = props.data;
  return (
    <div>
      <p class="comment">
        <strong>{userWhoCommented}</strong>
        {comment}
      </p>
      <ion-icon name="heart-outline"></ion-icon>
    </div>
  );
}

function CommentInput() {
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

/* 

 <div class="post">
      <div class="post-header">
        <div>
          <img src="./img/meowed.png" alt="" />
          <strong>meowed</strong>
        </div>
        <img class="more" src="./img/more.svg" alt="" />
      </div>
      <img src="./img/gato-telefone.png" alt="" />
      <div class="post-footer">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <img class="chat" src="./img/chat.svg" alt="" />
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <img class="bookmark" src="/img/bookmark.svg" alt="" />
      </div>
      <div class="interactions">
        <img src="./img/respondeai.png" alt="" />
        <span>
          Curtido por <strong>respondeai</strong> e
          <strong>outras 101.523 pessoas</strong>
        </span>
      </div>

      <div class="comment-output">
        <span class="see-more">Ver todos os 302 comentários</span>
        <div>
          <p class="comment">
            <strong>moraes_marcus_21</strong>
            <a href="#">@respondeai</a> 😂😂😂😂
          </p>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div>
          <p class="comment">
            {" "}
            <strong>respondeai</strong> Kkkkk{" "}
          </p>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
      </div>
      <div class="comment-input">
        <input
          type="text"
          name="comment"
          placeholder="Adicione um comentário..."
          id="new-comment"
        />
        <button>Publicar</button>
      </div>
    </div>
 

*/

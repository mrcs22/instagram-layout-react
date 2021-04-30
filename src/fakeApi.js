const fakeApi = {
  GET: (fakeUrl) => {
    const requestedData = fakeUrl.split("/")[1].replace(".com", "");

    return data[`${requestedData}`];
  },
};

const data = {
  stories: [
    { storieImage: "./img/9gag.png", user: "9gag" },
    { storieImage: "./img/barked.png", user: "barked" },
    { storieImage: "img/filomoderna.png", user: "filomoderna" },
    { storieImage: "img/memeriagourmet.png", user: "memeriagourmet" },
    { storieImage: "img/meowed.png", user: "meowed" },
    {
      storieImage: "img/nathanwpylestrangeplanet.png",
      user: "nathanwpylestrangeplanet",
    },
    { storieImage: "img/respondeai.png", user: "respondeai" },
    { storieImage: "img/wawawiwacomicsa.png", user: "wawawiwacomicsa" },
  ],

  posts: [
    {
      postContent: {
        userProfileImage: "./img/meowed.png",
        user: "meowed",
        postMedia: "./img/gato-telefone.png",
      },
      postInteractions: {
        userWhoLikedImage: "./img/respondeai.png",
        userWhoLiked: "respondeai",
        likesNumber: 101.523,
      },
      commentsOutput: {
        commentsNumber: 302,
        comments: [
          {
            userWhoCommented: "moraes_marcus_21",
            comment: "@respondeai 😂😂😂😂",
          },
          { userWhoCommented: "respondeai", comment: "Kkkkk" },
        ],
      },
    },

    {
      postContent: {
        userProfileImage: "./img/meowed.png",
        user: "meowed",
        postMedia: "./video/discretos.mp4",
      },
      postInteractions: {
        userWhoLikedImage: "./img/9gag.png",
        userWhoLiked: "9gag",
        likesNumber: 207.289,
      },
      commentsOutput: {
        commentsNumber: 302,
        comments: [
          {
            userWhoCommented: "moraes_marcus_21",
            comment: "@respondeai 😂😂",
          },
          { userWhoCommented: "respondeai", comment: "Kkkkk acontece" },
        ],
      },
    },

    {
      postContent: {
        userProfileImage: "./img/barked.png",
        user: "barked",
        postMedia: "./img/dog.jpg",
      },
      postInteractions: {
        userWhoLikedImage: "./img/adorableanimals.png",
        userWhoLiked: "adorable_animals",
        likesNumber: 99.159,
      },
      commentsOutput: {
        commentsNumber: 302,
        comments: [
          {
            userWhoCommented: "moraes_marcus_21",
            comment: "@respondeai 😂😂",
          },
          { userWhoCommented: "respondeai", comment: "iti S2" },
        ],
      },
    },
  ],
};

export default fakeApi;

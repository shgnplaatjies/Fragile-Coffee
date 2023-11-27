
const boardShape = {
  usersList: PropTypes.objectOf({
    userId: PropTypes.number,
    username: PropTypes.string,
    userLikes: PropTypes.number,
  }),
  categoriesList: PropTypes.objectOf({
    categoryTitle: PropTypes.string,
    categoryId: PropTypes.number,
  }),
  Id: PropTypes.number,
  boardTitle: PropTypes.string,
  cards: PropTypes.objectOf({
    cardList: PropTypes.objectOf({
      userId: PropTypes.number,
      messageText: PropTypes.string,
      likesArray: PropTypes.objectOf({
        userId: PropTypes.number,
        likeCount: PropTypes.number,
      }),
      isEditable: PropTypes.bool,
    }),
  }),
};

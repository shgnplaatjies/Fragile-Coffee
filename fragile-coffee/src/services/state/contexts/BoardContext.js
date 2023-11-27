/* eslint-disable no-unused-vars */
import React, { createContext, useState, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { MaskedDefaultAppUser, MaskedDefaultAppUserShape } from './MaskedAppUserContext';

export const DefaultBoardUserShape = {
  MaskedDefaultAppUser,
  likesLeft: PropTypes.number,
};

export const DefaultCategoryShape = {
  categoryId: PropTypes.number,
  categoryTitle: PropTypes.string,
};

export const DefaultCardLikesShape = {
  MaskedDefaultAppUserShape,
  likeCount: PropTypes.number,
};

export const DefaultCardShape = {
  cardId: PropTypes.number,
  authorId: PropTypes.string,
  category: PropTypes.object,
  isEditable: PropTypes.bool,
  messageText: PropTypes.string,
  likesList: { DefaultCardLikesShape },
};

export const DefaultBoardShape = {
  boardId: PropTypes.number,
  author: MaskedDefaultAppUserShape,
  boardTitle: PropTypes.string,
  userList: { DefaultBoardUserShape },
  cardList: { DefaultCardShape },
  categoriesList: { DefaultCategoryShape },
};

export const DefaultBoardUser = {
  MaskedDefaultAppUser,
  likesLeft: 0,
};

export const DefaultCardLikes = {
  DefaultBoardUser,
  likeCount: 0,
};

export const DefaultCategory = {
  categoryId: '',
  categoryTitle: '',
};

export const DefaultCard = {
  cardId: '',
  author: '',
  category: '',
  isEditable: false,
  messageText: '',
  likesList: { },
};

export const DefaultBoard = {
  boardId: '',
  author: '',
  boardTitle: '',
  userList: { },
  cardList: { },
  categoryList: { },
};

//________________________________________________________________________________________________________________________________________________________________________________________________
// Board Context
//________________________________________________________________________________________________________________________________________________________________________________________________

const BoardContext = createContext( { DefaultBoardShape });
const CreateBoardContext = createContext( ({ userId, title }) => ({ ...DefaultBoardShape }));
const UpdateBoardContext = createContext( values => ({ ...DefaultBoardShape }));
const UpdateBoardTitleContext = createContext( ({ title }) => ({ ...DefaultBoardShape }));
// const UpdateBoardCategoryListContext = createContext( ({ categoryList }) => ({ ...DefaultBoardShape }));
const UpdateBoardUserListContext = createContext( ({ userList }) => ({ ...DefaultBoardShape }));
const UpdateBoardCardListContext = createContext( ({ cardList }) => ({ ...DefaultBoardShape }));
const ResetBoardContext = createContext( { ...DefaultBoardShape } );

export const BoardContextProvider = ({ children }) => {
  const [ board, setBoard ] = useState({});

  const createBoard = useCallback( (userId, title) => {
    setBoard({
      ...DefaultBoard,
      userId: userId,
      title: title,
    });
  },[]);

  const updateBoardTitle = useCallback( title => {
    if (board) {
      setBoard(board => ({
        ...board,
        title: title, 
      }));
    }
  }, [ board ]);

  const updateBoardCategoryList = useCallback( categoryList => {
    if (board) {
      setBoard(board => ({
        ...board,
        categoryList: categoryList,
      }));
    }
  },[ board ]);

  const updateBoardUserList = useCallback( userList => {
    if (board) {
      setBoard(board => ({
        ...board,
        userList: userList,
      }));
    }
  },[ board ]);

  const updateBoardCardList = useCallback( cardList => {
    if (board) {
      setBoard(board => ({
        ...board,
        cardList: cardList,
      }));
    }
  },[ board ]);

  const updateBoard = useCallback( values => {
    if (board) {
      setBoard( board => ({
        ...board,
        ...values,
      }));
    }
  }, [ board ]);

  const resetBoard = useCallback( () => {
    if (board) {
      setBoard(board => ({
        ...DefaultBoard,
        boardID: board.boardID,
        author: board.author,
      }));
    }
  },[ board ]);

  return (
    <BoardContext.Provider value={board} >
      <CreateBoardContext.Provider value={createBoard}>
        <UpdateBoardContext.Provider value={updateBoard}>
          <UpdateBoardTitleContext.Provider value={updateBoardTitle}>
            <UpdateBoardCategoryListContext.Provider value={updateBoardCategoryList}>
              <UpdateBoardCardListContext.Provider value={updateBoardCardList}>
                <UpdateBoardUserListContext.Provider value={updateBoardUserList}>
                  <ResetBoardContext.Provider value={resetBoard}>
                    {children}
                  </ResetBoardContext.Provider>
                </UpdateBoardUserListContext.Provider>
              </UpdateBoardCardListContext.Provider>
            </UpdateBoardCategoryListContext.Provider>
          </UpdateBoardTitleContext.Provider>
        </UpdateBoardContext.Provider>
      </CreateBoardContext.Provider>
    </BoardContext.Provider>
  );
};
//________________________________________________________________________________________________________________________________________________________________________________________________
// Card Context Providers
//________________________________________________________________________________________________________________________________________________________________________________________________

const CardContext = createContext( DefaultCardShape );
const AddCardContext = createContext((userId, boardID) => ({ ...DefaultBoardShape.cardList.DefaultCardShape }));
const RemoveCardContext = createContext( (cardID) => {} );
const UpdateCardMessageContext = createContext( (cardID, message) => ({ ...DefaultBoardShape.cardList.DefaultCardShape }));

export const CardContextProvider = ({ children }) => {
  const [ card, setCard ] = useState( { DefaultCard } );
  const board = useContext(BoardContext);

  const addCard = useCallback((userId, boardId) => {
    if (board) {
      setCard({
        ...board,
        userId: userId,
        boardId: boardId,
      });
    }
  },[ board ]);

  const removeCard = useCallback(cardId => {
    if (board && card) {
      setCard({
        ...board,
        cardId: cardId,
      });
    }
  },[ board, card ]);

  const updateCardMessage = useCallback((cardId, message) => {
    if (board && card) {
      setCard({
        ...board,
        cardId: cardId,
        message: message,
      });
    }
  },[ board, card ]);

  return (
    <CardContext.Provider value={card}>
      <AddCardContext.Provider value={addCard}>
        <RemoveCardContext.Provider value={removeCard}>
          <UpdateCardMessageContext.Provider value={updateCardMessage}>
            {children}
          </UpdateCardMessageContext.Provider>
        </RemoveCardContext.Provider>
      </AddCardContext.Provider>
    </CardContext.Provider>
  );
};

//________________________________________________________________________________________________________________________________________________________________________________________________
// Card Likes Context Providers
//________________________________________________________________________________________________________________________________________________________________________________________________

const CardLikesContext = createContext( DefaultCardLikesShape );
const RemoveCardLikesContext = createContext( ({ userId, cardID }) => ({ ...DefaultBoardShape.cardList.DefaultCardShape.likesList.DefaultCardLikesShape }));
const AddCardLikesContext = createContext( ({ userId, cardID }) => ({ ...DefaultBoardShape.cardList.DefaultCardShape.likesList.DefaultCardLikesShape }));

export const CardLikesContextProvider = ({ children }) => {
  const [ cardLikes, setCardLikes ] = useState( DefaultCardLikes );

  const removeCardLikes = useCallback(values => {
  },[]);
  const addCardLikes = useCallback(values => {
  },[]);

  return (
    <CardLikesContext.Provider value={cardLikes}>
      <RemoveCardLikesContext.Provider value={removeCardLikes}>
        <AddCardLikesContext.Provider value={addCardLikes}>
          {children}
        </AddCardLikesContext.Provider>
      </RemoveCardLikesContext.Provider>
    </CardLikesContext.Provider>
  );
};

//________________________________________________________________________________________________________________________________________________________________________________________________
// Category List Context Providers
//________________________________________________________________________________________________________________________________________________________________________________________________
const CategoryListContext = createContext( DefaultCategoryShape );
const AddBoardCategoryContext = createContext( ({ title }) => ({ ...DefaultBoardShape.categoriesList.DefaultCategoryShape }));
const RemoveBoardCategoryContext = createContext( ({ categoryId }) => ({ ...DefaultBoardShape.categoriesList.DefaultCategoryShape }));
const UpdateBoardCategoryListContext = createContext( ({ title }) => ({ ...DefaultBoardShape.categoriesList.DefaultCategoryShape }));

const CategoryListContextProvider = ({ children }) => {
  const [ categoryList, setCategoryList ] = useState({});

  const addBoardCategory = useCallback(values => {
  },[]);

  const removeBoardCategory = useCallback(values => {
  },[]);

  const updateBoardCategory = useCallback(values => {
  },[]);

  return (
    <CategoryListContext value={categoryList}>
      <AddBoardCategoryContext value={addBoardCategory}>
        <RemoveBoardCategoryContext value={removeBoardCategory}>
          <UpdateBoardCategoryListContext value={updateBoardCategory}>
            {children}
          </UpdateBoardCategoryListContext>
        </RemoveBoardCategoryContext>
      </AddBoardCategoryContext>
    </CategoryListContext>
  );
};

//________________________________________________________________________________________________________________________________________________________________________________________________
// Board User List Context Providers
//________________________________________________________________________________________________________________________________________________________________________________________________
const BoardUserListContext = createContext( DefaultBoardUserShape);
const AddBoardUserContext = createContext( ({ userId }) => ({ ...DefaultBoardShape.userList.DefaultBoardUserShape }));
const RemoveBoardUserContext = createContext( ({ userId }) => ({ ...DefaultBoardShape.userList.DefaultBoardUserShape }));

export const BoardUserListContextProvider = ({ children }) => {
  const [ boardUserList, setBoardUserList ] = useState( {} );

  const addBoardUser = useCallback(values => {
  },[]);

  const removeBoardUser = useCallback(values => {
  },[]);

  return (
    <BoardUserListContext.Provider value={boardUserList}>
      <AddBoardUserContext.Provider value={addBoardUser}>
        <RemoveBoardUserContext.Provider value={removeBoardUser}>
          {children}
        </RemoveBoardUserContext.Provider>
      </AddBoardUserContext.Provider>
    </BoardUserListContext.Provider>
  );
};

const BoardUserLikesContext = createContext( DefaultBoardUserShape);
const AddBoardUserLikesContext = createContext( ({ userId }) => ({ ...DefaultBoardShape.userList.DefaultBoardUserShape }));
const RemoveBoardUserLikesContext = createContext( ({ userId }) => ({ ...DefaultBoardShape.userList.DefaultBoardUserShape }));

export const BoardUserLikesContextProvider = ({ children }) => {
  const [ boardUserLikes, setBoardUserLikes ] = useState( {} );

  const addBoardUserLikes = useCallback(values => {
  },[]);

  const removeBoardUserLikes = useCallback(values => {
  },[]);

  return (
    <BoardUserLikesContext.Provider value={boardUserLikes}>
      <AddBoardUserLikesContext.Provider value={addBoardUserLikes}>
        <RemoveBoardUserLikesContext.Provider value={removeBoardUserLikes}>
          {children}
        </RemoveBoardUserLikesContext.Provider>
      </AddBoardUserLikesContext.Provider>
    </BoardUserLikesContext.Provider>
  );
};

BoardContextProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element,
  ),
};

CardContextProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element,
  ),
};

CardLikesContextProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element,
  ),
};

CategoryListContextProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element,
  ),
};

BoardUserListContextProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element,
  ),
};

BoardUserLikesContextProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element,
  ),
};

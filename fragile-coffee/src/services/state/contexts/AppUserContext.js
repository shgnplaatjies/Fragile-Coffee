import React, { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import random from 'random';

export const DefaultAppUserShape = {
  userId: PropTypes.number,
  userName: PropTypes.string,
};

export const DefaultAppUser = {
  userId: '',
  userName: '',
};

export const AppUserContext = createContext( DefaultAppUserShape );

export const CreateAppUserContext = createContext();

export const UpdateAppUserContext = createContext(( { userId, userName } ) => ({ userId, userName } ));

export const ResetAppUserContext = createContext( DefaultAppUserShape );

export const AppUserContextProvider = ({ children }) => {
  const [ user, setUser ] = useState(DefaultAppUserShape);

  const createUser = useCallback(values => {
    const { userName } = values;
    const id = random.integer(0, 100000);

    setUser([
      ...user,
      id,
      userName,
    ]);
  } ,[ user ]);

  const updateUser = useCallback(values => {
    const { userName } = values;
    setUser([
      ...values,
      userName,
    ]);
  } ,[]);

  const resetUser = useCallback(() => {
    setUser(DefaultAppUserShape);
  } ,[]);

  return (
    <AppUserContext.Provider value={user} >
      <UpdateAppUserContext.Provider value={updateUser}>
        <CreateAppUserContext.Provider value={createUser}>
          <ResetAppUserContext.Provider value={resetUser}>
            {children}
          </ResetAppUserContext.Provider>
        </CreateAppUserContext.Provider>
      </UpdateAppUserContext.Provider>
    </AppUserContext.Provider>
  );
};

AppUserContextProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element,
  ),
};

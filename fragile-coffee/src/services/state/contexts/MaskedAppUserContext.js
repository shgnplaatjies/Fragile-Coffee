import React, { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import random from 'random';

export const DefaultMaskedAppUserShape = {
  userId: PropTypes.number,
  userName: PropTypes.string,
};

export const DefaultMaskedAppUser = {
  userId: '',
  userName: '',
};

export const MaskedAppUserContext = createContext( DefaultMaskedAppUserShape );

export const CreateMaskedAppUserContext = createContext();

export const UpdateMaskedAppUserContext = createContext(( { userId, userName } ) => ({ userId, userName } ));

export const ResetMaskedAppUserContext = createContext( DefaultMaskedAppUserShape );

export const MaskedAppUserContextProvider = ({ children }) => {
  const [ user, setUser ] = useState(DefaultMaskedAppUserShape);

  const createUser = useCallback(values => {
    const { userName } = values;
    setUser([
      ...user,
      random.integer(0, 1000),
      userName,
    ]);
  }, [ user ]);

  const updateUser = useCallback(values => {
    const { userName } = values;
    setUser([
      ...values,
      userName,
    ]);
  }, []);

  const resetUser = useCallback(() => {
    setUser(DefaultMaskedAppUserShape);
  }, []);

  return (
    <MaskedAppUserContext.Provider value={user} >
      <UpdateMaskedAppUserContext.Provider value={updateUser}>
        <CreateMaskedAppUserContext.Provider value={createUser}>
          <ResetMaskedAppUserContext.Provider value={resetUser}>
            {children}
          </ResetMaskedAppUserContext.Provider>
        </CreateMaskedAppUserContext.Provider>
      </UpdateMaskedAppUserContext.Provider>
    </MaskedAppUserContext.Provider>
  );
};

MaskedAppUserContextProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element,
  ),
};

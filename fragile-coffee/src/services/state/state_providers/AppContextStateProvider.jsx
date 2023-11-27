import React from 'react';
// import MessageCardStateProvider from './MessageCardProvider.jsx';
import PropTypes from 'prop-types';

export default function AppContextStateProvider({ components }){
  const reducer = providers => {
    const [ Provider, ...otherProviders ] = providers;
    if (otherProviders.length === 0 ) return <Provider components={components} />;
    return <Provider components={reducer(otherProviders)} />;
  };

  const linearContextAccessArray = [
    // MessageCardStateProvider,
    // BoardStateProvider, // Holds board state information { columns, actionItems:{userVotes:{user, voteCount}, description}}
    // HistoryStateProvider, // Holds information on past board state history {board[]}
  ];

  return reducer( linearContextAccessArray );
}

AppContextStateProvider.propTypes = { components: PropTypes.element };

import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const userId = '14';

  const value = useMemo(() => ({ userId }), [userId]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };

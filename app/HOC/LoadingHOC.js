import React from 'react';
import { Loading } from '../components';

const withLoading = (Component) => ({ isLoading, children }) => {
  return (
    <>
      {isLoading && <Loading />}
      <Component>{children}</Component>
    </>
  );
};

export default withLoading;

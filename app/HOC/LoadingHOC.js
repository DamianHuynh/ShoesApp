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
//   return function WithLoadingWrapper({ children }) {
//     const { loading } = useSelector((state) => state.LoadingReducer);
//     if (!loading) {
//       return <Component>{children}</Component>;
//     }
//     return <Loading />;
//   };
// }

export default withLoading;

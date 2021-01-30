const CHANGE_LOADING = 'CHANGE_LOADING';

export const ChangeLoading = (payload) => {
  return {
    type: CHANGE_LOADING,
    payload,
  };
};

const initialState = {
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_LOADING:
      return { ...state, isLoading: payload };

    default:
      return state;
  }
};

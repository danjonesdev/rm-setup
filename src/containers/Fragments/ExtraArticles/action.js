

export const API_URL = '/api/articles';

// Export this for unit testing more easily
export const fetchExtraArticles = (axios: any, URL: string = API_URL) =>
  (dispatch) => {

    return axios.get(URL)
  };

// Preventing dobule fetching data
/* istanbul ignore next */
const shouldFetchExtraArticles = (state): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;


  // Prevent double fetch data

  return true;
};

/* istanbul ignore next */
export const fetchExtraArticlesIfNeeded = () =>
  (dispatch, getState, axios: any) => {
    /* istanbul ignore next */
    if (shouldFetchExtraArticles(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchExtraArticles(axios));
    }

    /* istanbul ignore next */
    return null;
  };

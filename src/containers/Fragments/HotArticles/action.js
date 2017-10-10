
export const HOTARTICLES_INVALID = 'HOTARTICLES_INVALID';
export const HOTARTICLES_REQUESTING = 'HOTARTICLES_REQUESTING';
export const HOTARTICLES_FAILURE = 'HOTARTICLES_FAILURE';
export const HOTARTICLES_SUCCESS = 'HOTARTICLES_SUCCESS';

export const API_URL = 'api/articles';

// Export this for unit testing more easily
export const fetchHotArticles = (axios: any, URL: string = API_URL) =>
  (dispatch) => {
    dispatch({ type: HOTARTICLES_REQUESTING });

    return axios.get(URL)
      .then(res => dispatch({ type: HOTARTICLES_SUCCESS, data: res.data }))
      .catch(err => dispatch({ type: HOTARTICLES_FAILURE, err: err.message }));
  };

// Preventing dobule fetching data
/* istanbul ignore next */
const shouldFetchHotArticles = (state): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  const hotArticles = state.hotArticles;

  if (hotArticles.readyStatus === HOTARTICLES_SUCCESS) return false; // Prevent double fetch data

  return true;
};

/* istanbul ignore next */
export const fetchHotArticlesIfNeeded = () =>
  (dispatch, getState, axios: any) => {
    /* istanbul ignore next */
    if (shouldFetchHotArticles(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchHotArticles(axios));
    }

    /* istanbul ignore next */
    return null;
  };

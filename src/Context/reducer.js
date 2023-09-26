export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: [],
  id: null,
  albums: null,
  // token:
  // "BQAeBsrCBekEqFHLWruUWWPim-5EKecd3E8fN2Siwzu8WXOCoXR-vNAXK3tvezaxWFKQISZYVp4OdfaoLZ6vdkWnhvIIclKOZnb_Lf_aDsxMiRvrqD9O5ym0AqU0tD_4PgNGwqcNJ9pv8KX--YZk-RCz98Sv4O6mo4IzqSbsipzq5yELzrALFAtgM4pvyc_8uDciK9V46x-AlbXg7xNtxy557zaLg2eO2sSz_UqwdsmtG6qPpQoXD4iPssJadHcArEnfDjhyD1hj_MEfutRb3_zSqtQ0R7qt05-yZNAi-4xMaZvy31kS78UFTxcz4q4XpX870wkp",
};

const reducer = (state, action) => {
  // console.log("Reducer Action: ", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playLists: action.playLists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_ID":
      return {
        ...state,
        id: action.id,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_ALBUMS":
      return {
        ...state,
        albums: action.albums,
      };
    default:
      return state;
  }
};
export default reducer;

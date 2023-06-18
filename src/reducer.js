export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finished development...
  //token:"BQBaooKObts-Le4ybmt_t1qfX0gmmfhz-iSh1xh8KiOxRWBfwbfEqPyfuMMx5fjBNmsN68keJnqo-XskIbou86FFzLHGst8np7W8xUPAeSXjJBYS3OY19WtAc5_ukKODB8FpEwm2uiBujjWJr6Loe_Cf0yrwqekFy7PkYYnc2Wj76mV8lb7t5LBxKYsrzz1ZqAN5zPNKc0C-CnIUBxVM",
};

const reducer = (state, action) => {
  console.log("In the reducer:", action);
  // Action -> type, [payload]
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
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};
export default reducer;

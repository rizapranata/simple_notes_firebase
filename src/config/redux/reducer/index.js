const initialStore = {
  popup : false,
  isLogin: false,
  user: "Riza"
}

const reducer = (state=initialStore, action) => {
  if (action.type === 'CHANGE_POPUP') {
      return{
        ...state,
        popup: action.value
      }
  }
  if (action.type === 'CHANGE_ISLOGIN') {
      return {
        ...state,
        isLogin: action.value
      }
  }
  if (action.type === 'CHANGE_USER') {
      return {
        ...state,
        user: action.value
      }
  }
  return state;
}

export default reducer;
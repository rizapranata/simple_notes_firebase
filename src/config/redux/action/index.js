// akan me-return nilai untuk dispath
export const actionUserName = () => (dispatch) => {
   setTimeout(() => {
      return dispatch({type: 'CHANGE_USER', value: 'Riza Pranata'})
   }, 2000);
}
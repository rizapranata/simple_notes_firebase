import firebase from '../../firebase';
// akan me-return nilai untuk dispath
export const actionUserName = () => (dispatch) => {
   setTimeout(() => {
      return dispatch({type: 'CHANGE_USER', value: 'Riza Pranata'})
   }, 2000);
}

export const registerUserAPI = (data) => (dispatch) => {
   // saat value true tombol akan loading
   dispatch({type:'CHANGE_LOADING', value: true})
   return (
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(res => {
               console.log('success: ',res);
               // saat value false tombol akan normal
               dispatch({type:'CHANGE_LOADING', value: false})

            })
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage);
            dispatch({type:'CHANGE_LOADING', value: false})
         })
   )
}
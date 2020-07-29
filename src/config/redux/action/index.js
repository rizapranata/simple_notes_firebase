import firebase from '../../firebase';
// akan me-return nilai untuk dispath
export const actionUserName = () => (dispatch) => {
   setTimeout(() => {
      return dispatch({type: 'CHANGE_USER', value: 'Riza Pranata'})
   }, 2000);
}

export const registerUserAPI = (data) => (dispatch) => {
   return new Promise((resolve, reject) => {
      // saat value true tombol akan loading
      dispatch({type:'CHANGE_LOADING', value: true})  
      firebase.auth()
         .createUserWithEmailAndPassword(data.email, data.password)
         .then(res => {
            console.log('register success: ',res);
            // saat value false tombol akan normal
            dispatch({type:'CHANGE_LOADING', value: false})
            resolve(true)
         })
         .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage);
            dispatch({type:'CHANGE_LOADING', value: false})
            reject(false)
      })
   })
}

export const loginUserAPI = (data) => (dispatch) => {
   return new Promise((resolve, reject) => {
   // saat value true tombol akan loading
      dispatch({type:'CHANGE_LOADING', value: true})
      firebase.auth()
         .signInWithEmailAndPassword(data.email, data.password)
         .then(res => {
            console.log('login success: ',res);
            const dataUser = { //mengambil data dari respons firebase
               email: res.user.email,
               uid: res.user.uid,
               emailVerified: res.user.emailVerified
            }
            // saat value false tombol akan normal
            dispatch({type:'CHANGE_LOADING', value: false})
            dispatch({type:'CHANGE_LOGIN', value: true})
            dispatch({type:'CHANGE_USER', value: dataUser})
            resolve(true)
         })
         .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage);
            dispatch({type:'CHANGE_LOADING', value: false})
            dispatch({type:'CHANGE_LOGIN', value: false})
            reject(false)
      })
   })
}
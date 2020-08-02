import firebase, {database} from '../../firebase';
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
               emailVerified: res.user.emailVerified,
               refreshToken: res.user.refreshToken
            }
            // saat value false tombol akan normal
            dispatch({type:'CHANGE_LOADING', value: false})
            dispatch({type:'CHANGE_LOGIN', value: true})
            dispatch({type:'CHANGE_USER', value: dataUser})
            resolve(dataUser)
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

export const addDataToAPI = (data) => (dispatch) => {
   database.ref('notes/' + data.userId).push({
      title: data.title,
      content: data.content,
      date: data.date
  });
}

export const getDataFromAPI = (userId) => (dispatch) => {
   const urlNotes = database.ref('notes/' + userId);
   return new Promise((resolve, reject) => {
      //method on untuk mengupdate data yg berubah secara realtime pada firebase
      urlNotes.on('value', function(snapshot) {
         console.log('get data: ',snapshot.val());
         // Object.keys() untuk parsing data dari object ke array
         const data = []
         Object.keys(snapshot.val()).map(key => {
            data.push({
               id: key,
               data: snapshot.val()[key]
            })
         });
         dispatch({type: 'SET_NOTES', value: data})
         resolve(snapshot.val())
      });
   })
}

export const updateDataFromAPI = (data) => (dispatch) => {
   const urlNotes = database.ref(`notes/${data.userId}/${data.noteId}`);
   return new Promise((resolve, reject) => {
      // method set untuk mengupdate data dari firebase
      urlNotes.set({
          title: data.title,
          content: data.content,
          date: data.date
      }, (err) => {
         if (err) {
            reject(false)
         }else{
            resolve(true)
         }
      });
   })
}

export const deleteDataFromAPI = (data) => (dispatch) => {
   const urlNotes = database.ref(`notes/${data.userId}/${data.noteId}`);
   return new Promise((resolve, reject) => {
      // method set untuk mengupdate data dari firebase
      urlNotes.remove();
   })
}
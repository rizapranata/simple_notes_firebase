import React, {Component} from 'react';
import firebase from '../../../config/firebase';
import './Register.scss';

class Register extends Component {
   state: {
      email: '',
      password: ''
   }
   // e.target = untuk menangkap element html
   handleOnChangeText = (e) => {
      // console.log(e.target);
      this.setState({
         [e.target.id]: e.target.value,
      })
   }

   handleRegisterSubmit = () => {
      const {email, password} = this.state;
      console.log(`data before send: `, email, password);
      firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(res => {
            console.log('success: ',res);
         })
         .catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log(errorCode,errorMessage);
      });
   }

   render() {
      return (
         <div className="auth-container">
            <div className="auth-card">
               <p className="auth-title">Register Page</p>
               <input className="input" 
                     id="email"
                     type="text" 
                     placeholder="Email.." 
                     onChange={this.handleOnChangeText} 
               />
               <input className="input" 
                     id="password"
                     type="password" 
                     placeholder="Password.." 
                     onChange={this.handleOnChangeText} 
               />
               <button className="btn"
                     onClick={this.handleRegisterSubmit}
               >Register
               </button>
            </div>
            {/* <button>Go to Dashboard</button> */}
         </div>
      );
   }
}

export default Register;
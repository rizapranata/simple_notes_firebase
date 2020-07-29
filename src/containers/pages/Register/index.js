import React, {Component} from 'react';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action'
import './Register.scss';

class Register extends Component {
   state= {
      email: '',
      password: '',
   }
   // e.target = untuk menangkap element html
   handleOnChangeText = (e) => {
      this.setState({
         [e.target.id]: e.target.value,
      })
   }

   handleRegisterSubmit = () => {
      const {email, password} = this.state;
      console.log(`data before send: `, email, password);
      // props untuk megakses APi dari firebase
      this.props.registerAPI({email, password})
      this.setState({
         email: '',
         password: ''
      })
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
                     value={this.state.email}
                     onChange={this.handleOnChangeText} 
               />
               <input className="input" 
                     id="password"
                     type="password" 
                     placeholder="Password.." 
                     value={this.state.password}
                     onChange={this.handleOnChangeText} 
               />
            
               <Button onClick={this.handleRegisterSubmit}
                      title="Register"
                      loading={this.props.isLoading}
               />
            </div>
         </div>
      );
   }
}

const reduxState = (state) => ({
   isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
   registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);
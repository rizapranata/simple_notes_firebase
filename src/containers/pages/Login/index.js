import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { actionUserName } from '../../../config/redux/action'
import { loginUserAPI } from '../../../config/redux/action'
import Button from '../../../components/atoms/Button';


class Login extends Component {
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

   handleLoginSubmit = async () => {
      const {email, password} = this.state;
      const {history} = this.props; // dari react-router
      console.log(`data before send: `, email, password);
      // props untuk megakses APi dari firebase
      const res = await this.props.loginAPI({email, password}).catch(err => err)
      if (res) {
         console.log("Login success", res);
         this.setState({
            email: '',
            password: ''
         })
         history.push('/'); // redirect ke Dashboard
      }else{
         console.log("Login fail!");
      }
   }
  
   render() {
      return (
         <div className="auth-container">
            <div className="auth-card">
               <p className="auth-title">Login Page</p>
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
            
               <Button onClick={this.handleLoginSubmit}
                      title="Login"
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
   loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(
   reduxState, 
   reduxDispatch
)(Login);
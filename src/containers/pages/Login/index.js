import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actionUserName } from '../../../config/redux/action'

class Login extends Component {

   changeUser = () => {
      this.props.changeUserName()
   }
  
   render() {
      return (
         <div>
            <p>Login Page {this.props.userName}</p>
            <button onClick={this.changeUser} >Change User Name</button>
            <button>Go to Dashboard</button>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   popupProps: state.popup,
   userName: state.user,
})

// dispatch = function untuk merubah value
const mapStateToDispatch = (dispatch) => ({
   changeUserName: () => dispatch(actionUserName())
})

export default connect(
   mapStateToProps, 
   mapStateToDispatch
)(Login);
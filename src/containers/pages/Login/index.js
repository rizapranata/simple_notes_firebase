import React, {Component} from 'react';
import { connect } from 'react-redux';

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {  };
   }
   render() {
      return (
         <div>
            <p>Login Page {this.props.popupProps}</p>
            <button>Go to Register</button>
            <button>Go to Dashboard</button>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      popupProps: state.popup,
   }
}

export default connect(mapStateToProps, null)(Login);
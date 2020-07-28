import React, {Component} from 'react';

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {  };
   }
   render() {
      return (
         <div>
            <p>Login Page</p>
            <button>Go to Register</button>
            <button>Go to Dashboard</button>
         </div>
      );
   }
}

export default Login;
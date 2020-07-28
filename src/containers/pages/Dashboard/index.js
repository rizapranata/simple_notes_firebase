import React, {Component} from 'react';

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {  };
   }
   render() {
      return (
         <div>
            <p>Dashboard Page</p>
            <button>Go to Register</button>
            <button>Go to Dashboard</button>
         </div>
      );
   }
}

export default Dashboard;
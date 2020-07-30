import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addDataToAPI } from '../../../config/redux/action'
import'./Dashboard.scss';

class Dashboard extends Component {
   state = {
      title: '',
      content: '',
      date: ''
   }

   handleSaveNotes = () => {
      const {title, content} = this.state;
      const {saveNotes} = this.props;
      // mengambil data pda local storage yg sudah di set pada halaman login
      const userData = JSON.parse(localStorage.getItem('userData'))

      const data = {
         title: title,
         content: content,
         date: new Date().getTime(),
         userId: userData.uid
      }
      saveNotes(data);
      console.log(data);
   }

   componentDidMount(){
      const userData = localStorage.getItem('userData')
      console.log('dashboard', JSON.parse(userData));
   }

   onInputChange = (e, type) => {
      this.setState({
         [type]: e.target.value
      })
   }

   render() {
      const {title, content} = this.state;
      return (
         <div className="container">
            <div className="input-form">
               <input className="input-title" 
                     placeholder="title" 
                     value={title}
                     onChange={(e)=> this.onInputChange(e, 'title')}
               />
               <textarea className="input-content" 
                        placeholder="cotent" 
                        value={content}
                        onChange={(e)=> this.onInputChange(e, 'content')}
               >
               </textarea>

               <button className="save-btn" 
                     onClick={this.handleSaveNotes}>
                  Simpan
               </button>
               <hr />
               <div className="card-content">
                  <p className="title">Title</p>
                  <p className="date">21 sep 2020</p>
                  <p className="content">Content notes</p>
               </div>
            </div>
         </div>
      );
   }
}

const reduxState = (state) => ({
   userData: state.user
})

const reduxDispatch = (dispatch) => ({
   saveNotes : (data) => dispatch(addDataToAPI(data))
})

export default connect(reduxState, reduxDispatch)(Dashboard);
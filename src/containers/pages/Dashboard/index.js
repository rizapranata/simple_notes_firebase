import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { addDataToAPI, getDataFromAPI, updateDataFromAPI } from '../../../config/redux/action'
import'./Dashboard.scss';

class Dashboard extends Component {
   state = {
      title: '',
      content: '',   
      date: '',
      textButton: 'SIMPAN',
      noteId: '',
   }

   componentDidMount(){
      const userData = JSON.parse(localStorage.getItem('userData'));
      this.props.getNotes(userData.uid);
   }

   handleSaveNotes = () => {
      const {title, content, textButton, noteId} = this.state;
      const {saveNotes, updateNotes} = this.props;
      // mengambil data pda local storage yg sudah di set pada halaman login
      const userData = JSON.parse(localStorage.getItem('userData'))

      const data = {
         title: title,
         content: content,
         date: new Date().getTime(),
         userId: userData.uid,
      }

      if (textButton === 'SIMPAN') {
         saveNotes(data);
      }else{
         data.noteId = noteId;//
         updateNotes(data);
      }
      console.log(data);
   }

   onInputChange = (e, type) => {
      this.setState({
         [type]: e.target.value
      })
   }

   updateNotes = (note) => {
      this.setState({
         title: note.data.title,
         content: note.data.content,
         textButton: 'UPDATE',
         noteId: note.id
      })
   }

   cancleUpdate = () => {
      this.setState({
         title: '',
         content: '',
         textButton: 'SIMPAN',
      })
   }

   render() {
      const {title, content, textButton} = this.state;
      const {notes} = this.props;
      console.log('Notes : ', notes);
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
               <div className="action-wrapper">
               {
                  textButton === 'UPDATE' ? (
                     <button className="save-btn cancle" 
                        onClick={this.handleSaveNotes} 
                        onClick={this.cancleUpdate}>
                        CENCLE
                     </button>
                  ) : <div />
               }
                  <button className="save-btn" 
                     onClick={this.handleSaveNotes}>
                     {textButton}
                  </button>
               </div>

            </div>
            <hr />
               {
                  notes.length > 0 ? (
                     <Fragment>
                        {
                           notes.map(note => {
                              return (
                                 <div className="card-content" key={note.id} 
                                    onClick={() => this.updateNotes(note)}>
                                    <p className="title" value={title} >{note.data.title}</p>
                                    <p className="date">{note.data.date}</p>
                                    <p className="content" value={content} >{note.data.content}</p>
                                    {/* <div className="delete-btn">x</div> */}
                                 </div>
                              )
                           })
                        }
                     </Fragment>
                  ) : null
               }
         </div>
      );
   }
}

const reduxState = (state) => ({
   userData: state.user,
   notes: state.notes
})

const reduxDispatch = (dispatch) => ({
   saveNotes : (data) => dispatch(addDataToAPI(data)),
   getNotes : (data) => dispatch(getDataFromAPI(data)),
   updateNotes: (data) => dispatch(updateDataFromAPI(data))
})

export default connect(reduxState, reduxDispatch)(Dashboard);
import React, { Component } from 'react';
import axios from 'axios';


const Feedback = props => (
  <tr className="d-flex">
        <td>{props.feedback.username}</td>
        <td>{props.feedback.feedback}</td>
  </tr>)

class DisplayFeedback extends Component {    

    constructor(props) {
      super(props);
   
      this.state = { feedbacks: [] }; // looks like this is where the succeeding states are coming from
  }      
      
      componentDidMount() {
          axios.get('https://newestyle-clothes-be.onrender.com/feedback/')
            .then(response => {              
              this.setState({ feedbacks: response.data })
              console.log(this.state.feedbacks);  // Log the state after setting it
              })
              .catch((error) => {
                  console.log(error);
              })
      }
    
      deleteFeedback(id) {
          axios.delete('https://newestyle-clothes-be.onrender.com/feedback/' + id)
              .then(response => { console.log(response.data) });
          this.setState({
            feedbacks: this.state.feedbacks.filter(el => el._id !== id)
          })
      }
    
      feedbackList() {
          return this.state.feedbacks.map(currentfeedback => {
              return <Feedback feedback={currentfeedback}
                  deleteFeedback={this.deleteFeedback}
                  key={currentfeedback._id}
              />;
          })
      }  
      render() {
        return (
        <div className="FeedbackList">
              <h3>Reviews from Customers</h3> <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Customer Name</th>
                            <th>Feedbacks</th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.feedbackList()}
                  </tbody>
                  </table>
          </div>
      )
    }
} 

export default DisplayFeedback;

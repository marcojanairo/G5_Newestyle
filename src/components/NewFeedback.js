import React, { Component } from 'react';
import axios from "axios";
import '../css/About.css';


class NewFeedback extends Component {    

  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeFeedback = this.onChangeFeedback.bind(this);    
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        activity: "",
    };
  }
  
  onChangeUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeFeedback(e) {
    this.setState({
      feedback: e.target.value,
    });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const activityvar = {
      username: this.state.username,
      feedback: this.state.feedback,
    };

    console.log(activityvar);
    axios.post("https://newestyle-clothes-be.onrender.com/feedback/add", activityvar)
      .then((res) => {
        window.location = "/About";
      });
  }
  
  render() {
    return (
      <div className="CreateFeedback">
        <h3>Add a New Feedback</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <br />
            <label>Username: </label>
            <input
              type="text"
              required className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}
            />
            <br />
            <br />
            <label>Feedback: </label>
            <br />
            <textarea className = "form-control-feedback"
              rows="4"
              cols="10"
              // Adjust the number of rows as needed
              required              
              value={this.state.feedback}
              onChange={this.onChangeFeedback}
              >
            </textarea>

          </div>
          <div className="form-group">
            <br />
            <input
              type="submit"
              value="Submit Feedback"
              className="btn btn-primary"
          /> </div>
        </form>
      </div>
    );
  }  
}

export default NewFeedback;
import React from 'react';
import { withRouter } from 'react-router-dom';


class CreateEvent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      host_id:'',
      date:'',
      time:'',
      boba_shop:"",
      address:'',
      city:'',
      max_cap:'',
      bio:'',
      image:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    // this.props.processForm(user);
  }

  update(field){
    return e => this.setState({
        [field]:e.target.value
    });
  }

  render(){
    return(
      <div className="create-event-container">
        <form onSubmit={this.handleSubmit} className="create-event-form-box" >
          <h1 className="create-event-header">Host a Boba Event</h1>
          <p className="create-event-text">Fill out this form to host your own boba event!</p>
            <div className="create-event-form">

              <label>
                <h1 className="create-event-field-text">
                Date of Boba Event!</h1>
                <input type="date"
                placeholder="01/01/2001"
                value={this.state.date}
                onChange={this.update('date')}
                className="create-event-field"
                required
                />
              </label><br />

              <label>
                <h1 className="create-event-field-text">
                Time of Boba Event!</h1>
                <input type="time"
                placeholder="6:30PM"
                value={this.state.time}
                onChange={this.update('time')}
                className="create-event-field"
                required
                />
              </label><br />

              <label>
                <h1 className="create-event-field-text">
                Boba Shop:</h1>
                <input type="text"
                value={this.state.boba_shop}
                placeholder="Boba Shop Name"
                onChange={this.update('boba_shop')}
                className="create-event-field"
                required
                />
              </label><br/>

              <label>
                <h1 className="create-event-field-text">
                Address:</h1>
                <input type="text"
                value={this.state.address}
                placeholder="Address"
                onChange={this.update('address')}
                className="create-event-field"
                required
                />
              </label><br/>


              <h1 className="create-event-field-text">
              City:</h1>
              <select className="create-city-selector">
                <option value="{this.state.city}">San Francisco</option>
                <option value="{this.state.city}">Los Angeles</option>
                <option value="{this.state.city}">New York</option>
              </select><br/>

              <h1 className="create-event-field-text">
              Max Number of Seats:</h1>
              <select className="create-city-selector">
                <option value="{this.state.max_cap}">3</option>
                <option value="{this.state.max_cap}">4</option>
                <option value="{this.state.max_cap}">5</option>
                <option value="{this.state.max_cap}">6</option>
              </select><br/>

              <label>
              <h1 className="create-event-field-text">
              Write about YOU!</h1>
              <textarea row="5" cols="50"
              className="create-event-field-bio"
              value={this.state.bio}
              onChange={this.update('bio')}
              placeholder="Write a quick bio about yourself, how you got here, and some topics you might talk about as a host!"
              required>
              </textarea>
              </label><br/>

              <label>
              <h1 className="create-event-field-text">
              Image URL:</h1>
              <input type="text"
              value={this.state.image}
              placeholder="Paste a IMAGE URL of yourself!"
              onChange={this.update('image')}
              className="create-event-field"
              required
              />
              </label><br/>


              <input className="create-event-submit"
              type="submit"
              value="Host an Event!"/>


            </div>
        </form>
      </div>
    )
  }
}

export default CreateEvent;

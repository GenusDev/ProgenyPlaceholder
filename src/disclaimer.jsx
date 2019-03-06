import React from 'react';
import { button1, button2 } from './buttons';
import { storeInfo } from  './storeinfo';
import './stylesheets/main.scss';

class Disclaimer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      identity1: 'hidden-button',
      identity2: 'hidden-selection-form',
      role: '',
      button: 'button1',
      email_input_status: false,
      email_style: 'email-input email-input-1',
      errors: []
    };

    this.openSelections = this.openSelections.bind(this);
    this.selectRole = this.selectRole.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }



  // Commented out, because it would disable email-input
  // shouldComponentUpdate() {
  //   return false; // This prevents future re-renders of this component
  // }

  update(property) {
    return (e) => {
      e.preventDefault();
      this.setState({ [property]: e.currentTarget.value }, () => {
        if(this.state.email === '' && this.state.identity2 === '') {
          this.setState({
            identity1: 'hidden-button',
            identity2: 'hidden-selection-form',
            button: 'button1',
            email_style: 'email-input email-input-1',
            errors: ''
          });
        } else if(this.state.email !== '') {
          this.setState({ identity1: 'button'});
        } else {
          this.setState({ identity1: 'hidden-button'});
        }
      });
    };
  }

  openSelections(e) {
    this.setState({
      button: 'button2',
      identity2: 'selection-form',
      email_style: 'email-input email-input-2'
    });
  }

  selectRole(e) {
    this.setState({ role: e.currentTarget.value });
  }

  handleSubmit() {
    var user = {
      email: this.state.email.toLowerCase(),
      role: this.state.role
    };

    storeInfo(user).then(
      (res) => {
        this.setState({ errors: '' });
        this.handlePostSubmit();
      }, err => {
        if(err.responseJSON.email && err.responseJSON.role) {
          this.setState({
            errors: err.responseJSON.email.concat(err.responseJSON.role)
          });
        } else if(err.responseJSON.email) {
          this.setState({
            errors: err.responseJSON.email
          });
        } else if(err.responseJSON.role) {
          this.setState({
            errors: err.responseJSON.role
          });
        }
      });
  }

  renderErrors() {

    if(this.state.errors.length > 0) {
      return(
        <div className="errors">
          {this.state.errors.map((error, i) => (
            <p key={`error-${i}`}>
              {error}
            </p>
          ))}
        </div>
      );
    }
  }

  handlePostSubmit() {
    this.setState({
      email: 'submitted',
      identity1: 'hidden-button',
      identity2: 'hidden-selection-form',
      email_style: 'email-input email-input-3',
      email_input_status: !this.state.email_input_status
    });
  }

  render() {

    let { email, identity1, identity2,
          email_input_status, email_style } = this.state;
    let { openSelections, selectRole, handleSubmit } = this;
    let renderedButton = '';

    if (this.state.button === 'button1') {
      renderedButton = button1(identity1, openSelections);
    } else if (this.state.button === 'button2') {
      renderedButton = button2(identity2, selectRole, handleSubmit);
    }

    return (
        <div className="disclaimer">
          <div className="disclaimerText" > portal under <br/> construction </div>
            <div className="content-top">stay in touch</div>
            <div className="content-mid">
              <div className="email-form">
                <input
                  className={ email_style }
                  name="email"
                  type="text"
                  placeholder= "submit email"
                  value={ email }
                  disabled={ email_input_status }
                  onChange={ this.update('email') }/>
                {renderedButton}
              </div>
            </div>
            <div className="content-bot">
              {this.renderErrors()}
            </div>

        </div>

    );
  }
}

export default Disclaimer;

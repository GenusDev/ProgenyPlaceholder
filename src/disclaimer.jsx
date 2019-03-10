import React from 'react';
import { buttonWithOptions } from './buttons';
import { storeInfo } from  './storeinfo';
import './stylesheets/main.scss';

class Disclaimer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      buttonClass: ['hideSubmitForm', ""], //showSubmitButtonWithAllOptions, showSubmitButtonOnly, hideSubmitForm
      emailFormClass: "email-form",
      role: '',
      // button: 'button1',
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

  update() { //can assume email always
    return (e) => {
      console.log("email", e.currentTarget.value );
      e.preventDefault();
      this.setState({ ['email']: e.currentTarget.value }, () => {
        console.log("email", this.state.email, this.state.identity2 );
        if(this.state.email === '' && this.state.identity2 === '') {
          this.setState({
            buttonClass: ['hideSubmitForm', ""],
            email_style: 'email-input email-input-1',
            errors: ''
          });
        } else if(this.state.email !== '') {
          this.setState({
            buttonClass: ['submitForm', ""],
          });
        } else {
          this.setState({
            buttonClass: ['hideSubmitForm', ""],
          });
        }
      });
    };
  }

  openSelections(e) { //disable email submission
    console.log("open selections")
    this.setState({
      buttonClass: ['submitForm', "submitFormWithOptions"],
      emailFormClass: "email-form email-form-open",
      email_style: 'email-input email-input-2'
    });

  }

  selectRole(e) {
    this.setState({ role: e.currentTarget.value });
  }

  handleSubmit() {
    const user = {
      email: this.state.email.toLowerCase(),
      role: this.state.role
    };
    console.log(user)
    this.handlePostSubmit();

    storeInfo(user)

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
      buttonClass: ['hideSubmitForm', ""],
      emailFormClass: "email-form",
      email_style: 'email-input email-input-3',
      email_input_status: !this.state.email_input_status
    });
  }

  render() {
    let { buttonClass,
          email, email_input_status, email_style } = this.state;
    let { openSelections, selectRole, handleSubmit } = this;
    let renderedButton = '';

    renderedButton = buttonWithOptions(buttonClass, selectRole, openSelections, handleSubmit);

    return (
        <div className="disclaimer">
          <div className="disclaimerText" > portal under <br/> construction </div>
            <div className="content-top">stay in touch</div>
            <div className="content-mid">
              <div className={`${this.state.emailFormClass}`}>
                <input
                  className={ email_style }
                  name="email"
                  type="text"
                  placeholder= "submit email"
                  value={ email }
                  disabled={ email_input_status }
                  onChange={ this.update() }/>
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

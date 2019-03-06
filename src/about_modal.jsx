import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import $ from "jquery";
import './stylesheets/about.scss';

import StevenImage from './assets/photos/Steven2.jpg';
import MattImage from './assets/photos/Mat2.jpg';
import JohnImage from './assets/photos/John2.jpg';
import LauraImage from './assets/photos/Laura.jpg';
import LiamImage from './assets/photos/Liangtian_(Liam)_Zhang.jpeg';
import AnaImage from './assets/photos/Ana.png';
import GioImage from './assets/photos/Gio.jpg';
import DareImage from './assets/photos/dare.png';



class AboutModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      openModal: true,
    };

    window.SessionOpenModal = () => {
      this.setState({openModal: true});
    };

    window.SessionOpenModal = window.SessionOpenModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ openModal: true });
    $('.open').css("display", "none");
    $('.close').css("display", "block");
  }

  closeModal() {
    this.setState({ openModal: false });
    $('.close').css("display", "none");
    $('.open').css("display", "block");
  }

  render() {

    const Profile = (props) => {
      return(
        <div className="team-column">
          <div> {props.name} </div>
          <img src={props.imgsrc} />
          <div className="profileDescrip"> {props.description}</div>
        </div>
      )
    }




    return(
      <div className="about-container">
        <img className="open about-button"
          src="https://s3.amazonaws.com/genie-placeholder/about-butt.png"
          onClick={this.openModal}
          alt="about button"/>
        <img className="close about-button"
          src="https://s3.amazonaws.com/genie-placeholder/about-exit-butt.png"
          onClick={this.closeModal}
          alt="exit button"/>
        <Modal
          isOpen={this.state.openModal}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          contentLabel="About Modal"
          className="about-modal">
          <div className="aboutBuffer"> </div>
          <div className="about-body">
            <span className="sumSentence"> Progeny provides a crowdfunding portal tailored to the needs of developers that transforms the equity of real estate projects into liquid transferable tokens.
            </span>
            <br/>
            <br/>
            With the advent of blockchain technology, financial capital has the potential to be more accessible than ever before to people with novel ideas, while providing tools for investors to increase transparency and accountability for their investments Progeny seeks to fulfill this potential by providing prospective real estate developers with blockchain tools and resources to manage, showcase, and finance their projects. In particular, Progeny will aid developers in transforming the equity of their projects into into tradable asset-backed digital tokens, using either a Reg D or Reg A exemption from the SEC. Investors will use each developer-specific portal as an analytical dashboard for tracking the performance of their investment and vetting the proposed prospects of each developer. While we are focusing our platform on the needs of real estate developers, especially facilitating SEC compliance,  we intend to make use of blockchain technology’s growing cross-platform and decentralized apparatus of enabling infrastructure for investors.
          </div>
          <div className="teamIntro"> <span> - - - </span> <span> - - - - - - - - - - - - </span>       <span> team </span>        <span> - - - - - - - - - - - - </span> <span> - - - </span> </div>
          <div className="team">
            <div className="team-row">
              <Profile
                  name="steven tortoga"
                  imgsrc={StevenImage}
                  description="Steven is our lead engineer, primarily focused on building out the platform’s blockchain infrastructure."/>
              <Profile
                  name="mat steele"
                  imgsrc={MattImage}
                  description="Steven is our lead engineer, primarily focused on building out the platform’s blockchain infrastructure."/>
              <Profile
                  name="liam zhang"
                  imgsrc={LiamImage}
                  description="Steven is our lead engineer, primarily focused on building out the platform’s blockchain infrastructure."/>
            </div>

            <div className="team-row">
              <Profile
                  name="laura chavez"
                  imgsrc={LauraImage}
                  description="Steven is our lead engineer, primarily focused on building out the platform’s blockchain infrastructure."/>
              <Profile
                  name="ana canales"
                  imgsrc={AnaImage}
                  description="Steven is our lead engineer, primarily focused on building out the platform’s blockchain infrastructure."/>
              <Profile
                  name="john rudell"
                  imgsrc={JohnImage}
                  description="Steven is our lead engineer, primarily focused on building out the platform’s blockchain infrastructure."/>
            </div>
            <div className="team-row">
              <Profile
                  name="giorgi suladze"
                  imgsrc={GioImage}
                  description="Steven is our lead engineer, primarily focused on building out the platform’s blockchain infrastructure."/>
              <Profile
                  name="Dare tortoga"
                  imgsrc={DareImage}
                  description="Steven is our lead engineer, primarily focused on building out the platform’s blockchain infrastructure."/>
            </div>
        </div>

        </Modal>
      </div>
    );
  }
}

export default AboutModal;

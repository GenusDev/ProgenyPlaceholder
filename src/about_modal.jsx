import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
// import $ from "jquery";


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
      openModal: false,
      openButtonClass: "about-button",
      closeButtonClass: "hiddenButt"
    };

    window.SessionOpenModal = () => {
      this.setState({openModal: true});
    };

    window.SessionOpenModal = window.SessionOpenModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(modalState) { //make one function with variables


    this.setState({
      openModal: !this.state.openModal,
      openButtonClass: modalState === "open" ? "hiddenButt" : "about-button",
      closeButtonClass: modalState === "open" ? "about-button" : "hiddenButt"
    });


    let linkClass =  modalState === "open" ? "hidden" : "links"
    this.props.removeLinksDiv(linkClass)


  }
  componentWillMount(){
    Modal.setAppElement('body');
  }


  render() {

    const Profile = (props) => {
      return(
        <div className="team-column">
          <div> {props.name} </div>
          <div className="imageOverlay">
            <img src={props.imgsrc} />
          </div>
          <div className="profileDescrip"> {props.description}</div>
        </div>
      )
    }

    console.log("render state", this.state)

    return(
      <div className="about-container">
        <img className={`${this.state.openButtonClass}`}
          src="https://s3.amazonaws.com/genie-placeholder/about-butt.png"
          onClick={() => this.toggleModal("open")}
          alt="about button"/>
        <img className={`${this.state.closeButtonClass}`}
          src="https://s3.amazonaws.com/genie-placeholder/about-exit-butt.png"
          onClick={ () => this.toggleModal("close")}
          alt="exit button"/>
        <Modal
          isOpen={this.state.openModal}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          contentLabel="About Modal"
          className="about-modal">
          <div className="aboutBuffer"> </div>
          <div className="scrollableContent">
            <div className="about-body">
              <span className="sumSentence"> Progeny provides a crowdfunding portal tailored to the needs of developers that transforms the equity of real estate projects into liquid transferable tokens.
              </span>
              <br/>
              <br/>
              With the advent of blockchain technology, financial capital has the potential to be more accessible than ever before to people with novel ideas, while providing tools for investors to increase transparency and accountability for their investments Progeny seeks to fulfill this potential by providing prospective real estate developers with blockchain tools and resources to manage, showcase, and finance their projects. In particular, Progeny will aid developers in transforming the equity of their projects into into tradable asset-backed digital tokens, using either a Reg D or Reg A exemption from the SEC. Investors will use each developer-specific portal as an analytical dashboard for tracking the performance of their investment and vetting the proposed prospects of each developer. While we are focusing our platform on the needs of real estate developers, especially facilitating SEC compliance,  we intend to make use of blockchain technology’s growing cross-platform and decentralized apparatus of enabling infrastructure for investors.
            </div>
            <div className="teamIntro"> <span> - - - </span> <span> - - - - - - - - - - - - </span>       <span> TEAM </span>        <span> - - - - - - - - - - - - </span> <span> - - - </span> </div>
            <div className="team">
              <div className="team-row">
                <Profile
                    name="steven tortora"
                    imgsrc={StevenImage}
                    description="Steven is our lead engineer, primarily focused on building out the platform’s blockchain infrastructure."/>
                <Profile
                    name="mat steele"
                    imgsrc={MattImage}
                    description="With a background in international and community development and data science, Mat provides broad management support."/>
                <Profile
                    name="liam zhang"
                    imgsrc={LiamImage}
                    description="Liam is our masterful lead front-end programmer. "/>
              </div>

              <div className="team-row">
                <Profile
                    name="laura chavez"
                    imgsrc={LauraImage}
                    description="Lau is an incoming SIPA student with a policy background. She is guiding filings with the SEC, and helps with HR and external contracts."/>
                <Profile
                    name="ana canales"
                    imgsrc={AnaImage}
                    description="With a background in comp sci and anthro, Ana is the perfect manager for moving our project forward."/>
                <Profile
                    name="john rudell"
                    imgsrc={JohnImage}
                    description="John works at Gemini, and helped found Progeny. He provides support with design and our front-end."/>
              </div>
              <div className="team-row">
                <Profile
                    name="giorgi suladze"
                    imgsrc={GioImage}
                    description="With a background in management consulting, Giorgi has helped with financial and economic analysis and built up Progeny’s operating framework"/>
                <Profile
                    name="obadare gundipe"
                    imgsrc={DareImage}
                    description="Dare works part-time developing the architecture for how Progeny will instatiate each portal. "/>
              </div>
            </div>
          </div>


        </Modal>
      </div>
    );
  }
}

export default AboutModal;

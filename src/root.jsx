import React from 'react';
// import * as d3 from "d3";
import AboutModal from './about_modal';
import Pdfviewer from './pdfViewer';
import logo from './assets/progenyLogoNewAbstractedGradient.png';


import Disclaimer from './disclaimer'
import './stylesheets/main.scss';
// import 'semantic-ui-css/semantic.min.css'

class Root extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      opacityLayerClass: "opacity-layer-colorTeal",
      columnLayerClass: 'mainColumnCentral',
      profileDescripClass: "",
      description: "testing Text",
      linksClass: 'links'
    };

    this.setOpacityLayerClass = this.setOpacityLayerClass.bind(this);
    this.setProfDescripClassandContent = this.setProfDescripClassandContent.bind(this);
    this.shiftMainColumn = this.shiftMainColumn.bind(this);
    this.removeLinksDiv = this.removeLinksDiv.bind(this);
  }

  removeLinksDiv(classToChangeTo){
    this.setState({
      linksClass: classToChangeTo,
    })
  }

  setOpacityLayerClass(classToChangeTo){
    this.setState({
      opacityLayerClass: classToChangeTo
    })
  }

  setProfDescripClassandContent(classToChangeTo, profileDescription){
    console.log( "hoverMovement", classToChangeTo, profileDescription )
    this.setState({
      profileDescripClass: classToChangeTo,
      profileDescription: profileDescription
    })
  }

  shiftMainColumn(classToChangeTo){
    this.setState({
      columnLayerClass: classToChangeTo
    })
  }

  render() {

    return (
      <div className={`${this.state.opacityLayerClass} opacity-layer box`}>
        <div className="dataDescrip"> traffic clustering in NYC <br/> <span> source: NYC DOT  </span> </div>
        <div className={`${this.state.columnLayerClass} mainColumn`}>
          <div className="top series header">
            <div className="header header-cont">
              <div className="header-main" >
                <div className="logo">
                  <img  src={logo} alt="logo" />
                </div>
                <div className="companyName">PROGENY</div>
              </div>
              <div className={`${this.state.linksClass} subdescription`}>
                <div className="header-sub">REAL ESTATE..</div>
                <div className="header-sub">BLOCKCHAIN.. </div>
                <div className="header-sub"> PLATFORM</div>
              </div>

            </div>
            <AboutModal
              setOpacityLayerClass={this.setOpacityLayerClass}
              removeLinksDiv={this.removeLinksDiv}
              shiftMainColumn={this.shiftMainColumn}
              setProfDescripClassandContent={this.setProfDescripClassandContent}
              />
          </div>

          <Pdfviewer
            setOpacityLayerClass={this.setOpacityLayerClass}
            shiftMainColumn={this.shiftMainColumn}
            linksClass={this.state.linksClass}
            />

      </div>
      <div className={`${this.state.profileDescripClass}` }> {this.state.profileDescription} </div>

      <Disclaimer />


    </div>
    );
  }
}

export default Root;

import React from 'react';
import * as d3 from "d3";
import AboutModal from './about_modal';
import Pdfviewer from './pdfViewer';
import logo from './assets/ProgenyLogo.png';



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

  componentDidMount() {
    /* D3 code to append elements to this.svg */
    const data = [
      { "x_axis": 341, "y_axis": 115},
      { "x_axis": 335, "y_axis": 155},
      { "x_axis": 300, "y_axis": 220},
      { "x_axis": 290, "y_axis": 250},
      { "x_axis": 370, "y_axis": 300},
      { "x_axis": 260, "y_axis": 350},
    ];

    const svg = d3.select("#root")
      .append("svg")
      .classed("city-points", true)
      .attr("viewBox", "0 0 800 600" )
      .attr("preserveAspectRatio", "xMidYMid slice");

    let points = svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("viewBox", "0 0 800 600" )
      .attr("preserveAspectRatio", "xMidYMid slice")
      .attr("cx", function (d) { return d.x_axis; })
      .attr("cy", function (d) { return d.y_axis; })
      .attr("r", function (d) { return 2; })
      .attr("fill", "white")
      .on("mouseover", function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke", "rgba(1, 194, 203, 0.9)")
          .attr("stroke-width", "1")
          .attr("fill-opacity", "0.05")
          .attr("r", function(d) {
            return 30;
          });
        d3.select(".opacity-layer")
          .style("background", "rgba(0, 0, 0, 0)");
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition()
          .duration(2500)
          .attr("r", function(d) {
            return 2;
          })
          .attr("fill", "white")
          .attr("stroke-width", "0")
          .attr("fill-opacity", "1.0");
        d3.select(".opacity-layer")
          .transition()
          .duration(2000)
          .style("background", 'rgba(1, 194, 203, 0.9)');

      });
  }

  removeLinksDiv(classToChangeTo){
    console.log("classToChangeTo",classToChangeTo)
    this.setState({
      linksClass: classToChangeTo,
    })
    console.log("state", this.state)
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
              <img className="logo" src={logo} alt="logo"/>
              <div className="header-main">PROGENY</div>
              <div className={`${this.state.linksClass} subdescription`}>
                <div className="header-sub">REAL ESTATE</div>
                <div className="header-sub">BLOCKCHAIN </div>
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

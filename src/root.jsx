import React from 'react';
import * as d3 from "d3";
import { button1, button2 } from './buttons';
import { storeInfo } from  './storeinfo';
import AboutModal from './about_modal';
import logo from './assets/ProgenyLogo.png';

import demo from './assets/icons/demo.svg';
import conceptPaper from './assets/icons/conceptPaper.svg';
import legalMemo from './assets/icons/legalMemo.svg';
import finAnal from './assets/icons/finAnalysis.svg';


import Disclaimer from './disclaimer'
import './stylesheets/main.scss';

class Root extends React.Component {

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
          .attr("stroke", "rgba(40, 142, 139, 0.95)")
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
          .style("background", "rgba(40, 142, 139, 0.9)");
      });
  }


  render() {


    return (
      <div className="opacity-layer box">
        <div className="dataDescrip"> traffic clustering in NYC <br/> <span> source: NYC DOT  </span> </div>
        <div className='mainColumn'>
          <div className="top series header">
            <div className="header header-cont">
              <img className="logo" src={logo} alt="logo"/>
              <div className="header-main">PROGENY</div>
              <div className="header-sub">REAL ESTATE</div>
              <div className="header-sub">BLOCKCHAIN </div>
              <div className="header-sub"> PLATFORM</div>
            </div>
            <AboutModal/>
          </div>

          <div className="links">
            <div className="linkDiv demo">
              <img id="demoIcon" alt="demo" src={demo}/>
              <div className="linkDescrip">DEMO</div>
            </div>
            <div className="linkDiv">
              <img id="linkIcon" alt="conceptMap" src={conceptPaper}/>
              <div className="linkDescrip"> CONCEPT PAPER</div>
            </div>
            <div className="linkDiv">
              <img id="demoLogo"  alt="legalMemo" src={legalMemo}/>
              <div className="linkDescrip">LEGAL MEMO</div>
            </div>
            <div className="linkDiv">
              <img id="linkIcon"  alt="finAnal" src={finAnal}/>
              <div className="linkDescrip"> FINANCIAL ANALYSIS </div>
            </div>
          </div>
      </div>

      <Disclaimer />

    </div>
    );
  }
}

export default Root;

import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import { Button, Icon } from 'semantic-ui-react'

import { Document, Page, pdfjs } from 'react-pdf';
import white_paper from './assets/white_paper.pdf';
import legal_memo from './assets/legal_memo.pdf';


import conceptPaperIcon from './assets/icons/conceptPaper.svg';
import demoIcon from './assets/icons/demo.svg';
import legalMemoIcon from './assets/icons/legalMemo.svg';
import finAnalIcon from './assets/icons/finAnalysis.svg';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const loadedDocs = {
  white_paper: white_paper,
  legal_memo: legal_memo
}


class Pdfviewer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      demoClass: "",
      greyedLinksClass: "",
      numPages: "",
      pageNumber: 1,
      PDFDoc: "",
      featuredDoc: ""
    };

    window.SessionOpenModal = () => {
      this.setState({openModal: true});
    };

    window.SessionOpenModal = window.SessionOpenModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  toggleModal(idName) { //make one function with variables

    if(this.state.featuredDoc === idName || this.state.featuredDoc === "") {
      let greyedLinksClass =  this.state.openModal? "" : "linkDiv-Grey";
      let columnClass =  !this.state.openModal? "mainColumnRight" : "mainColumnCentral"
      this.props.shiftMainColumn(columnClass)
      let demoClass =  this.state.openModal? "" : "hidden"

      this.setState({
        openModal: !this.state.openModal,
        featuredDoc: idName,
        PDFDoc: loadedDocs[idName],
        demoClass,
        greyedLinksClass
      });
    }
    else{
      this.setState({
        featuredDoc: idName,
        PDFDoc: loadedDocs[idName],
      });
    }
  }


  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  changePage(){
    this.state.pageNumber < this.state.numPages ?
      this.setState({pageNumber:this.state.pageNumber+1})
      : this.setState({pageNumber:1})
  }

  render() {
    const { pageNumber, numPages } = this.state;
    const {toggleModal} = this;

    const PageTurner = () => {
      return(
        <div className="PageTurner">
          {this.state.pageNumber > 1 ?
            <Button
              className="pageturnerButton"
              labelPosition='left'
              icon='left chevron'
              content='back'
              onClick={() => this.setState({pageNumber:this.state.pageNumber-1})}/>
            : ""}
          <Button
            className="pageturnerButton"
            labelPosition='right'
            icon='right chevron'
            content='next'
            onClick={() => this.changePage()}/>
        </div>
      )
    }

    return(

      <div className="pdfViewer-container">

        <div className={`${this.props.linksClass}`}>
          <a href="https://www.genusdev.com" className={`${this.state.demoClass} linkDiv demo`}>
            <img
              id="demo"
              alt="demo"
              src={demoIcon}/>
            <div className="linkDescrip">DEMO</div>
          </a>

          <div
            className={`${ this.state.featuredDoc === 'white_paper'? "" : this.state.greyedLinksClass} linkDiv`}
            id="white_paper"
            onClick={(e) => toggleModal( e.target.id )}>
            <img
              alt="conceptMap"
              id='white_paper'
              className="linkDiv"
              src={conceptPaperIcon}/>
            <div className="linkDiv"id='white_paper'> CONCEPT PAPER</div>
          </div>

          <div
            className={`${  this.state.featuredDoc === 'legal_memo'? "" : this.state.greyedLinksClass} linkDiv`}
            id="legal_memo"
            onClick={(e) => toggleModal( e.target.id )}>
            <img
              alt="legal_memo"
              id='legal_memo'
              src={legalMemoIcon}/>
            <div
              className="linkDescrip"
              id='legal_memo'>LEGAL MEMO</div>
          </div>

          <div
            className={`${ this.state.featuredDoc === 'fin_analysis'? "" : this.state.greyedLinksClass} linkDiv`}
            id="fin_analysis"
            onClick={(e) => toggleModal( e.target.id )}>
            <img
              alt="fin_analysis"
              id='fin_analysis'
              onClick= {(e) => toggleModal(e.target.id)}
              src= {finAnalIcon}/>
            <div className="linkDescrip" id='fin_analysis'> FINANCIAL ANALYSIS </div>
          </div>

        </div>


        <Modal
          isOpen={this.state.openModal}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          contentLabel="About Modal"
          className="pdfViewer-modal">

            <Icon className="downloadButton bounceOnHover" color="teal" size="big" link name="cloud download" />
            <div>
              <Document
                file={this.state.PDFDoc}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} size="A1"/>
              </Document>
              <p>page <span className='pageNumber'> {pageNumber} </span> of {numPages}</p>
              <PageTurner />
              <Icon className="exitButton bounceOnHover"  color="teal" size="big" link name="times circle" onClick={() => this.toggleModal()} />
            </div>

        </Modal>
      </div>
    );
  }
}

export default Pdfviewer;

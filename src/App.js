import React, { Component } from 'react';
import './App.css';
import PDFViewer from './components/PDFViewer/PDFViewer';
import PDFJSBackend from './backends/pdfjs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <div className="pdfviewer">

          <PDFViewer
            backend={PDFJSBackend}
            src='/myPDF.pdf'
          />

        </div>

      </div>
    );
  }
}

export default App;
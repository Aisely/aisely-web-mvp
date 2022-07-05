import React from 'react';
import GeneratedDoc from './components/GenerateDoc/GeneratedDoc';
import Input from './components/Input/Input';
import './css/util.css'
import './css/app.css'
// import MyDocument from './MyDocument'
// import { PDFViewer } from '@react-pdf/renderer';

function App() {
  return (
    // <PDFViewer>
    //   <MyDocument />
    //   <h1>HI</h1>
    // </PDFViewer>
    <div>
      <Input />
      <GeneratedDoc />
    </div>
  );
}

export default App;

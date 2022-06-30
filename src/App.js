import MyDocument from './MyDocument'
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';

function App() {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
}

export default App;

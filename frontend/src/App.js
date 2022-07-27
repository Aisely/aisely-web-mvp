import React, {useState, useEffect} from 'react';
import GeneratedDoc from './components/GenerateDoc/GeneratedDoc';
import Input from './components/Input/Input';
import './css/util.css'
import './css/app.css'
// import MyDocument from './MyDocument'
// import { PDFViewer } from '@react-pdf/renderer';

function App() {
  // const [data, setData ] = useState('')
  useEffect(() => {
    let data1 = {
      date: "Wed, 11 May 2022 15:10:54 GMT",
      totalVisits: 15,
      url: "www.google.com"
    }
    window.localStorage.setItem("data", JSON.stringify(data1));
    let data = JSON.parse(window.localStorage.getItem("data"));
    console.log(data.date)
  }, [])
  return (
    // <PDFViewer>
    //   <MyDocument />
    //   <h1>HI</h1>
    // </PDFViewer>
    <div>
      <h1>d</h1>
      <Input />
      <GeneratedDoc />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "./components/Card";

function App() {
  return (
      <>
        <Card title={"title1"} text={"text1"} linkHref={"link1"} linkTitle={"link1"}></Card>
        <Card title={"title2"} text={"text2"} linkHref={"link2"} linkTitle={"link2"}>
            <img src={logo} className="card-img-top" alt="logo image"></img>
        </Card>
      </>
  );
}

export default App;

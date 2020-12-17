import logo from './logo.svg';
import './App.css';
import React from 'react';



function App() {
  return (
    // <div className="App">
    // <React.Fragment>
    <>
      <h1>Hello React from VS Code</h1>
  <div>Текущее время: {new Date().toLocaleTimeString()}</div>
  <CurentDate></CurentDate>
  <button onClick={clickHandler}>Push me!</button>
  </>
  // </React.Fragment>
    // </div>
  );
}

export default App;

const style1={
  border: "3px dotted magenta",
  backgrondColor:"skyblue",
  color: 'green',
  textAlign:'center'
  // 'text-align':'center'
}

function CurentDate(){
  return(
    <div style={style1}>Сегодня: {new Date().toLocaleDateString()}</div>
  )
}
function clickHandler(){
  alert("Button was clicked!")
}

import { useState } from 'react';

import './App.css';

function App() {
  const [file, changeFile] = useState();
  const [isFile, switchFile] = useState(false);
  const [x, changeX] = useState("");
  const [y, changeY] = useState("");

  return(    
    <div className="App">
    <div className="horizontal">
      <label htmlFor="file">Upload CSV:</label>
      <input type="file" name="file" onChange={(event) => {
        switchFile(true);
        changeFile(event.target.files[0]);
        // send file? make temporary file htmlFor processing?
        }} />
      <label htmlFor="type-selector">Choose a graph type:</label>
      <select id="type-selector">
        <option value="lin">Linear</option>
        <option value="sc">Scatter</option>
      </select>
        </div>
    <div className="horizontal">
      <label htmlFor="x-axis">Horizontal:</label>
      <input type="text" name="x-axis" onChange={(event) => {changeX(event.target.value)}}/>
      <label htmlFor="y-axis">Vertical:</label>
      <input type="text" name="y-axis" onChange={(event) => {changeY(event.target.value)}}/>
    </div>

    <div className="horizontal">
    <button onClick={() => {console.log("foo")}}>Press me!</button>
    </div>
      {isFile && <>
      <p>File uploaded!</p>
      </>
      }
     </div>
   )
}

export default App;

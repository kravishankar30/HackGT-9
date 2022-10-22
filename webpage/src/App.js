import logo from './logo.svg';
import './App.css';

function App() {
<<<<<<< Updated upstream
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
  const [file, changeFile] = useState();
  const [isFile, switchFile] = useState(false);

  return(    
    <div class="App">
      <p>Upload CSV:</p>
      <input type="file" name="file" onChange={(event) => {
        switchFile(true);
        changeFile(event.target.files[0]);
        // send file?
        }} />

      <label for="type-selector"></label>
      <select id="type-selector">
        <option>Linear</option>
        <option>Scatter</option>
      </select>

      {isFile && <>
      <p>File uploaded!</p>
      </>
      }
     </div>
   )
>>>>>>> Stashed changes
}

export default App;

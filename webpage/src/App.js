import { useState } from 'react';

import './App.css';

function App() {
  const [file, changeFile] = useState();
  const [isFile, switchFile] = useState(false);

  return(    
    <div class="App">
      <p>Upload CSV:</p>
      <input type="file" name="file" onChange={(event) => {
        switchFile(true);
        changeFile(event.target.files[0]);
        }} />

        {isFile && <>
        <p>File uploaded!</p>
        </>
        }
     </div>
   )
}

export default App;

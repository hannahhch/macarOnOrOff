import React from 'react';
import '../styles/App.css';
import '../styles/meyer-reset.css';
import Locator from './Locator/Locator.js';

function App() {
  return (
    <div>
      <Locator></Locator>
      <div >Icons made by 
        <a href="https://www.freepik.com/" title="Freepik">Freepik</a>
         from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> 
         is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" rel="noopener noreferrer" target="_blank">CC 3.0 BY</a>
         </div>
    </div>
  );
}

export default App;


// Future Todos  
// - Use internal storage to remember location preferences
// - Add crazy animations
// - Rotating macaron loader?

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
//@types/react-router-dom @types/react-router



function App() {
  const [count, setCount] = useState(0);
  return (
    
      <div>
        <button onClick={() => setCount(count + 1)}>
          +1
        </button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>
          -1
        </button>
        {count > 10 && <h1>
          {`za dużo o ${count - 10}`}
          </h1>}
        {count < -5 && <h1>
          {`za dużo o ${count + 5}`}
          </h1>}
      </div>

    
  );
  /*return (
   <div>
   <BrowserRouter>
   <Switch>
   <Route path="/movie" component={Movie} />
   <Route path="/search" component={SearchMovie}/>
   <Route path="/" component={Home}/>
   </Switch>
   </BrowserRouter>
   </div>
    
  

  
);*/
}

export default App;

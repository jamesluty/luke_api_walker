import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import './App.css';
import Results from './Components/Results';
import Home from './Components/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:search/:id" element={<Results/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

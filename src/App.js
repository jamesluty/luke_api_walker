import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import './App.css';
import Results from './Components/Results';
import Home from './Components/Home';
import Error from './Components/Error';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:search/:id" element={<Results/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;

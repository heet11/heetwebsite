import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage';
import ProjectContainer from './pages/ProjectContainer';
import Skill from './components/Skill';

function App() {
 
  return (
    <div className="App">
       <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/project" element={<ProjectContainer />} /> */}
        </Routes>
        <ProjectContainer />
        <Skill />
      </BrowserRouter>
    </div>
  );
}

export default App;

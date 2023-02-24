import {Routes, Route} from "react-router-dom";
import Navbar from './components/navbar';
import Homepage from './pages/Homepage';
import Todo from "./pages/Todo";
import NoteList from "./pages/Note";
import Journal from './pages/Journal'
import './assets/css/App.css';

function App() {
  return(
    <div className="app">
      <Navbar/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/todos" element={<Todo/>}/>
        <Route path="/note" element={<NoteList/>}/>
        <Route path="/journal" element={<Journal/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App;

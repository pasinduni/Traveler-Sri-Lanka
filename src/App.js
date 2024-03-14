import { Form, Routes } from 'react-router-dom';
import { browserHistory, Router, Route } from 'react-router';
import './App.css';
import Home from './routes/Home';
import Service from './routes/Service';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} /> 
        <Route path="/contact" element={<Contact />} />
        </Routes>

    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayResult from './components/DisplayResult';
import MultiStock from './components/MultiStock';

function App() {
  return (
    <Routes>
    <Route path="/" element={<DisplayResult/>} />
    <Route path="/multi" element={<MultiStock/>} />
    </Routes>
     
   
  );
}

export default App;

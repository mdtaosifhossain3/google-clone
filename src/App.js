import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/ErrorPage/Error';
import Home from "./components/Home/Home";
import Result from './components/Result/Result';

function App() {

  return (
    <div className="App">
      {/* Routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/result/:id"
            element={<Result/>}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

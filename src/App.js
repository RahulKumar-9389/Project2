import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import PageNotFound from './pages/PageNotFound';

const App = ()=>{
  return <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/property/:id" element={<HotelDetails/>}/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  </>
};

export default App;
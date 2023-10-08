import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Login  from "./views/Login";


const App = () => {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<div>hello root</div>} />
        <Route path="/hello" element={<div>componenta 2</div>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/bugs-overview" element={<div>bugs</div>} />

        </Routes>
    </BrowserRouter>

  )
};
export default App;
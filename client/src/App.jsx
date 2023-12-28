import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Profile from "./pages/Profile.jsx"
import Header from "./components/Header.jsx"
import Signin from "./pages/Signin.jsx"
import Signup from "./pages/Signup.jsx"
const App = () => {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
    </Routes>
   
   
   </BrowserRouter>
  )
}

export default App

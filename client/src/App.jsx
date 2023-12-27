import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Profile from "./pages/Profile.jsx"
import SignUp from "./pages/SignUp"
import Header from "./components/Header.jsx"
import SignIn from "./pages/Signin.jsx"
const App = () => {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
    </Routes>
   
   
   </BrowserRouter>
  )
}

export default App

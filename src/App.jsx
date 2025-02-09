
import Home from "./pages/Home.jsx"
import Test  from "./pages/Test.jsx"
import Login  from "./pages/Login.jsx"
import Details from "./pages/Details.jsx"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Products from "./pages/Products.jsx"

function App() {
 
  return (

    
    <> 

      <Router>
        <Routes>
          
          <Route path="/test"  element ={<Test/>}></Route>
          <Route path="/"  element ={<Home/>}></Route>
          <Route path="/login"  element ={<Login/>}></Route>
          <Route path="/products"  element ={<Products/>}></Route>
          <Route path="/details/:id"  element ={<Details/>}></Route>

        </Routes>
      </Router>
    
    
     
    </>
  )
}

export default App

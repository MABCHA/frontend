import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddBooks from './page/AddBooks';
import Books from './page/Books';
import Home from './page/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import UpdateBooks from './page/UpdateBooks';
import ViewDetailBooks from './components/ViewDetailBooks';


function App() {
  return (
   
    <Router>
  <Navbar/>
 <Routes> 
  <Route exact path="/" element={<Home/>}/>
  <Route  path="/updateBooks" element={<UpdateBooks/>}/>
  <Route  path="/books" element={<Books/>}/>
  <Route  path="/addBooks" element={<AddBooks/>}/>
  <Route path= "view-detail/:id" element={<ViewDetailBooks/>}/>
 </Routes>

    </Router>
  
  );
}

export default App;

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.components';
import Home from './pages/Home.pages';
import About from './pages/About.pages';
import Error from './pages/Error.pages';
import SingleCocktail from './pages/SingleCocktail.pages'; 

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    </Router>
    
  )
    

}

export default App;

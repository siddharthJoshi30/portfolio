import logo from './logo.svg';
//import './App.css';
import  Navbar  from './components/navbar';
import  About  from './components/about';
//import  Works  from './components/works';
import  Skills  from './components/skills';
import  Home  from './components/home';
import  Contact  from './components/contact';


function App() { 
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Works /> */}
      <Contact />
    </div>
  );
}
export default App;

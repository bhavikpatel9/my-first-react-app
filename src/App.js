// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <>
      <Navbar title="Textutils" about="About textutils"/>
      <div className="container">

      <Form heading="Enter text below to analyze"/>
      </div>
    </>
  );
}

export default App;

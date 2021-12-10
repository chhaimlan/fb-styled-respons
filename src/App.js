import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage";

function App() {
  //const user = null,
  return (
    <div className="App">
      {/* {!user?(
         <p>Login</p>
       ) : (
        <>
          <Navbar />
          <HomePage /> 
        </>
      )} */}
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;

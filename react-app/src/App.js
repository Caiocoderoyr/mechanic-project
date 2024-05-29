import './App.css'
import LoginBox from "./components/LoginBox/LoginBox.js"

function App() {

  return (
    <div className="appConteiner">
      <div className="logo">
        <h1 >Mechafix</h1>
        <img  src="Mechanic.png" alt="Mechanic" />
      </div>
      <div>
        <LoginBox/>
      </div>
    </div>
  );
}

export default App;

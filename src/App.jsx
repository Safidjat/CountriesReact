import { useState } from "react";
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"

function App() {
  const [mode, setMode] = useState(() => {
      const savedMode = localStorage.getItem('modus');
      return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  function changeMode(){
      const newMode = !mode;
      setMode(newMode); 
      localStorage.setItem('modus', JSON.stringify(newMode));
  }
  return (
      <div className={mode ? '' : 'dark'}>
        <Header changeMode={changeMode} mode={mode}/>
        <Main />
        <Footer />
      </div>
  )
}

export default App

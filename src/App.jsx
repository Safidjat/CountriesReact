import { useState } from "react";
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import { Route, Routes } from "react-router-dom";
import Region from "./components/main/Region";

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

        <Routes> 
          <Route path='/' element={<Main />} />
          <Route path='/region/:reg' element={<Region />} />
        </Routes>

        <Footer />

        {/* 
          Компонент <Routes> (Менеджер/Диспетчер)
          Его единственная задача — посмотреть на текущий URL в адресной строке браузера и найти первое совпадение среди правил, которые находятся внутри него.
        */}
        {/* 
          <Routes> — это одно конкретное правило в инструкции для менеджера.
          path='/': Это УСЛОВИЕ. Оно говорит: "Эй, менеджер <Routes>! Если текущий путь в адресной строке браузера — это '/' (то есть главная страница, корень сайта, например, https://mysite.com/), то это правило подходит!"
          element={<Main />}: Это ДЕЙСТВИЕ. Оно говорит: "Если условие path выполнилось, то нужно отрендерить (показать) вот этот React-компонент — <Main />".
        */}
      </div>
  )
}

export default App

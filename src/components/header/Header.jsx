import { useEffect, useState } from "react";
import { FaMoon,FaRegMoon } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";


function Header({changeMode,mode}) {
    const regionlar=['Africa', 'Asia', 'Oceania', 'Europe', 'Americas', 'Antarctic'];
    const [secilmisReg,setsecilmisReg]=useState(Array(regionlar.length).fill(false));
    const location=useLocation() // Вызывай хуки только на верхнем уровне.

    // useLocation: Возвращает объект location, который содержит информацию о текущем URL. Нас интересует его свойство pathname. Например, для https://сайт.com/region/europe, location.pathname будет равен "/region/europe".
    // Этот хук, в отличие от useParams, работает в любом компоненте, который находится внутри <BrowserRouter>.

    // useParams — достает динамические параметры из URL. Это как спросить: "Какой ID пользователя указан в адресе /users/123?". Ответ: 123.
    // useLocation — дает информацию обо всем текущем URL. Это как спросить: "Какой сейчас полный адрес?". Ответ: объект с путем /users/123, query-параметрами ?sort=asc и т.д.
    
    useEffect(()=>{
        const reg=location.pathname.split('/').pop()
        const active=regionlar.findIndex(item=>item.toLowerCase()==reg)
        if(active!=-1){
            clicked(active)
        }else setsecilmisReg(Array(regionlar.length).fill(false))
    },[location])

    function clicked(i){
        const newAr=Array(regionlar.length).fill(false)
        newAr[i]=true;
        setsecilmisReg(newAr)
    }
    // <NavLink
    //     to={`region/${item.toLowerCase()}`}
    //     // NavLink передает в функцию isActive: true, если путь совпадает
    //     className={({ isActive }) => 
    //         `flex items-center px-4 -mb-1 border-b-2 dark:border- ${isActive ? 'text-violet-600 border-violet-600' : ''}`
    //     }
    // >
    //     {item}
    // </NavLink>

    return (
        <header className="sticky top-0 p-4 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
            <div className="container flex justify-between items-center h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    {
                        regionlar.slice(0,3).map((item,i)=>{
                            return (<li key={i} className="flex">
                                        <Link to={`region/${item.toLowerCase()}`}   rel="noopener noreferrer" href="#" className={`${secilmisReg[i] ? 'text-violet-600 border-violet-600':''} flex items-center px-4 -mb-1 border-b-2 dark:border-`}>{item}</Link>
                                    </li>)
                        })
                    }
                </ul>
                <Link to={'/'} onClick={()=>{setsecilmisReg(Array(regionlar.length).fill(false))}} aria-label="Back to homepage" className="flex items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 text-violet-400 dark:text-violet-600">
                        <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                        <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                    </svg>
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    {
                        regionlar.slice(3,6).map((item,i)=>{
                            return (<li key={i+3} className="flex">
                                        <Link to={`region/${item.toLowerCase()}`}  rel="noopener noreferrer" href="#" className={`${secilmisReg[i+3] ? 'text-violet-600 border-violet-600':''} flex items-center px-4 -mb-1 border-b-2 dark:border-`}>{item}</Link>
                                    </li>)
                        })
                    }
                </ul>
                {
                    mode ? <FaMoon onClick={changeMode} cursor={'pointer'} size={20}/> : <FaRegMoon onClick={changeMode} cursor={'pointer'} size={20}/>
                }
            </div>
        </header>
    )
}

export default Header

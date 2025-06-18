import { useEffect, useState } from "react"
import Card from "./Card"
import RandomCard from "./RandomCard"
import { FaSearch } from "react-icons/fa";

function Main() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(12)
    const [text, setText] = useState('')
    const [gizlet, setGizlet] = useState(false)
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,region,cca3')
            .then(resp => resp.json())
            .then(info => setData(info))
    }, [])

    if (data.length == 0) return <div className="w-16 m-auto h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 dark:border-violet-600"></div>

    const randomIndex = rand(0, data.length) //render olandada deyisir

    function axtar(){
        return data.filter(item=>item.name.official.toLowerCase().includes(text))
    }


    return (
        <>
            <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className={`${!gizlet ? 'h-0': 'h-[108px]'} transition-all duration-200 ease-in-out overflow-hidden`}>
                    <div className="relative pt-[50px] m-auto max-w-[394px]  flex  gap-2 p-4">
                        <input onChange={(e)=>setText(e.target.value.trim().toLowerCase())} className="bg-white w-full py-[10px] pr-[10px] pl-[40px] rounded-lg text-sm dark:text-gray-900 text-[#9ca3af] placeholder:text-[#9ca3af] border outline-none dark:focus:border-blue-500 border-[#e5e7eb]" placeholder="Search branch name..." type="text" />
                        <svg class="absolute left-[25px] bottom-[29px]  w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path stroke="currentColor" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"></path></svg>
                        <button onClick={axtar} className='cursor-pointer hover:bg-[#ccc] p-[10px] dark:bg-[#6366f1] text-[#1e2939] rounded-lg dark:hover:bg-[#4345a4] bg-white dark:text-white'><FaSearch /></button>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Ölkə
                        <span className="text-violet-400 dark:text-violet-600">axtarışına xoş</span>gəlmisiniz
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Aşağıdan bütün ölkələri axtara və onlar haqqında ətraflı məlumat tapa bilərsiniz!</p>
                    <div className="flex flex-wrap justify-center">
                        <button onClick={()=>setGizlet(!gizlet)} className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 cursor-pointer" fdprocessedid="4xrh9k">Axtarmağa başla</button>
                        <button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 dark:text-gray-900 border-gray-700 dark:border-gray-300 cursor-pointer" fdprocessedid="gothoo">Ölkələrə keçid et</button>
                    </div>
                </div>
            </section>

            <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    {data.length > 0 && <RandomCard {...data[randomIndex]} />}
                    <div id="cont" className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {data.slice(count - 12, count).map(item => <Card key={item.cca3} {...item} />)}
                    </div>
                    <div className="flex justify-center">
                        <button onClick={() => {
                            setCount(data.length - count >= 12 ? count + 12 : count + (data.length - count)); console.log(count);
                        }} type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 dark:bg-gray-50 text-gray-400 dark:text-gray-600 cursor-pointer" fdprocessedid="tze6a">Artır</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main

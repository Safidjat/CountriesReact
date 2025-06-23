import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function RandomCard({flags,name,capital,region,cca3}) {

  const [elem,setElem]=useState({});
  const [borders,setBorders]=useState([]);
      
  useEffect(()=>{
      fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
      .then(resp=>resp.json())
      .then(data=>setElem(data[0]))
  },[])

  useEffect(()=>{
    const all=[]
    if(elem.borders){
      const borderPromises=elem?.borders?.map(item=>{
        return (
            fetch(`https://restcountries.com/v3.1/alpha/${item}`)
            .then(resp=>resp.json())
        )
      })
      Promise.all(borderPromises)
      .then(arr=>{
        arr.forEach(item => {
          all.push(item[0].flags.svg)
        });
        setBorders(all)
      })
    }
  },[elem])
  

  return (
    <article className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900 dark:bg-gray-50">
        <img src={flags?.svg} alt={flags?.alt} className="aspect-[480x360] object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500 dark:bg-gray-500" />
        <div className="p-6 space-y-2 lg:col-span-5">
            <Link to={`/alpha/${cca3}`}><h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{name?.official}</h3></Link>
            <span className="text-xs text-gray-400 dark:text-gray-600">{capital} - {region}</span>
            <p>{flags?.alt}</p>
            <div className="flex flex-wrap items-center gap-2.5">
              {
                elem.borders ? 
                  elem?.borders?.map((item,i)=>{
                    return (
                      <Link key={i} to={`/alpha/${item}`}>
                        <div className="flex flex-col gap-0.5 items-center">
                          <img src={borders[i]} className="w-[50px] h-[50px]" alt={elem?.flags?.alt} />
                          <p className="text-center">{item}</p>
                        </div>
                      </Link>
                    )
                  }) 
                : <span className="text-red-950 font-bold">Qonşuları yoxdur</span>
              }
            </div>
        </div>
    </article>
  )
}

export default RandomCard

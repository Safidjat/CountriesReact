import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Country() {
    const {cca3}=useParams();
    const [elem,setElem]=useState({});
    
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
        .then(resp=>resp.json())
        .then(data=>setElem(data[0]))
    },[cca3])
console.log(elem);

    if (Object.keys(elem).length==0) return <div className="w-16 m-auto h-16 border-4 border-dashed rounded-full animate-spin  border-violet-400 dark:border-violet-600"></div>


    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src={elem.flags.svg} alt={elem.alt} className="aspect-[480x360] w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 dark:bg-gray-50">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <a className="inline-block text-2xl font-semibold sm:text-3xl">{elem.name.official}</a>
                            {elem.coatOfArms.svg ? <img src={elem.coatOfArms.svg} className="w-[40px] h-[60px]"/> : <span className="text-center">No coat of Arms</span>}
                        </div>
                        <p className="text-xs text-gray-400 dark:text-gray-600">
                            <a target="_blank" href={`${elem.maps.googleMaps}`} className="text-xs hover:underline">Open in Google Maps</a>
                        </p>
                    </div>
                    <div className="text-gray-100 dark:text-gray-800">
                        <p>{elem.flags.alt}</p>
                        <p><span className="font-bold">Capital:</span> {elem.capital? elem?.capital?.join(',') : 'No capital'}</p>
                        <p><span className="font-bold">Languages:</span> {elem.languages? Object.values(elem.languages).join(','):'No languages'}</p>
                        <p><span className="font-bold">Subregion:</span> {elem.subregion ? elem.subregion : 'No subregion'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Country

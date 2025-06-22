import { useEffect, useState } from 'react'
import Card from './Card';
import { useParams } from 'react-router-dom';

function Region() {
    const [data,setData]=useState([]);
    const {reg}=useParams()
    console.log(reg);
    
 
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/region/${reg}`)
        .then(info=>info.json())
        .then(info=>setData(info))
    },[reg])

    return (
        <section className="py-6 sm:py-12 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Regiona görə ölkələr</h2>
                    <p className="font-serif font-bold text-sm text-gray-400 dark:text-gray-600">{reg[0].toUpperCase()+reg.slice(1)}</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        data?.map(item=><Card key={item.cca3} {...item}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Region

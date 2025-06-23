import { useEffect, useState } from 'react'
import Card from './Card';
import { Link, useParams } from 'react-router-dom';
import {scrollTo} from '/src/utilities/scroll.js'
import { Pagination } from 'antd';


function Region() {
    const [data,setData]=useState([]);
    const [count,setCount]=useState(12);
    const {reg}=useParams();
    
 
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/region/${reg}`)
        .then(info=>info.json())
        .then(info=>{
            setData(info)
            scrollTo()
        })
    },[reg])

    if (data.length == 0) return <div className="w-16 m-auto h-16 border-4 border-dashed rounded-full animate-spin  border-violet-400 dark:border-violet-600"></div>

    return (
        <section className="py-6 sm:py-12 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Regiona görə ölkələr</h2>
                    <p className="font-serif font-bold text-sm text-gray-400 dark:text-gray-600">{reg[0].toUpperCase()+reg.slice(1)}</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        data?.slice(count-12,count).map(item=><Link key={item.cca3} to={`/alpha/${item.cca3}`}><Card {...item}/></Link>)
                    }
                </div>
                <div className="flex justify-center">

                        {
                            <Pagination
                                onChange={(pageNum,pageSize)=>{
                                    setCount(pageNum*pageSize);
                                    scrollTo();
                                }} 
                                defaultCurrent={1} pageSize={12} total={data.length} />
                        }

                    </div>
            </div>
        </section>
    )
}

export default Region

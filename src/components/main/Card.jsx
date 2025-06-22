function Card({flags,name,capital,region}) {
  return (
    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
        <img 
            alt={flags.alt} src={flags.svg}
            className="object-cover w-[352px] rounded h-44 bg-gray-500 dark:bg-gray-500" 
         />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{name.official}</h3>
            <span className="text-xs text-gray-400 dark:text-gray-600">{ capital}</span>
            <p>{region}</p>
        </div>
    </a>
  )
}

export default Card

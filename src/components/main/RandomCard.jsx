
function RandomCard({flags,name,capital,region}) {
  return (
    <a className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900 dark:bg-gray-50">
        <img src={flags.svg} alt={flags.alt} className="aspect-[480x360] object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500 dark:bg-gray-500" />
        <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{name.official}</h3>
            <span className="text-xs text-gray-400 dark:text-gray-600">{capital} - {region}</span>
            <p>{flags.alt}</p>
        </div>
    </a>
  )
}

export default RandomCard

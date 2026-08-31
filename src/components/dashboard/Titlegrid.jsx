const TitleGrid = ({title="", childer, sidetitle}) => {

    return (

        <div className="p-4 bg-white m-6 shadow w-2xl rounded-2xl h-vh">
            <div className="flex justify-between items-center text-lg font-bold">
                <h1>{title}</h1>
                <button className="text-xs text-blue-600 font-medium hover:text-blue-800 cursor-pointer">{sidetitle}</button>
            </div>
            {childer}
        </div>
    )
}

export default TitleGrid
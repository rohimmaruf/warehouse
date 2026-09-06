const TitleGrid = ({title="", childer, sidetitle}) => {

    return (

        <div className="p-4 bg-white  shadow w-full rounded-xl ">
            <div className="flex justify-between items-center text-lg font-bold ">
                <h1 className="m-4">{title}</h1>
                <button className="text-xs text-blue-600 font-medium hover:text-blue-800 cursor-pointer">{sidetitle}</button>
            </div>
            {childer}
        </div>
    )
}

export default TitleGrid
const TitleGrid = ({title="", childer}) => {

    return (

        <div className="p-4 bg-white m-6 shadow w-2xl rounded-2xl h-vh">
            <div className="flex justify-between items-center text-lg font-bold">
                <h1>{title}</h1>
                
            </div>
            {childer}
        </div>
    )
}

export default TitleGrid
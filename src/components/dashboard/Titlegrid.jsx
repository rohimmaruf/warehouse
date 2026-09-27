import { Icon } from "lucide-react"

const TitleGrid = ({ title = "", childer, sidetitle, subtitle = "", icon = null }) => {

    return (

        <div className="    w-full rounded-xl ">
            <div className="flex justify-between items-center mb-4 ">

                <div className="flex items-center gap-4">
                    {icon}
                    <div>
                        <h1 className="text-lg font-bold">{title}</h1>
                        <p className="text-text-secondary">{subtitle}</p>
                    </div>
                </div>

                <button className="text-xs text-text-green font-medium hover:text-warehouse-sidebar cursor-pointer">{sidetitle}</button>
            </div>
            {childer}
        </div>
    )
}

export default TitleGrid
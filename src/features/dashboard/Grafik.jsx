import { ChartAreaIcon, ChartBar, ChartBarDecreasing, ChartColumn } from "lucide-react"
import LineGrafik from "@/features/dashboard/grafik/Linegrafik"
// import Piegrafik from "@/grafik/Piegrafik"
import TitleGrid from "@/features/dashboard/Titlegrid"

const Grafik = () => {
  return (
    <div className=" rounded-2xl  border-warehouse-border bg-white shadow p-6">

      <div className="mb-5">
        <TitleGrid 
        title="Stock Activity" 
        sidetitle={"View All"} 
        subtitle="Incoming Outgoing stock this week"
        icon={<ChartColumn className="text-green-600" size={35}/>}
        />
      </div>

      <div className="h-[80%]">
        <LineGrafik />
      </div>

    </div>

    // <div className="p-4 bg-white  shadow w-full rounded-2xl ">
    //     <div className="flex justify-between items-center text-lg font-bold">
    //         <ChartAreaIcon/>
    //         <div>
    //             <h1>Stock Activity</h1>
    //             <p>Incoming and Outgoing stock over the last 30 days</p>
    //         </div>
    //         <select className="border-amber-100 rounded p-1 font-semibold">
    //             <option value="">7 Hari terakhir</option>
    //             <option value="">30 Hari terakhir</option>
    //             <option value="">60 Hari terakhir</option>
    //             <option value="">90 Hari terakhir</option>
    //         </select>
    //         {/* Grafik */}
    //         {/* <Bar /> */}

    //     </div>

    //     <LineGrafik />

    // </div>
  )
}

export default Grafik
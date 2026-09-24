import { ChartAreaIcon, ChartBarDecreasing } from "lucide-react"
import LineGrafik from "./grafik/Linegrafik"
import Piegrafik from "./grafik/Piegrafik"

const Grafik = () => {
  return (
    <div className="h-[360px] rounded-2xl border border-warehouse-border bg-warehouse-surface p-6">

      <div className="mb-5">
        <h2 className="text-base font-bold text-warehouse-text">
          Stock Activity
        </h2>

        <p className="mt-1 text-xs text-warehouse-muted">
          Incoming and outgoing stock this week
        </p>
      </div>

      <div className="h-[250px]">
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
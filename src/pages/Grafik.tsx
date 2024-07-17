import { ChevronLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Button } from "@/components/ui/button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const lineChartData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Data Penjualan",
      data: [10, 20, 30, 40, 50, 60, 70],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
const Grafik = () => {
  return (
    <div className="p-3">
      <div className="my-5 flex items-center gap-2">
        <Link to="/home">
          <ChevronLeft className="px-1 py-2 bg-secondary border-2 border-primary w-12 h-12 rounded-full text-primary" />
        </Link>
        <p className="text-3xl text-primary font-semibold">Grafik Pelanggan</p>
      </div>
      <div id="chart" className="mb-3">
        <Line data={lineChartData} />
      </div>
      <div>
        <h1 className="text-3xl text-primary font-semibold">Asisten WarSafe</h1>
        <div className="h-64 overflow-y-auto pt-5">
          <ul className="space-y-5">
            <li className="max-w-lg ms-auto flex justify-end gap-x-2 sm:gap-x-4">
              <div className="grow text-end space-y-3">
                <div className="inline-block bg-primary rounded-2xl p-4 shadow-sm">
                  <p className="text-sm text-white">Tes</p>
                </div>
              </div>
            </li>
            <li className="max-w-lg flex gap-x-2 sm:gap-x-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3">
                <h2 className="font-medium text-gray-800">Hallo</h2>
              </div>
            </li>
            <li className="max-w-lg ms-auto flex justify-end gap-x-2 sm:gap-x-4">
              <div className="grow text-end space-y-3">
                <div className="inline-block bg-primary rounded-2xl p-4 shadow-sm">
                  <p className="text-sm text-white">Tes</p>
                </div>
              </div>
            </li>
            <li className="max-w-lg flex gap-x-2 sm:gap-x-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3">
                <h2 className="font-medium text-gray-800">Hallo</h2>
              </div>
            </li>
            <li className="max-w-lg ms-auto flex justify-end gap-x-2 sm:gap-x-4">
              <div className="grow text-end space-y-3">
                <div className="inline-block bg-primary rounded-2xl p-4 shadow-sm">
                  <p className="text-sm text-white">Tes</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-5 relative">
          <input
            type="text"
            className="w-full border-2 border-primary rounded-md text-sm px-3 py-2 focus-visible:outline-primary"
            placeholder="Ketik sesuatu..."
          />
          <Button
            className="absolute -right-1 top-1 hover:bg-transparent"
            variant={"ghost"}
          >
            <Send className="text-primary " />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Grafik;

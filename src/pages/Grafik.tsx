import instance from "@/instance";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const getLineChartData = async () => {
  const userId = localStorage.getItem("userId");
  const response = await instance.get(`/chart/${userId}`);
  const dataPelanggan = response.data;
  console.log("🚀 ~ getLineChartData ~ dataPelanggan:", dataPelanggan);

  const labels: string[] = [];
  const data: number[] = [];

  // Menentukan tanggal hari Senin minggu ini
  const today = new Date();
  const dayOfWeek = today.getDay();
  const mondayOffset = (dayOfWeek + 6) % 7; // Offset hari untuk mendapatkan Senin
  const mondayDate = new Date(today);
  mondayDate.setDate(today.getDate() - mondayOffset);

  // Mengisi label dan data dari Senin hingga Minggu
  for (let i = 0; i < 7; i++) {
    const date = new Date(mondayDate);
    date.setDate(mondayDate.getDate() + i);
    const day = date.toLocaleDateString("id-ID", { weekday: "long" });
    labels.push(day);
    data.push(
      dataPelanggan.filter(
        (item: any) => item.tanggal === date.toISOString().split("T")[0]
      ).length
    );
  }

  return {
    labels,
    datasets: [
      {
        label: "Data Pelanggan",
        data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
};
const Grafik = () => {
  const [lineChartData, setLineChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLineChartData();
      setLineChartData(data);
    };

    fetchData();
  }, []);
  return (
    <div className="p-3">
      <div className="my-5 flex items-center gap-2">
        <Link to="/home">
          <ChevronLeft className="px-1 py-2 bg-secondary border-2 border-primary w-12 h-12 rounded-full text-primary" />
        </Link>
        <p className="text-3xl text-primary font-semibold">Grafik Pelanggan</p>
      </div>
      <div id="chart" className="mb-3">
        {lineChartData ? (
          <Line data={lineChartData} />
        ) : (
          <p>Loading chart...</p>
        )}
      </div>
      <div>
        <iframe
          src="https://88f9-103-247-12-10.ngrok-free.app/chatbot/32410088-6452-4a67-8fc1-486c31ea8901"
          frameBorder="0"
          className="w-full h-[50vh]"
        ></iframe>
      </div>
    </div>
  );
};

export default Grafik;

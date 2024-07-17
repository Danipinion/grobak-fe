import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, TrendingDown, TrendingUp } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

const Home = () => {
  return (
    <div className="p-3">
      <div
        id="nav"
        className="px-5 bg-secondary p-3 border border-primary rounded-md flex items-center justify-between"
      >
        <div>
          <Link to="/menu">
            <Menu className="w-10 h-10 text-primary" />
          </Link>
        </div>
        <div className="flex flex-wrap-reverse  text-right gap-2 items-center">
          <div className="text-primary font-medium">
            <p className="text-xl">Profile</p>
            <p>Bocil EPeP</p>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div
        id="map"
        className=" p-2 bg-secondary border border-primary rounded-md mt-3"
      >
        <MapContainer
          zoomControl={false}
          center={[-7.69618321290254, 111.51704013619161]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution="s"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-7.69618321290254, 111.51704013619161]}>
            <Popup>SMK</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div id="chart" className="mb-3">
        <Line data={lineChartData} />
      </div>
      <div
        id="hasil"
        className="bg-secondary border-2 border-primary rounded-md"
      >
        <div className="flex gap-3 items-center p-3 text-primary">
          <TrendingUp className="text-green-500" />
          <p>IDR {new Intl.NumberFormat("id-ID").format(100000)}</p>
        </div>
        <hr className="border border-primary" />
        <div className="flex gap-3 items-center p-3 text-primary">
          <TrendingDown className="text-red-500" />
          <p>IDR {new Intl.NumberFormat("id-ID").format(1000000)}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

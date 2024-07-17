import { ChevronRight, LogOut, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="p-3">
      <div className="m-5 flex items-center gap-2">
        <LogOut className="px-2 py-3 bg-secondary border-2 border-primary w-12 h-12 rounded-full" />
        <p className="text-3xl text-primary font-semibold">Menu</p>
      </div>
      <div className="bg-secondary w-full p-3 rounded-md border border-primary">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-primary">
            <MapPin className=" w-7 h-7 " />
            <p className="text-xl font-semibold">Location</p>
          </div>
          <div>
            <ChevronRight className="w-7 h-7 text-primary" />
          </div>
        </div>
        <hr className="my-3 text-primary bg-primary" />
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-primary">
            <MapPin className=" w-7 h-7 " />
            <p className="text-xl font-semibold">Location</p>
          </div>
          <div>
            <ChevronRight className="w-7 h-7 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

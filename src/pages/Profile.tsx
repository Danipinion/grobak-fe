import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="p-3">
      <div className="m-5 flex items-center gap-2">
        <Link to="/home">
          <ChevronLeft className="px-2 py-3 bg-secondary border-2 border-primary w-12 h-12 rounded-full text-primary" />
        </Link>
        <p className="text-3xl text-primary font-semibold">Profile</p>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <Avatar className="w-40 h-40">
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="border-4 border-primary rounded-full"
          />
          <AvatarFallback>CN</AvatarFallback>
          <Camera className="w-10 h-10 absolute bottom-0 right-0 bg-secondary border-2 text-primary border-primary p-2 rounded-full" />
        </Avatar>
        <div className="text-center text-primary font-bold mt-5">
          <p>BOCIL</p>
          <p>Bocil EPeP@gmail.com</p>
        </div>

        <div className="mt-5">
          <Link to="/login">
            <Button className="font-bold w-60 text-secondary">Logout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

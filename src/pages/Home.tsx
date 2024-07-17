import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

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
    </div>
  );
};

export default Home;

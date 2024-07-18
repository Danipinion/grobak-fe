import { ChevronLeft, TrendingDown, TrendingUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Pembukuan = () => {
  return (
    <div className="p-3">
      <div className="my-5 flex items-center gap-2">
        <Link to="/home">
          <ChevronLeft className="px-1 py-2 bg-secondary border-2 border-primary w-12 h-12 rounded-full text-primary" />
        </Link>
        <p className="text-3xl text-primary font-semibold">Pembukuan</p>
      </div>
      <div>
        <div className="bg-secondary border-2 border-primary rounded-md">
          <div>
            <h1 className="text-xl text-primary font-semibold my-2 px-3">
              Keterangan
            </h1>
          </div>
          <hr className="border border-primary " />
          <div id="hasil" className="flex justify-between ">
            <Dialog>
              <DialogTrigger className="flex gap-3 items-center p-3 text-primary border-r-2 w-1/2 border-primary">
                <TrendingUp className="text-green-500" />
                Pemasukan
              </DialogTrigger>
              <DialogContent className="m-3 mx-auto w-3/4 rounded-md">
                <DialogHeader className="text-primary">
                  <DialogTitle>Masukkan Pemasukan</DialogTitle>
                  <input
                    type="text"
                    className="border-2 border-primary rounded-md p-3 focus-visible:outline-primary w-full"
                    placeholder="Masukkan Pemasukan"
                  />
                </DialogHeader>
                <DialogDescription className="w-full">
                  <Button className="w-full">Kirim</Button>
                </DialogDescription>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger className="flex gap-3 items-center p-3 text-primary w-1/2">
                <TrendingDown className="text-red-500" />
                Pengeluaran
              </DialogTrigger>
              <DialogContent className="m-3 mx-auto w-3/4 rounded-md">
                <DialogHeader className="text-primary">
                  <DialogTitle>Masukkan Pengeluaran</DialogTitle>
                  <input
                    type="text"
                    className="border-2 border-primary rounded-md p-3 focus-visible:outline-primary w-full"
                    placeholder="Masukkan Pengeluaran"
                  />
                </DialogHeader>
                <DialogDescription className="w-full">
                  <Button className="w-full">Kirim</Button>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h1 className="text-xl text-primary font-semibold my-2">
              Hari Ini
            </h1>
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
        <div>
          <div>
            <h1 className="text-xl text-primary font-semibold my-2">Kemarin</h1>
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
        <div>
          <div>
            <h1 className="text-xl text-primary font-semibold my-2">
              21-01-2023
            </h1>
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
      </div>
    </div>
  );
};

export default Pembukuan;

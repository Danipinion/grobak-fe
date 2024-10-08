import { getMe } from "@/hook/authSlice";
import instance from "@/instance";
// import MainLayout from "@/layouts/MainLayout";
import { AppDispatch } from "@/store";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useSWR, { mutate } from "swr";

const Komunitas = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state: any) => state.auth);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const [sendMessage, setSendMessage] = useState("");

  const getMessage = async () => {
    const response = await instance.get("/message");
    return response.data;
  };

  const { data, error } = useSWR("message", getMessage, {
    refreshInterval: 1000, // Polling interval in milliseconds
  });

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [data, getMessage, sendMessage]); // Depend on `data` to trigger scroll when messages change

  if (error) {
    localStorage.removeItem("userId");
  }
  if (!data) return <h2>Loading...</h2>;

  const handleSendMessage = async () => {
    if (!sendMessage.trim()) {
      alert("Pesan tidak boleh kosong!");
      return;
    }

    const userId = localStorage.getItem("userId");
    setLoading(true);
    await instance.post(`/message/${userId}`, {
      text: sendMessage,
    });
    mutate("message");
    setLoading(false);
    setSendMessage("");
  };

  return (
    <>
      <h1 className="text-3xl font-bold py-5 text-center">Komunitas</h1>
      <div className="w-full px-5 chat-container" ref={chatContainerRef}>
        <div className="chat-messages">
          {data.map((message: any, index: any) => (
            <div
              className={`flex gap-2.5 ${
                message?.user?.id === user?.id ? "justify-end" : "flex-start"
              }`}
              key={index}
            >
              <div>
                <div className="grid mb-2">
                  <h5
                    className={`${
                      message?.user?.name === user?.name
                        ? "text-right"
                        : "text-left"
                    } text-sm font-semibold leading-snug pb-1`}
                  >
                    {message?.user?.name}
                  </h5>
                  <div
                    className={`px-3 py-2 ${
                      message?.user?.id === user?.id
                        ? "bg-orange-950 text-white"
                        : "bg-gray-200 text-black"
                    } rounded`}
                  >
                    <h2 className="text-sm font-normal leading-snug">
                      {message?.text}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*  CHAT END */}

        <div className="w-[90vw] pl-3 pr-1 py-1 rounded-3xl border bg-gray-200 border-gray-200 items-center gap-2 inline-flex justify-between absolute bottom-20 z-10">
          <div className="flex items-center gap-2">
            <input
              className="grow shrink basis-0 text-black text-xs font-medium leading-4 focus:outline-none bg-gray-200 py-2"
              placeholder="Type here..."
              value={sendMessage}
              onChange={(e) => setSendMessage(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              className="items-center flex px-3 py-2 bg-orange-950 rounded-full shadow"
              onClick={handleSendMessage}
            >
              {loading ? (
                <div className="w-5 h-5 rounded-full border-4 border-t-0 border-white animate-spin"></div>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g id="Send 01">
                      <path
                        id="icon"
                        d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                  <h3 className="text-white text-xs font-semibold leading-4 px-2">
                    Send
                  </h3>
                </>
              )}
            </button>
          </div>
        </div>
        <Link to={"/menu"}>
          <button className="items-center flex  p-1 bg-orange-950 rounded-full shadow absolute  top-6 left-7">
            <h3 className="text-white  font-semibold ">
              <ArrowLeft className="text-white" size={27} />
            </h3>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Komunitas;

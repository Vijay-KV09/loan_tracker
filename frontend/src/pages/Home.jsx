import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();
  function handleNav(path){
    nav(path);
  }

  return (
    <div className="home flex flex-col">
        <div className="flex p-2 justify-between bg-gray-500">
            <img 
            src="../../public/640px-Simpl_Logo.png"
            style={{width:"10rem"}}/>
            <button onClick={() => handleNav("/login")} className="text-white text-2xl bg-sky-500 border-double border-4 border-indigo-600">
                Login
            </button>
            <button onClick={() => handleNav("/register")} className="text-white text-2xl bg-sky-500 border-double border-4 border-indigo-600">
                Register
            </button>
        </div>
        <div className="mt-2 flex p-2 justify-center items-center
        bg-gray-500 mt-20 w-[100vw] h-[100vh]">
           <div>
             video
           </div>  
        </div>
    </div>
  )
}

export default Home

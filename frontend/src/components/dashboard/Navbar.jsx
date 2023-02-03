import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  MenuIcon,
  XIcon,
  ArrowLeftIcon,
  DocumentIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  ChartPieIcon,
  PresentationChartLineIcon,
  BadgeCheckIcon,
  AcademicCapIcon
} from "@heroicons/react/outline";
// import { Link } from "react-router-dom";
import BarChart from "./BarChart";
import { UserData } from "./data";
// import { Bar } from "react-chartjs-2";
import { data } from "@syncfusion/ej2";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import Bar from "../../Bar";
import Pie from "../../Pie";

export default function Navbar() {
  const [nav, setNav] = useState(true);
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });

  const handleClick = () => setNav(!nav);
  return (
    <div>
      <div className="flex">
        <div
          className={
            !nav
              ? "hidden"
              : "sidebar h-[100vh] w-[350px] shadow-2xl bg-indigo-200 "
          }
        >
          <ArrowLeftIcon
            className={!nav ? "hidden" : "float-right m-4 w-5 text-purple-900 "}
            onClick={handleClick}
          />
          <div className="welcome shadow-xl p-8  border-purple-900">
            <h1 className="font-bold text-2xl">Welcome!</h1>
            <h1 className="font-bold text-2xl">Soham Jadiye</h1>
           
          </div>
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="  font-bold text-purple-900 p-6 text-xl shadow-xl">Data Visualization</h1>
            <ul className="flex flex-col space-y-6 pt-2 text-left">
              <li className="text-purple-500  font-semibold p-4 text-xl shadow-xl "><Link className="nav-link flex" to="/barchart">
              <ChartBarIcon className="w-6 text-green-500 "/>
              <p className="ml-2"> Bar Chart</p>
              </Link></li>
              <li className="text-purple-500  font-semibold p-4 text-xl shadow-xl"><Link className="nav-link flex" to="/piechart">
              <ChartPieIcon className="w-6 text-blue-500 "/>
               <p className="ml-2">Pie Chart</p>  
              </Link></li>
              <li className="text-purple-500  font-semibold p-4  text-xl shadow-xl"><Link className="nav-link flex" to="/linechart">
              <PresentationChartLineIcon className ="w-6 text-red-500"/>
              <p className="ml-2">Line Chart</p> 
              </Link></li>
           
            </ul>
          </div>
         

        </div>
        <div className="w-full">
          <div className="navbar flex   h-[100px] w-full bg-gray-300  shadow-2xl items-center justify-between">
            <div className="flex items-center">
              <div className="menu">
                <MenuIcon
                  className={nav ? "hidden" : "w-8 m-8 text-indigo-500"}
                  onClick={handleClick}
                />
              </div>
              <div className="py-10 px-8">
                <h1 className="text-4xl font-extrabold ">Dashboard.</h1>
              </div>
              <div className="py-10 px-4 ">
                <ul className="flex space-x-6  ">
                  <li className=" font-semibold text-lg">
                  <Link className="nav-link" to="/interview">
                  Attempt Interview
              </Link>
                  </li>
                  <li className="font-semibold text-lg">
                    Improve Your Skills
                  </li>
                </ul>
              </div>
            </div>

            <div className=" space-x-4 mr-4 items-center">
              <button className="text-lg text-indigo-500 font-semibold hover:text-black">
                Sign In
              </button>
              <button className=" text-lg text-black rounded-xl font-semibold px-6 py-2 bg-indigo-500 hover:text-indigo-500 hover:border-indigo-500 hover:border-2 hover:bg-transparent">
                Sign Up
              </button>
            </div>
          </div>
          <div className="stats">
            <div className="grid md:grid-cols-4 grid-col-1 gap-10 m-12">
              <div className="bg-gray-300 shadow-2xl h-[200px] grid grid-cols-2  items-center rounded-xl">
                <div className="image m-4 ">
                  <QuestionMarkCircleIcon className="w-20 text-center text-yellow-500 mx-4 " />
                </div>
                <div className="topic m-4 ">
                  <p className="text-base font-semibold">Questions</p>
                  <p className="text-5xl font-bold ">10</p>
                </div>
              </div>
              <div className="bg-gray-300 shadow-2xl h-[200px] grid grid-cols-2  items-center rounded-xl">
                <div className="image m-4 ">
                  <BadgeCheckIcon className="w-20 text-center text-green-500 mx-4 " />
                </div>
                <div className="topic m-4 ">
                  <p className="text-base font-semibold">Score</p>
                  <p className="text-5xl font-bold ">98%</p>
                </div>
              </div>
              <div className="bg-gray-300 shadow-2xl h-[200px] grid grid-cols-2  items-center rounded-xl">
                <div className="image m-4 ">
                  <AcademicCapIcon className="w-20 text-center text-blue-500 mx-4 " />
                </div>
                <div className="topic m-4 ">
                  <p className="text-base font-semibold">Role Match</p>
                  <p className="text-5xl font-bold ">79%</p>
                </div>
              </div>
              <div className="bg-gray-300 shadow-2xl h-[200px] grid grid-cols-2  items-center rounded-xl">
                <div className="image m-4 ">
                  <XIcon className="w-20 text-center text-red-500 mx-4 " />
                </div>
                <div className="topic m-4 ">
                  <p className="text-base font-semibold">Repetition</p>
                  <p className="text-5xl font-bold ">5%</p>
                </div>
              </div>
            </div>
            <div className=" flex m-10 gap-10 justify-between mt-6 ">

              <div className=" bg-gray-300 shadow-2xl   ml-6 w-[316px] pt-4 rounded-xl">
                <PieChart chartData={userData} />
              </div>
              <div className="  bg-gray-300 shadow-2xl  h-[350px] p-16 rounded-xl">
                <BarChart chartData={userData} />
              </div>
              <div className=" bg-gray-300 shadow-2xl  h-[350px]  w-[312px] pl-6 pt-20 rounded-xl">
                <LineChart chartData={userData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

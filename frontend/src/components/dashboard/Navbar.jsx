import React, { useState } from "react";
import {
  MenuIcon,
  XIcon,
  ArrowLeftIcon,
  DocumentIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import BarChart from "./BarChart";
import { UserData } from "./data";
import { Bar } from "react-chartjs-2";
import { data } from "@syncfusion/ej2";
import PieChart from "./PieChart";

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
              : "sidebar h-[100vh] w-[300px] shadow-2xl bg-indigo-200"
          }
        >
          <ArrowLeftIcon
            className={!nav ? "hidden" : "float-right m-4 w-5 text-purple-900 "}
            onClick={handleClick}
          />
          <div className="welcome shadow-xl p-8  border-purple-900">
            <h1 className="font-bold text-xl">Welcome!</h1>
            <h1 className="font-bold text-xl">Soham Jadiye</h1>
           
          </div>
          <div>
            <h1>Charts</h1>
            <ul>
              <li>Bar Chart</li>
              <li>Pie Chart</li>
              <li></li>
              <li></li>
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
                  <li className=" font-semibold text-base">
                    Attempt Interview
                  </li>
                  <li className="font-semibold text-base">
                    Improve Your Skills
                  </li>
                </ul>
              </div>
            </div>

            <div className=" space-x-4 mr-4 items-center">
              <button className="text-indigo-500 font-semibold hover:text-black">
                Sign In
              </button>
              <button className="text-black rounded-xl font-semibold px-6 py-2 bg-indigo-500 hover:text-indigo-500 hover:border-indigo-500 hover:border-2 hover:bg-transparent">
                Sign Up
              </button>
            </div>
          </div>
          <div className="stats">
            <div className="grid md:grid-cols-4 grid-col-1 gap-10 m-12">
              <div className="bg-gray-300 shadow-2xl h-[200px] grid grid-cols-2  items-center rounded-xl">
                <div className="image m-4 ">
                  <QuestionMarkCircleIcon className="w-20 text-center text-green-500 mx-4 " />
                </div>
                <div className="topic m-4 ">
                  <p className="text-base font-semibold">Questions</p>
                  <p className="text-5xl font-bold ">10</p>
                </div>
              </div>
              <div className="bg-gray-300 shadow-2xl h-[200px] grid grid-cols-2  items-center rounded-xl">
                <div className="image m-4 ">
                  <QuestionMarkCircleIcon className="w-20 text-center text-green-500 mx-4 " />
                </div>
                <div className="topic m-4 ">
                  <p className="text-base font-semibold">Questions</p>
                  <p className="text-5xl font-bold ">10</p>
                </div>
              </div>
              <div className="bg-gray-300 shadow-2xl h-[200px] grid grid-cols-2  items-center rounded-xl">
                <div className="image m-4 ">
                  <QuestionMarkCircleIcon className="w-20 text-center text-green-500 mx-4 " />
                </div>
                <div className="topic m-4 ">
                  <p className="text-base font-semibold">Questions</p>
                  <p className="text-5xl font-bold ">10</p>
                </div>
              </div>
              <div className="bg-gray-300 shadow-2xl h-[200px] grid grid-cols-2  items-center rounded-xl">
                <div className="image m-4 ">
                  <QuestionMarkCircleIcon className="w-20 text-center text-green-500 mx-4 " />
                </div>
                <div className="topic m-4 ">
                  <p className="text-base font-semibold">Questions</p>
                  <p className="text-5xl font-bold ">10</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 m-10 gap-10   ">
              <div className="  bg-gray-300 shadow-2xl  h-[350px] rounded-xl">
                <BarChart chartData={userData} />
              </div>

              <div className=" bg-gray-300 shadow-2xl  h-[350px] rounded-xl">
                <PieChart chartData={userData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

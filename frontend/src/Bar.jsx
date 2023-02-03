import React ,{useState} from 'react'
import BarChart1 from "./components/dashboard/BarChart1";
import { UserData } from "./components/dashboard/data";
// import { Bar } from "react-chartjs-2";

export default function Bar() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });

  return (
      <div className='bg-gray-300 h-[600px]  w-[900px]  m-[8rem]  ml-[22rem] rounded-3xl shadow-2xl p-14 ' >
         
         <BarChart1  chartData={userData} />
      </div>
  )
}

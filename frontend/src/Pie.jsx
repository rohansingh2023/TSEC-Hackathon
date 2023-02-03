import React ,{useState} from 'react'
import PieChart1 from "./components/dashboard/PieChart1";
import { UserData } from "./components/dashboard/data";
// import { Bar } from "react-chartjs-2";

export default function Pie() {
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
      <div className=' flex bg-gray-300 h-[600px] rounded-3xl ml-[34rem] mt-20  w-[600px] shadow-2xl p-10 ' >
         
         <PieChart1 className='justify-around' chartData={userData} />
      </div>
  )
}

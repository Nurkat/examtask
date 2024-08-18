import React from "react";
import Header from "../../components/Header";
import {
  AddStudentsIcon,
  AdminIcon,
  ArrowIcon,
  ClassesIcon,
  HeadphonesIcon,
} from "../../assets/images/icons";
import HeaderItem from "../../components/HeaderItem";
import { Link } from "react-router-dom";


function Home() {
  const HeaderList = [
    {
      id: 0,
      title: "Add other admins",
      text: "Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!",
      icon: <AdminIcon />,
    },
    {
      id: 1,
      title: "Add classes",
      text: "Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!",
      icon: <ClassesIcon />,
    },
    {
      id: 2,
      title: "Add students",
      text: "Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!",
      icon: <AddStudentsIcon />,
    },
  ];
  return (
    <div className="bg-[#FCFAFA] w-[75%] ">
      <div className="flex justify-between mb-[53px] px-[100px] pt-[34px]">
        <p className="font-normal text-[16px] text-[#424242] w-[500px]">
          Learn how to launch faster watch our webinar for tips from our experts
          and get a limited time offer.
        </p>
        <Header />
      </div>
      <div className="bg-white w-full">
        <h2 className="text-[36px]  px-[100px] font-semibold text-[#4F4F4F] mb-[23px]">
          Welcome to your dashboard, Udemy school
        </h2>
        <p className="text-[#4F4F4F] px-[140px] text-[24px] font-semibold ">
          Uyo/school/@teachable.com
        </p>
        <ul className="px-[140px] mt-[50px] absolute ">
          {HeaderList.map((value) => (
            <HeaderItem key={value.id} value={value} />
          ))}
          <button className="bg-[#152259] space-x-[7px] p-[10px] rounded-[30px] flex items-center relative left-[652px] bottom-[90px]">
            <HeadphonesIcon />
            <p className="text-white pl-10px pr-[20px]">Support</p>
            <ArrowIcon />
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Home;

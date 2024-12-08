import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import { employeeData } from "../constants/index";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const EmployeeCard = ({ name, jobTitle, imageUrl, task }) => {
  return (
    <div className="w-full rounded-md border border-gray-200 bg-white p-5 shadow flex items-center justify-center flex-col">
      <Avatar>
        <AvatarImage src={imageUrl} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div className="p-5 text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 text-lg">{jobTitle}</p>
        <p className="text-lg text-slate-800 mb-4">Aufgaben:</p>
        <p className="text-gray-600 text-md mb-4">{task}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Facebook className="text-orange-800" />
        <Twitter className="text-orange-800" />
        <Linkedin className="text-orange-800" />
      </div>
    </div>
  );
};

const EmployeeSection = () => {
  return (
    <div className="px-4 py-6 md:py-12 bg-orange-400 rounded-sm">
      <div className="container mx-auto">
        <h2 className="text-lg md:text-3xl font-thin mb-8 text-center font-roboto text-slate-700">
          Unser Team setzt Ihre Wünsche professionell und zeitnah um
        </h2>
        <div className="max-w-[400px] mx-auto grid grid-cols-1 gap-16">
          {employeeData.map((employee) => (
            <EmployeeCard
              key={employee.id}
              name={employee.name}
              jobTitle={employee.title}
              imageUrl={employee.img}
              task={employee.task}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeSection;

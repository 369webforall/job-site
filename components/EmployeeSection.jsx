import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import { employeeData } from "../constants/index";

const EmployeeCard = ({ name, jobTitle, imageUrl }) => {
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

        <p className="mb-3 font-normal text-gray-700">{jobTitle}</p>
      </div>
    </div>
  );
};

const EmployeeSection = () => {
  return (
    <div className="px-4 py-8 bg-orange-100 rounded-sm">
      <div className="container mx-auto">
      <h2 className="text-lg md:text-3xl font-thin mb-4 text-center font-roboto text-slate-700">
        Unser Team setzt Ihre Wünsche professionell und zeitnah um
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {employeeData.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            jobTitle={employee.title}
            imageUrl={employee.img}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default EmployeeSection;

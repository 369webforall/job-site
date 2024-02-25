import React from 'react';
import Image from 'next/image'
import {employeeData} from '../constants/index';

const EmployeeCard = ({ name, jobTitle, imageUrl }) => {
  return (
   
        <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow">
   
            <Image className="mx-auto rounded-full" src={imageUrl} alt={name} width={200} height={200} objectFit='cover'/>
       
          <div className="p-5 text-center">
         
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
          
            <p className="mb-3 font-normal text-gray-700">{jobTitle}</p>
            
          </div>
        </div>
      );

};

const EmployeeSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-orange-100 rounded-sm">
      <h2 className="text-lg md:text-3xl font-thin mb-4 text-center font-roboto text-slate-700">Unser Team setzt Ihre Wünsche professionell und zeitnah um</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {employeeData.map((employee)=>(
 <EmployeeCard
 key={employee.id}
 name={employee.name}
 jobTitle={employee.title}
 imageUrl={employee.img}
/>
        ))}
      </div>
    </div>
  );
};

export default EmployeeSection;
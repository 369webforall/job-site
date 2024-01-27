import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import Link from 'next/link';
import { HiArrowLongRight } from 'react-icons/hi2';
const CardPage = ({ job }) => {
  const { title, description, company, details, link } = job;
  return (
    <Card className="lg:max-w-md w-full h-72 flex justify-between flex-col">
      <CardHeader>
        <CardDescription>{company}</CardDescription>
        <CardTitle className="text-gray-900 py-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="bg-orange-600 hover:bg-orange-800  py-2">
        <Link href={`/jobs/${link}`} className="text-white">
          <span className="flex gap-2 items-center">
            {details}
            <HiArrowLongRight />
          </span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardPage;

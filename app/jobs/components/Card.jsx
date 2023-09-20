import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { HiArrowLongRight } from 'react-icons/hi2';
const CardPage = ({ job }) => {
  const { title, description, company, details } = job;
  return (
    <Card className="lg:max-w-md w-full">
      <CardHeader>
        <CardDescription>{company}</CardDescription>
        <CardTitle className="text-gray-900 py-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="bg-orange-600 hover:bg-orange-800 flex items-center justify-end py-2">
        <Link href="/jobs/id" className="text-white">
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

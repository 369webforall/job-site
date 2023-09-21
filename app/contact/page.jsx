import React from 'react';
import ContactForm from '@/app/contact/ContactForm';
import GoogleMapComponent from '@/app/contact/GoogleMap';
import Calendly from './Calendly';
import Address from './Address';
export const metadata = {
  title: 'LD Personalvermittlung - contact',
  description: 'Book a meeting',
};
const Contact = () => {
  return (
    <div className="max-w-[90%] mx-auto px-10 py-10">
      <div className="flex flex-col gap-10 lg:flex-row">
        <Address />

        <div className="max-w-lg">
          <ContactForm />
        </div>

        <div className=" flex items-center  flex-col flex-1 ">
          <h1 className="text-3xl font-semibold mb-4 text-orange-600 underline ">
            Schedule a Meeting
          </h1>

          <Calendly />
        </div>
      </div>

      <div>
        {/* <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-semibold mb-4">Google Map</h1>
          <GoogleMapComponent />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import ContactForm from '@/components/ContactForm';
import GoogleMapComponent from '@/components/GoogleMap';

const Contact = () => {
  return (
    <div>
      <h1>Kontaktieren Sie uns</h1>
      <ContactForm />
      <div>
        <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-semibold mb-4">Google Map</h1>
          <GoogleMapComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;

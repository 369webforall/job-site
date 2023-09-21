'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    telephone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://formspree.io/YOUR_FORMSPREE_ID', formData);

      // Optionally, you can handle success and error states here
      // For example, show a success message to the user
      alert('Message sent successfully!');
    } catch (error) {
      // Handle any errors that occur during the submission
      console.error('Error:', error);
      // Optionally, you can show an error message to the user
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl mb-4">Kontaktieren Sie uns</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="name">
            Vollständiger Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="email">
            E-Mail*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="telephone">
            Telefonnummer*
          </label>
          <input
            type="telephone"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="message">
            Ihre Nachricht an uns*
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          ></textarea>
        </div>
        <div className="my-4">
          <p className="text-sm">
            LD Personalvermittlung benötigt die Kontaktinformationen, die Sie
            uns zur Verfügung stellen, um Sie bezüglich unserer Produkte und
            Dienstleistungen zu kontaktieren. Sie können sich jederzeit von
            diesen Benachrichtigungen abmelden. Informationen zum Abbestellen
            sowie unsere Datenschutzpraktiken und unsere Verpflichtung zum
            Schutz Ihrer Privatsphäre finden Sie in unserer
            <Link href="/datenschutz" className="italic text-orange-600">
              Datenschutzerklärung.
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="bg-yellow-700 text-white py-2 px-4 rounded hover:bg-yellow-900 transition-colors"
        >
          EINSENDEN
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

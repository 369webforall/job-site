'use client';
import React, { useState } from 'react';
import Link from 'next/link';
const ContactForm = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    message: '',
    telephone: '',
  });
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value) return;
    const formData = new FormData();
    formData.append('name', value.name);
    formData.append('email', value.email);
    formData.append('telephone', value.telephone);
    formData.append('message', value.message);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      // handle the error
      if (!res.ok) {
        throw new Error(await res.text());
      } else {
        setSuccess(true);
      }

      if (success) {
        setValue({
          name: '',
          email: '',
          message: '',
          telephone: '',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
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
            value={value.name}
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
            value={value.email}
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
            value={value.telephone}
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
            value={value.message}
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
          className="bg-orange-400 text-white py-2 px-4 mt-4 rounded hover:bg-orange-500 transition-colors"
        >
          EINSENDEN
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

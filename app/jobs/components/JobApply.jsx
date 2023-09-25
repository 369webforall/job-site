'use client';
import React, { useState } from 'react';

const ApplyNowForm = () => {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState({
    surname: '',
    telephone: '',
    email: '',
    applicationAs: '',
    comment: '',
  });

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFileChange = (e) => {
    // Handle file input change

    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value) return;
    const formData = new FormData();
    formData.append('surname', value.surname);
    formData.append('email', value.email);
    formData.append('telephone', value.telephone);
    formData.append('applicationAs', value.applicationAs);
    formData.append('comment', value.comment);
    formData.append('attachment', file);
    try {
      const res = await fetch('/api/jobs', {
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
          surname: '',
          telephone: '',
          email: '',
          applicationAs: '',
          comment: '',
        });
        setFile(null);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Apply Now</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="surname" className="block text-gray-600 font-medium">
            Surname:
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={value.surname}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-600 font-medium">
            Telephone:
          </label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            value={value.telephone}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={value.email}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="applicationAs"
            className="block text-gray-600 font-medium"
          >
            Application as:
          </label>
          <input
            type="text"
            id="applicationAs"
            name="applicationAs"
            value={value.applicationAs}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="attachment"
            className="block text-gray-600 font-medium"
          >
            Application Documents:
          </label>
          <input
            type="file"
            id="attachment"
            name="attachment"
            onChange={handleFileChange}
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-600 font-medium">
            Comment:
          </label>
          <textarea
            id="comment"
            name="comment"
            value={value.comment}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyNowForm;

'use client';
import React, { useState } from 'react';

const ApplyNowForm = () => {
  const [formData, setFormData] = useState({
    surname: '',
    address: '',
    email: '',
    applicationAs: '',
    applicationDocuments: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log(formData);
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
            value={formData.surname}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-600 font-medium">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
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
            value={formData.email}
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
            value={formData.applicationAs}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="applicationDocuments"
            className="block text-gray-600 font-medium"
          >
            Application Documents:
          </label>
          <input
            type="file"
            id="applicationDocuments"
            name="applicationDocuments"
            value={formData.applicationDocuments}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-600 font-medium">
            Comment:
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyNowForm;

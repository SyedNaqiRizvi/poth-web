'use client'
import { useState } from 'react';
import Image from 'next/image'
import {
  Wrapper, 
  FieldContainer,
  LeftColumn,
  CenterColumn,
  RightColumn} from './styles'
  import logo from '../../public/logo.png'

export default function SubmitPoem() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    poem: '',
    terms: false,
  });
  const [error, setError] = useState<string|null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.terms) {
      setError('You must agree to the terms and conditions.');
      return;
    }
    try {
      const res = await fetch('/api/submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  if (submitted) {
    return (
      <Wrapper style={{height: '100vh'}}>
      <LeftColumn />
      <CenterColumn>
        <h2>Thank you for your submission</h2>
        <p>
          Please allow until the submission deadline to receive a response
          about your submission. For any other inquiries feel free to send us
          a DM on instagram (@poetsofthehousehold) or email us at poetsatthehousehold@gmail.com.

          Thank you!
        </p>
      </CenterColumn>
      <RightColumn />
    </Wrapper>
    );
  }

  return (
    <Wrapper>
      <LeftColumn />
      <CenterColumn>
        <Image
          src={logo}
          alt="Logo"
          width="150"
          height="150"
        />
      <form
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Submit your poem
        </h2>
        <p>
          <i>
            Please note that not all submissions will be published on our instagram page.
            Submissions are subject to review before they are accepted. In some cases
            we may advise participants to revise the poem and re-submit. This is to ensure
            that we continue to strive for excellence in our craft and excellent work is
            appreciated.
          </i>
        </p>

        <FieldContainer>
          <label htmlFor="name" >
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FieldContainer>

        <FieldContainer>
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FieldContainer>

        <FieldContainer>
          <label htmlFor="instagram" className="block text-gray-700 mb-1">
            Instagram (optional)
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FieldContainer>

        <FieldContainer>
          <label htmlFor="poem" >
            Your Poem
          </label>
          <textarea
            required
            id="poem"
            name="poem"
            value={formData.poem}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </FieldContainer>

        <div>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 text-gray-700">
            <i>I agree to allowing Poets of The Household to publish my poem 
              if my submission is accepted.</i>
          </label>
        </div>

        {error && <p className="mb-4 text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition duration-200"
        >
          Submit
        </button>
      </form>
      </CenterColumn>
      <RightColumn />
    </Wrapper>
  );
}

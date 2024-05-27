import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Get the first selected file
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!file) {
      alert('Please select a file first');
      return;
    }

    // Create a FormData object
    const formData = new FormData();
    // Append the selected file to the FormData object
    formData.append('file', file);

    try {
      // Send a POST request with the form data to the server
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file');
    }
  };

  return (
    <>
      Home ground manze!

      <form onSubmit={handleSubmit}>
        <input type="file" name="doc" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

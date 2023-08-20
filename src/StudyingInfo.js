import React, { useEffect } from 'react';
import './style.css';

export default function PersonInfo({ page, setPage, formData, setFormData }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    //    console.log(name, value);
  }
  useEffect(() => {
    if (!formData.username || !formData.password) {
      const data = localStorage.getItem('personalInfo');
      console.log(data);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const { pageNumber, ...userData } = formData;
    console.log('Data sent to API: ', userData);

    console.log('Done');
    localStorage.removeItem('personalInfo');
  }

  return (
    <div>
      <h1>Studying Info!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="university"
          type="text"
          placeholder="university"
          required
          value={formData.university}
          onChange={handleChange}
        />
        <input
          name="gpa"
          type="number"
          placeholder="GPA"
          required
          value={formData.gpa}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
      <button disabled={page === 1 ? true : false} onClick={() => setPage(1)}>
        prev
      </button>
    </div>
  );
}

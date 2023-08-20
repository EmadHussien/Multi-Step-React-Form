import React, { useState } from 'react';
import './style.css';

export default function PersonInfo({ page, setPage, formData, setFormData }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    //console.log(name, value);
  }
  function handleNext() {
    if (!formData.username || !formData.password) {
      return window.alert('please fill all fields');
    } else {
      formData.pageNumber = 2
      localStorage.setItem('personalInfo', JSON.stringify(formData));
      setPage(2);
    }
  }

  return (
    <div>
      <h1>Personal Info!</h1>
      <form>
        <input
          name="username"
          type="text"
          placeholder="username"
          required
          value={formData.username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={page === 2 ? true : false}
          onClick={handleNext}
        >
          next
        </button>
      </form>
    </div>
  );
}

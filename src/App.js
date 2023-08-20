import React, { useState } from 'react';
import './style.css';
import PersonInfo from './PersonInfo';
import StudyingInfo from './StudyingInfo';
export default function App() {
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem('personalInfo')) || {
      username: '',
      password: '',
      university: '',
      gpa: 0,
      pageNumber: 1,
    }
  );
  const [page, setPage] = useState(formData.pageNumber);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Hello in register!</h1>

      {page === 1 ? (
        <PersonInfo
          page={page}
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        <StudyingInfo
          page={page}
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}

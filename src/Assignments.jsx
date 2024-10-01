import React, { useState } from 'react';
import './Assignments.css'; 

function Assignments() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({ A: '', B: '', C: '', D: '' });
  const [questionsList, setQuestionsList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQuestion = { question, options };

    if (editIndex !== null) {
      
      const updatedList = questionsList.map((item, index) => 
        index === editIndex ? newQuestion : item
      );
      setQuestionsList(updatedList);
      setEditIndex(null); 
    } else {
      
      setQuestionsList((prevList) => [...prevList, newQuestion]);
    }

    
    setQuestion('');
    setOptions({ A: '', B: '', C: '', D: '' });
  };

  const handleEdit = (index) => {
    const questionToEdit = questionsList[index];
    setQuestion(questionToEdit.question);
    setOptions(questionToEdit.options);
    setEditIndex(index);
  };

  return (
    <div className="assignments-container">
      <h1>Assignments</h1>
      <form className="assignment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Question:</label>
          <input 
            type="text" 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Option A:</label>
          <input 
            type="text" 
            name="A" 
            value={options.A} 
            onChange={handleOptionChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Option B:</label>
          <input 
            type="text" 
            name="B" 
            value={options.B} 
            onChange={handleOptionChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Option C:</label>
          <input 
            type="text" 
            name="C" 
            value={options.C} 
            onChange={handleOptionChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Option D:</label>
          <input 
            type="text" 
            name="D" 
            value={options.D} 
            onChange={handleOptionChange} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">
          {editIndex !== null ? 'Update Question' : 'Add Question'}
        </button>
      </form>

      <h2>Questions List</h2>
      <ul className="questions-list">
        {questionsList.map((item, index) => (
          <li key={index} className="question-item">
            <strong>Question {index + 1}: {item.question}</strong><br />
            A) {item.options.A}<br />
            B) {item.options.B}<br />
            C) {item.options.C}<br />
            D) {item.options.D}<br />
            <button onClick={() => handleEdit(index)} className="edit-button">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;

import React, { useState } from 'react';

const labelStyle = { 
  display: 'block', 
  marginBottom: '5px', 
  fontSize: '13px', 
  fontWeight: '600', 
  color: '#475569' 
};

const inputStyle = { 
  width: '100%', 
  padding: '10px', 
  border: '1px solid #cbd5e1', 
  borderRadius: '6px', 
  boxSizing: 'border-box' 
};

function SubmissionForm({ onAddAssignment, subjects }) {
  const [newTitle, setNewTitle] = useState('');
  const [newSubject, setNewSubject] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle || !newSubject || !newDueDate) {
      alert('Please fill in all fields!');
      return;
    }

    onAddAssignment({ newTitle, newSubject, newDueDate });

    setNewTitle('');
    setNewSubject('');
    setNewDueDate('');
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h3 style={{ marginTop: 0, color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
        Create Assignment
      </h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={labelStyle}>Assignment Title</label>
          <input 
            type="text" 
            placeholder="e.g. Lab Report 1" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            style={inputStyle} 
          />
        </div>
        
        <div>
          <label style={labelStyle}>Subject</label>
          <select value={newSubject} onChange={(e) => setNewSubject(e.target.value)} style={inputStyle}>
            <option value="">Select Subject</option>
            {subjects.map((sub, idx) => (
              <option key={idx} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={labelStyle}>Due Date</label>
          <input 
            type="date" 
            value={newDueDate} 
            onChange={(e) => setNewDueDate(e.target.value)} 
            style={inputStyle} 
          />
        </div>

        <button 
          type="submit" 
          style={{ padding: '12px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Publish Assignment
        </button>
      </form>
    </div>
  );
}

export default SubmissionForm;
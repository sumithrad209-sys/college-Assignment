import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SubmissionForm from './components/SubmissionForm';
import Table from './components/Table';
import './App.css';

function App() {
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'DBMS Assignment 1', subject: 'DBMS', dueDate: '2026-06-25', status: 'Pending' },
    { id: 2, title: 'React Lab Report', subject: 'Web Dev', dueDate: '2026-06-20', status: 'Submitted' }
  ]);

  const [filterSubject, setFilterSubject] = useState('All');
  const subjects = ['DBMS', 'Web Dev', 'Data Structures', 'Operating Systems'];

  const handleAddAssignment = ({ newTitle, newSubject, newDueDate }) => {
    const newAssign = {
      id: Date.now(),
      title: newTitle,
      subject: newSubject,
      dueDate: newDueDate,
      status: 'Pending'
    };
    setAssignments([...assignments, newAssign]);
  };

  const handleStatusChange = (id, newStatus) => {
    setAssignments(assignments.map(assign => 
      assign.id === id ? { ...assign, status: newStatus } : assign
    ));
  };

  const handleDelete = (id) => {
    setAssignments(assignments.filter(assign => assign.id !== id));
  };

  const filteredAssignments = assignments.filter(assign => {
    return filterSubject === 'All' || assign.subject === filterSubject;
  });

  return (
    <div className="app-container">
      <Navbar />
      <Dashboard assignments={assignments} />
      <div className="main-content-grid">
        <SubmissionForm onAddAssignment={handleAddAssignment} subjects={subjects} />
        <Table 
          assignments={filteredAssignments} 
          subjects={subjects}
          onStatusChange={handleStatusChange} 
          onDelete={handleDelete} 
          filterSubject={filterSubject}
          setFilterSubject={setFilterSubject}
        />
      </div>
    </div>
  );
}

export default App;
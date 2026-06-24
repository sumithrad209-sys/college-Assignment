import React from 'react';

const tableHeaderStyle = { padding: '12px 10px', fontWeight: '600' };
const tableCellStyle = { padding: '14px 10px', color: '#334155' };

const statusBadgeStyle = (status) => {
  let bg = '#f59e0b';
  if (status === 'Submitted') bg = '#10b981';
  if (status === 'Late') bg = '#ef4444';
  
  return {
    padding: '4px 8px',
    borderRadius: '12px',
    color: 'white',
    fontSize: '11px',
    fontWeight: 'bold',
    backgroundColor: bg
  };
};

function Table({ assignments, subjects, onStatusChange, onDelete, filterSubject, setFilterSubject }) {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3 style={{ margin: 0, color: '#1e293b' }}>Assignments List</h3>
        
        {/* Subject Filter Dropdown */}
        <div>
          <label style={{ marginRight: '8px', fontSize: '13px', fontWeight: '600' }}>Filter Subject: </label>
          <select 
            value={filterSubject} 
            onChange={(e) => setFilterSubject(e.target.value)}
            style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          >
            <option value="All">All Subjects</option>
            {subjects.map((sub, idx) => (
              <option key={idx} value={sub}>{sub}</option>
            ))}
          </select>
        </div>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '13px' }}>
            <th style={tableHeaderStyle}>Title</th>
            <th style={tableHeaderStyle}>Subject</th>
            <th style={tableHeaderStyle}>Due Date</th>
            <th style={tableHeaderStyle}>Status</th>
            <th style={tableHeaderStyle}>Change Status</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assign) => (
            <tr key={assign.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={tableCellStyle}><strong>{assign.title}</strong></td>
              <td style={tableCellStyle}>
                <span style={{ backgroundColor: '#e2e8f0', padding: '3px 8px', borderRadius: '4px', fontSize: '12px' }}>
                  {assign.subject}
                </span>
              </td>
              <td style={tableCellStyle}>{assign.dueDate}</td>
              <td style={tableCellStyle}>
                <span style={statusBadgeStyle(assign.status)}>{assign.status}</span>
              </td>
              <td style={tableCellStyle}>
                <select 
                  value={assign.status} 
                  onChange={(e) => onStatusChange(assign.id, e.target.value)}
                  style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', backgroundColor: '#fff', cursor: 'pointer' }}
                >
                  <option value="Pending">Pending</option>
                  <option value="Submitted">Submitted</option>
                  <option value="Late">Late</option>
                </select>
              </td>
              <td style={tableCellStyle}>
                <button 
                  onClick={() => onDelete(assign.id)}
                  style={{ padding: '4px 8px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
import React from 'react';

const summaryCardStyle = (color) => {
  return {
    flex: '1 1 200px',
    padding: '20px',
    borderRadius: '8px',
    color: 'white',
    backgroundColor: color,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
  };
};

function Dashboard({ assignments }) {
  const total = assignments.length;
  const submitted = assignments.filter(a => a.status === 'Submitted').length;
  const pending = assignments.filter(a => a.status === 'Pending').length;
  const late = assignments.filter(a => a.status === 'Late').length;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
      <div style={summaryCardStyle('#3b82f6')}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', opacity: 0.9 }}>Total Assignments</h4>
        <p style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>{total}</p>
      </div>
      <div style={summaryCardStyle('#10b981')}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', opacity: 0.9 }}>Submitted</h4>
        <p style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>{submitted}</p>
      </div>
      <div style={summaryCardStyle('#f59e0b')}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', opacity: 0.9 }}>Pending</h4>
        <p style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>{pending}</p>
      </div>
      <div style={summaryCardStyle('#ef4444')}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', opacity: 0.9 }}>Late</h4>
        <p style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>{late}</p>
      </div>
    </div>
  );
}

export default Dashboard;
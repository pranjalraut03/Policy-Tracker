import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchPoliciesComponent() {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [policies, setPolicies] = useState([
    { id: 1, name: 'Life Insurance', details: 'Details about life insurance', tenure: 10, maturityAmount: 50000, premiumAmount: 5000 },
    // Add more policies here
  ]);

  const handleSearch = () => {
    // Implement search logic here based on searchCriteria and searchValue
  };

  return (
    <div>
      <div>
        <label>Search By:</label>
        <select value={searchCriteria} onChange={(e) => setSearchCriteria(e.target.value)} required>
          <option value="">Select Search Criteria</option>
          <option value="tenure">Tenure</option>
          <option value="maturityAmount">Maturity Amount</option>
          <option value="premiumAmount">Premium Amount</option>
        </select>
      </div>
      <div>
        <label>Search Value:</label>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} required />
      </div>
      <button onClick={handleSearch}>Search</button>
      <div className="policy-cards">
        {policies.map((policy) => (
          <div key={policy.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{policy.name}</h5>
              <p className="card-text">{policy.details}</p>
              <Link to={`/subscribe/${policy.id}`} className="btn btn-primary">Subscribe</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPoliciesComponent;

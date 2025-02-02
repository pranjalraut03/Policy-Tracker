import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SubscribePolicyComponent() {
  const { policyId } = useParams();
  const [policy, setPolicy] = useState(null);
  const [subscriptionDetails, setSubscriptionDetails] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Fetch policy details using policyId
    const fetchedPolicy = { id: policyId, name: 'Life Insurance', details: 'Details about life insurance' };
    setPolicy(fetchedPolicy);
  }, [policyId]);

  const handleInputChange = (e) => {
    setSubscriptionDetails({ ...subscriptionDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit subscription details
    setSubmitted(true);
  };

  if (submitted) {
    return <div>Acknowledgement: Subscription successful!</div>;
  }

  if (!policy) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{policy.name}</h2>
      <p>{policy.details}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={subscriptionDetails.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={subscriptionDetails.email} onChange={handleInputChange} required />
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default SubscribePolicyComponent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
  const [requirements, setRequirements] = useState([]);
  const [selectedRequirement, setSelectedRequirement] = useState(null);
  const [bidAmount, setBidAmount] = useState('');

  // fetch requirements data from the ERPNext API
  useEffect(() => {
    axios.get('https://steel.smartyerp.in/api/resource/Requirement', {
      headers: {
        Authorization: 'Token your_api_key',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setRequirements(response.data.data);
      })
      .catch(error => {
        console.log('Error fetching requirements data:', error);
      });
  }, []);

  // handle bid submission
  function handleSubmit(event) {
    event.preventDefault();

    axios.post('https://steel.smartyerp.in/api/resource/Bid', {
      requirement: selectedRequirement,
      bid_amount: bidAmount
    }, {

    })
      .then(response => {
        console.log('Bid data posted successfully');
      })
      .catch(error => {
        console.log('Error posting bid data:', error);
      });
  }

  return (
    <div style={{margin:"150px"}}>
      <h2>Requirements List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {requirements.map(requirement => (
            <tr key={requirement.name}>
              <td>{requirement.name}</td>
              <td>{requirement.title}</td>
              <td>{requirement.description}</td>
              <td>
                <button onClick={() => setSelectedRequirement(requirement.name)}>Bid</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRequirement && (
        <form onSubmit={handleSubmit}>
          <label>
            Bid Amount:
            <input type="text" value={bidAmount} onChange={e => setBidAmount(e.target.value)} />
          </label>
          <button type="submit">Submit Bid</button>
        </form>
      )}
    </div>
  );
}

export default Test;
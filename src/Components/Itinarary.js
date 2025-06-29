import React, { useState } from 'react'
import { activities } from './Activities';

export default function Itinarary({ packages, placess, placese }) {
  const [acts, setActs] = useState([])

  const eastIds = [1, 3, 5, 7];
  const handleAdd = () => {
    const newacts = acts.map((item) => {
      if (acts.id === item.id) {
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      } else {
        return item;
      }
    });
    setActs(newacts);
  };
  

  return (
    <div className="itinarary-wapper">
      {packages.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <ul>
            {(eastIds.includes(item.id) ? placess : placese).map((p, index) => (
              <li key={index}>
                <strong>{p.day}:</strong> {p.place}
              </li>
            ))}
          </ul>
          <h4>Total for the hire: LKR {item.price1}</h4>
          <h3>Activites</h3>
          <div className="activities">
            {activities.map((a) => (
              <li
                className="activity"
                key={a.id}
                onClick={handleAdd}
                style={{
                  textDecorationLine: acts.isSelected ? "line-through" : "none",
                }}
              >
                {a.act}
              </li>
            ))}
          </div>
          <br />
          <h4>Total for the activities: LKR {item.price1}</h4>
        </div>
      ))}
    </div>
  );
}

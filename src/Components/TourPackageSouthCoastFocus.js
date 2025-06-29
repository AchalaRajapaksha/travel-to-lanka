import React from "react";

export default function TourPackageSouthCoastFocus({ item, placess=[], placese=[], handleclick }) {
  return (
    <div
      className="package-wrapper"
      onClick={() => {
        handleclick(item);
      }}
    >
      <h3>{item.name}</h3>
      <ul>
        {placess.map((p) => {
          return <li key={p.id}>{p.place}</li>;
        })}
      
        {placese.map((p) => {
          return <li key={p.id}>{p.place}</li>;
        })}
      </ul>
    </div>
  );
}

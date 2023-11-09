import React from 'react';

const TokenInput = () => {
  return (
    <div className="token-input-container">
      <input className="token-input" type="text" maxLength="1" />
      <input className="token-input" type="text" maxLength="1" />
      <input className="token-input" type="text" maxLength="1" />
      <input className="token-input" type="text" maxLength="1" />
      <input className="token-input" type="text" maxLength="1" />
      <input className="token-input" type="text" maxLength="1" />
      <style jsx>{`
        .token-input-container {
          display: flex;
          justify-content: center;
          padding-bottom: 140px;
        }

        .token-input {
          width: 80px; 
          height: 80px; 
          margin: 5px; 
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 70px;
          color: black;
          padding-bottom: 12px;
       
        }
        }
      `}</style>
    </div>
  );
};

export default TokenInput;

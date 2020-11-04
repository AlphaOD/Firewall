import React from 'react';

export default function Header(props) {
  console.log(props.key);
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          <a>
            <span>Firewall</span>
          </a>
          <span>Header</span>
        </h1>
      </div>
    </header>
  );
}
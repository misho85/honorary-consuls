import React from 'react';

const ConventionWrapper = ({ children }) => {
  return (
    <div className="conventionContainer">
      <div className="conventionContent">{children}</div>
    </div>
  );
};

export default ConventionWrapper;

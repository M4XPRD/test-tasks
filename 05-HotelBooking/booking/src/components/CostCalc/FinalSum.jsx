import React from 'react';

const FinalSum = (props) => {
  const { sum } = props;
  return (
    <div className="form-result">
      <span>Итого:</span>
      <span className="result-sum">{`${sum} ₽`}</span>
    </div>
  );
};

export default FinalSum;

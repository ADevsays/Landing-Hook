import React from 'react';
function CardPlanContent({content}:{content:string}) {
  const regex = /\/([^\/]+)\//g;

  const result = content.split(regex).map((fragment, index) => {
    return index % 2 === 0 ? (
      <React.Fragment key={index}>{fragment}</React.Fragment>
    ) : (
      <span className='font-bold text-secondary' key={index}>{fragment}</span>
    );
  });

  return <p className='py-4 text-gray-300'>{result}</p>;
}

export default CardPlanContent;
import React from 'react';

const CircleGenerator = () => {
  const circleColors = [
    { color: 'white', name: 'Padão' },
    { color: 'red', name: 'Vermelho' },
    { color: 'green', name: 'Verde' },
    { color: 'blue', name: 'Azul' },
    { color: 'black', name: 'Personalizar' },
  ];

  const circleContainerStyle = {
    display: 'inline-block',
  };

  const circleStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    margin: '9px',
  };

  const nameStyle = {
    fontSize: 'x-small', 
    textAlign: 'center',    
    fontWeight: 'bold'
  };

  const circleWithName = circleColors.map((colorObj, index) => (
    <div key={index} style={circleContainerStyle}>
      <div style={{ ...circleStyle, backgroundColor: colorObj.color }}></div>
      <div  style={nameStyle}>{colorObj.name}</div>
    </div>
  ));

  return <div>{circleWithName}</div>;
};

export default CircleGenerator;

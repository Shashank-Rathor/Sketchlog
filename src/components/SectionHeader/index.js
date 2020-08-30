import React from 'react';
import './style.css'

const SectionHeader=(props) => {
  return(
    <div className="recentHeader">
    {props.name}
    </div>
  );
}

export default SectionHeader;

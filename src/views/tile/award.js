import React from 'react';
import PropTypes from 'prop-types';

const SHOW_AWARDS = ['Platinum', 'Gold', 'Silver'];

export default function Award({ award }) {
  const {
    resized_icons: resizedIcons,
    count,
    name,
  } = award;
  const { url } = resizedIcons[0];
  const showAward = SHOW_AWARDS.find((awardName) => awardName === name);
  if (!showAward) {
    return <></>;
  }

  return (
    <div>
      <img src={url} alt={name} className="ml-1" />
      &nbsp;
      <small className="color-grey">{count}</small>
    </div>
  );
}

Award.propTypes = {
  award: PropTypes.shape({
    resized_icons: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
    })),
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

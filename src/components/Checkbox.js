import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, isSelected, onChange }) => (
  <label key={label}>
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={onChange}
      className="form-check-input"
    />
    {label}
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;

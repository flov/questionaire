import React from 'react'
import PropTypes from 'prop-types'
const Checkbox = ({ name, isSelected, onChange }) => (
  <label key={name}>
    <input
      type="checkbox"
      name={name}
      onChange={onChange}
      className="form-check-input"
    />
    {name}
  </label>
)

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox

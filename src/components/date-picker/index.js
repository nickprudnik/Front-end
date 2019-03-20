import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'material-ui-pickers';

export default function DatePickerWrapper(props) {
  DatePickerWrapper.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
  };

  const {
    input: {
      name, onChange, value, ...restInput
    },
    meta,
    ...rest
  } = props;

  return (
    <DatePicker
      {...rest}
      name={name}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}
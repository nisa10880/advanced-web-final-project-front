import React from 'react';
import PropTypes from 'proptypes';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { useFormStyles } from './useFormStyles';

export const SelectItem = ({
  items,
  label,
  extractLabel,
  name,
  formik,
  formikKey,
}) => {
  const classes = useFormStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={`label-${name}`}>{label}</InputLabel>
      <Select
        id={`select-${name}`}
        labelId={`label-${name}`}
        name={name}
        value={formik.values[formikKey]}
        onChange={formik.handleChange(formikKey)}
      >
        {items
          ? items.map((item) => (
              <MenuItem value={item.id} key={item.id}>
                {extractLabel(item)}
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
};

SelectItem.propTypes = {
  items: PropTypes.array,
  label: PropTypes.string.isRequired,
  extractLabel: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  formik: PropTypes.object,
  formikKey: PropTypes.string,
};

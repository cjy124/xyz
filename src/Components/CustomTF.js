import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";

export default function CustomTF(props) {
  const { label, ...rest } = props;
  const [field, meta] = useField(props);
  const errorTxt = meta.error && meta.touched ? meta.error : "";
  // const errorTxt = { meta.error && meta.touched && true }

  return (
    <TextField
      label={label}
      {...field}
      {...rest}
      helperText={errorTxt}
      error={!!errorTxt}
    />
  );
}

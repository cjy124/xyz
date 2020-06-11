import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";

// export default function CustomTF({ label, required, ...props }) {
export default function CustomTF(props) {
  const { label, ...rest } = props;
  const [field, meta] = useField(props);
  const errorTxt = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      type="text"
      label={label}
      helperText={errorTxt}
      error={!!errorTxt}
      {...field}
      {...rest}
      fullWidth
    />
  );
}

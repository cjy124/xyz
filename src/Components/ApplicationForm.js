import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import { Field } from "formik";
import CustomTF from "./CustomTF";

/*
 * Application form Component, consists of various input form fields
 * which uses CustomTF to generate customised error msg on error.
 */

export default function ApplicationForm(props) {
  const {
    formField: {
      coyName,
      coyAdd,
      coyUen,
      appName,
      appContact,
      appEmail,
      empName,
      empIC,
      empPP,
      empOrigin,
      empDest,
      empTStart,
      empTEnd,
    },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Company Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomTF name={coyName.name} label={coyName.label} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTF name={coyUen.name} label={coyUen.label} />
        </Grid>
        <Grid item xs={12}>
          <CustomTF name={coyAdd.name} label={coyAdd.label} />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Typography variant="h6" gutterBottom>
        Applicant Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomTF name={appName.name} label={appName.label} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTF name={appContact.name} label={appContact.label} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTF name={appEmail.name} label={appEmail.label} />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Typography variant="h6" gutterBottom>
        Employee (traveller) Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomTF name={empName.name} label={empName.label} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name={empIC.name}
            label={empIC.label}
            type="input"
            as={TextField}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTF name={empPP.name} label={empPP.label} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTF name={empOrigin.name} label={empOrigin.label} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTF name={empDest.name} label={empDest.label} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name={empTStart.name}
            label={empTStart.label}
            type="date"
            InputLabelProps={{ shrink: true }}
            as={TextField}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name={empTEnd.name}
            label={empTEnd.label}
            type="date"
            InputLabelProps={{ shrink: true }}
            as={TextField}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

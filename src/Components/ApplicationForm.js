import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import { Field } from "formik";
import CustomTF from "./CustomTF";

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
          <CustomTF
            required
            name={coyName.name}
            label={coyName.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTF name={coyUen.name} label={coyUen.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <CustomTF
            required
            name={coyAdd.name}
            label={coyAdd.label}
            fullWidth
          />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Typography variant="h6" gutterBottom>
        Applicant Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomTF
            required
            name={appName.name}
            label={appName.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTF
            required
            name={appContact.name}
            label={appContact.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTF
            required
            name={appEmail.name}
            label={appEmail.label}
            fullWidth
          />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Typography variant="h6" gutterBottom>
        Employee (traveller) Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomTF
            required
            name={empName.name}
            label={empName.label}
            fullWidth
          />
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
          <CustomTF required name={empPP.name} label={empPP.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTF
            required
            name={empOrigin.name}
            label={empOrigin.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTF
            required
            name={empDest.name}
            label={empDest.label}
            fullWidth
          />
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

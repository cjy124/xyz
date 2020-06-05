import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
}));

function ApplicationDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const {
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
  } = formValues;
  return (
    <div>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Company Details
        </Typography>
        <Typography gutterBottom>{`${coyName}`}</Typography>
        <Typography gutterBottom>{`${coyUen}`}</Typography>
        <Typography gutterBottom>{`${coyAdd}`}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Applicant Details
        </Typography>
        <Typography gutterBottom>{`${appName}`}</Typography>
        <Typography gutterBottom>{`${appContact}`}</Typography>
        <Typography gutterBottom>{`${appEmail}`}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Employee (traveller) Details
        </Typography>
        <Typography gutterBottom>{`${empName}`}</Typography>
        <Typography gutterBottom>{`${empIC}`}</Typography>
        <Typography gutterBottom>{`${empPP}`}</Typography>
        <Typography gutterBottom>{`${empOrigin}`}</Typography>
        <Typography gutterBottom>{`${empDest}`}</Typography>
        <Typography gutterBottom>{`${empTStart}`}</Typography>
        <Typography gutterBottom>{`${empTEnd}`}</Typography>
      </Grid>
    </div>
  );
}

export default ApplicationDetails;

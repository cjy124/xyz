import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axois from "axios";
import ApplicationStatusRow from "./ApplicationStatusRow";
// Uncomment to use context
// import React, { useState, useContext, useEffect } from "react";
// import { ApplicationsContext } from "../ApplicationsContext";

/*
 * A table of ApplicationStaturRow to display applications retrieved
 * from backend
 */

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const ApplicationList = () => {
  // demonstrate the use of react context
  // const [applications, setApplications] = useContext(ApplicationsContext);
  const classes = useStyles();
  const [applications, setApplications] = useState([]);

  // Httpget from backend past applications
  useEffect(() => {
    axois
      .get("http://localhost:8080/api/application")
      .then((res) => {
        setApplications(res.data);
        console.log(res.data);
      })
      .catch(() => {
        alert("Failed to retrieve past record from server.");
      });
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Past Applications
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Company Name</TableCell>
                    <TableCell>Applicant Name</TableCell>
                    <TableCell>Travelling emp name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {applications.map((tmp, index) => (
                    <ApplicationStatusRow key={index} id={index} data={tmp} />
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ApplicationList;

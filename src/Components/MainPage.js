import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

import ApplicationForm from "./ApplicationForm";
import ReviewApplication from "./ReviewApplication";
import SubmitSuccess from "./SubmitSuccess";

import validationSchema from "../validationSchema";
import checkoutFormData from "../checkoutFormData";
import formInitialValues from "../formInitialValues";

/*
 * Main page which utilizes Material-ui stepper to implement multi
 * steps form. Each form component will be a child component of
 * Formik, this is to make use of formik's react context hook
 * useFormikContext.
 * Respective components will be mapped to a step counter, and displayed
 * when the step counter increases or decrease by the handling of button
 * clicks.
 */

const steps = ["Application Details", "Review Application"];
const { formId, formField } = checkoutFormData;

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}));

/*
 * Render components based on which current step
 * Possibility of future expansion to include payment component
 */
function renderStepContent(step) {
  switch (step) {
    case 0:
      return <ApplicationForm formField={formField} />;
    case 1:
      return <ReviewApplication formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function MainPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  //handle submission of form to backend on last step
  async function submitForm(values, actions) {
    axios
      .post("http://localhost:8080/api/application", values)
      .then(() => {
        alert("SUCCESS");
        setActiveStep(activeStep + 1);
      })
      .catch(() => {
        alert("FAIL");
      });
    // await sleep(1000);
    // console.log(JSON.stringify(values, null, 2));
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }

  //handle button clicks
  function handleSubmit(values, actions) {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  //go back previous page
  function handlePrevious() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Travel Application
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <SubmitSuccess />
            ) : (
              <Formik
                initialValues={formInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form id={formId}>
                    {renderStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button
                          onClick={handlePrevious}
                          className={classes.button}
                        >
                          Back
                        </Button>
                      )}
                      <div className={classes.wrapper}>
                        <Button
                          disabled={isSubmitting}
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.button}
                        >
                          {isLastStep ? "Submit" : "Continue"}
                        </Button>
                        {isSubmitting && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

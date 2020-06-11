import React from "react";
import { useFormikContext } from "formik";
import { Typography } from "@material-ui/core";
import ApplicationDetails from "./ApplicationDetails";

/*
 * Being a child component inside Formik tag, it has access
 * to props of children components of Formik by using
 * useFormikContext which utilises react context.
 */

export default function ReviewApplication() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Application summary
      </Typography>
      <ApplicationDetails formValues={formValues} />
    </React.Fragment>
  );
}

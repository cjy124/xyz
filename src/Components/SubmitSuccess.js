import React from "react";
import { Typography } from "@material-ui/core";

function SubmitSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your application.
      </Typography>
      <Typography variant="subtitle1">
        Each application may take 2-3 days to process. Outcome of all
        applications by the company will be reflected on the portal.
      </Typography>
    </React.Fragment>
  );
}

export default SubmitSuccess;

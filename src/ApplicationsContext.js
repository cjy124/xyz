import React, { useState, createContext } from "react";

/*
 * React context is preferred over redux for the scope of this project
 */

export const ApplicationsContext = createContext();

export const ApplicationsProvider = (props) => {
  const [applications, setApplications] = useState([
    {
      appStatus: "pending",
      cost: "",
      coyName: "SGLONG",
      coyAdd: "SINGAPORE",
      appName: "TOH",
      appContact: "55623349",
      appEmail: "dsa@asd.com",
      empName: "POH",
      empIC: "S0321654G",
      empPP: "SGUNITED",
      empOrigin: "SG",
      empDest: "TH",
      empTStart: "01-06-2020",
      empTEnd: "01-07-2020",
    },
    {
      appStatus: "pending",
      cost: "",
      coyName: "SGMOVERS",
      coyAdd: "SINGAPORE",
      appName: "TAN",
      appContact: "321321321",
      appEmail: "dsa@asd.com",
      empName: "KOH KS",
      empIC: "S0321654G",
      empPP: "SGUNITED",
      empOrigin: "SG",
      empDest: "TH",
      empTStart: "01-06-2020",
      empTEnd: "01-07-2020",
    },
  ]);
  return (
    <ApplicationsContext.Provider value={[applications, setApplications]}>
      {props.children}
    </ApplicationsContext.Provider>
  );
};

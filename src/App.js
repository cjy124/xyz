import React from 'react';
import { Formik, Field, Form, useField } from "formik"
import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import * as Yup from "yup";
import { validateUEN } from './validateUEN'

const dateNow = new Date();
const year = dateNow.getFullYear(); // Getting current year from the created Date object
const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
const month = // Setting current Month number from current Date object
  monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 to adjust for date input.
    ? `0${monthWithOffset}`
    : monthWithOffset;
const date =
  dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
    ? `0${dateNow.getUTCDate()}`
    : dateNow.getUTCDate();
const mDateNow = `${date}-${month}-${year}`;

const CustomTF = ({ label, ...props }) => {
  const [field,meta] = useField(props);
  const errorTxt = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField label={label} {...field} helperText={errorTxt} error={!!errorTxt} />
  );
};

const validationSchema = Yup.object({
  coyName: Yup.string().required("Required"),
  coyAdd: Yup.string().required("Required"),
  appName: Yup.string().required("Required"),
  appContact: Yup.string().required("Required"),
  appEmail: Yup.string().email("Must be a valid email").required("Required"),
  empName: Yup.string().required("Required"),
  empPP: Yup.string().required("Required"),
  empOrigin: Yup.string().required("Required"),
  empDest: Yup.string().required("Required"),
  coyUen: Yup.string().test('is-validuen','Invalid UEN format', value => validateUEN(value))
});

function App() {
  return (
    <Formik 
      initialValues={{ coyName: "", coyAdd: "", coyUen: "",
                      appName: "", appContact: "", appEmail: "",
                      empName: "", empIC: "", empPP: "", empOrigin: "", empDest: "", empTStart: "", empTEnd: "" }} 
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        console.log('submit: ', data);
        setSubmitting(false);
        resetForm();
      }}
    >
      { ({ values, errors, isSubmitting })=> (
        <Form>
          <CustomTF required name="coyName" label="Company Name" />
          <div><CustomTF required name="coyAdd" label="Company Address" multiline rows={4}/></div>
          <div><CustomTF name="coyUen" label="Unique entity number" type="input" as={TextField} /></div>
          <div><CustomTF required name="appName" label="Applicant Name" /></div>
          <div><CustomTF required name="appContact" label="Applicant Contact" /></div>
          <div><CustomTF required name="appEmail" label="Applicant Email" /></div>
          <div><CustomTF required name="empName" label="Employee Name" /></div>
          <div><Field name="empIC" label="NRIC/FIN" type="input" as={TextField} /></div>
          <div><CustomTF required name="empPP" label="Passport No." /></div>
          <div><CustomTF required name="empOrigin" label="Country of Origin" /></div>
          <div><CustomTF required name="empDest" label="Country of Destination" /></div>
          <br></br>
          <div>
            <Field name="empTStart" label="Travel Start Date" type="date" InputLabelProps={{shrink: true}} as={TextField} />
            <Field name="empTEnd" label="Travel End Date" type="date" InputLabelProps={{shrink: true}} as={TextField} />
          </div>
          <div><Button disabled={isSubmitting} type="submit" as={Button}>Submit</Button></div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}

export default App;

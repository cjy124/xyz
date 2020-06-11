import * as Yup from "yup";
import checkoutFormData from "./checkoutFormData";
import { validateUEN } from "./validateUEN";

/*
 * All the validation schemas for the various steps will be stored here
 * Utilises Yup as Formik has a convenient config to incorp yup object schemas
 * for validation.
 */

const {
  formField: {
    coyName,
    coyAdd,
    coyUen,
    appName,
    appContact,
    appEmail,
    empName,
    empPP,
    empOrigin,
    empDest,
  },
} = checkoutFormData;

export default [
  //validationschema for step 0
  Yup.object().shape({
    [coyName.name]: Yup.string().required("Required"),
    [coyAdd.name]: Yup.string().required("Required"),
    [appName.name]: Yup.string().required("Required"),
    [appContact.name]: Yup.string().required("Required"),
    [appEmail.name]: Yup.string()
      .email("Must be a valid email")
      .required("Required"),
    [empName.name]: Yup.string().required("Required"),
    [empPP.name]: Yup.string().required("Required"),
    [empOrigin.name]: Yup.string().required("Required"),
    [empDest.name]: Yup.string().required("Required"),
    [coyUen.name]: Yup.string()
      .notRequired(0)
      .test("is-validuen", "Invalid UEN format", (value) => validateUEN(value)),
  }),
  //future validation for new step(s)
];

import checkoutFormData from "./checkoutFormData";
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
} = checkoutFormData;

export default {
  [coyName.name]: "",
  [coyAdd.name]: "",
  [coyUen.name]: "",
  [appName.name]: "",
  [appContact.name]: "",
  [appEmail.name]: "",
  [empName.name]: "",
  [empIC.name]: "",
  [empPP.name]: "",
  [empOrigin.name]: "",
  [empDest.name]: "",
  [empTStart.name]: "",
  [empTEnd.name]: "",
};

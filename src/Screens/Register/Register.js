import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "./register.scss";
import { AppContext } from "../../Context/AppContext";
import Submitbutton from "../../Components/Buttons/SubmitButton/SubmitButton";

const Register = () => {
  const { setUser } = useContext(AppContext);
  const history = useHistory();

  const registerUser = (values) => {
    setUser(values);
    history.push("/list");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      country: null,
      region: null,
      phone: null,
      pass1: "",
      pass2: "",
      acceptTerms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      country: Yup.string("Required").required("Required"),
      region: Yup.string("Required").required("Required"),
      phone: Yup.number("Required")
        .required("Required")
        .max(9999999999, "Must be 10 characters or less"),
      pass1: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/,
          "Must Contain 6 Characters, and at least one number and one letter"
        ),
      pass2: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("pass1"), null], "Passwords must match"),
      acceptTerms: Yup.bool().oneOf(
        [true],
        "Accept Terms & Conditions is required"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
      registerUser(values);
    },
  });

  return (
    <div className="formContainer">
      <form className="form" onSubmit={formik.handleSubmit}>
        <h2>Welcome</h2>
        <p>Please complete with your personal data</p>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          className="input"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="errorMsg">{formik.errors.name}</div>
        ) : null}
        <label className="label" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="input"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="errorMsg">{formik.errors.lastName}</div>
        ) : null}
        <label className="label" htmlFor="email">
          Email Address
        </label>
        <input
          className="input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="errorMsg">{formik.errors.email}</div>
        ) : null}
        <label className="label" htmlFor="country">
          Country
        </label>
        <CountryDropdown
          id="country"
          name="country"
          onChange={(value, e) => formik.handleChange(e)}
          onBlur={formik.handleBlur}
          value={formik.values.country}
          className="input"
        />
        {formik.touched.country && formik.errors.country ? (
          <div className="errorMsg">{formik.errors.country}</div>
        ) : null}
        <label className="label" htmlFor="region">
          Region
        </label>
        <RegionDropdown
          id="region"
          name="region"
          country={formik.values.country}
          onChange={(value, e) => formik.handleChange(e)}
          onBlur={formik.handleBlur}
          value={formik.values.region}
          className="input"
        />
        {formik.touched.region && formik.errors.region ? (
          <div className="errorMsg">{formik.errors.region}</div>
        ) : null}
        <label className="label" htmlFor="phone">
          Phone
        </label>
        <input
          className="input"
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="errorMsg">{formik.errors.phone}</div>
        ) : null}
        <label className="label" htmlFor="pass1">
          Password
        </label>
        <input
          className="input"
          id="pass1"
          name="pass1"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pass1}
        />
        {formik.touched.pass1 && formik.errors.pass1 ? (
          <div className="errorMsg">{formik.errors.pass1}</div>
        ) : null}
        <label className="label" htmlFor="pass2">
          Repeat Password
        </label>
        <input
          className="input"
          id="pass2"
          name="pass2"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pass2}
        />
        {formik.touched.pass2 && formik.errors.pass2 ? (
          <div className="errorMsg">{formik.errors.pass2}</div>
        ) : null}
        <div>
          <label htmlFor="acceptTerms" className="label">
            Accept <Link to={"/terms&conditions"}>Terms & Conditions</Link>
          </label>
          <input
            type="checkbox"
            name="acceptTerms"
            className="checkbox"
            onChange={formik.handleChange}
            value={true}
          />
          {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
            <div className="errorMsg">{formik.errors.acceptTerms}</div>
          ) : null}
        </div>
        <Submitbutton type="primary" text="Registrate" />
      </form>
    </div>
  );
};

export default Register;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginUser } from "../features/users/usersSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Format email salah")
      .required("Email tidak boleh kosong"),
    password: Yup.string()
      .min(3, "Password haris lebih dari 3 karakter")
      .required("Password tidak boleh kosong"),
  });
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(value) => {
          dispatch(loginUser(value));
          navigate("/users");
        }}
      >
        {(props) => {
          // console.log(props);
          return (
            <div className="w-1/3 mx-auto my-9 bg-blue-100 p-6 rounded-md">
              <p className="text-xl font-bold text-center mb-6">
                Page Register
              </p>
              <Form>
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <Field type="text" name="email" className="border-2" />
                  <ErrorMessage
                    component="div"
                    name="email"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password">Password</label>
                  <Field type="password" name="password" className="border-2" />
                  <ErrorMessage
                    component="div"
                    name="password"
                    style={{ color: "red" }}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 py-2 px-3 rounded-md mt-10"
                >
                  Submit
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;

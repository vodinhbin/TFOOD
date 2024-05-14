import {  useNavigate } from "react-router-dom";
// import Pagelayout from "../../component/cpn/Pagelayout";
import TextFields from "../TextField/TextField";
// import Check from "../Checkbox/Checkbox";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../rtk/slices/authSlice";
import { useEffect, useState } from "react";
import LoginGoogle from "../../component/cpn/LoginGoogle";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  const [tokenLogin, setTokenLogin] = useState(null);

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Enter Your Email! Please")
      .email("Email Error"),
    password: yup.string().required("Enter Your Password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        login({
          email: values.email,
          password: values.password,
        })
      );
      setTokenLogin(localStorage.getItem("token"));
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    setTokenLogin(token);
  }, [tokenLogin]);

  return (
    <>
       {(isLogin || tokenLogin) && navigate("/")}


<div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/cartoon-indian-restaurant-background_52683-69329.jpg?w=1380&t=st=1697776424~exp=1697777024~hmac=2694ddb383e13519f78b9dcf755b1c1ebc2c0f90de60ded322ee5e4f5709d02f")' }}>
          <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
              <div className="text-white">
                  <div className="mb-8 flex flex-col items-center">
                      <svg width={100} height={100} className='cursor-pointer' viewBox="0 0 215 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M86 140V264.718C86 271.301 88.6152 277.615 93.2704 282.27V282.27C102.432 291.432 117.099 292.006 126.949 283.589L127.853 282.817C133.658 277.856 137 270.603 137 262.968V180.305C137 158.045 155.045 140 177.305 140H186.751C191.393 140 195.844 138.156 199.126 134.874V134.874C205.96 128.04 205.96 116.96 199.126 110.126V110.126C195.844 106.844 191.393 105 186.751 105H92C58.3106 105 31 77.6894 31 44V44M31 44H44.5L31 21L18 44H31Z" stroke="#398596" strokeWidth={20} />
                          <path d="M86 140V264.718C86 271.301 88.6152 277.615 93.2704 282.27V282.27C102.432 291.432 117.099 292.006 126.949 283.589L127.853 282.817C133.658 277.856 137 270.603 137 262.968V180.305C137 158.045 155.045 140 177.305 140H186.751C191.393 140 195.844 138.156 199.126 134.874V134.874C205.96 128.04 205.96 116.96 199.126 110.126V110.126C195.844 106.844 191.393 105 186.751 105H92C58.3106 105 31 77.6894 31 44V44M31 44H44.5L31 21L18 44H31Z" stroke="url(#paint0_linear_5_39)" strokeOpacity="0.5" strokeWidth={20} />
                          <defs>
                              <linearGradient id="paint0_linear_5_39" x1={47} y1={60} x2="114.75" y2="298.5" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#3DE04D" />
                                  <stop offset={1} stopOpacity={0} />
                              </linearGradient>
                          </defs>
                      </svg>
                      {/* <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width={150} alt srcSet /> */}
                      <h1 className="mb-2 text-2xl text-[#b7b7f4]">Login T-FOOD</h1>
                      {/* <span className="text-gray-300">Enter Login Details</span> */}
                  </div>
                  <form action="#" onSubmit={formik.handleSubmit}>
                      <div className="mb-4 text-lg">
                          <TextFields
                              name="Email"
                              type="email"
                              value={formik.values.email}
                              onChange={formik.handleChange("email")}
                              required={true}
                              helperText={formik.touched.email && formik.errors.email}
                              error={formik.touched.email && Boolean(formik.errors.email)}
                              width="299px"
                          />
                          {/* <input className="rounded-3xl border-none bg-input bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com" /> */}
                      </div>
                      <div className="mb-4 text-lg">
                          <TextFields
                              name="Password"
                              type="password"
                              value={formik.values.password}
                              onChange={formik.handleChange("password")}
                              required={true}
                              helperText={
                                  formik.touched.password && formik.errors.password
                              }
                              error={
                                  formik.touched.password && Boolean(formik.errors.password)
                              }
                              width="299px"
                          />
                          {/* <input className="rounded-3xl border-none bg-input bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" /> */}
                      </div>
                      <div className="mt-8  text-lg text-black">
                          <button type="submit" className="rounded-3xl mb-[4%] w-[100%] l bg-input bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
                              <LoginGoogle/>
                      </div>
                  </form>
              </div>
          </div>
      </div>

      


{/* // </Pagelayout> */}
    </>
    // <Pagelayout>
     
  );
}

export default Login;

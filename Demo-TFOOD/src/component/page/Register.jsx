/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { getListUser, register } from '../../component/rtk/slices/authSlice';
import TextFields from '../TextField/TextField';
import { notification } from '../../component/utils/helper';


function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userData } = useSelector(state => (state.auth));


    const validationSchema = yup.object({
        // firstname: yup.string().required("Chưa nhập first name"),
        fullname: yup.string().required("Enter Your Full Name"),
        email: yup
            .string()
            .required("Enter Your Full Name")
            .email("Email Error"),
        password: yup
            .string()
            .required("Enter Your Password")
            .min(6, "Password Error"),
        cpassword: yup
            .string()
            .required("Enter Your Confirm Password")
            .oneOf([yup.ref("password")], "Password Error"),
    });

    const randomId = () => {
        return Math.floor(Math.random() * 9999)
    }
    const formik = useFormik({
        initialValues: {
            // firstname: "",
            fullname: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const newData = {
                id: randomId(),
                // firstname: values.firstname,
                fullname: values.fullname,
                email: values.email,
                password: values.password,
                isAdmin: false,
                avatar: "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
           
            }
            let checkExistEmail = userData.find(x => x.email == values.email)
            if (checkExistEmail) {
                notification("Email Exist. Please Try Again", 'error');
            } else {
                dispatch(register(newData))
                notification("Register Success");
                navigate('/login');
            }
            console.log(newData);
        },
    });
    useEffect(() => {
        dispatch(getListUser())
    }, [])

    return (
        <div>
            {/* component */}
            {/* Create by joker banny */}
            <div className="h-screen bg-indigo-100 flex justify-center items-center  bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/cartoon-indian-restaurant-background_52683-69329.jpg?w=1380&t=st=1697776424~exp=1697777024~hmac=2694ddb383e13519f78b9dcf755b1c1ebc2c0f90de60ded322ee5e4f5709d02f")' }}>
                <div className="lg:w-2/5 md:w-1/2 w-2/3">
                    <form onSubmit={formik.handleSubmit} className="bg-white p-10 rounded-lg shadow-lg min-w-full bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md">
                        <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Register</h1>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md " htmlFor="username">User Name</label>
                            <TextFields
                                
                                type="text"
                                value={formik.values.fullname}
                                onChange={formik.handleChange("fullname")}
                                required={true}
                                helperText={
                                    formik.touched.fullname && formik.errors.fullname
                                }
                                error={
                                    formik.touched.fullname && Boolean(formik.errors.fullname)
                                }
                                width="100%"
                            />
                            {/* <input className="w-full text-black px-4 py-2 rounded-lg focus:outline-none bg-input" type="text" name="username" id="username" placeholder="username" /> */}
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
                            <TextFields
                                
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange("email")}
                                required={true}
                                helperText={formik.touched.email && formik.errors.email}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                width="100%"
                            />
                            {/* <input className="w-full text-black px-4 py-2 rounded-lg focus:outline-none bg-input" type="text" name="email" id="email" placeholder="@email" /> */}
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Password</label>
                            <TextFields
                                
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange("password")}
                                required={true}
                                helperText={formik.touched.password && formik.errors.password}
                                error={
                                    formik.touched.password && Boolean(formik.errors.password)
                                }
                                width="100%"
                            />
                            {/* <input className="w-full text-black px-4 py-2 rounded-lg focus:outline-none bg-input" type="password" name="password" id="password" placeholder="password" /> */}
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="confirm">Confirm password</label>
                            <TextFields
                                
                                type="password"
                                value={formik.values.cpassword}
                                onChange={formik.handleChange("cpassword")}
                                required={true}
                                helperText={formik.touched.cpassword && formik.errors.cpassword}
                                error={
                                    formik.touched.cpassword && Boolean(formik.errors.cpassword)
                                }
                                width="100%"
                            />
                            {/* <input className="w-full text-black px-4 py-2 rounded-lg focus:outline-none bg-input" type="password" name="confirm" id="confirm" placeholder="confirm password" /> */}
                        </div>
                        <button type="submit" className="w-full mt-6  bg-input hover:bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Register</button>
                        {/* <button  className="w-full mt-6 mb-3 bg-indigo-600 hover:bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Login</button> */}
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register
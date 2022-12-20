import { FormInput } from "./FormInput"
import './../App.css';
import { useState } from "react";

export const RegisterForm = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: ""
    });
    console.log(values);
    const inputs = [
        {
            id: 1,
            name: "username",
            placeholder: "Username",
            label: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include sny special characters",
            type: "text",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$"
        },
        {
            id: 2,
            name: "email",
            placeholder: "Email",
            label: "Email",
            errorMessage: "Should be valid email address",
            type: "email",
            required: true
        },
        {
            id: 3,
            name: "birthday",
            placeholder: "Birthday",
            label: "Birthday",
            errorMessage: "",
            type: "date"
        },
        {
            id: 4,
            name: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            type: "password",
            pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$",
            required: true
        },
        {
            id: 5,
            name: "confirmPassword",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            errorMessage: "Passwords don't match",
            type: "password",
            pattern: values.password,
            required: true
        }
    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        alert(`Welcome ${values.username}(${values.email})`)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {
                    inputs.map(input => (
                        <FormInput
                            key={input.id}
                            value={values[input.name]}
                            onChange={onChange}
                            {...input}
                        />
                    ))
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
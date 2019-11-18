import React, { /*useState, useEffect*/ } from "react";
import { Card, CardBody, Button, Alert, Col } from 'reactstrap';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm = ({ errors, touched }) => {
    return (
        <div className="login-form my-3">
            <Col xs="12" md="8" lg="4" className="mx-auto">
                <Card className="shadow-sm">
                    <CardBody>
                        <h1 className="text-center">Login</h1>
                        <Form className="d-flex flex-column justify-content-around">
                            <label className="text-left mt-2">Username:</label>
                            <Field type="text" name="username" placeholder="Username" />
                            {touched.username && errors.username && (
                                <Alert color="danger">{errors.username}</Alert>
                            )}
                            <label className="text-left mt-2">Password:</label>
                            <Field type="password" name="password" placeholder="Password" />
                            {touched.password && errors.password && (
                                <Alert color="danger">{errors.password}</Alert>
                            )}
                            <Button className="col-xs-12 col-sm-12 col-md-8 col-lg-4 mx-md-auto ml-lg-auto mr-lg-0 mt-2">Log In</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(`Please enter a username.`),
        password: Yup.string().required(`Please enter your password.`)
    }),
    handleSubmit(values) {
        axios
            .post("", values)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(`Server responded with ${error.response}`);
            });
    }
})(LoginForm)

export default FormikLoginForm
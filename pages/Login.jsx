import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useFormik } from "formik";


export default function Login({signIn}) {

  const formik = useFormik({
    initialValues: {
      email:"",
      password:""
    },
  })

  return (
    <div>
      <Header as="h2" color="pink" textAlign="center">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" /> Giriş Yap
      </Header>
      <Form size="large" onSubmit={formik.handleSubmit}>
        <Segment stacked>
          <div>
          <label><b>Email</b></label>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail adresi"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.errors.email && formik.touched.email && (
              <div className={"ui pointing red basic label"}>
                {formik.errors.email}
              </div>
            )
          }
          </div>
          <div style={{marginTop:"1em"}}>
          <label><b>Şifre</b></label>
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Şifre"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.errors.password && formik.touched.password && (
              <div className={"ui pointing red basic label"}>
                {formik.errors.password}
              </div>
            )
          }
          </div>

          <Button onClick={signIn} color="pink" fluid size="large" type="submit" style={{marginTop:"1em"}}>
            Giriş Yap
          </Button>
        </Segment>
      </Form>
      <Message info>
        Kayıtlı değilmisin? <b><Link to={"/register"}>Şimdi Kaydol</Link></b>
      </Message>
    </div>
  );
}
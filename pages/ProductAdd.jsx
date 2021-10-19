import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, FormField, Label } from "semantic-ui-react"
import TBBTextInput from '../utilities/customFormControls/TBBTextInput'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: "" }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu")
    })

    return (
        <div>
            <Formik initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <TBBTextInput name="productName" placeholder="Ürün Adı">
                    </TBBTextInput>
                    <TBBTextInput name="unitPrice" placeholder="Ürün Fiyatı">
                    </TBBTextInput>
                    <Button color="green" type="submit">Kaydet</Button>
                </Form>
            </Formik>
        </div>
    )
}

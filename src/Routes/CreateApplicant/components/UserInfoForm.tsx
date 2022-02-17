import { useState } from 'react'

import { DropZone } from 'components/common/inputs/DropZone'
import { Formik } from 'formik'

import { Box, Button } from '@mui/material'

import { MyInput } from 'components/common/inputs/MyInput'
import CheckboxesTags from 'components/common/inputs/SelectWithCheckbox'
import { StatusToggler } from './StatusToggle'
import { baseURL } from 'service/baseAPI'

type FormValues = {
    fullName: string
    phone: string
    email: string
    salaryRange: string
    position: string
    experience: string
    linkedInURL: string
    status: string
    cv:File | null | string
    skills: string[]
}

type ErrorsType = Partial<FormValues>

const validate = (values: FormValues) => {
    const { fullName, phone, email, salaryRange, position, experience, linkedInURL, status, cv } =
        values

    const errors: ErrorsType = {}

    if (!fullName || fullName.split(' ').length < 2) {
        errors.fullName = 'Full name is Required'
    }

    if (!phone) {
        errors.phone = 'Phone number is Required'
    } else if (phone.length !== 9) {
        errors.phone = 'Phone number Must be 9 characters'
    }

    if (!email) {
        errors.email = 'Email is Required'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }

    if (!salaryRange) {
        errors.salaryRange = 'Salary Range is required'
    } else if (!salaryRange.includes('-')) {
        errors.salaryRange = 'Please provide in this form: 1000k - 2000k'
    }

    if (!position) {
        errors.position = 'Seniority is required'
    }
    if (!experience) {
        errors.experience = 'Experience is required'
    }
    if (!linkedInURL) {
        errors.linkedInURL = 'LinkedIn Url is required'
    }
    if (!status) {
        errors.status = 'Status is required'
    }
    if (!cv) {
       
        errors.cv = 'Cv is required'
    }

    return errors
}

export const UserInfoForm = () => {
    const [applicantForm, setApplicantForm] = useState({
        fullName: '',
        phone: '',
        email: '',
        salaryRange: '',
        position: '',
        experience: '',
        skills: [],
        linkedInURL: '',
        status: 'Initial',
        cv: null
    })

    return (
        <Formik
            initialValues={applicantForm}
            validate={validate}
            onSubmit={values => {
                const { fullName, ...rest } = values;

                const [firstName,lastName] = fullName.split(" ")
                const fd = new FormData()
                fd.append('firstName',firstName)
                fd.append('lastName',lastName)
                console.log("rest",rest)
                for (let x in rest){
                    //@ts-ignore
                    fd.append(x,rest[x])
                }
             
                try{
                    baseURL.post("/applicants/add", fd)
                }catch(err:any){
                    console.log(err.message)
                }
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
                touched
            }) => (
                <Box component="form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <StatusToggler onChange={handleChange} value={values.status} />
                    <Box py={2} px={6}>
                        <MyInput
                            title="Full name"
                            name="fullName"
                            onChange={handleChange}
                            value={values.fullName}
                            touched={touched.fullName}
                            error={errors.fullName}
                            onBlur={handleBlur}
                        />
                        <MyInput
                            title="Email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            touched={touched.email}
                            error={errors.email}
                            onBlur={handleBlur}
                        />
                        <MyInput
                            title="Phone number"
                            name="phone"
                            onChange={handleChange}
                            value={values.phone}
                            touched={touched.phone}
                            error={errors.phone}
                            onBlur={handleBlur}
                        />
                        <MyInput
                            title="Salary"
                            name="salaryRange"
                            onChange={handleChange}
                            value={values.salaryRange}
                            touched={touched.salaryRange}
                            error={errors.salaryRange}
                            onBlur={handleBlur}
                        />
                        <MyInput
                            title="LinkedIn Url"
                            name="linkedInURL"
                            onChange={handleChange}
                            value={values.linkedInURL}
                            touched={touched.linkedInURL}
                            error={errors.linkedInURL}
                            onBlur={handleBlur}
                        />

                        <CheckboxesTags
                            name="skills"
                            onChange={handleChange}
                            value={values.skills}
                        />

                        <MyInput
                            title="Seniority"
                            name="position"
                            onChange={handleChange}
                            value={values.position}
                            touched={touched.position}
                            error={errors.position}
                            onBlur={handleBlur}
                        />
                        <MyInput
                            title="Years of experience"
                            name="experience"
                            onChange={handleChange}
                            value={values.experience}
                            touched={touched.experience}
                            error={errors.experience}
                            onBlur={handleBlur}
                        />
                        <DropZone
                            accept="application/pdf"
                            onDrop={handleChange}
                            error={errors.cv}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            style={{ marginTop: 16 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            )}
        </Formik>
    )
}

import { useState } from 'react'

import { DropZone } from 'components/common/inputs/DropZone'
import { Formik } from 'formik'

import { Box, Button, CircularProgress, Snackbar } from '@mui/material'

import { MyInput } from 'components/common/inputs/MyInput'
import CheckboxesTags from 'components/common/inputs/SelectWithCheckbox'
import { StatusToggler } from './StatusToggle'
import { createApplicant } from 'service/endPoints'

import { validate } from 'utils/validateuserform'

export const UserInfoForm = () => {
    const [applicantForm] = useState({
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

    const [newApplicant, setNewApplicant] = useState({
        open: false,
        loading: false,
        text: ''
    })

    return (
        <Formik
            initialValues={applicantForm}
            validate={validate}
            onSubmit={async values => {
                const { fullName, ...rest } = values

                const [firstName, lastName] = fullName.split(' ')

                const fd = new FormData()

                fd.append('firstName', firstName)
                fd.append('lastName', lastName)

                for (let x in rest) {
                    //@ts-ignore
                    fd.append(x, rest[x])
                }
                try {
                    setNewApplicant({
                        loading: true,
                        open: false,
                        text: ''
                    })
                    await createApplicant(fd)
                    setNewApplicant({
                        loading: false,
                        open: true,
                        text: 'Applicant created.'
                    })
                } catch (err: any) {
                    setNewApplicant({
                        loading: false,
                        open: true,
                        text: err.message
                    })
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
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    <Snackbar
                        open={newApplicant.open}
                        message={newApplicant.text}
                        autoHideDuration={4000}
                        onClose={() =>
                            setNewApplicant({
                                text: '',
                                open: false,
                                loading: false
                            })
                        }
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                        }}
                    />
                    <StatusToggler
                        onChange={handleChange}
                        value={values.status}
                    />
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
                            {...(newApplicant.loading
                                ? { endIcon: <CircularProgress size="small" /> }
                                : {})}
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

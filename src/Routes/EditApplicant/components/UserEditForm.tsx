import { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getApplicant, handleFieldUpdate } from 'service/endPoints'

import { Formik } from 'formik'
import { Box, Snackbar } from '@mui/material'

import { DropZone } from 'components/common/inputs/DropZone'
import { MyInput } from 'components/common/inputs/MyInput'
import CheckboxesTags from 'components/common/inputs/SelectWithCheckbox'

import { StatusToggler } from 'Routes/CreateApplicant/components/StatusToggle'
import { validate } from 'utils/validateuserform'

export const UserEditForm = () => {
    const { id } = useParams()
    const { data, refetch } = getApplicant(id)

    const { skills, firstName, lastName, pdf, ...rest } = data?.data || {
        fullName: '',
        phone: '',
        email: '',
        salaryRange: '',
        position: '',
        experience: '',
        skills: [],
        linkedInURL: '',
        status: 'Initial',
        pdf: undefined,
        cv: null
    }

    const [newApplicant, setNewApplicant] = useState({
        open: false,
        loading: false,
        text: ''
    })

    const handleUpdate = async (fieldName: string, fieldValue: string) => {
        const data = {
            fieldName,
            fieldValue,
            applicantId: id,
            type: fieldName
        }
        handleFieldUpdate(data, refetch)
    }

    function handleStatusChange(callback: Function, a: ChangeEvent<any>) {
        callback(a)
        handleUpdate('status', a.target.value)
    }

    return (
        <Formik
            onSubmit={() => {}}
            initialValues={{
                ...rest,
                skills: typeof skills === 'string' ? skills.split(',') : skills,
                fullName: firstName + ' ' + lastName
            }}
            validate={validate}
        >
            {({ handleChange, handleBlur, values, errors, touched }) => (
                <Box component="form" encType="multipart/form-data">
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
                        onChange={a => handleStatusChange(handleChange, a)}
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
                            isEditing
                        />
                        <MyInput
                            title="Email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            touched={touched.email}
                            error={errors.email}
                            onBlur={handleBlur}
                            onFiledUpdate={() =>
                                handleUpdate('email', values.email)
                            }
                            isEditing
                        />
                        <MyInput
                            title="Phone number"
                            name="phone"
                            onChange={handleChange}
                            value={values.phone}
                            touched={touched.phone}
                            error={errors.phone}
                            onBlur={handleBlur}
                            onFiledUpdate={() =>
                                handleUpdate('phone', values.phone)
                            }
                            isEditing
                        />
                        <MyInput
                            title="Salary"
                            name="salaryRange"
                            onChange={handleChange}
                            value={values.salaryRange}
                            touched={touched.salaryRange}
                            error={errors.salaryRange}
                            onBlur={handleBlur}
                            onFiledUpdate={() =>
                                handleUpdate('salaryRange', values.salaryRange)
                            }
                            isEditing
                        />
                        <MyInput
                            title="LinkedIn Url"
                            name="linkedInURL"
                            onChange={handleChange}
                            value={values.linkedInURL}
                            touched={touched.linkedInURL}
                            error={errors.linkedInURL}
                            onBlur={handleBlur}
                            onFiledUpdate={() =>
                                handleUpdate('linkedInURL', values.linkedInURL)
                            }
                            isEditing
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
                            onFiledUpdate={() =>
                                handleUpdate('position', values.position)
                            }
                            isEditing
                        />
                        <MyInput
                            title="Years of experience"
                            name="experience"
                            onChange={handleChange}
                            value={values.experience}
                            touched={touched.experience}
                            error={errors.experience}
                            onBlur={handleBlur}
                            onFiledUpdate={() =>
                                handleUpdate('experience', values.experience)
                            }
                            isEditing
                        />
                        <DropZone
                            accept="application/pdf"
                            onDrop={handleChange}
                            error={errors.pdf}
                            cv={values.cv}
                        />
                    </Box>
                </Box>
            )}
        </Formik>
    )
}

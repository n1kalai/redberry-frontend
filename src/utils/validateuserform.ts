import { Applicant } from 'types/applicant'

type ErrorsType = Partial<Applicant>

export const validate = (values: Applicant) => {
    const {
        fullName,
        phone,
        email,
        salaryRange,
        position,
        experience,
        linkedInURL,
        status,
        cv
    } = values

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
        errors.cv = { path: 'Cv is required' }
    }

    return errors
}

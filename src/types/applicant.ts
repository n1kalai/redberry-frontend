type ApplicantCredientals = {
    fullName: string
    firstName: string
    lastName: string
    id: string
    createdAt?: Date
    updatedAt?: Date
    pdf: {
        path: string
        name: string
    }
    updates: any[]
}

export type Applicant = Partial<ApplicantCredientals> & {
    fullName: string
    phone: string
    email: string
    salaryRange: string
    position: string
    experience: string
    linkedInURL: string
    status: string
    cv: null | {
        path: string
    }
    skills: string[] | string
}

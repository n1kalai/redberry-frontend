import { useQuery } from 'react-query'

import { baseAPI } from 'service/baseAPI'
import { Applicant } from 'types/applicant'

const createApplicant = (data: FormData) => {
    return baseAPI.post('/applicants/add', data)
}

const getAllApplicants = () => {
    return useQuery('applicants', () =>
        baseAPI.get<Applicant[]>('/applicants/get-all')
    )
}

const getApplicant = (id: string | undefined) => {
    // if (!id) return
    return useQuery(`applicant-${id}`, () =>
        baseAPI.get<Applicant>(`/applicants/byId/${id}`)
    )
}

const getStatusCounts = () => {
    return useQuery('statusCounts', () =>
        baseAPI.get('/applicants/status-count')
    )
}
export { createApplicant, getAllApplicants, getStatusCounts, getApplicant }

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

const handleFieldUpdate = async (
    data: {
        fieldName: string
        fieldValue: string
        applicantId: string | undefined
        type: string
    },
    refetch: Function
) => {
    await baseAPI.post('/applicants/update', data)
    refetch()
}

const addCommentToUpdate = async (
    data: { updateId: string; comment: string },
    refetch: Function
) => {
    await baseAPI.post('/updates/add-comment', data)
    refetch()
}

const getApplicantsByDate = (data: {
    startDate: string | null
    endDate: string | null
}) => {
    return useQuery(`byDate-${data.startDate}-${data.endDate}`, () =>
        baseAPI.post('/applicants/by-date', data)
    )
}
export {
    createApplicant,
    getAllApplicants,
    getStatusCounts,
    getApplicant,
    handleFieldUpdate,
    getApplicantsByDate,
    addCommentToUpdate
}

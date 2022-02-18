import { LinearProgress, Paper, Typography } from '@mui/material'
import { getAllApplicants, getApplicantsByDate } from 'service/endPoints'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import { Applicant } from 'types/applicant'
import { useMemo } from 'react'
import { AxiosResponse } from 'axios'
type Props = {
    searchedData: AxiosResponse<Applicant[]> | undefined
    filteredByStatus: string | undefined
    dates: {
        startDate: string | null
        endDate: string | null
    }
}

export const ApplicantsTable = ({
    searchedData,
    filteredByStatus,
    dates
}: Props) => {
    const { isLoading, isError, data } = getAllApplicants()
    const filteredByDate = getApplicantsByDate(dates)

    const newData = useMemo(() => {
        if (dates.startDate && dates.endDate) {
            return filteredByDate.data
        }

        if (!filteredByStatus) {
            return searchedData ? searchedData : data
        }

        if (filteredByStatus === 'All')
            return searchedData ? searchedData : data

        if (Boolean(searchedData)) {
            let filteredData = searchedData?.data.filter(
                app => app.status === filteredByStatus
            ) as Applicant[] | undefined

            return {
                data: filteredData
            }
        }

        let filteredData = data?.data.filter(
            app => app.status === filteredByStatus
        ) as Applicant[] | undefined

        return {
            data: filteredData
        }
    }, [
        dates.startDate,
        dates.endDate,
        filteredByStatus,
        searchedData,
        data,
        filteredByDate.data
    ]) as AxiosResponse<Applicant[]> | undefined

    if (isLoading) return <LinearProgress />
    if (isError) return <div>Something went wrong</div>

    return (
        <Paper
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
            <TableHeader />
            {searchedData?.data.length === 0 ? (
                <Typography
                    style={{ padding: 20, textAlign: 'center' }}
                    variant="h4"
                >
                    Nothing Found
                </Typography>
            ) : (
                <TableBody data={newData} />
            )}
        </Paper>
    )
}

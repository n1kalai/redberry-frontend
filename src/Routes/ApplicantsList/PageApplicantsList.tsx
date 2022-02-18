import { Box } from '@mui/material'
import { AxiosResponse } from 'axios'
import { ChangeEvent, useState } from 'react'
import { baseAPI } from 'service/baseAPI'
import { Applicant } from 'types/applicant'
import { ApplicantsTable } from './ApplicantsTable/ApplicantsTable'
import { FilterTags } from './components/FilterTags'
import { Header } from './components/Header'
import { SearchAndCalendar } from './components/SearchAndCalendar'
let DEBOUNCER: any

const PageApplicantsList = () => {
    const [searchedData, setSearchedData] = useState<
        AxiosResponse<Applicant[]> | undefined
    >(undefined)

    const [filteredByStatus, setFilteredByStatus] = useState<
        undefined | string
    >('All')

    const [dates, setDates] = useState<{
        startDate: string | null
        endDate: string | null
    }>({ startDate: null, endDate: null })

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value, name }
        } = e
        setDates(p => ({
            ...p,
            [name]: new Date(value).toISOString()
        }))

        e.target.blur()
    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value }
        } = e
        if (value === '') return setSearchedData(undefined)
        clearTimeout(DEBOUNCER)
        DEBOUNCER = setTimeout(async () => {
            let newData = await baseAPI.get(`/applicants/search/${value}`)
            setSearchedData(newData)
        }, 200)
    }

    return (
        <Box display="flex" flexDirection="column" p={3}>
            <Header />
            <SearchAndCalendar
                handleSearch={handleSearch}
                handleDateChange={handleDateChange}
            />
            <FilterTags
                filteredByStatus={filteredByStatus}
                setFilteredByStatus={setFilteredByStatus}
                setDates={setDates}
            />
            <ApplicantsTable
                filteredByStatus={filteredByStatus}
                searchedData={searchedData}
                dates={dates}
            />
        </Box>
    )
}

export default PageApplicantsList

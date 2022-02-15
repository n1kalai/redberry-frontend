import { Box } from '@mui/material'
import { ApplicantsTable } from './ApplicantsTable/ApplicantsTable'
import { FilterTags } from './components/FilterTags'
import { Header } from './components/Header'
import { SearchAndCalendar } from './components/SearchAndCalendar'

const PageApplicantsList = () => {
    return (
        <Box display="flex" flexDirection="column" p={3}>
            <Header />
            <SearchAndCalendar />
            <FilterTags />
            <ApplicantsTable />
        </Box>
    )
}

export default PageApplicantsList

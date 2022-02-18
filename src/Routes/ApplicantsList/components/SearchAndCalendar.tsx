import { Box, TextField } from '@mui/material'
import { DatePicker } from 'components/common/DatePicker'
import { ChangeEvent } from 'react'

type Props = {
    handleSearch: (_: ChangeEvent<HTMLInputElement>) => void
    handleDateChange: (_: ChangeEvent<HTMLInputElement>) => void
}

export const SearchAndCalendar = ({
    handleSearch,
    handleDateChange
}: Props) => {
    return (
        <Box display="flex" mt={5}>
            <Box width="82%" pr={3}>
                <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Search with name & last name, skills, position, phone and email"
                    variant="outlined"
                    onChange={handleSearch}
                    InputProps={{
                        style: {
                            backgroundColor: 'white'
                        }
                    }}
                />
            </Box>
            <Box flex="1">
                <DatePicker handleDateChange={handleDateChange} />
            </Box>
        </Box>
    )
}

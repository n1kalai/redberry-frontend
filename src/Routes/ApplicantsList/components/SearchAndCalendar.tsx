import { Box, TextField } from '@mui/material'
import { DatePicker } from 'components/common/DatePicker'

export const SearchAndCalendar = () => {
    return (
        <Box display="flex" mt={5}>
            <Box width="82%" pr={3}>
                <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Search with name & last name, skills, position, phone and email"
                    variant="outlined"
                    InputProps={{
                        style: {
                            backgroundColor: 'white'
                        }
                    }}
                />
            </Box>
            <Box flex="1">
                <DatePicker />
            </Box>
        </Box>
    )
}

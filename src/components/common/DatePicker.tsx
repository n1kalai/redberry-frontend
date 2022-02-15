import styled from '@emotion/styled'
import { Box, TextField, InputAdornment, Typography } from '@mui/material'
import { CalendarIcon } from './icons'
const StyledInput = styled('input')({
    background: 'transparent',
    border: 'none',
    outline: 'none'
    // width: 92
})

export const DatePicker = () => {
    return (
        // <Box>
        //     <TextField
        //         // placeholder="to"
        //         InputProps={{
        //             style: { backgroundColor: 'white' },
        //             placeholder: 'to',
        //             startAdornment: (
        //                 <InputAdornment position="start" component="div">
        //                     <StyledInput
        //                         type="date"
        //                         onClick={e => {
        //                             console.log(e)
        //                         }}
        //                     />
        //                 </InputAdornment>
        //             ),
        //             endAdornment: (
        //                 <InputAdornment position="start" component="div">
        //                     <StyledInput
        //                         type="date"
        //                         style={{ marginRight: -25 }}
        //                     />
        //                 </InputAdornment>
        //             )
        //         }}
        //     />
        // </Box>
        <Box>
            <TextField
                // placeholder="to"
                InputProps={{
                    style: { backgroundColor: 'white' },
                    startAdornment: (
                        <InputAdornment position="start" component="div">
                            <CalendarIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <Box display="flex" justifyContent="space-between">
                            <InputAdornment position="end" component="div">
                                <StyledInput
                                    type="date"
                                    style={{ textAlign: 'left' }}
                                />
                                <Typography variant="body2">to</Typography>
                                <StyledInput
                                    type="date"
                                    style={{ textAlign: 'right' }}
                                    onClick={e => {
                                        console.log(e)
                                    }}
                                />
                            </InputAdornment>
                        </Box>
                    )
                }}
            />
        </Box>
    )
}

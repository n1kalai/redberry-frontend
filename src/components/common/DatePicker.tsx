import styled from '@emotion/styled'
import { Box, TextField, InputAdornment, Typography } from '@mui/material'
import { ChangeEvent } from 'react'
import { CalendarIcon } from './icons'

const StyledInput = styled('input')({
    background: 'transparent',
    border: 'none',
    outline: 'none'
})

type Props = {
    handleDateChange: (_: ChangeEvent<HTMLInputElement>) => void
}

export const DatePicker = ({ handleDateChange }: Props) => {
    return (
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
                                    name="startDate"
                                    onChange={handleDateChange}
                                />
                                <Typography variant="body2">to</Typography>
                                <StyledInput
                                    type="date"
                                    name="endDate"
                                    style={{ textAlign: 'right' }}
                                    onChange={handleDateChange}
                                />
                            </InputAdornment>
                        </Box>
                    )
                }}
            />
        </Box>
    )
}

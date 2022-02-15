import { memo } from 'react'
import { Box } from '@mui/material'
import { StatusToggler } from './components/StatusToggle'

export const ApplicantInfo = memo(() => {
    return (
        <Box
            py={3}
            px={6}
            borderBottom="dashed 1px lightgray"
            borderRight="dashed 1px lightgray"
            height="40px"
        >
            <StatusToggler />
        </Box>
    )
})

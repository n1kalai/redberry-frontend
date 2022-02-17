import { memo } from 'react'
import { Box } from '@mui/material'
import { UserInfoForm } from './components/UserInfoForm'

export const ApplicantInfo = memo(() => {
    return (
        <Box display="flex" flexDirection="column">
            <UserInfoForm />
        </Box>
    )
})

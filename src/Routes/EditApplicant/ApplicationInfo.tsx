import { memo } from 'react'
import { Box } from '@mui/material'
import { UserEditForm } from './components/UserEditForm'

export const ApplicantInfo = memo(() => {
    return (
        <Box display="flex" flexDirection="column">
            <UserEditForm />
        </Box>
    )
})

import { memo } from 'react'
import { Box, Typography } from '@mui/material'

export const Header = memo(() => {
    return (
        <Box
            component="header"
            display="flex"
            alignItems="center"
            borderBottom="solid 1px lightgray"
            px={6}
            py={3}
        >
            <Typography
                variant="h4"
                style={{
                    color: '#10EF7C',
                    fontWeight: 'bold',
                    fontFamily: 'Inter'
                }}
            >
                Project
            </Typography>
            <Typography
                variant="h6"
                style={{
                    fontFamily: 'Inter',
                    marginLeft: 89
                }}
            >
                Recruitement Pipeline
            </Typography>
        </Box>
    )
})

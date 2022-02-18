import { memo } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { ArrowDropDownIcon } from 'components/common/icons'
import { useNavigate } from 'react-router-dom'

export const Header = memo(() => {
    const navigate = useNavigate()
    return (
        <Box
            component="header"
            display="flex"
            alignItems="center"
            borderBottom="solid 1px lightgray"
            px={6}
            py={3}
        >
            <IconButton
                title="Back"
                onClick={() => navigate(-1)}
                style={{
                    transform: 'rotate(90deg)',
                    position: 'absolute',
                    left: 8,
                    top: 32
                }}
            >
                <ArrowDropDownIcon />
            </IconButton>
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

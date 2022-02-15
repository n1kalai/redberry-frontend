import { memo } from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

const WrapperBox = styled(Box)({
    fontFamily: 'Inter',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 24,
    '& h6:first-child': {
        paddingLeft: 25,
        fontStyle: 'italic'
    },
    '& h5': {
        fontWeight: 'bold',
        marginTop: 12
    },
    '& h6:nth-child(3)': {
        background: '#F6F6F7',
        paddingLeft: 30,
        paddingBlock: 6,
        marginTop: 60
    }
})

export const Hgroup = memo(() => {
    return (
        <WrapperBox component="hgroup">
            <Typography variant="h6">Recruitement Pipeline</Typography>
            <Typography variant="h5">Candidate Details</Typography>
            <Typography variant="h6">Nikoloz Palagashvili</Typography>
        </WrapperBox>
    )
})

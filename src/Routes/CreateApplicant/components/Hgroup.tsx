import { memo } from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { getApplicant } from 'service/endPoints'
import { useParams } from 'react-router-dom'

const WrapperBox = styled(Box)({
    fontFamily: 'Inter',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 24,
    '& h6:first-of-type': {
        paddingLeft: 25,
        fontStyle: 'italic'
    },
    '& h5': {
        fontWeight: 'bold',
        marginTop: 12
    },
    '& h6:nth-of-type(2)': {
        background: '#F6F6F7',
        paddingLeft: 30,
        paddingBlock: 6,
        marginTop: 60
    }
})

export const Hgroup = memo(() => {
    const { id } = useParams()
    const { data } = getApplicant(id)
    const { firstName, lastName } = data?.data || {
        firstName: '',
        lastName: ''
    }
    return (
        <WrapperBox component="hgroup">
            <Typography variant="h6">Recruitement Pipeline</Typography>
            <Typography variant="h5">Candidate Details</Typography>
            <Typography style={{ textTransform: 'capitalize' }} variant="h6">
                {firstName + ' ' + lastName}
            </Typography>
        </WrapperBox>
    )
})

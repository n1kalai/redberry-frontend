import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import moment from 'moment'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { getApplicant } from 'service/endPoints'

const TimelineDiv = styled(Box)({
    position: 'relative',
    width: 170,
    p: {
        color: '#808189'
    },
    '& p:first-of-type': {
        color: '#BFC0C4'
    },
    '&::after': {
        content: "''",
        position: 'absolute',
        right: 0,
        backgroundColor: '#BFC0C4',
        top: 10,
        width: 2,
        height: 30
    }
})

const SecTimeLineDiv = styled(Box)({
    width: 170,
    paddingLeft: 30,
    p: {
        color: '#808189'
    },
    '& p:first-of-type': {
        color: '#BFC0C4'
    }
})

export const TimeLine = memo(() => {
    const { id } = useParams()
    const { isLoading, data } = getApplicant(id)

    const { createdAt, updatedAt } = data?.data || {
        createdAt: new Date(),
        updatedAt: Date.now()
    }

    console.log('updatedAt', updatedAt)

    return (
        <Box
            display="flex"
            py={3}
            px={6}
            borderBottom="dashed 1px lightgray"
            height="40px"
        >
            <TimelineDiv>
                <Typography
                    component="p"
                    variant="body2"
                    style={{ fontFamily: 'Inter', marginBottom: 8 }}
                >
                    ADDED
                </Typography>
                <Typography
                    component="p"
                    variant="body2"
                    style={{ fontFamily: 'Inter' }}
                >
                    {moment(createdAt).format('lll')}
                </Typography>
            </TimelineDiv>
            <SecTimeLineDiv>
                <Typography
                    component="p"
                    variant="body2"
                    style={{ fontFamily: 'Inter', marginBottom: 8 }}
                >
                    Last change
                </Typography>
                <Typography
                    component="p"
                    variant="body2"
                    style={{ fontFamily: 'Inter' }}
                >
                    {moment(updatedAt, 'YYYYMMDD').fromNow() +
                        ' ' +
                        moment(updatedAt).format('LT')}
                </Typography>
            </SecTimeLineDiv>
        </Box>
    )
})

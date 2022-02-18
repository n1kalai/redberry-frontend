import moment from 'moment'
import styled from '@emotion/styled'
import { Typography, Box } from '@mui/material'
import { memo } from 'react'

const SecTimeLineDiv = styled(Box)({
    width: 170,
    paddingLeft: 30,
    position: 'relative',
    p: {
        color: '#808189'
    },
    '& p:first-of-type': {
        color: '#BFC0C4'
    },
    '&::after': {
        content: "''",
        position: 'absolute',
        left: 0,
        backgroundColor: '#BFC0C4',
        top: 10,
        width: 2,
        height: 30
    }
})

export const TimeLineLastChane = memo(
    ({ updatedAt }: { updatedAt: Date | undefined | number }) => (
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
    )
)

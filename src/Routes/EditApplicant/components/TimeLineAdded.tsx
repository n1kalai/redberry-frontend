import { memo } from 'react'
import moment from 'moment'

import styled from '@emotion/styled'
import { Typography, Box } from '@mui/material'
import { CSSProperties } from '@mui/styled-engine'

const TimelineDiv = styled<any>(Box)({
    position: 'relative',
    width: 170,
    p: {
        color: '#808189'
    },
    '& p:first-of-type': {
        color: '#BFC0C4'
    }
})

type Props = {
    createdAt: Date | undefined
    headline?: string
    style?: CSSProperties
}

export const TimeLineAdded = memo(
    ({ createdAt, headline = 'ADDED', style = {} }: Props) => (
        <TimelineDiv style={style}>
            <Typography
                component="p"
                variant="body2"
                style={{ fontFamily: 'Inter', marginBottom: 8 }}
            >
                {headline}
            </Typography>
            <Typography
                component="p"
                variant="body2"
                style={{ fontFamily: 'Inter' }}
            >
                {moment(createdAt).format('lll')}
            </Typography>
        </TimelineDiv>
    )
)

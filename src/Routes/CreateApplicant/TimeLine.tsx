import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { memo } from 'react'

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
                    Nov 3, 2021, 2:29PM
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
                    5 days ago 6:00PM
                </Typography>
            </SecTimeLineDiv>
        </Box>
    )
})

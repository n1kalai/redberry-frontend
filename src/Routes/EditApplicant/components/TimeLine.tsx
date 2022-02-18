import { memo } from 'react'
import { useParams } from 'react-router-dom'

import { getApplicant } from 'service/endPoints'

import { Box } from '@mui/material'
import { TimeLineAdded } from './TimeLineAdded'
import { TimeLineLastChane } from './TimeLineLastChange'
import { TimeLineUpdates } from './TimeLineUpdates'

export const TimeLine = memo(() => {
    const { id } = useParams()
    const { data, refetch } = getApplicant(id)

    const { createdAt, updatedAt } = data?.data || {
        createdAt: new Date(),
        updatedAt: Date.now()
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            borderLeft="dashed 1px lightgray"
        >
            <Box
                display="flex"
                py={3}
                px={6}
                borderBottom="dashed 1px lightgray"
                height="40px"
            >
                <TimeLineAdded createdAt={createdAt} />
                <TimeLineLastChane updatedAt={updatedAt} />
            </Box>
            <TimeLineAdded
                createdAt={createdAt}
                headline={`You added ${data?.data.firstName} to the candidate list`}
                style={{
                    width: 'calc(100% - 96px)',
                    paddingTop: 24,
                    marginLeft: 48,
                    paddingBottom: 16,
                    borderBottom: 'dashed 1px lightgray',
                    boxSizing: 'border-box'
                }}
            />
            <Box pb={3} px={6} display="flex" flexDirection="column">
                <TimeLineUpdates
                    updates={data?.data.updates}
                    refetch={refetch}
                />
            </Box>
        </Box>
    )
})

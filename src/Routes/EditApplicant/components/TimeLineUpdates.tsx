import { Box } from '@mui/material'
import { Update } from 'types/Update'
import { TimeLineUpdate } from './TimeLineUpdate'

export const TimeLineUpdates = ({
    updates,
    refetch
}: {
    updates: Update[] | undefined
    refetch: Function
}) => {
    return (
        <Box>
            {updates
                ?.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
                .map(update => (
                    <TimeLineUpdate
                        key={update.id}
                        data={update}
                        refetch={refetch}
                    />
                ))}
        </Box>
    )
}

import moment from 'moment'

import { Box, LinearProgress, Typography } from '@mui/material'
import { Update } from 'types/Update'
import { Suspense, lazy } from 'react'
import UpdateCommentTextfield from './UpdateCommentTextfield'

const TimeLineComment = lazy(() => import('./TimeLineComment'))

const commonStyle = {
    display: 'inline-block',
    fontSize: 14,
    fontFamily: 'Inter'
}

const grayStyle = {
    ...commonStyle,
    color: '#808189'
}
const blackStyle = {
    ...commonStyle,
    paddingInline: 4
}
export const TimeLineUpdate = ({
    data,
    refetch
}: {
    data: Update
    refetch: Function
}) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            py={2}
            borderBottom="dashed 1px lightgray"
        >
            <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" style={grayStyle}>
                    {`You changed ${data.type} from:`}
                </Typography>
                <Typography variant="h5" style={blackStyle}>
                    {data.beforeUpdate}
                </Typography>

                <Typography variant="h5" style={grayStyle}>
                    to
                </Typography>

                <Typography style={blackStyle}>{data.afterUpdate}</Typography>
            </Box>
            <Typography
                variant="h5"
                style={{
                    fontSize: 12,
                    fontStyle: 'italic',
                    fontFamily: 'Inter',
                    color: '#808189'
                }}
            >
                {moment(data.createdAt).format('lll')}
            </Typography>
            {!data.comment ? (
                <UpdateCommentTextfield id={data.id} refetch={refetch} />
            ) : (
                <Suspense fallback={<LinearProgress />}>
                    <TimeLineComment
                        comment={data.comment}
                        author={data.userName}
                    />
                </Suspense>
            )}
        </Box>
    )
}

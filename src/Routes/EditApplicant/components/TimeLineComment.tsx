import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

type Props = {
    comment: string
    author: string
}

const StyledBox = styled(Box)({
    width: 32,
    height: 32,
    borderRadius: '100%',
    backgroundColor: '#EFEC10',
    textAlign: 'center',
    lineHeight: '32px',
    fontWeight: 'bolder'
})

const TimeLineComment = ({ comment, author }: Props) => {
    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" alignItems="center" my={2}>
                <StyledBox component="div">{author[0]}</StyledBox>
                <Typography
                    style={{
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        paddingLeft: 8
                    }}
                    variant="h2"
                >
                    {author}
                </Typography>
            </Box>
            <Typography
                style={{
                    fontSize: 14,
                    fontFamily: 'Inter',
                    lineHeight: '22px'
                }}
                component="p"
            >
                {comment}
            </Typography>
        </Box>
    )
}

export default TimeLineComment

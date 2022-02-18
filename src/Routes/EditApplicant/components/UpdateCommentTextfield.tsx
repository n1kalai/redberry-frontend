import { useRef } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { addCommentToUpdate } from 'service/endPoints'
import styled from '@emotion/styled'

const StyledTextField = styled<any>(TextField)({
    '& input::placeholder': {
        color: '#808189'
    }
})

const UpdateCommentTextfield = ({
    id,
    refetch
}: {
    id: string
    refetch: Function
}) => {
    let textAreaRef = useRef<any>()

    const handleAddComment = async () => {
        await addCommentToUpdate(
            {
                updateId: id,
                comment: textAreaRef.current
            },
            refetch
        )
    }

    return (
        <Box display="flex" flexDirection="column">
            <StyledTextField
                placeholder="Type to comment"
                style={{ marginTop: 30 }}
                onChange={(e: any) => (textAreaRef.current = e.target.value)}
                InputProps={{
                    endAdornment: (
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleAddComment}
                        >
                            Comment
                        </Button>
                    )
                }}
            />
        </Box>
    )
}

export default UpdateCommentTextfield

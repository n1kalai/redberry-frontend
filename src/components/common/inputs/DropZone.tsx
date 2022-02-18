import { useDropzone } from 'react-dropzone'
import { Box, Button, Divider, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { CloseIcon, PDFIcon } from '../icons'

type Props = {
    accept: string
    maxFiles?: number
    multiple?: boolean
    hasPdf?: boolean
    onDrop: (_: { target: { name: string; value: File } }) => void
    error?: string
}

const StyledBox = styled(Box)({
    width: 400,
    height: 200,
    marginTop: 16,
    border: '1px dashed lightgray',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& p:first-of-type': {
        fontWeight: 'bold'
    },
    '& p:nth-of-type(2)': {
        marginBottom: 27
    }
})

export const DropZone = ({
    accept,
    multiple = false,
    maxFiles = 1,
    hasPdf,
    onDrop,
    error
}: Props) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept,
        multiple,
        maxFiles,
        onDrop: (files: File[]) =>
            onDrop({ target: { name: 'cv', value: files[0] } })
    })

    return (
        <Box display="flex" flexDirection="column" width={400}>
            <StyledBox {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag files here to upload</p>
                <p>or</p>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ borderRadius: '14px' }}
                >
                    CHOOSE FILE TO UPLOAD
                </Button>
            </StyledBox>
            <Typography
                style={{
                    color: '#BFC0C4',
                    fontWeight: 500,
                    fontFamily: 'Inter',
                    fontStyle: 'italic',
                    marginBlock: 4
                }}
                variant="caption"
            >
                Required
            </Typography>
            {acceptedFiles.length > 0 ||
                (hasPdf && (
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        mt={2}
                    >
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            width="100%"
                        >
                            <Box display="flex">
                                <PDFIcon />
                                <Typography
                                    variant="body2"
                                    style={{ marginLeft: 8, fontWeight: 600 }}
                                >
                                    {acceptedFiles[0]?.name}
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Typography
                                    variant="body2"
                                    style={{ marginRight: 8 }}
                                >
                                    Done
                                </Typography>
                                <CloseIcon fill="red" />
                            </Box>
                        </Box>
                        <Divider
                            sx={{
                                backgroundColor: '#10EF7C',
                                width: '100%',
                                marginTop: 1.5
                            }}
                        />
                    </Box>
                ))}
            {Boolean(error) && (
                <Typography
                    style={{ marginTop: 4 }}
                    variant="body2"
                    color="error"
                >
                    {error}
                </Typography>
            )}
        </Box>
    )
}

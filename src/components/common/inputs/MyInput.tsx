import { Box, IconButton, styled, Typography } from '@mui/material'
import { ChangeEvent } from 'react'
import { CloseIcon, EditIcon, SuccessIcon } from '../icons'

type Props = {
    name: string
    title: string
    placeholder?: string
    error?: string
    value: string
    touched: boolean | undefined
    isEditing?: boolean
    onFiledUpdate?: () => void
    onChange: (_: ChangeEvent<HTMLInputElement>) => void
    onBlur: (_: ChangeEvent<HTMLInputElement>) => void
}

const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 12,
    '& p': {
        fontFamily: 'Inter',
        fontSize: 14,
        paddingBottom: 6
    },
    '& label': {
        cursor: 'pointer'
    },
    '& .editIcons': {
        opacity: 0
    },
    '& input': {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        '&::placeholder': {
            opacity: 0.2
        },
        '&:focus ~ .editIcons': {
            opacity: 1
        },
        '&:focus + .pencilIcon': {
            opacity: 0
        }
    }
})

export const MyInput = ({
    name,
    onChange,
    title,
    placeholder = 'type here ..',
    value,
    error,
    touched,
    onBlur,
    isEditing = false,
    onFiledUpdate
}: Props) => {
    return (
        <StyledBox>
            <Typography component="p">{title}</Typography>
            <Box display="flex" alignItems="center">
                <input
                    name={name}
                    id={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    onBlur={onBlur}
                />
                <label htmlFor={name} className="pencilIcon">
                    <EditIcon />
                </label>
                {isEditing && (
                    <div className="editIcons">
                        <IconButton
                            style={{
                                background: '#E6E6E7',
                                height: 17,
                                width: 17,
                                marginInline: 8
                            }}
                            size="small"
                        >
                            <CloseIcon />
                        </IconButton>
                        <IconButton
                            style={{
                                background: 'black',
                                height: 17,
                                width: 17
                            }}
                            size="small"
                            onClick={onFiledUpdate}
                        >
                            <SuccessIcon />
                        </IconButton>
                    </div>
                )}
            </Box>
            {error && touched && (
                <Typography
                    style={{ marginTop: 4 }}
                    variant="body2"
                    color="error"
                >
                    {error}
                </Typography>
            )}
        </StyledBox>
    )
}

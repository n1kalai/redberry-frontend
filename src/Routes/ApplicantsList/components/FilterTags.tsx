import styled from '@emotion/styled'
import { Box, IconButton } from '@mui/material'
import { GearIcon } from 'components/common/icons'

const tags = [
    'All',
    'First Contact',
    'Interview',
    'Tech Assignment',
    'Rejected',
    'Hired'
]

const WrapperBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 0,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottom: 'solid 1px lightgray',
    width: '55%',
    alignItems: 'center',
    '& li': {
        alignItems: 'center'
    },
    '& .badge': {
        backgroundColor: 'lightgray',
        paddingBlock: 2,
        borderRadius: '14px',
        paddingInline: 14
    }
})

export const FilterTags = () => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <WrapperBox component="ul" display="flex">
                {tags.map(tag => (
                    <Box
                        component="li"
                        key={tag}
                        display="flex"
                        style={{
                            opacity: 0.7,
                            fontSize: '1.2rem',
                            cursor: 'pointer'
                        }}
                    >
                        <Box paddingRight={1}> {tag} </Box>
                        <Box className="badge"> 5 </Box>
                    </Box>
                ))}
            </WrapperBox>
            <IconButton>
                <GearIcon size="30px" />
            </IconButton>
        </Box>
    )
}

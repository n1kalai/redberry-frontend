import styled from '@emotion/styled'
import { Box, IconButton, LinearProgress } from '@mui/material'
import { GearIcon } from 'components/common/icons'
import { getStatusCounts } from 'service/endPoints'

const tags = {
    all: 'All',
    initial: 'Initial',
    interview: 'Interview',
    firstContact: 'First Contact',
    techAssignment: 'Tech Assignment',
    rejected: 'Rejected',
    hired: 'Hired'
}

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

type TagType = keyof typeof tags

type Props = {
    setFilteredByStatus: (_: string) => void
    setDates: Function
    filteredByStatus: string | undefined
}

export const FilterTags = ({
    setFilteredByStatus,
    filteredByStatus,
    setDates
}: Props) => {
    const { isLoading, isError, data } = getStatusCounts()
    if (isLoading) return <LinearProgress />
    if (isError) return <Box>Something went wrong</Box>
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <WrapperBox component="ul" display="flex">
                {Object.keys(tags).map(tag => (
                    <Box
                        onClick={() => {
                            setFilteredByStatus(tags[tag as TagType])
                            setDates({ startDate: null, endDate: null })
                        }}
                        component="li"
                        key={tag}
                        display="flex"
                        style={{
                            opacity: 0.7,
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}
                    >
                        <Box
                            paddingRight={1}
                            style={{
                                textShadow:
                                    filteredByStatus === tags[tag as TagType]
                                        ? '0.1px 0 0.1px'
                                        : 'none'
                            }}
                        >
                            {' '}
                            {tags?.[tag as TagType]}{' '}
                        </Box>
                        <Box className="badge"> {data?.data[tag]} </Box>
                    </Box>
                ))}
            </WrapperBox>
            <IconButton>
                <GearIcon size="30px" />
            </IconButton>
        </Box>
    )
}

import styled from '@emotion/styled'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { TableTag } from './TableTag'

import { memo } from 'react'
import { PDFIcon, TwoCycleArrow } from 'components/common/icons'
import { Applicant } from 'types/applicant'
import { useNavigate } from 'react-router-dom'

const StyledGrid = styled(Grid)({
    borderBottom: 'solid 1px lightgray',
    padding: 20,
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#f7f7f7'
    }
})

const CellGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& b': {
        fontWeight: 'bold'
    },
    justifyContent: 'center'
})
type Props = {
    data: Applicant
}
export const TableCell = memo(({ data }: Props) => {
    const {
        firstName,
        lastName,
        phone,
        email,
        salaryRange,
        experience,
        skills,
        status,
        position,
        pdf,
        id
    } = data

    const navigate = useNavigate()
    return (
        <StyledGrid container onClick={() => navigate(`/edit/${id}`)}>
            <CellGrid item sm={3} md={3} lg={3}>
                <Typography component="b" variant="body2">
                    {firstName + ' ' + lastName}
                </Typography>
                <Typography variant="body2">{position}</Typography>
            </CellGrid>
            <CellGrid item sm={2} md={2} lg={2}>
                <Typography component="b" variant="body2">
                    {phone}
                </Typography>
                <Typography
                    component="b"
                    variant="body2"
                    style={{ wordBreak: 'break-all' }}
                >
                    {email}
                </Typography>
            </CellGrid>
            <CellGrid item sm={2} md={2} lg={2}>
                <Typography component="b" variant="body2">
                    {experience} Years
                </Typography>
            </CellGrid>
            <CellGrid item sm={2} md={2} lg={2}>
                <Box component="ul" display="flex" flexWrap="wrap" pl={0}>
                    {typeof skills === 'object'
                        ? skills.map(skill => (
                              <TableTag text={skill} key={skill} />
                          ))
                        : skills
                              .split(',')
                              .map(skill => (
                                  <TableTag text={skill} key={skill} />
                              ))}
                </Box>
            </CellGrid>
            <CellGrid item sm={1} md={1} lg={1}>
                {salaryRange}
            </CellGrid>
            <CellGrid
                item
                sm={2}
                md={2}
                lg={2}
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                <TableTag
                    backgroundColor="#dde5fe"
                    text={status}
                    icon={<TwoCycleArrow />}
                    color="#9492f1"
                />
                <IconButton
                    onClick={e => {
                        e.preventDefault()
                        window.open(pdf?.path, '_blank')
                    }}
                >
                    <PDFIcon />
                </IconButton>
            </CellGrid>
        </StyledGrid>
    )
})

import { memo } from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

const Tag = styled<any>(Box)({
    borderRadius: '10px',
    paddingBlock: 3,
    paddingInline: 6,
    marginRight: 4,
    fontSize: 12,
    fontWeight: 900,
    display: 'flex',
    alignItems: 'center'
})
type Props = {
    color?: string
    backgroundColor?: string
    text: string
    icon?: JSX.Element
}

export const TableTag = memo(
    ({ color = '#18664d', backgroundColor = '#d0f8e3', text, icon }: Props) => {
        return (
            <Tag color={color} backgroundColor={backgroundColor}>
                {text}
                {Boolean(icon) && <Box pl={1}>{icon}</Box>}
            </Tag>
        )
    }
)

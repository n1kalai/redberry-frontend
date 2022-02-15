import { memo } from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

const Tag = styled<any>(Box)({
    borderRadius: '10px',
    paddingBlock: 3,
    paddingInline: 6,
    marginRight: 4,
    fontSize: 12,
    fontWeight: 900
})
type Props = {
    color?: string
    backgroundColor?: string
    text: string
}

export const TableTag = memo(
    ({ color = '#18664d', backgroundColor = '#d0f8e3', text }: Props) => {
        return (
            <Tag color={color} backgroundColor={backgroundColor}>
                {text}
            </Tag>
        )
    }
)

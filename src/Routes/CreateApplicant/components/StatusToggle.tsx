import { useState, MouseEvent, useRef } from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { Grow, Box, Paper, Popper, MenuItem, MenuList } from '@mui/material'
import { ArrowDropDownIcon } from 'components/common/icons'

const options = [
    'Initial',
    'First Contact',
    'Interview',
    'Tech Assignment',
    'Rejected',
    'Hired'
]

type Props = {
    onChange: (_: any) => void
    value: string
}

export const StatusToggler = ({ onChange, value }: Props) => {
    const [open, setOpen] = useState(false)
    const anchorRef = useRef<HTMLDivElement>(null)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`)
    }

    const handleMenuItemClick = (
        _: MouseEvent<HTMLLIElement>,
        index: number
    ) => {
        setSelectedIndex(index)
        onChange({ target: { value: options[index], name: 'status' } })
        setOpen(false)
    }

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen)
    }

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return
        }

        setOpen(false)
    }

    return (
        <Box
            py={3}
            px={6}
            borderBottom="dashed 1px lightgray"
            borderRight="dashed 1px lightgray"
            height="40px"
        >
            <ButtonGroup
                variant="contained"
                ref={anchorRef}
                aria-label="split button"
                color="success"
            >
                <Button style={{ fontFamily: 'Inter' }} onClick={handleClick}>
                    {value}
                </Button>
                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom'
                                    ? 'center top'
                                    : 'center bottom'
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu">
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={event =>
                                                handleMenuItemClick(
                                                    event,
                                                    index
                                                )
                                            }
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    )
}

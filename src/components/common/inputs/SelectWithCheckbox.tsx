import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { CheckBoxIcon, CheckBoxOutlineBlankIcon, EditIcon } from '../icons'
import styled from '@emotion/styled'

const icon = <CheckBoxOutlineBlankIcon />
const checkedIcon = <CheckBoxIcon />

const StyledAutoComplete = styled(Autocomplete)({
    marginLeft: -15,
    '& label': {
        fontFamily: 'Inter',
        color: 'black',
        fontSize: '14px !important'
    },
    fieldset: {
        border: 0
    }
})

type Props = {
    name: string
    onChange: (_: any) => void
    value: string[] | string
}

export default function CheckboxesTags({ name, onChange, value }: Props) {
    return (
        <StyledAutoComplete
            multiple
            id="checkboxes-tags-demo"
            options={skills}
            disableCloseOnSelect
            getOptionLabel={(option: any) => option}
            renderOption={(props, option: any, { selected }) => (
                <li
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                    {...props}
                >
                    {option}
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                </li>
            )}
            style={{ width: 500 }}
            value={value}
            onChange={(_, val) => onChange({ target: { value: val, name } })}
            renderInput={({ InputProps, fullWidth, ...rest }) => {
                InputProps.endAdornment = <EditIcon />
                const newObj = {
                    ...rest,
                    InputProps
                }
                return (
                    <TextField
                        {...newObj}
                        style={{ minWidth: 210, maxWidth: 500 }}
                        label="Skills"
                        placeholder="Search skills"
                    />
                )
            }}
        />
    )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const skills = [
    'PHP',
    'MySQL',
    'Reactjs',
    'React Native',
    'Angular',
    'HTML5',
    'CSS3',
    'Javascript',
    'Laravel',
    'Nestjs',
    'Expressjs',
    'Nodejs',
    'PostgreSQL',
    'MongDB',
    'Firebase'
]

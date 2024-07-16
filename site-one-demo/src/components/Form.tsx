import { Checkbox, Paper, Stack } from '@mui/material';
import { useCallback } from 'react';

interface FormProps {
    checks: boolean[]
    setChecks: React.Dispatch<React.SetStateAction<boolean[]>>
}

const Form = ({ checks, setChecks }: FormProps) => {

    const handleChange = useCallback((index: number) => (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if(checked || checks.filter((check) => check === true).length > 1) {
            setChecks((prevChecks) => 
                prevChecks.map((prevCheck, checkIndex) => 
                    checkIndex === index ?
                        checked
                    :
                        prevCheck
                ).concat(
                    index === prevChecks.length - 1 && checked ?
                        [ false ]
                    :
                        []
                )
            )
        }
    }, [ checks ])

    return (
        <Paper>
            <Stack
                spacing={1}
                direction={{ xs: 'column', sm: 'row' }}
            >
                {checks.map((check, index) => 
                    <Checkbox
                        key={index}
                        checked={check}
                        onChange={handleChange(index)}
                    />
                )}
            </Stack>
        </Paper>
    )
}
  
export default Form
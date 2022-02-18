import { AxiosResponse } from 'axios'
import { Applicant } from 'types/applicant'
import { TableCell } from './TableCell'

type Props = {
    data: AxiosResponse<Applicant[]> | undefined
}

export const TableBody = ({ data }: Props) => {
    return (
        <>
            {data?.data?.map(app => (
                <TableCell key={app.id} data={app} />
            ))}
        </>
    )
}

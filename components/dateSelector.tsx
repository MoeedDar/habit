import DatePicker from 'react-datepicker'

type dateProps = {
    date: Date
    setDate: React.Dispatch<React.SetStateAction<Date>>
}

export default function DateSelector({date, setDate}: dateProps) {
    return (
        <span>
            <button onClick={() => setDate((date) => {
                date.setDate(date.getDate() + 1)
                return date
            })}>
            </button>
            <DatePicker selected={date} onChange={(date) => date && setDate((date))}></DatePicker>
            <button onClick={() => setDate((date) => {
                date.setDate(date.getDate() - 1)
                return date
            })}>
            </button>
        </span>
    )
}
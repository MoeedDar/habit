type props = {
    name: String
    value: boolean | number
    setValue: React.Dispatch<React.SetStateAction<boolean | number>>
}

export default function Tracker({ name, value, setValue }: props) {
    return (
        <span>
            {typeof value === 'boolean'
            ? <input type='checkbox' onChange={e => setValue(e.target.checked)} checked={value}></input>
            : <input type='number' onChange={e => setValue(e.target.valueAsNumber)}></input>}
            {name}
        </span>
    )
}
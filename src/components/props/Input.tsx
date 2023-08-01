type InputProps={
    value:string;
    handleOnChange: (event : React.ChangeEvent<HTMLInputElement>)=>void
}

const Input = (props:InputProps) => {
  return (
    <input type="text" value={props.value} onChange={props.handleOnChange} />
  )
}

export default Input
import { PersonProps } from "./Person.types"


const Person = (props:PersonProps) => {
  return (
    <div>{props.name.fname} {props.name.lname}</div>
  )
}

export default Person
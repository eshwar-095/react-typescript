type PersonListProps = {
  nameList: Array<{ fname: string; lname: string }>;
};
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.nameList.map((perosn) => (
        <h2 key={perosn.fname}>
          {perosn.lname} {perosn.lname}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;

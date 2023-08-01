type GreetProps = {
  name: string;
  messageCount: number;
  isLogged?: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLogged
          ? `Hello ${props.name}! You have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;

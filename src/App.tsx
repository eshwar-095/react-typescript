import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import { Counter1 } from "./components/class/Counter1";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User1 } from "./components/context/User1";
import { UserContextProvider } from "./components/context/UserContext";
import List from "./components/generics/List";
import { CustomButton } from "./components/html/Button";
import Text from "./components/polymorphic/Text";
import Button from "./components/props/Button";
import Container from "./components/props/Container";
import Greet from "./components/props/Greet";
import Heading from "./components/props/Heading";
import Input from "./components/props/Input";
import Oscar from "./components/props/Oscar";
import Person from "./components/props/Person";
import PersonList from "./components/props/PersonList";
import Status from "./components/props/Status";
import { DomRef } from "./components/refs/DomRef";
import { MutableRef } from "./components/refs/MutableRef";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Counter } from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import { Toast } from "./components/templateliterals/Toast";

function App() {
  const name = {
    fname: "Bruce",
    lname: "Wayne",
  };

  const names = [
    {
      fname: "Bruce",
      lname: "Wayne",
    },
    {
      fname: "MS",
      lname: "Dhoni",
    },
    {
      fname: "Thomas",
      lname: "Shelby",
    },
  ];

  return (
    <div className="App">
      <Greet name="Eshwar" messageCount={10} isLogged />
      <Person name={name} />
      <PersonList nameList={names} />
      <Status status="success" />
      <Heading>I am inevitable !</Heading>
      <Oscar>
        <Heading>Osar goes to Robert Jr</Heading>
      </Oscar>
      <Button handleClick={(event, id) => console.log("Button", event, id)} />
      <Input value="" handleOnChange={(event) => console.log(event)} />
      <Container
        styles={{ border: "1px solid black", padding: "1rem", margin: 15 }}
      />
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User1 />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter1 message="The count value is" />
      <Private isLoggedIn component={Profile} />
      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne",
          },
          {
            id: 2,
            first: "Clark",
            last: "Kent",
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={2} isPositive />
      <Toast position="center-top" />
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Button Label
      </CustomButton>
      <Text size='lg' as='h1'>
        Heading
      </Text>
      <Text size='md' as='p'>
        Paragraph
      </Text>
      <Text size='sm' color='secondary' as='label' htmlFor='someId'>
        Label
      </Text>
    </div>
  );
}

export default App;

import UserCard from "../components/UserCard";
import { Outlet, useOutletContext } from "react-router-dom";

function Home() {

  const users = useOutletContext()
  const userList = users.map(user => <UserCard key={user.id} user={user} />)
  return (
    <>
      <main>
        <h1>Home!</h1>
        {userList}
      </main>
      <Outlet context={users} />
    </>
  );
};

export default Home;
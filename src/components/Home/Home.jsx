import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>This is home page</h1>
      <Link to="/login">Login from home page</Link>
    </>
  );
}

export default Home;


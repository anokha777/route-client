
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Link to='/home'>house</Link>
      <Link to='/login'>Login</Link>
      <Link to='/xyz'>XYZ</Link>
      <Link to='/register'>Regitration</Link>
    </>
  );
}

export default Header;


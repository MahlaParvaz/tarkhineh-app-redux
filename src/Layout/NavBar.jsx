import { Link } from 'react-router-dom';
import {
  CartIcon,
  CartIconDesktop,
  Logo,
  MobileMenue,
  SearchIconDesktop,
  UserIcon,
  UserIconDesktop,
} from '../components/icons/NavbarIcons';

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar__menue">
          <MobileMenue />
        </div>
        <div className="navbar__logo">
          <Logo />
        </div>
        <div className="navbar__items">
          <ul className="items">
            <li>صفحه اصلی</li>
            <li>شعبه</li>
            <li>منو</li>
            <li>اعطای نمایندگی</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
        </div>
        <div className="navbar__icons">
          <Link>
            <span className="icon__search">
              <SearchIconDesktop />
            </span>
          </Link>

          <Link to="/cart">
            <span className="icon__card">
              <CartIconDesktop />
            </span>
          </Link>
          <Link>
            <span className="icon__user">
              <UserIconDesktop />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

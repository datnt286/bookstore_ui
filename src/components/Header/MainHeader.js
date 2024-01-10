import { Link } from 'react-router-dom';
import TopHeader from './TopHeader';
import Logo from '../../img/logo.png';
import Search from './Search';
import ShoppingButtons from './ShoppingButtons';

function MainHeader() {
    return (
        <header>
            <TopHeader />
            <div id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="header-logo">
                                <Link to="/" className="logo">
                                    <img src={Logo} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <Search />
                        <ShoppingButtons />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainHeader;

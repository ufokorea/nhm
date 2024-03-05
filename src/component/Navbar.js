import React     from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menulist=['여성','남성','신생아','육아','세계'];

    const navigate = useNavigate();
    const gotologin = () => {
        navigate("/login");
    }
    const search =(event) => {
        if(event.key == "Enter") {
            let keyword = event.target.value;
            console.log(keyword)
            navigate(`/?q=${keyword}`)
        }
    };

  return (
    <div>
        <div className="login-buttom" onClick={gotologin}>
            <FontAwesomeIcon icon={faUser} />
            <div>Login</div>
        </div>
        <div className="nav_section">
        <img width={100} src="https://www.liblogo.com/img-logo/hm682h7d2-hm-logo-h-amp-m-wikipedia.png" />
        </div>
        <div className="menu_area">

            <ul className="menu_list">
                {menulist.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>

            <div className="input_area">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" onKeyPress={(event) => search(event)} />
            </div>
        </div>
    </div>
  )
}

export default Navbar

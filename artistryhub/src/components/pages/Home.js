import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Navbar.css';


import { Button } from '../Button';
import { Link } from 'react-router-dom';


function Home() {
  // const [button, setButton] = useState(true);

  return (
    <>
        <div className='home'>
          
          <Link
            to='/artist'
            // className='nav-links-mobile'
            // onClick={closeMobileMenu}
          >
            <Button buttonStyle='btn--signup'>Sign in as an artist</Button>
            
          </Link>
          
          <Link
            to='/organizer'
            // className='nav-links-mobile'
            // onClick={closeMobileMenu}
          >
            <Button buttonStyle='btn--signup'>Sign in as an organizer</Button>
            
          </Link>
        </div>
        

        <Footer />
    </>
  );
}

export default Home;
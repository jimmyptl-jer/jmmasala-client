import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { IoCodeSlash } from "react-icons/io5";

import GrayWolf from '../assets/logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Pages/Login';
import LogoutButton from '../Pages/Logout';

export default function FooterCom() {

  const { loginWithRedirect } = useAuth0()

  return (
    <Footer container className='bg-transparent text-white'>
      <div className='w-full container mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl  dark:text-white'
            >
              <img
                src={GrayWolf}
                alt="Logo"
                className="md:w-60 md:h-60 object-contain justify-center w-20 h-20"
              />
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Contact' className=' text-white' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='mailto:jimmyptl46@gmail.com'
                  className=' text-white'
                >
                  jimmyptl46@gmail.com
                </Footer.Link>
                <Footer.Link
                  href='tel:+16478658471'
                  className=' text-white'
                >
                  (+1) 647-865-8471
                </Footer.Link>
                <Footer.Link
                  href='tel:+4915904734016'
                  className=' text-white'
                >
                  (+49) 159-0473-4016
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow Me' className=' text-white' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/jimmyptl-jer'
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' text-white'
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href='https://www.linkedin.com/in/jimmy-patel-b09311160'
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' text-white'
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href='https://medium.com/@jimmyptl46'
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' text-white'
                >
                  Medium
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Jimmy ManojKumar Patel"
            year={new Date().getFullYear()}
            className=' text-white'
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
      </div>
    </Footer>
  );
}

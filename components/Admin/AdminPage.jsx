import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import renderActiveButton from './ActiveButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faLineChart,
  faNoteSticky,
  faPieChart,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Layout/Logo';

const AdminPage = () => {
  const { user, logout } = useAuthContext();

  const [activeButton, setActiveButton] = useState('dashboard');

  function handleButtonClick(button) {
    setActiveButton(button);
  }

  const item = renderActiveButton(activeButton);

  return (
    <div>
      <div className='hidden md:block fixed top-0 left-0 bottom-0 w-60 rounded-r-xl border border-primaryColor/40 h-full'>
        <div className='h-28 flex items-center gap-4 px-4'>
          <span className='w-12'>
            <Logo />
          </span>
          <p className='text-base font-bold'>DEFT TRADER</p>
        </div>
        <div className='flex flex-col gap-2'>
          {[
            ['Dashboard', faGear, 'dashboard'],
            ['Post New Article', faNoteSticky, 'newArticle'],
            ['Update Posted Article', faNoteSticky, 'UpdateBlogPost'],
            ['Add Line & Bar Chart', faLineChart, 'addLineBarChart'],
            ['Update Line & Bar Chart', faLineChart, 'updateLineBarChart'],
            ['Add Doughnut Chart', faPieChart, 'addDoughnutChart'],
            ['Update Doughnut Chart', faPieChart, 'updateDoughnutChart'],
          ].map(([title, icon, id]) => (
            <button
              key={id}
              onClick={() => handleButtonClick(id)}
              className={`flex items-center justify-start gap-4 text-xs font-semibold text-heading cursor-pointer w-full px-4 py-3 rounded-tl-2xl rounded-bl-2xl ${
                activeButton === id
                  ? 'bg-primaryColor text-[#ffffff] hover:bg-[#044d26]'
                  : 'bg-primaryColor/5 text-gray-500 hover:text-paragraph hover:bg-green-300'
              }transition-all duration-500 ease-in-out `}>
              <FontAwesomeIcon
                icon={icon}
                className={`w-5 text-paragraph hover:text-[#035027] ${
                  activeButton === id
                    ? 'text-[#ffffff]'
                    : 'text-gray-500 hover:text-paragraph'
                }`}
              />
              {title}
            </button>
          ))}
        </div>
      </div>
      <div className='hidden md:block ml-60'>
        <div className='h-12 my-8 p-4 flex items-center justify-between border-t border-b border-primaryColor/40'>
          <p className='text-sm'>
            Welcome <span className='font-semibold'>{user?.email}</span>{' '}
          </p>
          <button
            onClick={() => logout()}
            className='border text-white font-semibold px-3 py-1 rounded-md bg-secondaryColor'>
            Sign Out
          </button>
        </div>
        <div className='px-6'>{item}</div>
      </div>
    </div>
  );
};

export default AdminPage;

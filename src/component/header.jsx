import React from 'react';
import { useUserContext, useUserToggleContext } from '../Provider/UserProvider';

const Header = () => {
  const user = useUserContext();

  return (
    <div className='container-header'>
      <h3>Desde el Header</h3>
      {user && (<span>Bienvenido: {user.email}</span>)}
    </div>
  )
}

export default Header
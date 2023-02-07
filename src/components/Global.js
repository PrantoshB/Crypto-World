import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalCoinsAction } from '../redux/global/global';

const Global = () => {
  const dispatch = useDispatch();
  const global = useSelector((state) => state.global.global);

  React.useEffect(() => {
    dispatch(globalCoinsAction());
  }, [dispatch]);

  return (
    <div className="slide">
      <img className="main-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/633px-Cryptocurrency_Logo.svg.png" alt="crypto" />

      <div className="active-crypto">
        <h4>ACTIVE</h4>
        <p>
          {global}
          {' '}
          currencies
        </p>
      </div>

    </div>
  );
};

export default Global;

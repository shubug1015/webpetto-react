import { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import Ga from 'Ga';

const History = ({ history }) => {
  const currentPath = history.location.pathname + history.location.search;

  const isMount = useRef(true);
  useEffect(() => {
    if (isMount.current) {
      Ga.init();
      isMount.current = false;
    } else {
      Ga.sendPageview(currentPath);
    }
  }, [currentPath]);

  return null;
};

export default withRouter(History);

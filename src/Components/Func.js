import { useState, useEffect } from 'react';

export const ControllerFunc = (y, homeRef) => {
  const { mainRef, aboutRef, whatWeDoRef, ourWorkRef, columnRef } = homeRef;

  const [controller, setController] = useState(null);

  const HEADER_HEIGHT = 120;

  const mainHeight = mainRef.current?.offsetHeight + HEADER_HEIGHT;

  const aboutHeight = mainHeight + aboutRef.current?.offsetHeight;

  const whatWeDoHeight = aboutHeight + whatWeDoRef.current?.offsetHeight;

  const ourWorkHeight = whatWeDoHeight + ourWorkRef.current?.offsetHeight;

  const columnHeight = ourWorkHeight + columnRef.current?.offsetHeight;

  const reachAbout = mainHeight < y && y <= aboutHeight;
  const reachWhatWeDo = aboutHeight < y && y <= whatWeDoHeight;
  const reachOurWork = whatWeDoHeight < y && y <= ourWorkHeight;
  const reachColumn = ourWorkHeight < y && y <= columnHeight;
  const reachContact = columnHeight < y;

  useEffect(() => {
    if (reachAbout) {
      setController('About');
    } else if (reachWhatWeDo) {
      setController('What We Do');
    } else if (reachOurWork) {
      setController('Our Work');
    } else if (reachColumn) {
      setController('Column');
    } else if (reachContact) {
      setController('Contact');
    } else {
      setController(null);
    }
  }, [y]);

  return controller;
};

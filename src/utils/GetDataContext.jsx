import { createContext } from 'react';
/* here a function React that creates a
new context object. A context object allows data to be shared and accessed by
components in a React application, without the need to pass props through
multiple levels of component hierarchy. used to share the accomodations's list since their fetch in app.js */
const GetDataContext = createContext([]);
export default GetDataContext;

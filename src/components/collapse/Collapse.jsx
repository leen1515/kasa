import { useState } from 'react';
import IconesSvg from '../../utils/icones/IconesSvg';
/** @name components */

/**
 * to display dropdown's component, used in about's page and description and equipments's section
 * for the selected accomodation
 * @param {string} props collapse's label, collapse's detail for its description
 * @returns {node}generates the tag for the collapse
 */
function Collapse (props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse-container">
      {
     /* used to display a collapsible section with a button that toggles the visibility of the content. */}
      <button className="collapse-button" onClick={() => setOpen(!open)} >{props.label}
        <div className="arrow">
          {open ? (<IconesSvg iconeS="up"/>) : (<IconesSvg iconeS="down"/>)}
        </div>
      </button>
      {open && <div className="collapse-displayed">{
        Array.isArray(props.detail)
          ? (props.detail.map((item) => (
            <li key={props.detail.indexOf(item)}>{item}</li>)))
          : (<p>{props.detail}</p>)
      }</div>}</div>
  );
}
export default Collapse;

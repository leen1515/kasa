import { useState } from 'react';

function Collapse (props) {
  const [open, setOpen] = useState(false);

  return (
        <div className="collapse-container">
            <button className={`collapse-button${open ? ' button-open' : ''}`} onClick={() => setOpen(!open)} >{props.label}
                <div className="arrowUp">
                <i className='fas fa-chevron-up'/>
                </div>
            </button>

            {open && <div className="collapse-displayed">{props.detail}</div>}
        </div>
  );
}

export default Collapse;

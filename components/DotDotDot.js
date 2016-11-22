import React from 'react';

import s from './DotDotDot.css';

export default ({clickDot}) => {
  return (
    <svg
      className={s.dotdotdot}
      height="24px"
      onClick={clickDot}
      version="1.1"
      viewBox="0 0 6 24"
      width="6px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Hamm&amp;Hamm" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Attorney-Dashboard-Success-Message" transform="translate(-1875.000000, -463.000000)" fill="#C3D3DE">
                <g id="Drawer" transform="translate(1622.000000, 463.000000)">
                    <g id="options" transform="translate(253.000000, 0.000000)">
                        <g id="Group-3">
                            <circle id="Oval-3" cx="3" cy="3" r="3"></circle>
                            <circle id="Oval-3-Copy" cx="3" cy="12" r="3"></circle>
                            <circle id="Oval-3-Copy-2" cx="3" cy="21" r="3"></circle>
                        </g>
                        <g id="Group-3-Copy">
                            <circle id="Oval-3" cx="3" cy="3" r="3"></circle>
                            <circle id="Oval-3-Copy" cx="3" cy="12" r="3"></circle>
                            <circle id="Oval-3-Copy-2" cx="3" cy="21" r="3"></circle>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  )
}

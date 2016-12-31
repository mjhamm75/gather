import React from 'react';

export default ({addPadding}) => {
  let padding = addPadding ? '4px' : null;
  return (
    <svg style={{paddingTop: padding}} width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Hamm&amp;Hamm" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Account-Creation" transform="translate(-493.000000, -1028.000000)" fill="#000000">
                <path d="M497.549088,1040.21516 L493.277568,1035.39716 C492.836394,1034.90201 492.931434,1034.18012 493.489354,1033.78822 C494.047568,1033.39633 494.856581,1033.4811 495.298634,1033.97742 L497.465488,1036.42148 L503.978368,1028.47156 C504.396661,1027.96174 505.203328,1027.84588 505.778554,1028.21958 C506.353781,1028.59182 506.478741,1029.30932 506.060448,1029.82148 L497.549088,1040.21516 Z" id="Page-1-Copy"></path>
            </g>
        </g>
    </svg>
  )
}

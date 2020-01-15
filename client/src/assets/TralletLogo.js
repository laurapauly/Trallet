import React from 'react';
import styled from '@emotion/styled';

export default function TralletLogo(props) {
  const Svg = styled.svg`
    margin-top: 60px;
    animation: fadeInDown 2s;
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }

      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  `;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="160"
      viewBox="0 0 160 160"
      {...props}
    >
      <g id="Gruppe_15" data-name="Gruppe 15" transform="translate(-80 -115)">
        <g id="Logo" transform="translate(80 115)">
          <g id="Gruppe_12" data-name="Gruppe 12" transform="translate(-80 -194)">
            <circle
              cx="80"
              cy="80"
              r="80"
              transform="translate(80 194)"
              fill="#e8e8e8"
              opacity="0.284"
            />
          </g>
          <path
            d="M-625-655a80.066,80.066,0,0,1,2.87-21.312c6.674-4.941,24.45-15.717,47.6-11.076,29.639,5.942,49.885,37.155,68.085,37.155,28.445,0,37.393-12.02,40.188-18.964A80.442,80.442,0,0,1-465-655a80,80,0,0,1-80,80A80,80,0,0,1-625-655Z"
            transform="translate(625 735)"
            fill="#91d5e2"
            opacity="0.755"
          />
          <path
            d="M-625-655a80.8,80.8,0,0,1,.586-9.734c2.485,5.021,13.061,23.182,35.314,21.416,25.8-2.048,47.321-30.874,67.281-30.874,36.46,0,53.66,23.14,56.418,27.236A80.012,80.012,0,0,1-545-575,80,80,0,0,1-625-655Z"
            transform="translate(625 735)"
            fill="#e9f6f9"
          />
          <path
            d="M-1025.494-1364.5c8.828,6.059,32.9,21.2,55.688,23.223,14.382,1.279,33.367-7.594,52.3-12.662,17.188-4.6,30.867,2.809,38.776,4.214A79.985,79.985,0,0,1-949-1308,80.036,80.036,0,0,1-1025.494-1364.5Z"
            transform="translate(1029.494 1467.505)"
            fill="#debd91"
          />
        </g>
      </g>
    </Svg>
  );
}

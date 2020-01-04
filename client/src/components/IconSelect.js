import React from 'react';
import light from '../themes/light.js';
import SpendingButton from './SpendingButton.js';
import Icon from './Icon';

export default function IconSelect({ items, onSelect, selected }) {
  function onClick(value) {
    return function() {
      onSelect(value);
    };
  }

  function getFill(active) {
    if (active) {
      return light.colors.fontprimary;
    }
    return light.colors.action;
  }

  return (
    <>
      {items.map(item => (
        <SpendingButton
          onClick={onClick(item.value)}
          key={item.value}
          active={selected === item.value}
        >
          <Icon icon={item.icon} fill={getFill(selected === item.value)} />
        </SpendingButton>
      ))}
    </>
  );
}

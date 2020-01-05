import React from 'react';
import DrinkIcon from './icons/drinks';
import FoodIcon from './icons/food';
import TransportIcon from './icons/transport';
import ActionIcon from './icons/action';
import AirplaneIcon from './icons/airplane';
import ChartIcon from './icons/chart';
import CloseIcon from './icons/close';
import FilterIcon from './icons/filter';
import HomeIcon from './icons/home';
import HotelIcon from './icons/hotel';
import MapIcon from './icons/map';
import PlusIcon from './icons/plus';
import SeeMoreIcon from './icons/seemore';
import ShoppingIcon from './icons/shopping';
import SmileyIcon from './icons/smiley';
import UmbrellaIcon from './icons/umbrella';

export default function Icon({ icon, fill, size }) {
  switch (icon) {
    case 'drinks':
      return <DrinkIcon fill={fill} size={size} />;
    case 'food':
      return <FoodIcon fill={fill} size={size} />;
    case 'transport':
      return <TransportIcon fill={fill} size={size} />;

    case 'action':
      return <ActionIcon fill={fill} size={size} />;
    case 'airplane':
      return <AirplaneIcon fill={fill} size={size} />;
    case 'chart':
      return <ChartIcon fill={fill} size={size} />;
    case 'close':
      return <CloseIcon fill={fill} size={size} />;
    case 'filter':
      return <FilterIcon fill={fill} size={size} />;

    case 'home':
      return <HomeIcon fill={fill} size={size} />;
    case 'hotel':
      return <HotelIcon fill={fill} size={size} />;
    case 'map':
      return <MapIcon fill={fill} size={size} />;
    case 'plus':
      return <PlusIcon fill={fill} size={size} />;
    case 'seemore':
      return <SeeMoreIcon fill={fill} size={size} />;
    case 'shopping':
      return <ShoppingIcon fill={fill} size={size} />;
    case 'smiley':
      return <SmileyIcon fill={fill} size={size} />;

    case 'umbrella':
      return <UmbrellaIcon fill={fill} size={size} />;
    default:
      return null;
  }
}

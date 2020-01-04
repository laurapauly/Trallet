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

export default function Icon({ icon, fill }) {
  switch (icon) {
    case 'drinks':
      return <DrinkIcon fill={fill} />;
    case 'food':
      return <FoodIcon fill={fill} />;
    case 'transport':
      return <TransportIcon fill={fill} />;

    case 'action':
      return <ActionIcon fill={fill} />;
    case 'airplane':
      return <AirplaneIcon fill={fill} />;
    case 'chart':
      return <ChartIcon fill={fill} />;
    case 'close':
      return <CloseIcon fill={fill} />;
    case 'filter':
      return <FilterIcon fill={fill} />;

    case 'home':
      return <HomeIcon fill={fill} />;
    case 'hotel':
      return <HotelIcon fill={fill} />;
    case 'map':
      return <MapIcon fill={fill} />;
    case 'plus':
      return <PlusIcon fill={fill} />;
    case 'seemore':
      return <SeeMoreIcon fill={fill} />;
    case 'shopping':
      return <ShoppingIcon fill={fill} />;
    case 'smiley':
      return <SmileyIcon fill={fill} />;

    case 'umbrella':
      return <UmbrellaIcon fill={fill} />;
    default:
      return null;
  }
}

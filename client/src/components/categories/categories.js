import light from '../../themes/light.js';
import DrinkIcon from '../icons/DrinksIcon';
import FoodIcon from '../icons/FoodIcon';
import TransportIcon from '../icons/TransportIcon';
import ActionIcon from '../icons/ActionIcon';
import AirplaneIcon from '../icons/AirplaneIcon';
import HotelIcon from '../icons/HotelIcon';
import ShoppingIcon from '../icons/ShoppingIcon';
import SmileyIcon from '../icons/SmileyIcon';

const categories = [
  {
    Icon: FoodIcon,
    value: 'food',
    fill: light.colors.action,
    title: 'Essen'
  },
  {
    Icon: TransportIcon,
    value: 'transport',
    fill: light.colors.action,
    title: 'Transport'
  },
  {
    Icon: AirplaneIcon,
    value: 'airplane',
    fill: light.colors.action,
    title: 'Flüge'
  },
  {
    Icon: HotelIcon,
    value: 'hotel',
    fill: light.colors.action,
    title: 'Hotel'
  },
  {
    Icon: DrinkIcon,
    value: 'drinks',
    fill: light.colors.action,
    title: 'Party'
  },
  {
    Icon: ShoppingIcon,
    value: 'shopping',
    fill: light.colors.action,
    title: 'Einkauf'
  },
  {
    Icon: ActionIcon,
    value: 'action',
    fill: light.colors.action,
    title: 'Freizeit'
  },
  {
    Icon: SmileyIcon,
    value: 'smiley',
    fill: light.colors.action,
    title: 'Sonstiges'
  }
];

export default categories;

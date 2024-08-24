import { NavLink } from 'react-router-dom';
import './components.css'

const categories = [
  "All",
  "Appetizer",
  "Baked",
  "Breakfast",
  "Bread",
  "Cake",
  "Cookies",
  "Desert",
  "Dinner",
  "Fried",
  "Ice Cream",
  "Lunch",
  "Pasta",
  "Salad",
  "Seafood",
  "Side-dish",
  "Snack",
  "Soup",
  "Vegetarian",
  "Other",
];

const CategoryNavBar = ( {onCategorySelect} ) => {

  const categoryClass = ({ isActive }) =>
    isActive
      ? 'text-sm px-4 py-2 rounded-3xl border-2 border-green-500 bg-white text-black hover:bg-green-500 hover:border-green-500 hover:text-white focus:outline-none'
      : 'text-sm px-4 py-2 rounded-3xl border-2 border-green-500 bg-green-500 text-white focus:outline-none'

  return (
    <div className="w-full h-15 overflow-x-auto whitespace-nowrap py-2 scrollbar-hide">
      <div className="inline-flex space-x-2 px-4">
        {categories.sort().map((category, index) => (
          <NavLink
            key={index}
            to='/'
            className={categoryClass}>
            {category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavBar;

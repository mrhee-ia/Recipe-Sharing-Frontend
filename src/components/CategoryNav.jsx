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
  return (
    <div className="w-full h-15 overflow-x-auto whitespace-nowrap py-2 scrollbar-hide">
      <div className="inline-flex space-x-2 px-4">
        {categories.sort().map((category, index) => (
          <button
            key={index}
            onClick={() => onCategorySelect(category)}
            className="px-4 py-2 bg-white text-indigo rounded-3xl hover:bg-indigo-600 focus:outline-none">
            <span className='text-sm'>{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavBar;

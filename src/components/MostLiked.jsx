import CardContainer from './CardContainer';

const MostLiked = () => {
  const url = '/foods?likes_gte=70'
  return (
    <>
      <div className="flex items-center mt-2 mb-2">
        <div className="flex-1"></div>
        <h3 className="px-6 text-white text-xl">Most Liked Recipes</h3>
        <div className="flex-1"></div>
      </div>
      <CardContainer url={url} />
    </>
  );
}

export default MostLiked;

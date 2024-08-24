import CardContainer from './CardContainer';

const MostLiked = () => {
  const url = '/foods?likes_gte=70'
  return (
    <>
      <div className="flex items-center p-2">
        <hr className="flex-1 border-white" />
        <h3 className="px-6 text-white text-xl">Most Liked Recipes</h3>
        <hr className="flex-1 border-white" />
      </div>
      <CardContainer url={url} />
    </>
  );
}

export default MostLiked;

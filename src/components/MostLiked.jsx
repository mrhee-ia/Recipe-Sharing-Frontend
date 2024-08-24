import CardContainer from './CardContainer';
import CardsHeading from './CardsHeading';

const MostLiked = () => {
  const url = '/foods?likes_gte=30'
  return (
    <>
      <CardsHeading title='Most Liked Recipes'/>
      <CardContainer url={url} />
    </>
  );
}

export default MostLiked;

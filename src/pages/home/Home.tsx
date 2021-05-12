import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../api/hooks';
import { beerSelector, fetchBeers } from '../../api/reducer/beerSlice';
import Card from '../../components/card/Card';
import './Home.css';

export default function Home() {
  const dispatch = useAppDispatch();
  const { allBeers } = useAppSelector(beerSelector);

  useEffect(() => {
    dispatch(fetchBeers());
  }, [dispatch]);
  console.log(allBeers)

  return (
    <div className="container container-bg-angle">
      <h2 className="heading-bold">Brew Me</h2>
      <div className="container-center">
      {allBeers.map((beer) => {
        
        return <Card key={beer.id} name={beer.name} image={beer.image_url}/>
      })}
      </div>
    </div>
  );
}

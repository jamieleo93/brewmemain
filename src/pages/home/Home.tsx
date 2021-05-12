import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../api/hooks";
import { beerSelector, fetchBeers } from "../../api/reducer/beerSlice";
import Card from "../../components/card/Card";
import "./Home.css";

export default function Home() {
  const dispatch = useAppDispatch();
  const { allBeers, isLoading } = useAppSelector(beerSelector);

  useEffect(() => {
    dispatch(fetchBeers());
  }, [dispatch]);
  
if(isLoading) {
  return <div className="container container-center container-100"><div className="lds-ripple"><div></div><div></div></div></div>
} else {
  return (
    <div className="container container-bg-angle">
      <h2 className="heading-bold">Brew Me</h2>
      <div className="container-center">
        {allBeers.map((beer) => {
          return (
            <Card
              key={beer.id}
              name={beer.name}
              description={beer.description}
              image={beer.image_url}
              tagline={beer.tagline}
              alcohol={beer.abv}
              firstBrew={beer.first_brewed}
              tips={beer.brewers_tips}
            />
          );
        })}
        <footer>
          <p>
            Random ideas by{" "}
            <a href="http://jamiehammond.dev" target="_blank" rel="noreferrer">
              Jamie Hammond
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
      }
}

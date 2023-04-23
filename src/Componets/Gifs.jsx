import { useFetch } from "../hooks/useFetch";
import { GifsNekos } from "./GifsNekos";

export function Gifs() {
  const { data, fetchData } = useFetch("https://nekos.best/api/v2/highfive");

  return (
    <div>
      <button onClick={fetchData}>Generate gifts</button>
      <div className="container">
        <ul className="image-gallery">
          {data.map((gif, id) => {
            return <GifsNekos key={id} url={gif.url} />;
          })}
        </ul>
      </div>
    </div>
  );
}

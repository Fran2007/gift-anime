export const GifsNekos = ({ url, anime_name }) => {
  return (
    <div>
      <img src={url} style={{ border: '5px solid gray' }} />
      <h1>{anime_name}</h1>
    </div>
  );
};

export const GifsNekos = ({ url, anime_name }) => {
  return (
    <div>
      <img src={url} />
      <h1>{anime_name}</h1>
    </div>
  );
};

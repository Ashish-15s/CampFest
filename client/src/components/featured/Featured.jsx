import useFetch from "../../hooks/userFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/event/countByCity?cities=jaipur,mumbai,delhi,pune"
  );

  return (
    <div className="featured">
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://wallpapers-clan.com/wp-content/uploads/2021/03/spider-man-pointing-spider-man-meme-wallpaper-scaled.jpg"
              alt="img"
            ></img>
            <div className="featuredTitles">
              <h1>Jaipur</h1>
              <h2>{data[0]} College Fests</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://wallpapers-clan.com/wp-content/uploads/2021/03/spider-man-pointing-spider-man-meme-wallpaper-2-scaled.jpg"
              alt="img"
            ></img>
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[1]} College Fests</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://wallpapers-clan.com/wp-content/uploads/2021/03/spider-man-pointing-spider-man-meme-wallpaper-scaled.jpg"
              alt="img"
            ></img>
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[2]} College Fests</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://wallpapers-clan.com/wp-content/uploads/2021/03/spider-man-pointing-spider-man-meme-wallpaper-2-scaled.jpg"
              alt="img"
            ></img>
            <div className="featuredTitles">
              <h1>Pune</h1>
              <h2>{data[3]} College Fests</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

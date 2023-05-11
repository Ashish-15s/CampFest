import "./eventList.css";
import useFetch from "../../hooks/userFetch";

const EventList = () => {
  const { data, loading, error } = useFetch("/event/countByType");
  const images = [
    "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg?w=300",
    "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg?w=300",
    "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg?w=300",
    "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg?w=300",
  ];
  return (
    <div className="eList">
      {loading ? (
        "loading"
      ) : (
        <>
          {" "}
          {data &&
            images.map((img, i) => (
              <div className="eListItem" key={i}>
                <img className="eListImg" src={img} alt="img"></img>
                <div className="pListTitle">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
export default EventList;

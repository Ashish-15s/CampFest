export const userColumns = [
  { field: "_id", headerName: "ID", width: 200 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.img ||
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            }
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const eventColumns = [
  { field: "_id", headerName: "ID", width: 400 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },

  {
    field: "type",
    headerName: "Type",
    width: 100,
  },

  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "college",
    headerName: "College",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
];

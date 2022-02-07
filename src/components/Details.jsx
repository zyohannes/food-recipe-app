function Details(props) {
  const { food } = props;
  if (!food)
    return (
      <p className="loading">
        <BallTriangle heigth="90" width="90" color="grey" ariaLabel="loading" />
      </p>
    );

  return (
    <div style={{ margin: "5rem" }}>
      <h1>{food.title}</h1>
      <p>
        <strong>Description:</strong>
        {food.body}
      </p>
      <table className="table" style={{ margin: "1rem" }}>
        <thead>
          <tr>
            <th scope="col">Content</th>
            <th scope="col">Amount(g)</th>
            <th scope="col">Status</th>
            <th scope="col">Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Carbohy.</th>
            <td>72.9</td>
            <td>✔️</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Protein</th>
            <td>42.3</td>
            <td>😖</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;

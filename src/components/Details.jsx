function Details(props) {
  //const { food } = props;

  return (
    <div style={{ margin: "5rem" }}>
      <h1>Murgh Malaiwala</h1>
      <p>
        <strong>Description:</strong>
        About Murgh Malaiwala Recipe: A super delicious, creamy and flavourful
        chicken recipe made without any oil or ghee. Chicken drumsticks
        marinated with{" "}
      </p>
      <table className="table" style={{ margin: "1rem" }}>
        <thead>
          <tr>
            <th scope="col">Content</th>
            <th scope="col">Amount(g)</th>
            <th scope="col">Status</th>
            <th scope="col">Handle</th>
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
            <th scope="row">Protine</th>
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

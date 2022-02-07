import { BallTriangle } from 'react-loader-spinner';
import './styles/Recipe.css';

function Recipe(props) {
  const { foodList, isLoading } = props;

  if (isLoading)
    return (
      <p className="loading">
        <BallTriangle
          heigth="100"
          width="100"
          color="grey"
          ariaLabel="loading"
        />
      </p>
    );
  if (foodList.length === 0)
    return <h4 className="m-5">No Food Available, Search Again!</h4>;

  return (
    <div className="row">
      {foodList.map((food) => (
        <div key={food.id} className="card col-3 " style={{ width: '20rem' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5iEj1qbLA8v0RsIuKWCxEN5Jo54thBUeDA&usqp=CAU"
            className="card-img-top"
            alt="chicken"
          />
          <div className="card-body">
            <h5 className="card-title">
              Some quick example text to build on the card title
            </h5>
            <p className="">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p className="card-text">#chicken</p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recipe;

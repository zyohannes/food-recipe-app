import "./App.css";
import Form from "./components/Form";

function App() {
  const searchFood = async (e) => {
    e.preventDefault();
    console.log("searchFood");
  };

  return (
    <div className="App">
      <header className="App-header">Tools</header>
      <section>
        <Form searchFood={searchFood} />
      </section>
    </div>
  );
}

export default App;

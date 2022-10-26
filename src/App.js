/** @format */

function App() {
  const clickHandler = async () => {
    try {
      console.log("Entered into the controller");

      const response = await fetch("http://localhost:4000/testroute", {
        method: "POST",
        body: JSON.stringify({ msg: "Say Hi to Pankaj !!!" }),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
      });

      if (response.ok) {
        console.log("Successfully fetched the data ...");
        console.log("data", await response.json());
      } else {
        console.log("Error in fetching the data");
      }

      console.log("Exiting from the Controller");
    } catch (err) {
      console.log(err.message);
      // console.log(err);
    }
  };

  return (
    <div className="App">
      <button id="btn" onClick={clickHandler}>
        Fetch data
      </button>
    </div>
  );
}

export default App;

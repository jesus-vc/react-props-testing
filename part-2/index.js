const App = () => {
  return (
    <div>
      <Tweet
        username="n1"
        name="Name1"
        date={new Date().toDateString()}
        message="My first tweet."
      />
      <Tweet
        username="n2"
        name="Name2"
        date={new Date().toDateString()}
        message="My first tweet."
      />
      <Tweet
        username="n3"
        name="Name3"
        date={new Date().toDateString()}
        message="My first tweet."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

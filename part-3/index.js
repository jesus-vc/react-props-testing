const App = () => {
  return (
    <div>
      <Person name="Jay12345" age={12} hobbies={["soccer", "swim"]} />
      <Person name="Jay334455" age={28} hobbies={["soccer", "swim", "read"]} />
      <Person
        name="Jay3"
        age={38}
        hobbies={["soccer", "swim", "read", "play"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

const App = () => (
  <div>
    <FirstComponent />,
    <NamedComponent name="Jay" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

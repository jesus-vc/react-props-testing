/** Info on a single person.
 *
 * Props:
 * - name
 * - age
 * - hobbies: array, like ["cats", "bridge", "fighting the patriarchy"]
 */

const Person = ({ age, hobbies, name }) => {
  const message = Number(age) >= 18 ? "Please go vote!" : "You must be 18.";
  const nameSubstring = name.length > 8 ? name.substring(0, 6) : name;

  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <h2>Name: {nameSubstring}</h2>
        <h3>Message: {message}</h3>
        <ul>
          Hobbies:
          {hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          all about Salem 🐈‍⬛😺
        </p>
        <a
          className="App-link"
          href="https://salem.care"
          target="_blank"
          rel="noopener noreferrer"
        >
          salem.care
        </a>
      </header>
      <div className="salem-info">
        <h1>Salem: Your Friendly Neighborhood Cat</h1>
        <img
          src="/salem_photo.jpg"
          alt="Salem the Cat"
          className="salem-photo"
        />{" "}
        {/* Replace with Salem's photo */}
        <p>
          Hi there! You might have seen Salem around the neighborhood. He's a
          very friendly black mixed-breed cat with medium-length fur and a
          distinctive scar on his nose. He loves exploring the outdoors, but he
          has a loving home and family waiting for him.
        </p>
        <h2>Important Information About Salem</h2>
        <ul>
          <li>
            <strong>He's allowed to roam:</strong> Salem is an indoor/outdoor
            cat and enjoys exploring. Please don't be concerned if you see him
            out and about.
          </li>
          <li>
            <strong>He's very friendly!</strong> Salem loves attention and might
            approach you for a friendly hello. Feel free to say hi!
          </li>
          <li>
            <strong>He's up-to-date on his shots:</strong> Salem's vaccinations
            are current, so you don't need to worry about his health.
          </li>
          <li>
            <strong>Please do not feed or house him:</strong> Salem has a
            dedicated family who provides him with everything he needs. Extra
            food can actually be harmful to him, and we want to make sure he
            always comes home.
          </li>
        </ul>
        <p>
          We appreciate your concern for Salem! He's a much-loved member of our
          family, and we're so grateful to live in a neighborhood where people
          care about animals. If you have any serious concerns about Salem's
          well-being, please don't hesitate to contact us at [Your Phone Number
          or Email Address].
        </p>
        <p>Meow! (That's Salem saying thanks for caring!)</p>
      </div>
    </div>
  );
}

export default App;

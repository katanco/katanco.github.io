import salembio from "./assets/salembio.jpg";
import "./App.css";

function App() {
  return (
    <>
      <h1>salem.care</h1>
      <img src={salembio} className="biopic" alt="Salem Bio Pic" />
      <div className="card">
        <p>
          Hi! 😼 My name is Salem. I'm an indoor-outdoor cat who lives near{" "}
          <a href="https://g.co/kgs/LndVZiE">Adams & 14th</a> in Denver.
        </p>
        <h2>About Me</h2>
        <h3>I'm allowed to roam 🌳</h3>
        <p>
          My parents let me go in and out as I choose so long as I have collar
          charged and on. Please do not be worried if you see me out and about.
        </p>
        <h3>I love to cuddle 😻</h3>
        <p>
          I love attention and making friends! Please feel free to say hi, pet
          me, cuddle with me, or spend time with me. I don't like to be
          restricted, so please be mindful when interacting with me.
        </p>
        <h3>I love to adventure 🌳</h3>
        <p>
          The only thing I love more than yelling and cuddlig is splorin'. I
          love the great outdoors, even in intense weather conditions I might
          choose to go out. If you're worried or see me in danger please contact
          my parents at the number on my tag.
        </p>
        <h3>I'm safe and healthy⚕️</h3>
        <p>
          I am up to date on my shots and well taken care of, please do not be
          worried about my health of safety. I came from a foster home in Sain
          Louis in 2022, and have lived in Denver since.
        </p>
        <h3>I love to complain 😭</h3>
        <p>
          Sometimes I might get lost or scared and scream about it (I can be
          very loud). If you find me and I seem stressed, please help me get
          somewhere safe, and inform my parents at the number on my tag. Please
          do not feed or shelter me, I can return home or my parents can locate
          me to pick me up.
        </p>
        <h3>I'm kind of a stinker! 😼</h3>
        <p>
          Despite all of my adorable qualities, I'm kindof a stinker. I have
          been known to be loud, bother people until they let me into their
          homes, not return to my home when I'm supposed to, claw things that
          I'm not supposed to, and generally be a butt. Please text my parents
          at the number listed on my tag if I've caused you any trouble.
        </p>
        <h3>Identifying me 🕵️</h3>
        <p>
          I am a medium hair black cat, with a tuft of white fur on my chest,
          and a small vertical scar on my nose. I'm 5 years old and roughly 18
          lbs.
        </p>
      </div>
    </>
  );
}

export default App;

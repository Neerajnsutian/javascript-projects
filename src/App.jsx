import "./App.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Forkify",
    img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    desc: "A web application that helps you search for recipes and save them . Implemented Fetching data and Sending data back to API asynchronously using HTML , CSS and JAVASCRIPT . Discover new and exciting recipes categorized by cuisine, dietary preferences, ingredients, and more, tailored to your taste.",
    project: "https://recipe-fetching-app-netlify.netlify.app/",
  },
  {
    id: 2,
    title: "Mapty",
    img: "https://images.unsplash.com/photo-1480179087180-d9f0ec044897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJ1bm5pbmd8ZW58MHx8MHx8fDA%3D",
    desc: "Mapty is a web application that allows you to track and record your workouts using an interactive map . The app uses Geolocation API , and various external Libraries for fectching data and presenting results . Track your distance , duration , Cadence , type of activity in real-time for Access your data anytime, anywhere, across desktop and mobile devices for seamless integration into your fitness routine .",
    project: "https://exercise-tracking-app-mapty.netlify.app/",
  },
  {
    id: 3,
    title: "BANKIST",
    img: "https://plus.unsplash.com/premium_photo-1658526914485-af7b566986b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhbnNhY3Rpb258ZW58MHx8MHx8fDA%3D",
    desc: "Our bank app offers a seamless and secure banking experience through a modern web interface crafted with HTML, CSS, and JavaScript . Users can conveniently manage their finances from any device with internet access.",
    project: "https://bankist-app-login-netlify.netlify.app/",
  },
  {
    id: 4,
    title: "GUESS NUMBER",
    img: "https://images.unsplash.com/photo-1616574808712-5cf60f175073?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG51bWJlciUyMGdhbWV8ZW58MHx8MHx8fDA%3D",
    desc: "Welcome to our interactive number selection game! Built with HTML, CSS, and JavaScript, our website offers an engaging way to generate random numbers with just a click . Experience the thrill of randomness as our game generates numbers instantly with each play.",
    project: "https://guessing-numer-app.netlify.app/",
  },
  {
    id: 5,
    title: "PIG GAME",
    img: "https://plus.unsplash.com/premium_photo-1674595901755-80573f6254cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGljZXxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Experience the excitement of dice rolling and strategic gameplay on our HTML, CSS, and JavaScript-powered website .Roll virtual dice with a simple click, experiencing the suspense of each throw as numbers are generated randomly .",
    project: "https://pig-game-app-netlify.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.project} target="_blank">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Javascript Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default App;

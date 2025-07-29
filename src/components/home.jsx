import React from "react";
import header from "../assets/header.jpg";

function Home() {
  const greetingList = [
    "Good day",
    "Bonjour",
    "Guten Tag",
    "¡Buenos días",
    "Buongiorno",
    "God dag",
    "Dzień dobry",
    "Добрый день",
    "こんにちは",
    "안녕하세요",
    "你好",
    "Yom Tov",
    "Selamat siang",
    "As-salamu alaykum",
    "Mabuhay",
  ];
  const creedList = [
    "Like a grandfather clock, I experience every pendulum swing",
    "Like an arrow, I narrow on my target",
    "Like a Pierrot, I swear by my tears",
    "Like a great tree, I stand resolute",
    "And like none other, I am I am",
  ];

  const [greeting, setGreeting] = React.useState(greetingList[0]);
  const [creed, setCreed] = React.useState(creedList[0]);
  const greetingIndexRef = React.useRef(0);
  const creedIndexRef = React.useRef(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      greetingIndexRef.current =
        (greetingIndexRef.current + 1) % greetingList.length;
      setGreeting(greetingList[greetingIndexRef.current]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      creedIndexRef.current = (creedIndexRef.current + 1) % creedList.length;
      setCreed(creedList[creedIndexRef.current]);
    }, 2900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home text-[1.5vw]" id="home">
      <div className="flex flex-row w-full items-start justify-between">
        {/* Header Text */}
        <div className="flex flex-col w-1/2 gap-x-8 justify-center items-center h-screen">
          <h1 className="text-6xl font-bold text-amber-200 tracking-tight pb-10">
            {greeting},{" "}
            <span className="text-white text-4xl font-light">visitor!</span>
          </h1>

          <h1>
            <span className="secondary text-[1.2vw]">
              R.D. <span className="accent text-[1.5vw]">"Opera"</span> Facundo
            </span>
          </h1>
          <h4
            key={creed}
            className="fade-in-out-3s italic text-[0.85vw] font-extralight text-white"
          >
            "<span className="accent">{creed}</span>"
          </h4>
        </div>

        {/* Header Image */}
        <div className="header w-1/2 flex flex-col items-center">
          <img
            src={header}
            alt="header"
            className="max-w-full h-auto object-contain"
          />
          <p className="italic text-xs mt-2">"Test Image"</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import icon from "./twitter.png";

function App() {
  const [advice, setAdvice] = useState('');

  const getActivity = async () => {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    console.log(data);
    setAdvice(data.activity);
  };

  useEffect(() => {
    getActivity();
  }, []);

  const tweetAdvice =() =>{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${advice}`;
    window.open(twitterUrl, "_blank");

  }


  return (

    <div className="container">
      <p>{advice}</p>
      <div className="btn-container">
        <button className="btn-tweet" onClick={tweetAdvice}><img src={icon} width="50px"/></button>
      <button className="btn-click" onClick={getActivity}>New Advice</button>
      </div>
    </div>
  );
}

export default App;

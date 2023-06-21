import { useEffect, useState } from "react";
import { fotoperfil } from '../../assets'
import './About.css'
import myTextFile from "./myfile.txt";

const About = () => {

  const [text, setText] = useState("");

  useEffect(() => {
    fetch(myTextFile)
      .then(response => response.text())
      .then(text => setText(text));
  }, []);

  return (
    <section id='about'>
      <div>
        <h2>About me</h2>
        <div className='content-container'>
          <div >
            <img src={fotoperfil} alt="" />
          </div>
          <div >
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;

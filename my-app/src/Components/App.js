import React, { useState } from 'react';
import "./App.css";
import Sailor from "./sailorCard"



const moonSailors = [
  {
    marinera: "Sailor Moon",
    img: "https://upload.wikimedia.org/wikipedia/en/2/2b/Sailor_Moon_01.jpg",
    indentity: "Usagi (Bunny) Tsukino",
    birthday: "June 30",
    about: "She's a carefree schoolgirl who can transform into Sailor Moon. Initially believing herself to be an ordinary girl, she is later revealed to be the reincarnated form of the Princess of the Moon Kingdom, and discovers her real name, Princess Serenity. One day, Usagi encounters a mysterious cat with a crescent moon on their forehead, who later reveals herself to be Luna, a mentor archetype who introduces Usagi to her new heroic role.",
    color: "white",
  },
  {
    marinera: "Sailor Mercury",
    img: "https://upload.wikimedia.org/wikipedia/en/3/36/Sailor_Merkur_01.jpg",
    indentity: "Ami Mizuno",
    birthday: "September 10",
    about: "She's the first Sailor Soldier to be discovered by Sailor Moon. She serves as the brains of the group, as she is highly intelligent and can also use a supercomputer to collect useful information in battles. She possesses powers associated with water and ice. Sailor Mercury was also the Princess of her home planet.",
    color: "blue",
  },
  {
    marinera: "Sailor Mars",
    img: "https://upload.wikimedia.org/wikipedia/en/6/60/Sailor_Mars_01.jpg",
    indentity: "Rei Hino",
    birthday: "April 17",
    about: "Rei is the second Sailor Soldier to be discovered by Usagi. She possesses powers associated with fire, the Ofuda charm, and psychic clairvoyance. Rei first appears as a miko, and is shown to have an affinity with two crows who live there, Phobos and Deimos (the same as Mars' two moons). Sailor Mars was also the Princess of her home planet.",
    color: "red",
  },
  {
    marinera: "Sailor Jupiter",
    img: "https://upload.wikimedia.org/wikipedia/en/d/d8/Sailor_Jupter_01.jpg",
    indentity: "Makoto Kino",
    birthday: "December 5",
    about: "Makoto is the third Sailor Soldier to be discovered by Usagi Tsukino, and serves as the muscles of the group, as she possesses superhuman strength, as well as powers associated with electricity and plants. Sailor Jupiter was also the Princess of her home planet.",
    color: "green",
  },
  {
    marinera: "Sailor Venus",
    img: "https://upload.wikimedia.org/wikipedia/en/b/bb/Sailor_Venus_01.jpg",
    indentity: "Minako Aino",
    birthday: "October 22",
    about: "Minako is the fourth Sailor Soldier to be discovered by Usagi Tsukino, although she was the first Soldier to awaken her powers, even before Usagi did. Venus is awakened as a Soldier by the white cat Artemis when she is thirteen years old and instructed that she has a duty to become the beautiful warrior, Sailor, she must protect Earth from its enemies. She dreams of becoming a famous idol. Sailor Venus was also the Princess of her home planet.",
    color: "orange",
  },
  {
    marinera: "Sailor Chibi Moon",
    img: "https://upload.wikimedia.org/wikipedia/en/f/fa/Sailor_Chibi_Moon_set.jpg",
    indentity: "Chibiusa",
    birthday: "unkown",
    about: "She's a small child from the 30th century who travels to the past to seek help from the Sailor Soldiers. She later returns, a few years older, in order to train as a Soldier herself—Sailor Chibi Moon. Chibiusa's birth name and official title is Princess Usagi Small Lady Serenity. She is adopted as a member of her mother's family, using the alias Usagi Tsukino, in the 20th century. She is given her nickname to differentiate from the older Usagi Tsukino (Sailor Moon). The nickname is a combination of chibi (meaning small person or small child) and her given name, Usagi.",
    color: "pink",
  },
  {
    marinera: "Sailor Pluto",
    img: "https://fimgs.net/mdimg/secundar/o.71223.jpg",
    indentity: "Setsuna Meiō",
    birthday: "October 29",
    about: "She is unique among all the characters in that she is stationed at the Door of Space-Time, with the specific duty of forbidding anyone to pass through it without permission. She possesses powers that are associated with time, space, the underworld, and darkness. She said she always wished to fight alongside her Queen and the other Guardians. Sailor Pluto was also the Princess of her home planet.",
    color: "black",
  },
  {
    marinera: "Sailor Uranus",
    img: "https://i1.sndcdn.com/artworks-Ay3OpkMKfA8ps0Xj-aa4VUA-t500x500.jpg",
    indentity: "Haruka Ten'ō",
    birthday: "January 27",
    about: "Sailor Uranus fights alongside her partner and lover Sailor Neptune. Sailor Uranus possesses powers associated with the wind and sky, precognition, as well as sword combat. Sailor Uranus was also the Princess of her home planet. She's the real tomboy.",
    color: "navy blue",
  },
  {
    marinera: "Sailor Neptune",
    img: "http://pm1.narvii.com/7662/f0d648fd521fe90dcb1b41bef812f8a018e09ff1r1-500-624v2_00.jpg",
    indentity: "Michiru Kaiō",
    birthday: "March 6",
    about: "Sailor Neptune fights alongside her partner and lover Sailor Uranus. She's portrayed as elegant, sophisticated, capable of sharp anger, occasionally cold, and fully dedicated to her duty as a Sailor Soldier. She possesses powers associated with the sea, precognitive ones, as well as powers granted by her magic mirror. Sailor Neptune was also the Princess of her home planet.",
    color: "aquamarine",
  },
  {
    marinera: "Sailor Saturn",
    img: "http://pm1.narvii.com/6958/58c2a67b75b5fe85cb00837911e1de57d6057766r1-736-883v2_uhq.jpg",
    indentity: "Hotaru Tomoe",
    birthday: "January 6",
    about: "She's a young Japanese schoolgirl and a member of the Sailor Guardians, supernatural female fighters who protect the Solar System from evil. Sailor Saturn is the tenth and last of the Sailor Guardians to be discovered, possessing powers associated with silence and ruin, nothingness, destruction, death, and rebirth that made her a potential threat as she can wipe out a planet and even an entire galaxy or reset its evolution. Sailor Saturn was also the Princess of her home planet.",
    color: "purple",
  },
  {
    marinera: "Black Lady",
    img: "https://pm1.narvii.com/6699/abda1c2bd9dac82f23d4790d311bf10d5eb998c0_hq.jpg",
    indentity: "Chibiusa",
    birthday: "unkown",
    about: "Chibiusa was lost in a space-time storm and then found by Wiseman who then preyed on her frustration and despondencies, deceiving her in entering a faustian deal which turns her into his agent Black Lady. Infused with the energies of the Malefic Black Crystal, causing the Black Moon insignia to appear on her head, Black Lady resembles Chibiusa as an adult in an organdy and satin dress, Black Crystal earrings, and hair longer than Usagi's.",
    color: "blanc and pink",
  },

];



function App() {
  // the value of the search field 
  const [Guardian, setGuardian] = useState('');

  // the search result
  const [foundMoonSailors, setFoundMoonSailors] = useState(moonSailors);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = moonSailors.filter((moonSailor) => {
        return moonSailor.marinera.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundMoonSailors(results);
    } else {
      setFoundMoonSailors('');
      // If the text field is empty, show all users
    }

    setGuardian(keyword);
  };

  return (
    <div className="Moon">
      <h1 className='h1'>Sailor Guardians</h1>
      <input
        type="search"
        value={Guardian}
        onChange={filter}
        className="input"
        placeholder="Find your Sailor Guardian..."
      />


      <div className="sailorCard">
        {foundMoonSailors && foundMoonSailors.length > 0 ? (
          foundMoonSailors.map((props) => (
            <li key={props.id} className="Lluna">
              <div className="marinera">{props.marinera}</div>
              <div className="identity">identity: {props.indentity}</div>
              <img className="imagen" src={props.img} alt="" />
              <div className="birthday">birthday: {props.birthday}</div>
              <div className="about">{props.about}</div>
              <div className="color">color: {props.color}</div>
            </li>
          ))
        ) : (
          <h1>Fight for your light again...</h1>
        )}
      </div>
    </div>
  );
}

export default App;
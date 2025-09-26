import "./styles.css";
import { useState, useEffect } from "react";
import "./styles.css";
/*const memes = [
  {
    id: 1,
    title: "Debugging at 3 AM",
    image: "https://i.imgflip.com/30b1gx.jpg",
    category: "Programming",
  },
  {
    id: 2,
    title: "When CSS doesn’t work",
    image: "https://i.imgflip.com/1otk96.jpg",
    category: "Web Dev",
  },
  {
    id: 3,
    title: "Me after fixing one bug",
    image: "https://i.imgflip.com/26am.jpg",
    category: "Funny",
  },
  {
    id: 4,
    title: "React finally compiles",
    image: "https://i.imgflip.com/1ur9b0.jpg",
    category: "Coding",
  },
];
*/
export default function App() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setData(data.data.memes));
  }, []);

  //const [current, setCurrent] = useState(0);
  return (
    <div className="App">
      <MemesList data={data} current={currentIndex} />
      <Button
        memes={data}
        current={currentIndex}
        setCurrent={setCurrentIndex}
      />
    </div>
  );
}
function Button({ memes, handleShow, current, setCurrent }) {
  function handleNext() {
    if (current < memes.length - 1) setCurrent(() => current + 1);
  }
  function handlePrevious() {
    if (current > 0) setCurrent(() => current - 1);
  }
  return (
    <div className="btn-container">
      <button className="btn" onClick={handlePrevious}>
        Previous
      </button>
      <button className="btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

function MemesList({ data, current }) {
  return (
    <div className="meme-list">
      {data[current] && (
        <Memes
          key={data[current].id}
          title={data[current].name}
          image={data[current].url}
          //captions={data[current].captions}
        />
      )}
    </div>
  );
}
function Memes({ title, image }) {
  return (
    <div className="meme-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}

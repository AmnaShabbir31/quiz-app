import Link from "next/link"
export default function Home() {
  return (
//     <div className="container">
//   <img src="https://www.wikihow.com/images/thumb/a/a3/What-book-should-i-read-quiz-image.png/728px-What-book-should-i-read-quiz-image.png.webp" alt="Quiz Background" className="background-image" />
//   <div className="main">
//     <h1>Book Reading Quiz</h1>
//     <Link href="./quiz" className="start-button">Start</Link>
//   </div>
// </div>
<div className="container">
  <div className="image-wrapper">
    <img src="https://www.wikihow.com/images/thumb/a/a3/What-book-should-i-read-quiz-image.png/728px-What-book-should-i-read-quiz-image.png.webp" alt="Quiz Background" className="background-image" />
    <div className="main">
      <h1>Book Reading Quiz</h1>
      <Link href="./quiz" className="start-button">Start</Link>
    </div>
  </div>
</div>

  );
}

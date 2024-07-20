// import { useState } from "react";
// import NavBar from "../Components/NavBar/NavBar";

// const Home = () => {
//   const [counter, setCounter] = useState(0);
//   const [showImage, setShowImage] = useState(false);
//   const ShowPopIamge = () => {
//     setShowImage(true);
//     setCounter(counter + 1);
//     setTimeout(() => {
//       setShowImage(false);
//     }, 140);
//   };
//   return (
//     <>
//       <div className="main-container select-none" onClick={ShowPopIamge}>
//         <NavBar />
//         <div className="">
//           <h3
//             className={`text-center outline-text relative duration-150 z-20  ${
//               counter % 2 === 0 ? "rotate-6" : "-rotate-6"
//             }`}
//           >
//             {counter !== 0 && counter}
//           </h3>
//           <div className="flex justify-center -mt-28  items-start">
//             <img
//               src={showImage ? "./cat2.png" : "./cat1.png"}
//               alt=""
//               className="w-4/12   absolute bottom-0 left-1/2 -translate-x-1/2"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // export default Home;A
// import { useState } from "react";
// import NavBar from "../Components/NavBar/NavBar";

// const Home = () => {
//   const [counter, setCounter] = useState(0);
//   const [showImage, setShowImage] = useState(false);
//   const [rotateClass, setRotateClass] = useState("");

//   const ShowPopIamge = () => {
//     setShowImage(true);
//     setCounter((prevCounter) => {
//       const newCounter = prevCounter + 1;
//       setRotateClass(
//         newCounter % 2 === 0
//           ? "rotate-6 scale-[1.09]"
//           : "-rotate-6 scale-[1.09]"
//       );

//       setTimeout(() => {
//         setShowImage(false);
//         setRotateClass("");
//       }, 170);

//       return newCounter;
//     });
//   };

//   return (
//     <>
//       <div className="main-container select-none" onClick={ShowPopIamge}>
//         <NavBar />
//         <div className="">
//           <h3
//             className={`text-center outline-text relative duration-75 z-20 ${rotateClass}`}
//           >
//             {counter !== 0 && counter}
//           </h3>
//           <div className="flex justify-center -mt-28 items-start">
//             <img
//               src={showImage ? "./cat2.png" : "./cat1.png"}
//               alt=""
//               className="w-4/12 absolute bottom-0 left-1/2 -translate-x-1/2"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import { Howl, Howler } from "howler";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [rotateClass, setRotateClass] = useState("");

  // Set up the Howl instance for the pop sound
  const popSound = new Howl({
    src: ["/pop.mp3"],
  });

  const ShowPopIamge = () => {
    setShowImage(true);
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1;
      setRotateClass(
        newCounter % 2 === 0
          ? "rotate-6 scale-[1.09]"
          : "-rotate-6 scale-[1.09]"
      );

      // Play the sound
      popSound.play();

      setTimeout(() => {
        setShowImage(false);
        setRotateClass("");
      }, 170);

      return newCounter;
    });
  };

  // Add event listener for key presses
  useEffect(() => {
    const handleKeyPress = (event) => {
      ShowPopIamge();
    };

    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className="main-container select-none" onClick={ShowPopIamge}>
        <NavBar />
        <div className="">
          <h3
            className={`text-center outline-text relative duration-75 z-20 sm:text-8xl ${rotateClass}`}
          >
            {counter !== 0 && counter}
          </h3>
          <div className="flex justify-center -mt-28 items-start">
            <img
              src={showImage ? "./cat2.png" : "./cat1.png"}
              alt=""
              className="w-4/12 absolute bottom-0 left-1/2 -translate-x-1/2 sm:w-6/12 xsm:w-8/12"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

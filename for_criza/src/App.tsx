import { motion } from "framer-motion";
import background from "./assets/image/background.jpg";
import {
  Cringe,
  Sentence_A,
  Sentence_B,
  Sentence_C,
  Sentence_D,
  Sentence_E,
  Sentence_F,
  Sentence_G,
  Sentence_H,
  Sentence_I,
} from "./components/Sections";

export default function App() {
  return (
    <section
      className=" w-[100vw] h-[100vh] font-serif"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* first  sentence */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-full h-full flex justify-center items-center"
      >
        <Sentence_A />
      </motion.div>
      {/* Second sentence */}
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="w-full h-full bg-pink-500  flex justify-center items-center"
      >
        <Sentence_B />
      </div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="w-full h-full bg-pink-500  flex justify-center items-center"
      >
        <Sentence_C />
      </div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="w-full h-full bg-pink-500  flex justify-center items-center"
      >
        <Sentence_D />
      </div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="w-full h-full bg-pink-500  flex justify-center items-center"
      >
        <Sentence_E />
      </div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="w-full h-full bg-pink-500  flex justify-center items-center"
      >
        <Sentence_F />
      </div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="w-full h-full bg-pink-500  flex justify-center items-center"
      >
        <Sentence_G />
      </div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="w-full h-full bg-pink-500  flex justify-center items-center"
      >
        <Sentence_H />
      </div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="w-full h-full bg-pink-500  flex justify-center items-center"
      >
        <Sentence_I />
      </div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="w-full h-full bg-pink-500  flex justify-center items-center"
      >
        <Cringe />
      </div>
    </section>
  );
}

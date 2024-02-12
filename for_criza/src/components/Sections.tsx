import { motion } from "framer-motion";

export const Sentence_A = () => {
  return (
    <div className="bg-pink-400 w-[90%] rounded-tl-[50%] rounded-br-[50%] h-[100px] flex justify-center items-center">
      <span className=" text-md md:text-3xl text-white">Hi po,HAHA</span>
    </div>
  );
};
//Sentence_B
export const Sentence_B = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="bg-pink-400 w-[80%] rounded-tl-[50%] rounded-br-[50%] h-[40%] p-8 flex justify-center items-center"
    >
      <span className="text-md md:text-3xl text-white">
        I know you've caught me looking at your desk many times.
      </span>
    </motion.div>
  );
};

// Sentence_C
export const Sentence_C = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="bg-pink-400 w-[80%] rounded-tl-[50%] rounded-br-[50%] h-[40%] p-8 flex justify-center items-center"
    >
      <span className="text-md md:text-3xl text-white">
       Idk what to say tbh, hmm one thing is for sure u got my attention po
      </span>
    </motion.div>
  );
};

// Sentence_D
export const Sentence_D = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="bg-pink-400 w-[80%] rounded-tl-[50%] rounded-br-[50%] h-[40%] p-8 flex justify-center items-center"
    >
      <span className="text-md md:text-3xl text-white">just kidding</span>
    </motion.div>
  );
};

// Sentence_E
export const Sentence_E = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="bg-pink-400 w-[80%] rounded-tl-[50%] rounded-br-[50%] h-[40%] p-8 flex justify-center items-center"
    >
      <span className="text-md md:text-3xl text-white">
        Maybe, I admire people having their priorities straight. And you are one of those pips
      </span>
    </motion.div>
  );
};

// Sentence_F
export const Sentence_F = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="bg-pink-400 w-[80%] rounded-tl-[50%] rounded-br-[50%] h-[40%] p-8 flex justify-center items-center"
    >
      <span className="text-md md:text-3xl text-white">
        That's so attractive.
      </span>
    </motion.div>
  );
};
export const Sentence_G = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="bg-pink-400 w-[80%] rounded-tl-[50%] rounded-br-[50%] h-[40%] p-8 flex justify-center items-center"
    >
      <span className="text-md md:text-3xl text-white">
        Btw, I did not make this cringy thing to pursue a relationship with you -_-
      </span>
    </motion.div>
  );
};

// Sentence_H
export const Sentence_H = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="bg-pink-400 w-[80%] rounded-tl-[50%] rounded-br-[50%] h-[40%] p-8 flex justify-center items-center"
    >
      <span className="text-md md:text-3xl text-white">
        I just want you to know that I find you attractive in many ways
      </span>
    </motion.div>
  );
};

// Sentence_I
export const Sentence_I = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="bg-pink-400 w-[80%] rounded-tl-[50%] rounded-br-[50%] h-[40%] p-8 flex justify-center items-center"
    >
      <span className="text-md md:text-3xl text-white">
        and that's it for now
      </span>
    </motion.div>
  );
};

export const Cringe = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="bg-pink-400 text-md md:text-2xl text-white w-[90%] rounded-tl-[50%] rounded-br-[50%] h-[40%] p-8 flex justify-center items-center"
    >
      <span>Cringe😭AHAHA,Anyhow Happy Valentines💖</span>
    </motion.div>
  );
};

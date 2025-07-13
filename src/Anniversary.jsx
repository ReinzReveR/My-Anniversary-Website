import { useState } from "react";
import { motion } from "framer-motion";

const Anniversary = () => {
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 flex flex-col items-center justify-center p-4">
      <iframe
        src="https://www.youtube.com/embed/QJO3ROT-A4E?autoplay=1&loop=1&playlist=QJO3ROT-A4E"
        allow="autoplay"
        className="hidden"
        title="That's What Makes You Beautiful"
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-4"
      >
        Reinhart ❤️ Song Yie
      </motion.h1>
      <p className="text-center text-lg mb-8">Together since July 2, 2024</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <img src="/photo1.jpg" className="rounded-2xl shadow-md" alt="Photo 1" />
        <img src="/photo2.jpg" className="rounded-2xl shadow-md" alt="Photo 2" />
        <img src="/photo3.jpg" className="rounded-2xl shadow-md" alt="Photo 3" />
      </div>

      <div className="w-full max-w-md text-center mb-8 p-4 bg-white rounded-xl shadow-md">
        <button
          onClick={() => setShowNote(true)}
          className="mb-4 px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
        >
          {showNote ? "💌 Love Note" : "Click if you love me 💖"}
        </button>
        {showNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-base text-left"
          >
            <p className="mb-2">
              My Dearest Song Yie,
            </p>
            <p className="mb-2">
              A year ago, we started a journey that changed my life in the most beautiful way.
              You’ve been my joy in chaos, my calm in storms, my favorite person in every single moment.
            </p>
            <p className="mb-2">
              Even with the distance, I feel your love every day — in your voice, your smile, your words.
              You make me feel like the luckiest man in the world.
            </p>
            <p className="mb-4">
              Happy 1st Anniversary, sayang.
              Let’s keep loving, dreaming, and building forever together.
            </p>
            <p>— Yours always, Reinhart 💫</p>
          </motion.div>
        )}
      </div>

      <div className="text-center mt-4 text-sm">
        Countdown to our 2nd Anniversary: <span id="countdown"></span>
      </div>
    </div>
  );
};

export default Anniversary;
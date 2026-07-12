import { useState, useEffect } from 'react';

const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 50, delay = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const current = words[wordIndex];
      if (isDeleting) {
        setText(current.substring(0, text.length - 1));
      } else {
        setText(current.substring(0, text.length + 1));
      }

      let speed = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && text === current) {
        speed = delay;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        speed = 500;
      }
      
      timer = setTimeout(handleTyping, speed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return text;
};

export default useTypingEffect;

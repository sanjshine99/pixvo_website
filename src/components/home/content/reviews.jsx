import React, { useState, useEffect } from 'react';
import '../Home.css';

function Reviews() {
  const [activeCard, setActiveCard] = useState(0); // Start with the first card as active

  const reviewsData = [
    { text: 'Review 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { text: 'Review 2 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem.' },
    { text: 'Review 3 - Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      // Increment the activeCard index in a circular manner
      setActiveCard((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(timer); // Clear the timer when the component unmounts
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const handleCardFocus = (index) => {
    setActiveCard(index);
  };

  const handleCardBlur = () => {
    setActiveCard(null);
  };

  return (
    <div className="reviews__area">
      {reviewsData.map((review, index) => (
        <div
          className={`card ${index === activeCard ? 'active' : ''}`}
          key={index}
          onFocus={() => handleCardFocus(index)}
          onBlur={handleCardBlur}
          tabIndex="0"
        >
          <p className="review_text">{review.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;

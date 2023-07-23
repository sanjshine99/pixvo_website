import React from 'react';
import '../Home.css';

function Reviews() {
  return (
    <div className="reviews__area">
      <div className="card">
        <p className="review_text">Review 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="card">
        <p className="review_text">Review 2 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
      </div>
      <div className="card">
        <p className="review_text">Review 3 - Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
      </div>
    </div>
  );
}

export default Reviews;
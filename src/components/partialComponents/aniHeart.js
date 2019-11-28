import React from 'react';

const aniHeartElements = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const AniHeart = () => (
    <div className="hobby-heart about-icon">
        <div className="hobby-heart-container">
            {aniHeartElements.map((value, index) => {
                return <div key={`heart_piece_${index}`} className={`heart-piece-${index}`}></div>;
            })}
        </div>
    </div>
);

export default AniHeart;

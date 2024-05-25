'use client';

import { useState } from 'react';

function LikeBtn() {

    const [likes, setLikes] = useState(0);
    function handleClick() {
        setLikes(likes + 1);
    }

return (
    <div>
        <div className="likeBtn" onClick={handleClick}>Click Me</div>
        <div className="likes">{ likes }</div>
    </div>
    )
}

export default LikeBtn
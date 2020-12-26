import React from 'react'
import StarIcon from './StarIcon'

function Rate({index,rating,hoverRating}) {

const fill = React.useMemo(() => {
if (hoverRating >= index) {
return 'red';}
else if (!hoverRating && rating >= index) {
return 'red'; }
return 'none';},
[rating, hoverRating, index]);

return (
<div>
<StarIcon fill={fill} />
</div>     
)
}


export default Rate




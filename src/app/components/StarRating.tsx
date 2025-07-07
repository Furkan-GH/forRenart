import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";


export default function StarRating({score} : {score : number}) {

    const getScore = (pScore: number) => {
    pScore *=5;
    const star = Math.floor(pScore);
    if((pScore - star) - 0.5 > 0){
        const halfStar = 1;
        return [star,halfStar];
    }
    else{
        const halfStar = 0;
        return [star,halfStar];
    }
  };
  
    const [full,half] = getScore(score);

    return(
        <>
        <div className='flex items-center gap-1 mt-1'>
            {[...Array(full)].map((_, i) => <FaStar key={`full-${i}`}  size={20} color="#E6CA97" />)}
            {half === 1 && <FaStarHalfAlt key="half" size={20} color="#E6CA97" />}
            {[...Array(5 - full - half)].map((_, i) => <FaRegStar key={`empty-${i}`} size={20} color="#D9D9D9" />)}                          
            <p className="font-avenir-book text-[14px]">{full},{half == 1 ? 5 : 0}/5</p>
        </div>
        </>
    )
}
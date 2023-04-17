import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CardsSkeleton() {
    const count = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <div className='body flex flex-wrap mt-8'>
                {count.map((item, index) => {
                    return <div className=" px-3 pb-2" key={index}>
                        <Skeleton height={140} className='mb-2' />
                        <Skeleton height={20} width={140} className='mb-2' />
                        <Skeleton height={15} width={100} />
                        <Skeleton height={15} width={70} />
                    </div>
                })}
            </div>
        </>
    );
}

export default CardsSkeleton;
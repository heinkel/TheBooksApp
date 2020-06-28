import React,{useState} from 'react'

export default function Bookcard({bookcard}) {
    
    const [flip, setFlip] = useState(false) // by default setted in false so not flipped yet.
 /*   const [height, setHeight] = useState('initial')
    const frontEl = useRef()
    const backEl = useRef()
    const setMaxHeight = () =>{
        const frontHeight =  frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight,backHeight, 500)) // minimum height for card container 500px
        }
    useEffect(setMaxHeight , [bookcard.image, bookcard.longDescription, bookcard.authors]) // will calculate value if any of this elements change.
    useEffect(()=> {
        window.addEventListener('resize',setMaxHeight)
        return ()=> window.removeEventListener('resize',setMaxHeight)
    },[])
*/


    return (
        <div   
            className={`card ${flip ? 'flip' : ''}`}
            
            onClick={() => setFlip(!flip)}
        >
            <div className="front" >
                <img className="book-cover" src={bookcard.image}></img>
                <div className="title">{bookcard.title}</div>
                <div className="card-authors">
                    {bookcard.authors.map(a => {
                        return <div className="card-author" key={a}>{a}</div>
                    })}
                </div>
                <div className="description">{bookcard.shortDes}</div>
            </div> 
            <div className="back" > {bookcard.longDescription}</div>
        </div>
    )
}

//Asining 
// when user clicks in a card state change to the other state showing full content or going back o simple
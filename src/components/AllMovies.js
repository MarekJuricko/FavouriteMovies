import "./AllMovies.css"
import data from "../data"

const AllMovies = () => {

    return <div className='favourite-movies'>
        {
            data.map( (oneMovie) => {
                const {title, image, cast, duration, about, trailer} = oneMovie

                return(
                    <div className="one-movie">
                        <img className="image" src={image} alt="" />
                        <h2 className="main-heading">{title}</h2>
                        <p className="info">{cast}</p>
                        <p className="info">{duration}</p>
                        <p className="info">{about}</p>
                        <a className="link" target="_blank" rel="noreferrer" href={trailer}>Trailer</a>
                    </div>
                ) 
            })
        }
        </div>
}

export default AllMovies

import { Rating } from 'react-simple-star-rating';
import "./Technology.css";

function Technology(params) {
    return (
        <div className="Technology m-3">
            <h5 className="text m-0">
                <strong>{params.name}</strong>
            </h5>
            <div className='rating'>
                <Rating
                    size="20"
                    readonly='true'
                    allowFraction='true'
                    initialValue={params.level ? params.level : 0}
                />
            </div>
        </div>
    )
}

export default Technology;
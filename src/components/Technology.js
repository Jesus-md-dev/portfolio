import Form from 'react-bootstrap/Form';

function Technology(params) {
    return (
        <div className="Technology center">
            <img/>
            <h4> {params.level} </h4>
            <div>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check checked={true} inline type={type} id={`inline-${type}-1`}/>
                        <Form.Check inline type={type} id={`inline-${type}-2`}/>
                        <Form.Check inline type={type} id={`inline-${type}-3`}/>
                        <Form.Check inline type={type} id={`inline-${type}-4`}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Technology;
import Container from 'react-bootstrap/Container';
import "./AboutMe.css";

function AboutMe(params) {
    return (
        <div className="AboutMe">
            <Container>
                {params.text}
            </Container>
        </div>
    )
}

export default AboutMe;
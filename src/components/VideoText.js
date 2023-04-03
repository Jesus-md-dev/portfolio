import VideoPlayer from "./VideoPlayer";
import "./VideoText.css";

function VideoText(params) {
    if (params.invert) {
        return (
          <div className="darkBackground py-5">
            <div className="container">
              <div className="row ">
                <div className="container col-md-6">
                  <p>{params.text}</p>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <VideoPlayer url={params.url} />
                </div>
              </div>
            </div>
          </div>
        );
    }
    else {
        return (
          <div className="py-5">
            <div className="container">
              <div className="row ">
                <div className=" col-md-6 d-flex align-items-center justify-content-center">
                  <VideoPlayer url={params.url} />
                </div>
                <div className="col-md-6">
                  <p>{params.text}</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default VideoText;
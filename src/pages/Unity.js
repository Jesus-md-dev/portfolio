import VideoPlayer from "../components/VideoPlayer.js";


function Unity() {
  return (
    <div>
      <div className="container">
        <h1>Unity</h1>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <VideoPlayer  className="img-fluid float-left mr-3" url='https://drive.google.com/file/d/1uJO97MILhwSrINa7VmN4fcaUPMe-hcmu/preview'/>
          </div>
          <div className="col-md-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet hendrerit odio, a luctus urna. Duis ut luctus est, sed lobortis nisi. Sed sed orci ut nulla consectetur interdum. Proin volutpat risus et risus ullamcorper mollis. Praesent at nibh id quam consectetur fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eget velit vel risus dapibus sagittis sed in quam. Nullam mattis ultricies lectus, non vehicula nibh vulputate quis. Fusce pharetra enim in ipsum efficitur, a eleifend justo viverra. Donec bibendum arcu leo, sit amet feugiat quam vulputate id. Donec in augue eget tellus imperdiet tincidunt ut id odio.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unity;
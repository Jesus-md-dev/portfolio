import ImageText from "../components/ImageText";
import AboutMe from "../files/images/aboutme.jpg";


function Webs() {
  return (
    <div>
      <ImageText
        src={AboutMe}
        alt="Computer science picture"
        title="Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sit amet hendrerit odio, a luctus urna. Duis ut luctus est, sed
            lobortis nisi. Sed sed orci ut nulla consectetur interdum. Proin
            volutpat risus et risus ullamcorper mollis. Praesent at nibh id
            quam consectetur fringilla. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Donec eget
            velit vel risus dapibus sagittis sed in quam."
      />
      <ImageText
        src={AboutMe}
        invert={true}
        alt="Computer science picture"
        title="Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sit amet hendrerit odio, a luctus urna. Duis ut luctus est, sed
            lobortis nisi. Sed sed orci ut nulla consectetur interdum. Proin
            volutpat risus et risus ullamcorper mollis. Praesent at nibh id
            quam consectetur fringilla. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Donec eget
            velit vel risus dapibus sagittis sed in quam."
      />
      <ImageText
        src={AboutMe}
        alt="Computer science picture"
        title="Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sit amet hendrerit odio, a luctus urna. Duis ut luctus est, sed
            lobortis nisi. Sed sed orci ut nulla consectetur interdum. Proin
            volutpat risus et risus ullamcorper mollis. Praesent at nibh id
            quam consectetur fringilla. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Donec eget
            velit vel risus dapibus sagittis sed in quam."
      />
    </div>
  );
};

export default Webs;
import React from "react";
import Line from "./Line.js";

class TwoColumns extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    this.twoColumnsContent = this.props.invert ?
      "lg:flex-row-reverse" :
      "lg:flex-row"

    this.twoColumns = this.props.dark ? "" : ""
  }

  getYouTubeVideoID(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  hideSpinner = () => {
    this.setState({
      loading: false
    });
    this.iframeClass = "";
  };

  render() {
    const videoID = this.getYouTubeVideoID(this.props.src);

    return (
      <div className={this.twoColumns}>
        <div className={"content-width w-full flex flex-col items-center"}>
          {this.props.title &&
            <div className="w-full lg:mb-0 mb-5">
              <span className="flex items-center">
                <h2>
                  <Line />
                  {this.props.title}
                </h2>
              </span>
            </div>
          }
          <div className={"w-full flex flex-col items-center lg:mt-5 " + this.twoColumnsContent}>
            <div className="lg:w-1/2 w-full">
              {this.props.type === "image" &&
                <img
                  className="w-full aspect-video object-cover rounded-xl"
                  src={this.props.src}
                  alt={this.props.alt ?? "Site image"}
                  title="Youtube Video"
                  loading="lazy"
                />
              }
              {this.props.type === "video" &&
                <span className="aspect-video w-auto relative">
                  {this.state.loading ? (
                    <div className="fit-content absolute">
                      <img
                        className="object-cover rounded-xl h-full"
                        alt={this.props.alt ?? "Youtube Video Thumbnail"}
                        src={"https://i.ytimg.com/vi/" + videoID + "/maxresdefault.jpg"}
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className={"w-full aspect-video rounded-xl " + this.iframeClass}
                    src={"https://www.youtube.com/embed/" + videoID}
                    title={this.props.alt ?? "Youtube Video"}
                    onLoad={this.hideSpinner}
                    loading="lazy"
                  ></iframe>
                </span>

              }
            </div>
            <div className="lg:w-1/2 mx-5 lg:mt-0 mt-5">
              <p>{this.props.text}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TwoColumns;
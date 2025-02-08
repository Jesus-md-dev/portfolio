import TwoColumns from "./TwoColumns.js";

function VideoText(params) {
  return (
    <TwoColumns
      src={params.url}
      invert={params.invert}
      title={params.title}
      text={params.text}
      alt="Youtube Video"
      type="video"
    />
  )
}

export default VideoText;
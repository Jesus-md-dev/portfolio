import TwoColumns from "./TwoColumns.js";

function VideoText(params) {
  return (
    <TwoColumns
      src={params.src}
      invert={params.invert}
      title={params.title}
      text={params.text}
      alt={params.alt}
      type="image"
    />
  )
}

export default VideoText;
function VideoText(params) {

  let videoTextContent = params.invert ?
    "lg:flex-row-reverse" :
    "lg:flex-row"

  let videoText = params.dark ? "bg-zinc-900" : ""

  return (
    <div className={"flex items-center justify-center " + videoText}>
      <div className={"content-width w-full flex flex-col items-center " + videoTextContent}>
        <div className="lg:w-1/2 w-full my-5">
          <iframe
            className="w-full aspect-video"
            src={params.url}
            title="Youtube Video"
          ></iframe>
        </div>
        <div className="lg:w-1/2 m-5">
          <p>{params.text}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoText;
import Line from "../components/Line.js";

function ImageText(params) {

  let imageTextContent = params.invert ?
    "lg:flex-row-reverse" :
    "lg:flex-row"

  let imageText = params.dark ? "bg-neutral-700" : ""

  return (
    <div className={"flex items-center justify-center " + imageText}>
      <div className={"content-width w-full flex flex-col items-center " + imageTextContent}>
        <div className="lg:w-1/2 my-5">
          {params.title &&
            <span className="flex items-center">
              <h2>
                <Line />
                {params.title}
              </h2>
            </span>
          }
          <p>{params.text}</p>
        </div>
        <div className="lg:w-1/2 w-full m-5">
          <img
            className="w-full aspect-video object-cover"
            src={params.src}
            alt={params.alt}
            title="Youtube Video"
          />
        </div>
      </div>
    </div>
  )
}

export default ImageText;
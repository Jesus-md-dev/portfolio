function VideoPlayer(params) {
  return (
    <iframe src={params.url} title="Google Drive Video" allow="autoplay; encrypted-media" allowfullscreen/>
  );
}

export default VideoPlayer;
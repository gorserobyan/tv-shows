const VideoContent = ({ url }) => {
  return (
      <video
          autoPlay
          loop
          muted
          className="video-background"
      >
          <source
              src={url}
              type="video/mp4"
          />
          Your browser does not support the video tag.
      </video>
  )
};

export default VideoContent;
import ReactPlayer from"react-player"
const VideoJS=()=>{
   
    return(
        <div className="utube">
            <ReactPlayer
            height="200px"
            controls url="https://youtu.be/5GaV5EZX22o"
            onReady={()=>console.log("onReady")}
            onStart={()=>console.log("onstart")}
            onPause={()=>console.log("onpause")}
            onEnded={()=>console.log("onended")}
            onError={()=>console.log("onerror")}
            />
        </div>
    )
}
export default VideoJS
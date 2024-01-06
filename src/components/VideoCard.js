import React from 'react'

const VideoCard = (props) => {
  // console.log("infoinfo props", props.info.snippet)
  // const {snippet, statistics}=info;
  // const { title, thumbnails}=snippet;
  if(!(props.info && props.info.snippet)) return ;
  return (
    <div className='shadow-lg w-60 m-2 p-2'>
     <img className='rounded-lg' src={props?.info?.snippet?.thumbnails?.medium?.url}
        alt={props?.info?.snippet?.channelTitle} />
        <ul>
           <li className='font-bold py-2'>{ props?.info?.snippet?.title}</li>
           <li>{ props?.info?.snippet?.channelTitle}</li>
           <li>{ props?.info?.statistics?.viewCount} Views</li>
          {/* <li>{ props?.info?.snippet?.title}</li> */}
          {/* <li>{ props?.info?.snippet?.thumbnails}</li> */} 
        </ul>
    </div>
  )
}
export const AddVideoCard = ({info}) =>{
     return(
        <div className='p-1 m-1 border border-red-900'>
          <VideoCard info={info}/>
        </div>)}

export default VideoCard
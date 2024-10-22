import React from 'react';
import GalaxyBg from '../Assets/bgGalaxy.mp4';

interface Props {
    // Define the props for your component here
}

const VideoGalaxyBg: React.FC<Props> = () => {
    const handleVideoError = (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        console.error('Error loading video:', event);
    };

    return (
        <video className='w-100 object-fit-cover h-100 position-absolute top-0 start-0' src={GalaxyBg} autoPlay muted loop onError={handleVideoError}>
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoGalaxyBg;

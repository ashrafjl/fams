import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = ({ videoSrc }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
        setVolume(newVolume);
    };

    const handleSeek = (direction) => {
        if (videoRef.current) {
            videoRef.current.currentTime += direction === 'forward' ? 10 : -10;
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            setDuration(videoRef.current.duration);
        }
    };

    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * duration;
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
        }
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
            videoRef.current.addEventListener('loadedmetadata', () => {
                setDuration(videoRef.current.duration);
            });
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    return (
        <div className="flex flex-col items-center">
            <video
                ref={videoRef}
                src={videoSrc}
                className="w-full max-w-lg rounded-lg shadow-lg"
                controls={false}
            />
            <div className="flex items-center space-x-4 mt-4">
                <button
                    onClick={togglePlayPause}
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                    onClick={() => handleSeek('backward')}
                    className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Rewind 10s
                </button>
                <button
                    onClick={() => handleSeek('forward')}
                    className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Forward 10s
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24"
                />
                <span>{Math.round(volume * 100)}%</span>
                <a
                    href={videoSrc}
                    download
                    className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Download
                </a>
            </div>
            {/* <div className="flex items-center mt-4">
                <span>{Math.floor(currentTime)} / {Math.floor(duration)} seconds</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={duration ? (currentTime / duration) * 100 : 0}
                    onChange={handleProgressChange}
                    className="mx-4 w-full"
                />
                <span>{duration ? Math.floor(duration - currentTime) : 0} seconds remaining</span>
            </div> */}
        </div>
    );
};

export default VideoPlayer;

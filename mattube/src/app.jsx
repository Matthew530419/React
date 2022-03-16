import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search/?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBUFXS78JwP8FLAaipOJY7lypUwWWhWgLU`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId })))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  const SelectedVideo = (video) => {
    setSelectedVideo(video);
  }

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCZj1OxRQi7HhUA7A0H23CODBTwFeBAC7c", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
    <SearchHeader onSearch={search} />
    <section className={styles.content}>
      {selectedVideo && <div className={styles.detail}>
      <VideoDetail video={selectedVideo} />
      </div>}
      <div className={styles.list}>
      <VideoList 
      videos={videos} 
      onVideoClick={SelectedVideo}
      display={selectedVideo ? 'list' : 'grid'} />
      </div>
    </section>
    </>
  );
}

export default App;

import {useState} from 'react'; //this is a called a hook
import './App.scss';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import UploadButton from './components/UploadButton/UploadButton';


function App() {
  const [countComments, setcountComments] = useState(0); 

  return (
  <>
    <header>
      <nav>
    <Header/>
    <Search/>
    <UploadButton/>
    </nav>  
    </header>

    <section>
      <video></video>
    </section> 

    <main>
      {/* <VideoHeader/>
      <VideoInfo/>
      <VideoDescription/>
      <CommentCounter/>
      <CommentForm/> */}
    </main>
    {/* <section>
      <RenderedComments/> </section>
    <article>
      <AllVideos/></article> */}
  </>
  )
}

export default App;

import {useState} from 'react'; //this is a called a hook
import './App.scss';
import Header from "/components/Header/Header.jsx";


function App() {
  const [countComments, setcountComments] = useState(); 

  return (
  <>
    <header>  
    <Header/>
    <Search/>
    <UploadButton/>
    </header>

    <section>
      <video></video>
    </section>

    <main>
      <VideoHeader/>
      <VideoInfo/>
      <VideoDescription/>
      <CommentCounter/>
      <CommentForm/>
    </main>
    <section>
      <RenderedComments/> </section>
    <article>
      <AllVideos/></article>
  </>
  )
}

export default App;

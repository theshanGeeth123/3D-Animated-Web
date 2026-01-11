import Nav from "./components/Nav";
import JumboTron from "./components/JumboTron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import { useRef } from "react";

function App() {

  const webgitViewerRef = useRef();

  const contentRef = useRef();

  const handlePreview = () => {
    webgitViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">

      <div ref={contentRef} id="content">
        <Nav />
        <JumboTron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgitViewerRef} />
    </div>
  );
}

export default App;

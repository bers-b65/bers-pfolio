import Header from "./components/Header";
import ContentMenu from "./components/ContentMenu";
import { BrowserView, MobileView } from 'react-device-detect';
import { IoAlertCircle } from "react-icons/io5";


function App() {
  
  return (
    <>
      <BrowserView>
      <main className="flex flex-col min-h-screen items-center justify-start bg-neutral-900 text-white">
        <Header />
        <ContentMenu />
        </main>
      </BrowserView>
      <MobileView>
        {/* TODO: add a simple mobile view */}
      </MobileView>
    </>
  );
}

export default App;
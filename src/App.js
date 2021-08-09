import React from "react";
import SinglePagePDFViewer from "./components/SinglePage";
import Header from "./components/Header";

import pdf from "./document.pdf";

function App() {
  return (
    <div className="App">
      <Header />
      <SinglePagePDFViewer pdf={pdf} />
    </div>
  );
}

export default App;

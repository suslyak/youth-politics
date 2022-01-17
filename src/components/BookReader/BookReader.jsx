import React, {useState} from 'react';
import {useLocation} from "react-router-dom"
//import { Document, Page, Outline } from 'react-pdf/dist/esm/entry.webpack';
import Viewer from '../Viewer/Viewer';

//import samplePDF from '../../../public/files/RU0002.pdf';

const BookReader = () => {

    const location = useLocation();
    console.log(location);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(10);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
      }

      function onItemClick({ pageNumber: itemPageNumber }) {
        setPageNumber(itemPageNumber);
      }

      function removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
          textLayers.forEach(layer => {
            const { style } = layer;
            style.top = "-5px";
            style.left = "0";
            style.transform = "";
        });
      }

    return (
         <section className="book-reader">
             <div className="book-reader__container">
             {/*<Outline onItemClick={onItemClick} />
             
                <Document
                    file={'files/RU/RU0002.pdf'}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Outline onItemClick={onItemClick} />
                    <div className="book-reader__page-container">
                        <Page pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset}/>
                    </div>
                </Document>
                <div className="book-reader__pages-controls">
                    <p>Page {pageNumber} of {numPages}</p> 
              </div>  */}
              <Viewer />
             </div>
         </section>
    )
}

export default BookReader;
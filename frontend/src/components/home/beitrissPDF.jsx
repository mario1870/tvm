import React from 'react';
import { saveAs } from 'file-saver';
import {Button} from "@nextui-org/react";
import { FaDownload } from "react-icons/fa6";
import FadeInWhenVisible from "../../animationSections/fadeInWhenVisible";

const PDFDownloadButton = () => {
  const handleDownload = () => {
    // Pfad zur PDF-Datei im öffentlichen Ordner
    const pdfFilePath = '/home/lastschrift.pdf';

    // Herunterladen der PDF-Datei
    fetch(pdfFilePath)
      .then(response => response.blob())
      .then(blob => saveAs(blob, 'example.pdf'))
      .catch(error => console.error('Fehler beim Herunterladen der PDF-Datei:', error));
  };

  return (
    <FadeInWhenVisible>
      <div className='flex flex-col md:flex-row w-full max-w-[50rem] min-h-20 justify-between px-4 items-center bg-white rounded-3xl text-center md:text-left'>
          <div className='py-4'>
              Mit dem Antrag in der PDF können sie jetzt Mitglied des TV Melchingen werden.<br/><br/>
              Wir freuen uns über jede Mitgliedschaft!
          </div>
          <Button className='m-4' color="success" endContent={<FaDownload />}>
              Download
          </Button>    
      </div>
    </FadeInWhenVisible>
  );
};

export default PDFDownloadButton;

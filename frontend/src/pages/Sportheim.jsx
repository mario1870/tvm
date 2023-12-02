import React, { useState } from 'react';
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import { IoIosSend } from "react-icons/io";
import { motion } from 'framer-motion';
import { FaCheck } from "react-icons/fa";

const Sportheim = () => {

    const [successfullySended, setSuccessfullySended] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: "",
        event: ''
      });
    
      // Funktion zum Aktualisieren des Formulars bei Eingabeänderungen
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/bookSportheim/', {
            method: 'POST', // Anpassen je nach API-Anforderung
            headers: {
              'Content-Type': 'application/json',
              // Hier könnten weitere Header hinzugefügt werden, je nach API-Anforderung
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Erfolgreich an die API gesendet');
            setSuccessfullySended(true)
            
          } else {
            console.error('Fehler beim Senden an die API');
          }
        } catch (error) {
          console.error('Fehler:', error);
        }
      };

    return (
        <>
            <div className="pt-24 md:pt-24 min-h-screen px-2">
                <span className=" w-full flex items-center justify-center">
                    <motion.img initial={{ scale: 0.7, opacity:0 }} animate={{ scale: 1.0, opacity:1 }}   transition={{ type: "fade", duration: 0.4}} className="rounded-lg w-full md:px-40 xl:px-60 2xl:px-[25rem]" src="/sportheim/sportheim.jpeg" />                    
                </span>

                <div className='w-full md:px-40 xl:px-60 2xl:px-[25rem] flex flex-col justify-center items-center py-8 '>
                    <p className='px-2 w-full py-4 text-lg md:text-xl text-center'>
                        Senden Sie einfach über das Formular eine Anfrage.<br/>Wir kontaktieren Sie dann zeitnah.
                    </p>
                    <form onSubmit={handleSubmit} className=' px-2 w-full'>
                        <label>
                            <Input isRequired type="text" label="Name" name="name" className="w-full" onChange={handleInputChange} value={formData.name} />
                        </label>
                        <br />

                        <label>
                            <Input isRequired type="email" label="Email" name="email" className="w-full" onChange={handleInputChange} value={formData.email} />
                        </label>
                        <br />

                        <label>
                            <Input isRequired placeholder=" " type="date" label="Veranstaltungsdatum" name="date" className="w-full" onChange={handleInputChange} value={formData.date} />
                        </label>
                        <br />

                        <label>
                            <Textarea isRequired label="Veranstaltung" name="event" placeholder="Gebe eine kurze Beschreibung der Veranstaltung an" className="w-full" onChange={handleInputChange} value={formData.event} />
                        </label>
                        <br />

                        <Button className="w-full pointer" disabled={successfullySended === true} type="submit" color={successfullySended ? "success" : "primary"} startContent={successfullySended ? <FaCheck /> : <IoIosSend />}>
                            {successfullySended ? "" : "Absenden"}
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sportheim
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import React, { useState } from 'react';

const Admin = () => {

    const [successfullySended, setSuccessfullySended] = useState(false)
    const [formData, setFormData] = useState({
        uberschrift: '',
        image: '',
        date: "",
        text: ''
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
            <div className="pt-20 h-full">
                <div className="bg-green-400 flex flex-col gap-4 w-[40rem] px-8 py-8 rounded-xl">
                    <form onSubmit={handleSubmit} className=' px-2 w-full'>
                        <Input type="text" label="Überschrift" onChange={handleInputChange} value={formData.uberschrift} />
                        <Input type="file" label="Bild" onChange={handleInputChange} value={formData.image} />
                        <Input type="date" label="Datum" placeholder=" " onChange={handleInputChange} value={formData.date} />
                        <Textarea label="Text" placeholder="Gebe den Text ein" className="w-full" onChange={handleInputChange} value={formData.text} />
                        <Button color="primary">
                            Hinzufügen
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Admin
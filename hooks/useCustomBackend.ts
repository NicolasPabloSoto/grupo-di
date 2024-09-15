import { useCMS } from 'tinacms';
import { useEffect } from 'react';

const useCustomBackend = () => {
  const cms = useCMS();

  useEffect(() => {
    // Función para obtener contenido desde el backend
    const fetchContent = async (path: string) => {
      const response = await fetch(`http://localhost:5000/api/content/${path}`); 
      const data = await response.json();
      return data.content;
    };

    // Función para guardar contenido en el backend
    const saveContent = async (path: string, content: string) => {
      const response = await fetch(`http://localhost:5000/api/content/${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }), 
      });
      const data = await response.json();
      return data.message;
    };

    // Aquí podrías usar estas funciones cuando sea necesario.
  }, [cms]);
};

export default useCustomBackend;

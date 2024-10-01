import { useState, useEffect } from  'react' ; 

export const  useScreenSize = ( ) => { 
  const [screenSize, setScreenSize] = useState ({ 
    width : window . innerWidth , 
    height : window . innerHeight , 
  }); 

  useEffect ( () => { 
    const  handleResize = ( ) => { 
      setScreenSize ({ 
        width : window . innerWidth , 
        height : window . innerHeight , 
      }); 
    }; 

    window . addEventListener ( 'resize' , handleResize); 

    // Очищаем прослушиватель событий при отключении компонента 
    return  () => { 
      window . removeEventListener ( 'resize' , handleResize); 
    }; 
  }, []); 

  return screenSize; 
}; 

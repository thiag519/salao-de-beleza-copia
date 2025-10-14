export const Map = () => {
  
  return (
    <div className="w-full h-full">
        <iframe src="https://www.google.com/maps/" 
          width="100%" 
          height="100%" 
          style={{ border: 0}} 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>

  )
}
import React from 'react'
import '../loading.css'

function loading() {
  return (
    <main>
	    <div className="preloader">
		    <div className="preloader__square"></div>
		    <div className="preloader__square"></div>
		    <div className="preloader__square"></div>
		    <div className="preloader__square"></div>
	    </div>
	    <div className="status">Chill<span className="status__dot">.</span><span className="status__dot">.</span><span className="status__dot">.</span></div>
    </main>
  )
}

export default loading

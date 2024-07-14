import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <footer className="inset-x-0 bottom-0 flex py-10 flex-col items-center bg-none text-center text-white">
                <div className="w-full p-4 text-center" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
                Copyright &copy; {year.getFullYear()} BlogSpace | All Rights Reserved
                </div>
    </footer>
  )
}

export default Footer

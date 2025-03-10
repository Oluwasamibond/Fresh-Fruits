import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from 'react-icons/fa'
import {motion} from "framer-motion"
const Footer = () => {
  return (
   <footer className=" container bg-primary/10 py-12 mt-12">
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:5, delay:0.2}}
        className="conatiner flex justify-between items-center">
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <p className="text-primary">Fruit</p>
                <p className="text-secondary">Store</p>
                <FaLeaf className="text-green-500"/>
            </div>
            <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram/>
            </div>
        </motion.div>
   </footer>
  )
}

export default Footer
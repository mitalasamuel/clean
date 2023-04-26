import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Box, TypographyP } from "@/Style/Main";

const Links={
  color:'white',
  textDecoration: 'none'

}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: -1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem = () => {
  return (
   <>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href='/'><TypographyP style={Links}>Home</TypographyP></Link>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href='/about'><TypographyP style={Links}>About us</TypographyP></Link>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href='/services'><TypographyP style={Links}>Services</TypographyP></Link>
    </motion.li> <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href='/contact'><TypographyP style={Links}>Contact us</TypographyP></Link>
    </motion.li>
   </>
  );
};

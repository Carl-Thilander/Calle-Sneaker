"use client"
import { Box } from "@mui/material";
import { createContext } from "react";

interface ContextValues { }

const CartContext = createContext({} as ContextValues);

const Header = () => {
    <Box>
        <h1>Sneaker Site</h1>
    </Box>
}

export default Header;
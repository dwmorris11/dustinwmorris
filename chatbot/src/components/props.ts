import React from "react";
import { Theme } from "@mui/material/styles";

export type BubbleProps = {
    theme: Theme,
    borderRadius: string,
    padding: string,
    margin: string,
    children?: React.ReactNode,
};
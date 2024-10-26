"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/button";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";


const ButtonTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <Button
      radius="full"
      isIconOnly
      // className="absolute top-5 right-5"
      variant="light"
      color="default"
      onClick={() => (currentTheme == "dark"
        ? setTheme("light")
        : setTheme("dark"))}
    >
      {currentTheme === "dark"
        ? <IoSunnyOutline className="h-5 w-5" />
        : <IoMoonOutline className="h-5 w-5" />}
    </Button>
  );
};

export default ButtonTheme;
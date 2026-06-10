import React from "react";
import Typography from "./ui/Typography";
import Button from "./ui/Button";
import GitHubIcon from "./icons/GitHubIcon";
import MailIcon from "./icons/MailIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row md:items-center md:justify-between bg-transparent backdrop-blur-md border-t border-gray-800 py-6 px-4 gap-4">
      <div className="w-full md:w-auto">
        <Typography
          variant="body"
          className="flex flex-row max-w-md text-center text-gray-400 text-sm gap-4 items-center justify-center "
        >
          <div className="w-6 h-6 md:w-7 md:h-7 rounded-sm bg-white flex items-center justify-center hover:bg-blue-500 transition-colors">
            <span className="text-sm sm:md font-bold text-background">JD</span>
          </div>
          Julio Deolino - &copy; {new Date().getFullYear()}
        </Typography>
      </div>
      <div className="flex w-full md:w-auto items-center justify-center md:justify-end gap-4 flex-row">
        <Button
          variant="ghost"
          className="max-w-32"
          href="https://github.com/juliodeolino"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </Button>
        <Button
          variant="ghost"
          className="max-w-32"
          href="https://www.linkedin.com/in/juliodeolino/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </Button>
      </div>
    </footer>
  );
}

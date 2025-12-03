"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SocialIcons = () => {
    const icons = [
        { name: "Website", url: "https://estin.dz/" },
        { name: "Facebook", url: "https://www.facebook.com" },
        { name: "LinkedIn", url: "https://www.linkedin.com" },
        { name: "Insta", url: "https://www.instagram.com" },
        { name: "Youtube", url: "https://www.youtube.com" }
    ];

    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null); 

    return (
        <ul className="flex space-x-4">
            {icons.map(({ name, url }) => (
                <li key={name} className="relative">
                    {/* Preload Hover Image to Prevent Flickering */}
                    <Image 
                        src={`/svg/${name}g.svg`} 
                        alt="" 
                        width={60} 
                        height={60} 
                        className="absolute invisible"
                    />

                    <Link href={url} target="_blank" rel="noopener noreferrer">
                        <Image 
                            src={`/svg/${hoveredIcon === name ? `${name}g` : name}.svg`} 
                            alt={name} 
                            width={60} 
                            height={60} 
                            className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
                            onMouseEnter={() => setHoveredIcon(name)}
                            onMouseLeave={() => setHoveredIcon(null)}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;

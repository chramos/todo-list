import React from "react";

/**
 * @typedef IconProps
 * @property {number} width
 * @property {number} height
 * @property {string} color
 * @property {string} name
 * @param {IconProps}
 */

const Icon = ({ name = "information", width, height, color }) => {
    const iconNameProp = name

    const iconsCollection = [
        { name: "information", value: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},
        { name: "plus", value: "M12 4v16m8-8H4" },
        { name: "trash", value: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" },
        { name: "pencil", value: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" }
    ];

    const svgPath = iconsCollection.find(icon => icon.name === iconNameProp);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 24 24"
            stroke={color}
            stroke-width="2"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d={svgPath.value}
            />
        </svg>
    );
};

export default Icon;

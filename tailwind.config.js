import { nextui } from '@nextui-org/react';



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    nextui(
      {
        themes: {
          light: {
            colors: {
              // orgigin
              primary: "#45707a",
              background: {
                DEFAULT: "#f3eac7",  // bg_dim
                50: "#f9f1a7",       // bg0
                100: "#f5edca",      // bg1
                200: "#f3eac7",      // bg2
                300: "#f5edca",      // bg_statusline1
                400: "#e4edc8",      // bg_diff_green
                500: "#e9d1cc",      // bg_visual_green
                600: "#f8c9c9",      // bg_diff_red
                700: "#e0e9d3",      // bg_diff_blue
                800: "#f9eabf",      // bg_visual_yellow
                900: "#f3eac7",      // bg_current_word
              },
              foreground: {
                DEFAULT: "#6d5743",  // fg0
                50: "#413829",       // fg1
              },

              // custome
              bg_dim: "#f3eac7",
              bg0: "#f9f1a7",
              bg1: "#f5edca",
              bg2: "#f3eac7",
              bg3: "#f1e5bc",
              bg4: "#eee0b7",
              bg5: "#ebd8b2",
              bg_statusline1: "#f5edca",
              bg_statusline2: "#f3eac7",
              bg_statusline3: "#eee0b7",
              bg_diff_green: "#e4edc8",
              bg_diff_blue: "#e0e9d3",
              bg_visual_blue: "#d9e1cc",
              bg_visual_yellow: "#f9eabf",
              bg_current_word: "#f3eac7",
              fg0: "#6d5743",
              fg1: "#413829",
              orange: "#c35e0a",
              yellow: "#b47109",
              green: "#6c8728",
              aqua: "#4c7a5d",
              blue: "#45707a",
              purple: "#945e80",
              bg_red: "#af5858",
              bg_green: "#6f8352",
              bg_yellow: "#a96b2c",
              grey0: "#a89984",
              grey1: "#928374",
              grey2: "#7c6f64",
            },
          },
          dark: {
            colors: {
              // orgigin
              primary: "#7daea3",
              background: {
                DEFAULT: "#141617",  // bg_dim
                50: "#1d2021",       // bg0
                100: "#282828",      // bg1
                200: "#3c3836",      // bg2
                300: "#282828",      // bg_statusline1
                400: "#32361a",      // bg_diff_green
                500: "#333e34",      // bg_visual_green
                600: "#3c1f1e",      // bg_diff_red
                700: "#0d3138",      // bg_diff_blue
                800: "#473c29",      // bg_visual_yellow
                900: "#32302f",      // bg_current_word
              },
              foreground: {
                DEFAULT: "#d4be98",  // fg0
                50: "#ddc7a1",       // fg1
              },


              // custome
              bg_dim: "#141617",
              bg0: "#1d2021",
              bg1: "#282828",
              bg2: "#3c3836",
              bg3: "#504945",
              bg4: "#282828",
              bg5: "#32302f",
              bg_statusline1: "#282828",
              bg_statusline2: "#32302f",
              bg_statusline3: "#504945",
              bg_diff_green: "#32361a",
              bg_diff_blue: "#0d3138",
              bg_visual_blue: "#2e383b",
              bg_visual_yellow: "#473c29",
              bg_current_word: "#32302f",
              fg0: "#d4be98",
              fg1: "#ddc7a1",
              orange: "#fe8019",
              yellow: "#d8a657",
              green: "#a9b665",
              aqua: "#89b482",
              blue: "#7daea3",
              purple: "#d3869b",
              bg_red: "#ea6962",
              bg_green: "#a9b665",
              bg_yellow: "#d8a657",
              grey0: "#7c6f64",
              grey1: "#928374",
              grey2: "#a89984",
              blue: "#7daea3",
            },
          },
        },
        prefix: "nextui",
      }
    ),
  ],
  darkMode: "class"
}


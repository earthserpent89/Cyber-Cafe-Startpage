# Cyber Cafe Startpage

A modern, customizable start page built with React. This project provides a dynamic and visually appealing new tab experience with features like a live clock, editable shortcuts, and a powerful wallpaper engine that connects to Wallhaven.cc.

## Live Version

You can use the live version of the start page here:
**[https://earthserpent89.github.io/Cyber-Cafe-Startpage/](https://earthserpent89.github.io/Cyber-Cafe-Startpage/)**

## Features
- **Dynamic Clock & Date**: Displays the current time with customizable date formats.
- **Customizable Shortcuts**: Easily add, edit, and delete your own shortcuts.
- **Advanced Wallpaper Engine**:
    - Connects to **Wallhaven.cc** with filters for categories, content maturity, and sorting.
    - Supports **custom image URLs**.
    - Dynamically fetches wallpapers that match your **screen's aspect ratio**.
- **Modern "Acrylic" UI**: A semi-transparent, blurred background for all UI elements ensures readability on any wallpaper.
- **Persistent Settings**: All your customizations are saved in your browser's local storage.

## Notes
- This page registers a minimal service worker to cache the app shell and the last wallpaper for faster, offline-friendly loads. You can remove `sw.js` and the registration in `index.html` if you prefer not to use it.
- If you use Wallhaven with third-party CORS proxies, be aware that requests (including an API key if provided) transit those proxies. For privacy, consider hosting your own lightweight proxy.
# KONSENTRIK

**KONSENTRIK** is a hyper-lean, privacy-focused mental wellness web suite. It bundles essential cognitive and physiological tools into a single, distraction-free interface. Built with a modular architecture, it allows for seamless transitions between focus, relaxation, and reflection.

---

## 🌟 Key Features

* **Breathing Pacer:** A visual guide for rhythmic breathing to regulate the nervous system.
* **Mood Tracker:** A lightweight log to track emotional trends using local browser storage (no database required).
* **Grounding Exercise:** An interactive walkthrough of the 5-4-3-2-1 sensory technique to reduce anxiety.
* **Zero Footprint:** No external dependencies, no tracking, and no heavy frameworks.

---

## 📂 Installation and Running

Simply download the GitHub repo and open index.html in a browser. The code can run in a browser itself.

(+) A Flask based app has also been created but it has not been tested.

**[ UPDATE OF MARCH 9, 2026 ]**

The Flask based app has also been tested. It works fine. The project is now in KOMPLETA status.

## 📂 Project Structure

The project uses a "Parent Shell" architecture. The main interface resides in the root, while individual wellness modules are encapsulated in their own directories.

Alternative wellness modules can be swapped in, as needed.

```text
mental-wellness-app/
│
├── index.html          # Main application shell & navigation
├── style.css           # Global minimalist styling
├── tabs.js            # Logic for modular switching
│
├── breathing/          # Module: Guided breathing
│   └── breathing.html
├── mood/               # Module: Local mood logging
│   └── mood.html
└── grounding/          # Module: Sensory grounding task
    └── grounding.html

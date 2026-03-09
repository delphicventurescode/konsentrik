# KONSENTRIK

**KONSENTRIK** is a hyper-lean, privacy-focused mental wellness web suite. It bundles essential cognitive and physiological tools into a single, distraction-free interface. Built with a modular architecture, it allows for seamless transitions between focus, relaxation, and reflection.

---

## 🌟 Key Features

* **Breathing Pacer:** A visual guide for rhythmic breathing to regulate the nervous system.
* **Mood Tracker:** A lightweight log to track emotional trends using local browser storage (no database required).
* **Grounding Exercise:** An interactive walkthrough of the 5-4-3-2-1 sensory technique to reduce anxiety.
* **Zero Footprint:** No external dependencies, no tracking, and no heavy frameworks.

---

## 📂 Installation and Running - TL;DR

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

```

## 🚀 Getting Started

### Method 1: Instant Launch (No Server)
Since **KONSENTRIK** is a static web application, you can run it locally without any installation:

1.  **Clone or download** this repository.
2.  **Navigate** to the root folder.
3.  **Double-click `index.html`** to open it in your preferred web browser.

### Method 2: Python/Flask (Optional)
If you wish to serve the app over a local network or extend it with a backend:

1.  **Ensure Python** is installed.
2.  **Run the provided `app.py`**:
    ```bash
    python3 app.py
    ```
3.  **Access the app** at `http://127.0.0.1:5000`.

---

## 🛠 Tech Stack

* **Frontend:** Vanilla JavaScript, HTML5, CSS3.
* **Storage:** `localStorage` API for private, client-side data persistence.
* **Architecture:** Iframe-based modularity for "Deep Generalist" productivity workflows.

---

## 📜 License

This project is open-source. Feel free to fork, modify, and center yourself.

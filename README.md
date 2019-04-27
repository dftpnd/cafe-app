
### Folder structure
    .
    ├── client                  # Client files
    │   ├── main.css            # Styles
    │   ├── main.html           # First loaded view pulling from imports
    │   └── main.jsx            # Imports all required files - React render
    ├── imports                 # A client/server folder
    │   ├── api                 #
    │   |  └── schema.js        # Schema & query definitions
    |   └── ui                  # UI React rendering
    |      └── assortment       # Products container
    |      └── header           # Header presentation
    |      └── nav              # Maine navigation
    |      └── product          # Product row
    │      └── App.js           # Entry point
    │      └── context.js       # Declare context
    │      └── menu.js          # Menu stub
    ├── public                  # Static files
    ├── server                  # Server files
    │   └── server.js           # 
    └── package.json            # node dependencies
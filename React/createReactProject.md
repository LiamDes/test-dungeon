# React

## File Setup
Make a project folder

## File Organization
Your home page is set with both
projectfolder/public/index.html

and projectfolder/src/index.js

Your `package.json` file holds dependencies and where your index is located.

    {
        "dependencies": {
            "react": "^18.0.0",
            "react-dom": "^18.0.0"
        },
        "main": "/index.js",
        "devDependencies": {
            "react-scripts": "^5.0.1"
        },
        "name": "ljg0t8",
        "description": null,
        "version": "0.0.0",
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test --env=jsdom",
            "eject": "react-scripts eject"
        },
        "browserslist": {
            "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
            ],
            "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
            ]
        }
    }
example `package.json` file.

Your index.js will be set up like:

    import React, { StrictMode } from "react"
    import { createRoot } from "react-dom/client"
    import "./styles.css"
    import App from "./App"

    const root = createRoot(document.getElementById("root"))
    root.render(
    <StrictMode>
        <App />
    </StrictMode>
    )
in this case, the bulk of the page will be developed in an `App.js` file.

StrictMode is a debug mode for development- [docs](https://react.dev/reference/react/StrictMode)

The basics of it entail-
- Your components will re-render an extra time to find bugs caused by impure rendering.
- Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
- Your components will be checked for usage of deprecated APIs.

Your App.js file will hold components. There will likely be common imports such as

    import { useState } from "react"

## Syntax
For your App.js file, the Parent component of the file will be designated, typically at the bottom, with the syntax:

    export default function ParentName() {
        {/* operations here */}
    }
and Child components will be designated above the parent with:

    function ChildName({ propname }) {
        {/* operations here */}
    }
a prop name is optional.

The **TEMPLATE** that a component renders is designated by the **return** operation.

**return** can be a single line;

    return <button>This is a button!</button>
or multiline for more in-depth templates, using parentheses:

    return (
        <div className="outside-thing">
            <div className="inside-thing">
                Content
            </div>
        </div>
    )
Much like Vue.js, the return must be wrapped in a single set of brackets. if you want multiple sections without crowding the injected html, you may use empty tags

    return (
        <>
            <div className="outside-thing">
                <div className="inside-thing">
                    Content
                </div>
            </div>
            <div className="outside-thing">
                <div className="inside-thing">
                    Different Content
                </div>
            </div>
        </>
    )

## Multi-Page routing
*TODO*

# References
Initial tutorial used: [React.dev Learn Tic Tac Toe](https://react.dev/learn/tutorial-tic-tac-toe)
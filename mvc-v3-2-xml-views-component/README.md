# mvc-v2 SAPUI5 book sap-press chapter 5 page 162
Example of Codification for View type xml

- INDEX with Script
  - declaring the oApp
  - declaring component.js file.
- Views in xml format.
- App view has embedded master and detail pages
- no CRUD yet as chapter 5.5 does not yet.
- oData and data created manually in Component.js

App's  Structure

mvc-app-simple-xml-with-component.js
|   index.html
|   |
+---webapp
|   |   Component.js
|   |
|   +---controller
|   |       Detail.controller.js
|   |       Master.controller.js
|   |
|   \---view
|           App.view.xml
|           Detail.view.xml
|           Master.view.xml


# mvc-v2 SAPUI5 book sap-press chapter 5 page 157
Example of Codification for View + embedded views.

Views in xml format + embedded.

Structure

mvc-v4-embedded-views
|   index.html
|   |
+---webapp
|   |
|   +---controller
|   |       Detail.controller.js
|   |       Master.controller.js
|   |
|   \---view
|           App.view.xml
|           Detail.view.xml (embedded to App view)
|           Master.view.xml (embedded to App view)

IMPORTANT:
    Install Live Server extension to test locally in a new port.
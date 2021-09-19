# Set up instructions

1. Download and install Visual Code: https://code.visualstudio.com/download.

2. Download and install NodeJS: https://nodejs.org/en/download/:
   a. verify it is installed correctly by opening a command prompt and running: node -v or node --version.

3. Download and install Java JDK.

4. Run the following commands at the root of your project:
   a. npm install node-bin-setup
   b. npm install selenium-webdriver
   c. npm install selenium-cucumber-js
   d. npm install chai
   e. npm i chromedriver
   f. npm install

5. Create a .vscode folder in the root of your project and then create a launch.json file in it and set its content to:
    {
        // Use IntelliSense to learn about possible attributes.
        // Hover to view descriptions of existing attributes.
        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "type": "node",
                "request": "launch",
                "name": "Run Tag",
                "program": "${workspaceFolder}/node_modules/cucumber/bin/cucumber-js",
                "cwd": "${workspaceFolder}",
                "console": "integratedTerminal",
                "args": [
                    --tags", "@test",
                ]
            }
        ]
    }

6. Hit F5 in VSCode to run the project after tagging individual feature files or scenarios with @test.

# Tech Debt
1. Download and add other webdrivers (e.g. Firefox, Edge, etc.), and add their cofigurations to world.js to enable running the tests in other browsers.

# npm-package-base
## useage

1. npm i bb-free-cli -g

2. bb-cli init projectName --type=package

3. cd projectName

4. npm i or yarn install

5. publish

- The following are two ways to publish package: 

    1. Manual

        (1)npm login
           -Input Username,Password,Email
            
        (2)npm version <patch,minor,major> (Optional)
        
        (3)npm publish

    2. Automatic release \
         First check if the computer is installed [JQ](https://stedolan.github.io/jq/) & [Expect](https://core.tcl-lang.org/expect/home) \
        (1) Create a new file <npm.login.config.json>
        
        ```
        <!--npm.login.config.json-->
        {
          "Username": "",
          "Password": "",
          "Email": ""
        }
        ```
        (2) npm run build
        
        (3) sh ./publish.sh
        
        publish.sh - Its content can be modified as needed
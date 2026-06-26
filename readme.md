# How to initiate github repo and connect it to local

1. Create new folder in local, open terminal or cmd, type cd to the folder and type 
    ```
        git init .
    ```
2. Create new repo in github, and cioy the https for remote origin
3. setup your git account in local. by using git config
    ```
        git config --global user.name "Your name"
        git config --global user.email "YourEmail@domain.com"
    ```
4. connect local folder with github use command
    ```
        git remote add origin https://<your_url_repo>.com
    ```
5. rename the local branch into main
    ```
        git branch -m main
    ```
6. test push using
    ```
        git add .
        git commit -m "Your Message"
        git push origin main
    ```

7. Cara Cepat
    ```
    git add . && git commit -m "Your message here" && git push origin main
    ```

## Cara Run file js menggunakan node    
node --watch nama_file.js

# Cara pindah tempat dari satu file ke file lain
    ```
    cd ..
    ```

# HOW TO CLONE GITHUB PROJECT
1. Open folder in your laptop (Whatever you choose)
2. Open repisitory on github choose one project, click code, click ssh, copy the link
3. Syntax
    ```
    git clone <your_url_repository>
    ```
3. edit .env.example , copy and delete .example
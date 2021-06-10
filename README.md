# Setting up software environment
1. Install Nodejs https://nodejs.org/en/download/
	- `NodeJS LTS v14.x and npm 6.14.x
2. Download/Install MongoDB from https://www.mongodb.com/try/download/community 
	- v.4.4
	- Also get compass for a workbench of the database to inspect content etc. 
3. Download Anaconda/miniconda 
	- v4.9+
	- Python version should be managed through virtual env using `conda env`
4. clone the repo using `git clone`

## Run the react app frontend 
1. navigate to `react` 
2. run `npm install` to instal node modules
3. run `npm start` to start the service on `localhost:8000` 


## Start the Node/Express server
1. navigate to `react` 
2. run `npm install` to instal node modules
3. run `npm start` to host on `localhost:3000` 

## Host/connect MongoDB locally
1. (On windows) cd to `${mongodb_install_dir}/bin`
2. Run `mongod --dbpath ${project_directory}/db` to host data contained in project folder
	- Note if using git-bash need to use `./mongod` instead and so forth 
3. Open another terminal to `${mongodb_install_dir}/bin`
4. Connect to db REPL shell using `mongo`

## Root Folders 
- react 
	- Front end react application 
- nodejs 
	- Backend with Node.js and express
- db
	- Database files for Mongodb
- ds
	- Data analysis scripts using python/R 
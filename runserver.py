import os
import subprocess

subprocess.Popen(["yarn","yarn start"],cwd= os.getcwd()+'\\client', shell= True)
subprocess.Popen(["npm i","npm start"],cwd= os.getcwd()+'\\authserver', shell= True)
subprocess.Popen(["npm i","npm start"],cwd= os.getcwd()+'\\formserver', shell= True)

#os.system("npm start" && "npm start")
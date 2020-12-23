## GATSBY COMMANDS 💻

### INSTALLATION

	npm install
  
### AUDIT FIX

	npm audit fix

### BUILD

	npm build

### RUN

	npm run-script start

## BRANCH RULES 📜

### MASTER/MAIN
 
The master is the production environment, this is the live environment of the site visible to all, the fixes must never be performed from this environment but a separate branch must be detached

### DEV

The dev is the development environment, here all the new features are developed through the gitflow system (feature, hotfix, ecc.)

### QA

QA is the test environment, here all the new features are tested, the environment must be aligned with dev and immediately after the test, if positive, a pull request is made to master

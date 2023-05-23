deploy:
	rm -rf dist
	rm -rf .firebase
	npm run build
	firebase deploy

login:
	firebase login
	
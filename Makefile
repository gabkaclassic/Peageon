deploy:
	rm -rf dist
	npm run build
	firebase deploy

login:
	firebase login
	
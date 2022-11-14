# set up (2022-11)
- copied [Paul's setup](https://github.com/paulrobertlloyd/paulrobertlloyd-indiekit)
- set up a MongoDB Atlas instance (per [recommendation in instructions](https://getindiekit.com/configuration/#application-mongodburl-url); )
	- also considered standing it up in:
		- [Railway](https://docs.railway.app/databases/mongodb), since that’s where I’ll host the app, but it seemed beefier and less managed than needed
		- [Google Cloud](https://cloud.google.com/mongodb) (which is itself just a MongoDB Atlas instance), since that’s where I host other stuff and may move the app, but it seemed maybe too expensive an instance of Atlas
	- currently using the Atlas free tier, may need to bump to serverless for reliability, but want to see usage first
- set up env vars:
	- application.mongodbUrl
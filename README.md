# set up (2022-11)
- copied [Paul's setup](https://github.com/paulrobertlloyd/paulrobertlloyd-indiekit)
- set up a MongoDB Atlas instance (per [recommendation in instructions](https://getindiekit.com/configuration/#application-mongodburl-url); )
	- also considered standing it up in:
		- [Railway](https://docs.railway.app/databases/mongodb), since that’s where I’ll host the app, but it seemed beefier and less managed than needed
		- [Google Cloud](https://cloud.google.com/mongodb) (which is itself just a MongoDB Atlas instance), since that’s where I host other stuff and may move the app, but it seemed maybe too expensive an instance of Atlas
	- currently using the Atlas free tier, may need to bump to serverless for reliability, but want to see usage first
	- set IP range to 0.0.0.0/0 (open to the internet), since we don't know the Railway IP address—this is another argument in favour of moving to, e.g., GCP, where we can better isolate this stuff
- set up env vars:
	- application.mongodbUrl
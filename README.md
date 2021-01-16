# Playlist-Api

##### This is the API Server that extracts metadata of the youtube videos.

## USAGE
USE following commands to build and run application.
npm install
npm start

## Request:
Application runs on port 8080

### GET API to get Metadata: 
http://<hostname>:8080/data/yt?url='<youtube url here>'

## JSON Response:

{
  "code":Code of the response message,
  "message":Message for the response received,
  "data":{
      "title": Song's Title,
      "description": Song's Description (Currently only YouTube's meta is up to date, so not fetching description for Gaana and Saavn,
      "image": The thumbnail URL for album artwork,
      "keywords": Duration of the song.
        }
}



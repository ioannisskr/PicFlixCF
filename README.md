# PicFlix

This is a simple blog app, that you can upload a picture and enter a title and a body of text. Each user must create and sign in with an account in order to post.

A logged in(authorized) user, can see all posts, but can edit or delete only his own.

test users:

username: test1@test.com
password: 123456

username: test2@test.com
password: 123456

to run the app, open a terminal and:

1. `npm install` in both frontend and backend directories
2. in the frontend directory, `ng serve`
3. in the backend directory, `npm run server`

swagger docs (did the best i could):
http://localhost:3000/api-docs

github link:
https://github.com/ioannisskr/PicFlixCF.git

incase bcrypt throws an error, '''npm install bcrypt@latest``` and it should work

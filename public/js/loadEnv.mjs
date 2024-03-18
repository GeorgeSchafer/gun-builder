// This is a suggestion I found to try to work around the problem. It did not work. Source:
// https://stackoverflow.com/questions/64620877/cant-use-dotenv-with-es6-modules#:~:text=//-,importing%20environmental%20variables,-import%20express%20from

import dotenv from 'dotenv';
dotenv.config()

export { dotenv }
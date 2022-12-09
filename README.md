It is a basic react app in which I have implemented infinite scrolling.

### Infinite Scrolling

Infinite scrolling adds the next page as user scrolls down to the bottom through content. With this, user don't need to wait for content to be loaded. It provides better user experience.

## Approach

- Set some default values:
  - page = 1, limit = 10, hasMore = true
- Listen to user's scroll behaviour
- Call getResults() with initial page value
- As user reaches bottom of the page, set the page to next page and call getResults()
- Append the data to the existing result state
- Once user has reached the limit where there in no more content to be load, set `hasMore` variable to `false` so that we don't keep calling getResults() as user tries to scroll down
- Render result

P.S.: We could use custom hooks to call the API. Also, there are some existing libraries as which we could use to implement infinite scrolling

## Running React App

In the project directory, you can run

### `npm install` or `yarn install`
It will install all the required packages

### `npm start` or `yarn start`
Runs the app in development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Getting Started with the App`

On the main page, user can view the list of 10 titles with their images and id.

Initially, the page default value is set to 1 and limit is set to 10

- [http://localhost:3000](http://localhost:3000): Contains a list of titles with image and id
- As you will scroll down to bottom, a loader will be shown till we fetch the next page data

# Youtube channel feed

Simple nodejs package to load Youtube Channel Feed and parse into JSON.

## How to use

```js
const { getChannelFeed } = require("./index");

getChannelFeed("channelId").then((feed) => {
  console.log(feed);
});
```

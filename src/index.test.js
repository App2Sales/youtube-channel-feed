const { getChannelFeed } = require("./index");

const channelId = "UCBWbWViVqDHckknir8PIIdg";

test("get feed in json", async () => {
  const feed = await getChannelFeed(channelId);
  expect(feed).toBeDefined();
});

test("invalid channelId", async () => {
  try {
    const feed = await getChannelFeed("");
    expect(feed).toBeUndefined();
  } catch (err) {
    expect(err).toBeDefined();
    expect(err.message).toBe("Invalid channel ID");
  }
});

test("null channelId", async () => {
  try {
    const feed = await getChannelFeed(null);
    expect(feed).toBeUndefined();
  } catch (err) {
    expect(err).toBeDefined();
    expect(err.message).toBe("Invalid channel ID");
  }
});

test("undefined channelId", async () => {
  try {
    const feed = await getChannelFeed(undefined);
    expect(feed).toBeUndefined();
  } catch (err) {
    expect(err).toBeDefined();
    expect(err.message).toBe("Invalid channel ID");
  }
});

test("invalid channelId expect 404", async () => {
  try {
    const feed = await getChannelFeed("INVALID");
    expect(feed).toBeUndefined();
  } catch (err) {
    expect(err).toBeDefined();
    expect(err.message).toBe("Request failed with status code 404");
  }
})

// TODO: add more tests

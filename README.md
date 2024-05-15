# TinyPNG Batch Script

Image batch compression script written using TinyPNG API.

## How to use

1. Go to [tinypng.com to](https://tinypng.com/developers) apply for API-Key

2. Fill in the API-Key into /index.js

   ```js
   // index.js Line 30
   tinify.key = "Your TinyPNG API-KEY";
   ```

3. Use `yarn install` to install dependency packages

4. Place the images that need to be compressed and built in the `/entry` directory, which supports folders

5. Run the command `yarn build` or `node index.js`

6. Wait for the execution to complete and the output results will be in the `/output` folder.

## Support image formats: ["png", "jpeg", "webp"]


## More usage
- [https://tinypng.com/developers/reference](https://tinypng.com/developers/reference)


## Example preview

- Before image(868 KB)
![./entry/example.webp](./entry/example.webp)

- After image(<font color=#008000>90 KB, Optimization rate 964%</font>)
![./entry/example.webp](./entry/example.webp)


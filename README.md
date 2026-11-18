# speedtest

Console script that measures download speed: makes 10 sequential requests to a URL and prints average request time, total size and speed.

## Run

Node.js 18+:

    node speedtest.mjs https://example.com/big-image.jpg

## Output

- average request time - milliseconds
- total downloaded - megabytes (1 MB = 10^6 bytes)
- speed - megabits per second (Mbit/s)

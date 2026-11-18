const url = process.argv[2];
const RUNS = 10;

if (!url) {
  console.error("Usage: node speedtest.mjs <url>");
  process.exit(1);
}

let totalMs = 0;
let totalBytes = 0;

for (let i = 1; i <= RUNS; i++) {
  const start = performance.now();
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Request ${i} failed: HTTP ${res.status}`);
    process.exit(1);
  }
  const body = await res.arrayBuffer();
  const ms = performance.now() - start;
  totalMs += ms;
  totalBytes += body.byteLength;
  console.log(`#${i}: ${ms.toFixed(0)} ms, ${body.byteLength} bytes`);
}

const avgMs = totalMs / RUNS;
const mbps = (totalBytes * 8) / 1e6 / (totalMs / 1000);

console.log(`Average request time: ${avgMs.toFixed(0)} ms`);
console.log(`Total downloaded: ${(totalBytes / 1e6).toFixed(2)} MB`);
console.log(`Speed: ${mbps.toFixed(2)} Mbit/s`);

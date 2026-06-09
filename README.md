# Training Log

Installable workout and body-weight tracker.

## Reliable Deployment

This app is static. Deploy the folder to any HTTPS static host:

- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages

No backend is required for workouts or body weight. Data is stored locally on the phone with `localStorage`.

## Offline Behavior

The service worker caches:

- the app shell
- workout logic
- styling
- manifest and icons
- mobility images

After the first HTTPS visit, the app can open from the phone home screen and continue working offline.

## Local Preview

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Then open:

```txt
http://localhost:8000
```

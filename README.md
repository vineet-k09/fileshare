# fileshare

| Feature                        | Notes                                                      |
| ------------------------------ | ---------------------------------------------------------- |
| 🔥 **Hotspot Control**         | Use OS commands to turn on/off hotspot (platform-specific) |
| 📦 **Drag & Drop Upload**      | Upload to local server, store in `/uploads`                |
| 🔗 **QR or IP access**         | Clients can scan or type IP like `192.168.1.1:3000`        |
| 📤 **Broadcast New File**      | Use WebSocket to inform clients of new files               |
| 📲 **Mobile Upload Option**    | Simple “choose file” UI on mobile browser                  |
| 🧠 **Optional Authentication** | To avoid randoms accessing your server                     |

| Feature                    | Recommended Tech                                                     |
| -------------------------- | -------------------------------------------------------------------- |
| **Frontend (UI)**          | Web-based using **React** or **Next.js** (mobile & desktop friendly) |
| **Backend**                | **Node.js (Express)** to serve files & handle uploads                |
| **Networking**             | Use **local IP** via **Wi-Fi hotspot** (hosted by laptop)            |
| **File Transfer Protocol** | Raw HTTP, or socket.io / WebRTC for fancy streaming                  |
| **Desktop Wrapper**        | **Electron.js** (turn your web app into a desktop app)               |
| **Mobile**                 | Web browser or **React Native** for a native feel                    |

## RoadMap

🔨 Development Roadmap

### Phase 1: MVP - Local File Sharing via Browser

✅ Set up Node.js Express server

✅ Build a React frontend with drag-and-drop UI

✅ Upload files from browser → save to /uploads on server

✅ Serve frontend and API from Express

✅ Access via http://<host-ip>:3000 on all hotspot-connected devices

### Phase 2: Desktop Integration

⬜ Use Electron.js to wrap the app into a desktop application

⬜ Add OS-level shell commands to control Wi-Fi hotspot:

Windows: netsh

Linux: nmcli

macOS: networksetup

⬜ Auto-start server + hotspot when app launches

### Phase 3: Enhanced File Sharing Features

⬜ Show available devices on network (via ping/ARP scan)

⬜ UI for each device as a card

⬜ Drag file to device card to send specific file to that device (instead of broadcasting)

⬜ Broadcast file notification to all clients using WebSocket

⬜ Browser push notification when a new file is available

⬜ Sound alert when file is received (like AirDrop)

### Phase 4: Performance & Streaming Support

⬜ Enable streaming or chunked upload/download for large files:

Node: res.write() for streaming

Consider WebSockets with chunking logic

For React Native (if used): use background workers or fetch streaming APIs

⬜ Progress bar during file transfer

⬜ Resume/retry support for interrupted transfers (optional)

### Phase 5: Mobile-Native Option (Optional)

⬜ Build a React Native app for Android/iOS

⬜ Use device local IP to connect to host server

⬜ Integrate file upload/download

⬜ Implement QR scan to connect

```json
"scripts": {
  "buildCopy": "npm run build && cp -r build/* ../backend/public/",
  
  "deploy-frontend": "powershell -Command \"Remove-Item ../backend/public/* -Recurse -Force; npm run build; Copy-Item -Path build/* -Destination ../backend/public/ -Recurse\""

}
```

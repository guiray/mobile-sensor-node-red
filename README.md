# Acquisition et transmission de données d'accéléromètre
Projet de transmission et visualisation de données d'accéléromètre d'un appareil mobile via une webapp, avec traitement et redirection dans Node-RED.

## 🧠 Contexte

Ce projet a pour but de concevoir et développer un système capable de **capturer les données d'accéléromètre à partir d'une webapp mobile**, de les transmettre **en temps réel à un serveur local via Node-RED**, et de permettre leur **visualisation et stockage**.

> Ce projet est réalisé dans le cadre du cours de Projet d'intégration.

---

## 🗂️ Répertoires
```
📁 public/            → Fichiers statiques de la webapp mobile
📁 node-red-flows/    → Fichiers JSON d'import Node-RED
📁 docs/              → Documentation (PDF, images, etc.)
📄 README.md
```

---

## 🛠️ Lancement local
1. Démarrer le serveur web avec `http-server -S -C .\cert\192.168.0.13.pem -K .\cert\192.168.0.13-key.pem` (besoin d'avoir générer le certificat et la clé ssl dans le dossier cert, avec mkcert)
2. Ouvrir la webapp sur un mobile (via IP locale)




---

## 📖 Références

- Node-RED documentation
- [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)
- [Understanding the Device Motion Event API](https://medium.com/@kamresh485/understanding-the-device-motion-event-api-0ce5b3e252f1)
- [Detect the device orientation with JS [tutorial]](https://www.youtube.com/watch?v=fMDuFoqSQfw)
- Web APIs (DeviceMotion, WebSocket)

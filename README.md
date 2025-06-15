# Acquisition et transmission de données d'accéléromètre
Projet de transmission et visualisation de données d'accéléromètre d'un appareil mobile via une webapp, avec traitement et redirection dans Node-RED.

## 🧠 Contexte

Ce projet a pour but de concevoir et développer un système capable de **capturer les données d'accéléromètre à partir d'une webapp mobile**, de les transmettre **en temps réel à un serveur local via Node-RED**, et de permettre leur **visualisation et stockage**.

> Ce projet est réalisé dans le cadre du cours de Projet d'intégration.

---

## 🗂️ Répertoires
```
📁 cert/              → Certificat et clé SSL (non tracké pat git)
📁 public/            → Fichiers statiques de la webapp mobile
📁 node-red/          → Fichiers JSON Node-RED
```

---

## Environnement de développement

### Prérequis

- Docker Desktop
- [mkcert](https://github.com/FiloSottile/mkcert)
- Node.js
- 

1. Besoin d'avoir générer le certificat et la clé ssl dans le dossier cert, avec [mkcert](https://github.com/FiloSottile/mkcert) 
```
mkcert filippo@example.com
```
2. 

---

## 🛠️ Lancement local
1. Démarrer le serveur web avec `http-server -S -C .\cert\192.168.0.15.pem -K .\cert\192.168.0.15-key.pem` 
2. Ouvrir la webapp sur un mobile (via IP locale)
3. Démarrer docker avec node-red avec `docker-compose up`


---

## 📖 Références

- [Node-RED documentation](https://nodered.org/docs/getting-started/windows#running-on-windows)
- [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)
- [Understanding the Device Motion Event API](https://medium.com/@kamresh485/understanding-the-device-motion-event-api-0ce5b3e252f1)
- [Detect the device orientation with JS [tutorial]](https://www.youtube.com/watch?v=fMDuFoqSQfw)

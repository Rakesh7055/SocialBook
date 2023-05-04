importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging.js');
import { firebaseConfig } from "../src/firebase";

firebase.initializeState(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload)=>{
    console.log(
        "[firebase-messaging-sw.js] Received background message",
        payload
    )
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    }

    self.registration.showNotification(notificationTitle, notificationOptions);
})



const path = require('path').resolve;
const FCM = require('fcm-push');
const config = require(path('config/constants'));

class PushNotification {
    /* 
     * Prepare push notification payload
     */
    async notify(notificationObj) {
        const payload = {
            to: notificationObj.device_token,
            data: {
                sound: 1,
                vibrate: 1
            },
            notification: {
                title: notificationObj.notification_title,
                body: notificationObj.notification_description,
            }
        }

        console.log(payload);

        // Send push notification to given device token
        this.send(payload);
    }

    /* 
     * Send push notification to user
     */
    send(payload) {
        try {
            const fcm = new FCM(config.fcmCreds.serverKey);
            // const fcm = new FCM(process.env.IOS_SERVER_KEY);

            fcm.send(payload)
                .then(response => {
                    console.log("Successfully sent with response: ")
                    console.log(response);
                })
                .catch(error => {
                    console.error("Something has gone wrong! Error: ")
                    console.log(error);
                });

        } catch (e) { console.error(e); }
    }

}

// Bind the context of the class with it before exporting.
PushNotification.bind(PushNotification);

module.exports = new PushNotification();
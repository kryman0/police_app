# Introduction

A mobile application for **Android** displaying certain information from the Swedish Police Agency, such as all the police stations in the country, and for logged in users (free registering) all the latest police reported events in the country. Clicking on a particular police event leads to a GPS location displayed on a map where the event occurred. The application is best viewed on a mobile device. 

# Technologies

Mithril.js / JavaScript / Node.js / Webpack / Cordova (with Geolocation)

# Setup

The file `app-debug.apk` is an apk file. This file can be installed on a smartphone device with Android via USB to have the application as an app on the smartphone. Usually it should be enough to use adb.exe (or a similar tool) installed in Android SDK's platform-tools folder. Then just run `adb.exe -d install -r app-debug.apk` (`-d` for a connected USB device, `-r` to re-install the application (works at first install too)). Don't forget to switch on Developer mode in Android. "On Android 4.2 and newer, Developer options is hidden by default. To make it available, go to Settings > About phone and tap Build number seven times. Return to the previous screen to find Developer options." From there "you must enable USB debugging on your device. You can find the option under Settings > Developer options."

If the information above is not enough for installing, the *Android Platform Guide* from Cordova's documentation is recommended: https://cordova.apache.org/docs/en/10.x/guide/platforms/android/index.html.

## Data sources

*   https://polisen.se/api/policestations
*   https://polisen.se/api/events
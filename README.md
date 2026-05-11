# Cordova AdMob Mediation Suite

A smart, dynamic, and lightweight Cordova plugin to manage Google AdMob Mediation adapters for Android and iOS. 

This plugin dynamically injects only the mediation adapters you explicitly enable, ensuring your app remains lightweight and free of unnecessary SDK bloat. It also supports custom adapter versions and automatically handles `AndroidManifest.xml`, `build.gradle`, `Podfile`, and `Info.plist` injections.

---

## ⚠️ Prerequisites

**Important:** This plugin is an add-on and **will not work** without a compatible core AdMob plugin installed in your project. 

Please install one of the following recommended and compatible Cordova AdMob plugins before using this mediation suite:
* [community-admob-plus](https://github.com/EYALIN/community-admob-plus)
* [cordova-plugin-admob-nextgen](https://github.com/swaplab-engine/cordova-plugin-admob-nextgen)
* [admob-plus](https://github.com/admob-plus/admob-plus)
* [emi-indo-cordova-plugin-admob](https://github.com/EMI-INDO/emi-indo-cordova-plugin-admob)

---

## 🚀 Installation

### 1. Install your preferred Core AdMob Plugin
*Example using `cordova-plugin-admob-nextgen`:*
```bash
cordova plugin add cordova-plugin-admob-nextgen --save \
--variable APP_ID_ANDROID=ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy \
--variable APP_ID_IOS=ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy
```

### 2. Install AdMob Mediation Suite
Install this plugin and enable the specific ad networks you want to mediate. Only the enabled networks will be compiled into your app.

*Example: Enabling AppLovin and Meta (Facebook) Audience Network:*
```bash
cordova plugin add admob-mediation-suite --save \
--variable ENABLE_APPLOVIN="true" \
--variable KEY_APPLOVIN="YOUR_APPLOVIN_SDK_KEY" \
--variable ENABLE_FACEBOOK="true"
```

---

## ⚙️ Configuration Variables

You can customize the mediation networks by passing variables during installation. 

### Network Toggles
Set to `"true"` to enable the respective mediation adapter. By default, all networks are disabled (`false`).

| Network | Variable Name | Required Extra Variables |
| :--- | :--- | :--- |
| **Meta (Facebook)** | `ENABLE_FACEBOOK` | - |
| **AppLovin** | `ENABLE_APPLOVIN` | `KEY_APPLOVIN="Your_AppLovin_Key"` |
| **Unity Ads** | `ENABLE_UNITY` | - |
| **ironSource Ads** | `ENABLE_IRONSOURCE` | - |
| **Liftoff Monetize (Vungle)** | `ENABLE_VUNGLE` | - |
| **Chartboost** | `ENABLE_CHARTBOOST` | - |
| **DT Exchange (Fyber)** | `ENABLE_DT_EXCHANGE` | - |
| **i-mobile** | `ENABLE_IMOBILE` | - |
| **InMobi** | `ENABLE_INMOBI` | - |
| **LINE Ads Network** | `ENABLE_LINE` | - |
| **maio** | `ENABLE_MAIO` | - |
| **Mintegral** | `ENABLE_MINTEGRAL` | - |
| **Moloco** | `ENABLE_MOLOCO` | - |
| **myTarget** | `ENABLE_MYTARGET` | - |
| **Pangle** | `ENABLE_PANGLE` | - |
| **PubMatic OpenWrap** | `ENABLE_PUBMATIC` | - |

> **Note on AppLovin:** If you enable AppLovin, you **must** provide your AppLovin SDK Key using the `KEY_APPLOVIN` variable. The plugin will intelligently inject this key into your Android `AndroidManifest.xml` and iOS `Info.plist`.

### Customizing Adapter Versions
The plugin uses tested default adapter versions. However, if you need to use a specific version of a mediation adapter, you can override the defaults using the following variables:

**Android Version Variables:**

| Network | Variable | Default |
| :--- | :--- | :--- |
| Meta (Facebook) | `VER_ANDROID_FACEBOOK` | 6.16.0.0 |
| AppLovin | `VER_ANDROID_APPLOVIN` | 11.11.3.0 |
| Unity Ads | `VER_ANDROID_UNITY` | 4.9.2.0 |
| Liftoff (Vungle) | `VER_ANDROID_VUNGLE` | 7.4.3.0 |
| ironSource Ads | `VER_ANDROID_IRONSOURCE` | 8.7.0.0 |
| Chartboost | `VER_ANDROID_CHARTBOOST` | 9.11.1.1 |
| DT Exchange | `VER_ANDROID_DT_EXCHANGE` | 8.4.5.0 |
| i-mobile | `VER_ANDROID_IMOBILE` | 2.3.2.3 |
| InMobi | `VER_ANDROID_INMOBI` | 11.2.0.0 |
| LINE | `VER_ANDROID_LINE` | 3.1.0.0 |
| maio | `VER_ANDROID_MAIO` | 2.0.8.2 |
| Mintegral | `VER_ANDROID_MINTEGRAL` | 17.1.51.0 |
| Moloco | `VER_ANDROID_MOLOCO` | 4.8.0.0 |
| myTarget | `VER_ANDROID_MYTARGET` | 5.45.3.0 |
| Pangle | `VER_ANDROID_PANGLE` | 8.0.0.4.0 |
| PubMatic | `VER_ANDROID_PUBMATIC` | 5.1.0.0 |

**iOS Version Variables:**

| Network | Variable | Default |
| :--- | :--- | :--- |
| Meta (Facebook) | `VER_IOS_FACEBOOK` | 6.12.0.0 |
| AppLovin | `VER_IOS_APPLOVIN` | 11.11.3.0 |
| Unity Ads | `VER_IOS_UNITY` | 4.9.0.0 |
| Liftoff (Vungle) | `VER_IOS_VUNGLE` | 7.4.4.0 |
| ironSource Ads | `VER_IOS_IRONSOURCE` | 8.7.0.0.0 |
| Chartboost | `VER_IOS_CHARTBOOST` | 9.12.0.0 |
| DT Exchange | `VER_IOS_DT_EXCHANGE` | 8.4.7.0 |
| i-mobile | `VER_IOS_IMOBILE` | 2.3.4.6 |
| InMobi | `VER_IOS_INMOBI` | 11.2.0.0 |
| LINE | `VER_IOS_LINE` | 3.0.1.0 |
| maio | `VER_IOS_MAIO` | 2.2.1.1 |
| Mintegral | `VER_IOS_MINTEGRAL` | 8.1.3.0 |
| Moloco | `VER_IOS_MOLOCO` | 4.6.0.0 |
| myTarget | `VER_IOS_MYTARGET` | 5.42.1.0 |
| Pangle | `VER_IOS_PANGLE` | 7.9.1.1.0 |
| PubMatic | `VER_IOS_PUBMATIC` | 5.1.0.0 |

*Example overriding a version:*
```bash
cordova plugin add admob-mediation-suite \
--variable ENABLE_UNITY="true" \
--variable VER_ANDROID_UNITY="4.10.0.0"
```

---

## 📖 Step-by-Step AdMob UI Setup

Enabling the adapters in your app is only half the process. You must also configure the mediation groups and eCPM details inside your Google AdMob Dashboard. 

Follow the official Google AdMob step-by-step guides for the networks you enabled:

* **AppLovin:** [Android](https://developers.google.com/admob/android/mediation/applovin) | [iOS](https://developers.google.com/admob/ios/mediation/applovin)
* **Meta (Facebook):** [Android](https://developers.google.com/admob/android/mediation/meta) | [iOS](https://developers.google.com/admob/ios/mediation/meta)
* **Unity Ads:** [Android](https://developers.google.com/admob/android/mediation/unity) | [iOS](https://developers.google.com/admob/ios/mediation/unity)
* **ironSource Ads:** [Android](https://developers.google.com/admob/android/mediation/ironsource) | [iOS](https://developers.google.com/admob/ios/mediation/ironsource)
* **Liftoff Monetize (Vungle):** [Android](https://developers.google.com/admob/android/mediation/liftoff-monetize) | [iOS](https://developers.google.com/admob/ios/mediation/liftoff-monetize)
* **Chartboost:** [Android](https://developers.google.com/admob/android/mediation/chartboost) | [iOS](https://developers.google.com/admob/ios/mediation/chartboost)
* **DT Exchange:** [Android](https://developers.google.com/admob/android/mediation/dt-exchange) | [iOS](https://developers.google.com/admob/ios/mediation/dt-exchange)
* **i-mobile:** [Android](https://developers.google.com/admob/android/mediation/imobile) | [iOS](https://developers.google.com/admob/ios/mediation/imobile)
* **InMobi:** [Android](https://developers.google.com/admob/android/mediation/inmobi) | [iOS](https://developers.google.com/admob/ios/mediation/inmobi)
* **LINE Ads Network:** [Android](https://developers.google.com/admob/android/mediation/line) | [iOS](https://developers.google.com/admob/ios/mediation/line)
* **maio:** [Android](https://developers.google.com/admob/android/mediation/maio) | [iOS](https://developers.google.com/admob/ios/mediation/maio)
* **Mintegral:** [Android](https://developers.google.com/admob/android/mediation/mintegral) | [iOS](https://developers.google.com/admob/ios/mediation/mintegral)
* **Moloco:** [Android](https://developers.google.com/admob/android/mediation/moloco) | [iOS](https://developers.google.com/admob/ios/mediation/moloco)
* **myTarget:** [Android](https://developers.google.com/admob/android/mediation/mytarget) | [iOS](https://developers.google.com/admob/ios/mediation/mytarget)
* **Pangle:** [Android](https://developers.google.com/admob/android/mediation/pangle) | [iOS](https://developers.google.com/admob/ios/mediation/pangle)
* **PubMatic OpenWrap:** [Android](https://developers.google.com/admob/android/mediation/pubmatic) | [iOS](https://developers.google.com/admob/ios/mediation/pubmatic)

> **Note:** Some networks (Vpon, Zucks) are listed on Google's mediation page but are not supported by this plugin because they require manual SDK downloads instead of Maven/CocoaPods distribution. Networks listed under "No Third-Party SDKs Required" (bidding-only) need no SDK integration — configure them directly in the AdMob UI.

---

## ❓ Frequently Asked Questions (FAQ)

**1. Does the revenue from mediation networks go into my AdMob account?** **No.** AdMob only acts as a mediator that routes the ad requests. The actual revenue earned from third-party networks (like Meta, AppLovin, Unity, etc.) will be credited to your accounts on those respective platforms. You must set up payment details and reach the payout threshold individually on each network's dashboard.

**2. Should I enable all available mediation networks or just focus on a few?** **We highly recommend focusing on just 1 or 2 additional networks.** If you enable too many networks, your ad traffic will be split across multiple platforms. As a result, your earnings will be fragmented, and it will take a much longer time to reach the minimum payout threshold for each individual network.

**3. What are the best recommended networks to start with?** If you are just starting, we recommend **Meta (Facebook) Audience Network** and/or **AppLovin**. Both are known for having high fill rates, competitive eCPMs, and generally perform very well alongside Google AdMob.

---

## 📄 License
This project is licensed under the MIT License.

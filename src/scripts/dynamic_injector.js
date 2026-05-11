const fs = require('fs');
const path = require('path');
const et = require('elementtree');

module.exports = function (context) {
    const projectRoot = context.opts.projectRoot;

    console.log("-----------------------------------------");
    console.log("AdMob MEDIATION SUITE..");
    console.log("-----------------------------------------");

    /**
     * HELPER: Smart Variable Reader
     */
    function getVar(varName) {
        // 1. Try reading from package.json (Cordova CLI)
        try {
            const packageJsonPath = path.join(projectRoot, 'package.json');
            if (fs.existsSync(packageJsonPath)) {
                const packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
                if (packageData.cordova &&
                    packageData.cordova.plugins &&
                    packageData.cordova.plugins['admob-mediation-suite'] &&
                    packageData.cordova.plugins['admob-mediation-suite'][varName]) {
                    return packageData.cordova.plugins['admob-mediation-suite'][varName];
                }
            }
        } catch (e) {
            // error package.json
        }

        // 2. Try reading from config.xml (Construct 3 / Manual Config)
        try {
            const configPath = path.join(projectRoot, 'config.xml');
            if (fs.existsSync(configPath)) {
                const configRaw = fs.readFileSync(configPath).toString();
                const configXml = et.parse(configRaw);
                const root = configXml.getroot();

                const prefs = root.findall('preference');
                for (let i = 0; i < prefs.length; i++) {
                    if (prefs[i].get('name') === varName) {
                        return prefs[i].get('value');
                    }
                }

                const plugins = root.findall('plugin');
                for (let j = 0; j < plugins.length; j++) {
                    if (plugins[j].get('name') === 'admob-mediation-suite' || plugins[j].get('id') === 'admob-mediation-suite') {
                        const pluginVars = plugins[j].findall('variable');
                        for (let k = 0; k < pluginVars.length; k++) {
                            if (pluginVars[k].get('name') === varName) {
                                return pluginVars[k].get('value');
                            }
                        }
                    }
                }
            }
        } catch (e) {
            // console.warn("Warning reading config.xml:", e.message); 
        }
        return '';
    }

    // =================================================================
    // LOAD VARIABLES: TOGGLES
    // =================================================================
    const enableFB = getVar('ENABLE_FACEBOOK') === 'true';
    const enableAppLovin = getVar('ENABLE_APPLOVIN') === 'true';
    const enableUnity = getVar('ENABLE_UNITY') === 'true';
    const enableIronSource = getVar('ENABLE_IRONSOURCE') === 'true';
    const enableVungle = getVar('ENABLE_VUNGLE') === 'true';
    // NEW Network Toggles
    const enableChartboost = getVar('ENABLE_CHARTBOOST') === 'true';
    const enableDtExchange = getVar('ENABLE_DT_EXCHANGE') === 'true'; // Fyber
    const enableImobile = getVar('ENABLE_IMOBILE') === 'true';
    const enableInmobi = getVar('ENABLE_INMOBI') === 'true';
    const enableLine = getVar('ENABLE_LINE') === 'true';
    const enableMaio = getVar('ENABLE_MAIO') === 'true';
    const enableMintegral = getVar('ENABLE_MINTEGRAL') === 'true';
    const enableMoloco = getVar('ENABLE_MOLOCO') === 'true';
    const enableMytarget = getVar('ENABLE_MYTARGET') === 'true';
    const enablePangle = getVar('ENABLE_PANGLE') === 'true';
    const enablePubmatic = getVar('ENABLE_PUBMATIC') === 'true';

    const keyAppLovin = getVar('KEY_APPLOVIN');

    // =================================================================
    // LOAD VARIABLES: ANDROID VERSIONS
    // =================================================================
    const verFbAndroid = getVar('VER_ANDROID_FACEBOOK') || '6.16.0.0';
    const verAppLovinAndroid = getVar('VER_ANDROID_APPLOVIN') || '11.11.3.0';
    const verUnityAndroid = getVar('VER_ANDROID_UNITY') || '4.9.2.0';
    const verIronSourceAndroid = getVar('VER_ANDROID_IRONSOURCE') || '8.7.0.0';
    const verVungleAndroid = getVar('VER_ANDROID_VUNGLE') || '7.4.3.0';
    // NEW Android Network Versions
    const verChartboostAndroid = getVar('VER_ANDROID_CHARTBOOST') || '9.11.1.1';
    const verDtExchangeAndroid = getVar('VER_ANDROID_DT_EXCHANGE') || '8.4.5.0';
    const verImobileAndroid = getVar('VER_ANDROID_IMOBILE') || '2.3.2.3';
    const verInmobiAndroid = getVar('VER_ANDROID_INMOBI') || '11.2.0.0';
    const verLineAndroid = getVar('VER_ANDROID_LINE') || '3.1.0.0';
    const verMaioAndroid = getVar('VER_ANDROID_MAIO') || '2.0.8.2';
    const verMintegralAndroid = getVar('VER_ANDROID_MINTEGRAL') || '17.1.51.0';
    const verMolocoAndroid = getVar('VER_ANDROID_MOLOCO') || '4.8.0.0';
    const verMytargetAndroid = getVar('VER_ANDROID_MYTARGET') || '5.45.3.0';
    const verPangleAndroid = getVar('VER_ANDROID_PANGLE') || '8.0.0.4.0';
    const verPubmaticAndroid = getVar('VER_ANDROID_PUBMATIC') || '5.1.0.0';

    // =================================================================
    // LOAD VARIABLES: iOS VERSIONS
    // =================================================================
    const verFbIos = getVar('VER_IOS_FACEBOOK') || '6.12.0.0';
    const verAppLovinIos = getVar('VER_IOS_APPLOVIN') || '11.11.3.0';
    const verUnityIos = getVar('VER_IOS_UNITY') || '4.9.0.0';
    const verIronSourceIos = getVar('VER_IOS_IRONSOURCE') || '8.7.0.0.0';
    const verVungleIos = getVar('VER_IOS_VUNGLE') || '7.4.4.0';
    // NEW iOS Network Versions
    const verChartboostIos = getVar('VER_IOS_CHARTBOOST') || '9.12.0.0';
    const verDtExchangeIos = getVar('VER_IOS_DT_EXCHANGE') || '8.4.7.0';
    const verImobileIos = getVar('VER_IOS_IMOBILE') || '2.3.4.6';
    const verInmobiIos = getVar('VER_IOS_INMOBI') || '11.2.0.0';
    const verLineIos = getVar('VER_IOS_LINE') || '3.0.1.0';
    const verMaioIos = getVar('VER_IOS_MAIO') || '2.2.1.1';
    const verMintegralIos = getVar('VER_IOS_MINTEGRAL') || '8.1.3.0';
    const verMolocoIos = getVar('VER_IOS_MOLOCO') || '4.6.0.0';
    const verMytargetIos = getVar('VER_IOS_MYTARGET') || '5.42.1.0';
    const verPangleIos = getVar('VER_IOS_PANGLE') || '7.9.1.1.0';
    const verPubmaticIos = getVar('VER_IOS_PUBMATIC') || '5.1.0.0';

    // =================================================================
    // ANDROID LOGIC
    // =================================================================
    if (context.opts.platforms.includes('android')) {
        const platformRoot = path.join(projectRoot, 'platforms/android');
        const gradleFile = path.join(platformRoot, 'app/build-extras.gradle');
        const manifestFile = path.join(platformRoot, 'app/src/main/AndroidManifest.xml');

        // A. INJECT GRADLE
        let gradleContent = "// Auto-generated by EMI Mediation Suite. DO NOT EDIT.\n";
        gradleContent += "dependencies {\n";

        let hasCustomRepo = false;
        let repoContent = "repositories {\n";
        
        if (enableChartboost) {
            repoContent += "    maven { url 'https://cboost.jfrog.io/artifactory/chartboost-ads/' }\n";
            hasCustomRepo = true;
        }
        if (enablePangle) {
            repoContent += "    maven { url 'https://artifact.bytedance.com/repository/pangle/' }\n";
            hasCustomRepo = true;
        }
        if (enableMintegral) {
            repoContent += "    maven { url 'https://dl-maven-android.mintegral.com/repository/mbridge_android_sdk_oversea' }\n";
            hasCustomRepo = true;
        }

        if (enableInmobi) {
            repoContent += "    maven { url 'https://imobile.github.io/adnw-sdk-android' }\n";
            hasCustomRepo = true;
        }

        if (enableMaio) {
            repoContent += "    maven { url 'https://imobile-maio.github.io/maven' }\n";
            hasCustomRepo = true;
        }

        if (enablePubmatic) {
            repoContent += "    maven { url 'https://repo.pubmatic.com/artifactory/public-repos' }\n";
            hasCustomRepo = true;
        }

        repoContent += "}\n\n";

        if (hasCustomRepo) {
            gradleContent += repoContent;
            console.log("Android: Custom Maven repositories.");
        }

        gradleContent += "dependencies {\n";

        if (enableFB) {
            gradleContent += `    implementation 'com.google.ads.mediation:facebook:${verFbAndroid}'\n`;
            console.log(`Android: Add Facebook Adapter (${verFbAndroid})`);
        }
        if (enableAppLovin) {
            gradleContent += `    implementation 'com.google.ads.mediation:applovin:${verAppLovinAndroid}'\n`;
            console.log(`Android: Add AppLovin Adapter (${verAppLovinAndroid})`);
        }
        if (enableUnity) {
            gradleContent += `    implementation 'com.google.ads.mediation:unity:${verUnityAndroid}'\n`;
            console.log(`Android: Add Unity Adapter (${verUnityAndroid})`);
        }
        if (enableIronSource) {
            gradleContent += `    implementation 'com.google.ads.mediation:ironsource:${verIronSourceAndroid}'\n`;
            console.log(`Android: Add ironSource Adapter (${verIronSourceAndroid})`);
        }
        if (enableVungle) {
            gradleContent += `    implementation 'com.google.ads.mediation:vungle:${verVungleAndroid}'\n`;
            console.log(`Android: Add Liftoff/Vungle Adapter (${verVungleAndroid})`);
        }
        
        // NEW Android Network Injections
        if (enableChartboost) {
            gradleContent += `    implementation 'com.google.ads.mediation:chartboost:${verChartboostAndroid}'\n`;
            console.log(`Android: Add Chartboost Adapter (${verChartboostAndroid})`);
        }
        if (enableDtExchange) {
            // Note: DT Exchange uses the 'fyber' path
            gradleContent += `    implementation 'com.google.ads.mediation:fyber:${verDtExchangeAndroid}'\n`;
            console.log(`Android: Add DT Exchange (Fyber) Adapter (${verDtExchangeAndroid})`);
        }
        if (enableImobile) {
            gradleContent += `    implementation 'com.google.ads.mediation:imobile:${verImobileAndroid}'\n`;
            console.log(`Android: Add iMobile Adapter (${verImobileAndroid})`);
        }
        if (enableInmobi) {
            gradleContent += `    implementation 'com.google.ads.mediation:inmobi:${verInmobiAndroid}'\n`;
            console.log(`Android: Add InMobi Adapter (${verInmobiAndroid})`);
        }
        if (enableLine) {
            gradleContent += `    implementation 'com.google.ads.mediation:line:${verLineAndroid}'\n`;
            console.log(`Android: Add LINE Adapter (${verLineAndroid})`);
        }
        if (enableMaio) {
            gradleContent += `    implementation 'com.google.ads.mediation:maio:${verMaioAndroid}'\n`;
            console.log(`Android: Add Maio Adapter (${verMaioAndroid})`);
        }
        if (enableMintegral) {
            gradleContent += `    implementation 'com.google.ads.mediation:mintegral:${verMintegralAndroid}'\n`;
            console.log(`Android: Add Mintegral Adapter (${verMintegralAndroid})`);
        }
        if (enableMoloco) {
            gradleContent += `    implementation 'com.google.ads.mediation:moloco:${verMolocoAndroid}'\n`;
            console.log(`Android: Add Moloco Adapter (${verMolocoAndroid})`);
        }
        if (enableMytarget) {
            gradleContent += `    implementation 'com.google.ads.mediation:mytarget:${verMytargetAndroid}'\n`;
            console.log(`Android: Add myTarget Adapter (${verMytargetAndroid})`);
        }
        if (enablePangle) {
            gradleContent += `    implementation 'com.google.ads.mediation:pangle:${verPangleAndroid}'\n`;
            console.log(`Android: Add Pangle Adapter (${verPangleAndroid})`);
        }
        if (enablePubmatic) {
            gradleContent += `    implementation 'com.google.ads.mediation:pubmatic:${verPubmaticAndroid}'\n`;
            console.log(`Android: Add PubMatic Adapter (${verPubmaticAndroid})`);
        }

        gradleContent += "}\n";

        fs.writeFileSync(gradleFile, gradleContent, 'utf-8');

        // B. INJECT MANIFEST
        if (fs.existsSync(manifestFile)) {
            const manifestRaw = fs.readFileSync(manifestFile).toString();
            const manifestTree = et.parse(manifestRaw);
            const root = manifestTree.getroot();
            const appNode = root.find('application');

            let manifestChanged = false;

            if (enableAppLovin && keyAppLovin && keyAppLovin !== 'none' && appNode){
                const existing = appNode.findall(`./meta-data[@android:name='applovin.sdk.key']`);
                existing.forEach(node => appNode.remove(node));

                let meta = new et.Element('meta-data');
                meta.set('android:name', 'applovin.sdk.key');
                meta.set('android:value', keyAppLovin);
                appNode.append(meta);
                manifestChanged = true;
                console.log("Android: AppLovin Key Injected to Manifest");
            }

            if (manifestChanged) {
                fs.writeFileSync(manifestFile, manifestTree.write({ indent: 4 }), 'utf-8');
            }
        }
    }

    // =================================================================
    // iOS LOGIC
    // =================================================================
    if (context.opts.platforms.includes('ios')) {
        const platformRoot = path.join(projectRoot, 'platforms/ios');
        const directories = fs.readdirSync(platformRoot).filter(file => fs.statSync(path.join(platformRoot, file)).isDirectory());
        const projName = directories.find(dir => !dir.endsWith('.xcassets') && !dir.endsWith('.xcodeproj') && dir !== 'cordova' && dir !== 'pods');

        const podfile = path.join(platformRoot, 'Podfile');
        const plistFile = path.join(platformRoot, projName, `${projName}-Info.plist`);

        if (fs.existsSync(podfile)) {
            let podContent = fs.readFileSync(podfile, 'utf-8');
            const startMarker = "# AdMob-MEDIATION-START";
            const endMarker = "# AdMob-MEDIATION-END";

            const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`, 'g');
            podContent = podContent.replace(regex, '');

            let newPods = `\n${startMarker}\n`;
            
            if (enableFB) newPods += `pod 'GoogleMobileAdsMediationFacebook', '${verFbIos}'\n`;
            if (enableAppLovin) newPods += `pod 'GoogleMobileAdsMediationAppLovin', '${verAppLovinIos}'\n`;
            if (enableUnity) newPods += `pod 'GoogleMobileAdsMediationUnity', '${verUnityIos}'\n`;
            if (enableIronSource) newPods += `pod 'GoogleMobileAdsMediationIronSource', '${verIronSourceIos}'\n`;
            if (enableVungle) newPods += `pod 'GoogleMobileAdsMediationVungle', '${verVungleIos}'\n`;
            // NEW iOS Network Injections
            if (enableChartboost) newPods += `pod 'GoogleMobileAdsMediationChartboost', '${verChartboostIos}'\n`;
            if (enableDtExchange) newPods += `pod 'GoogleMobileAdsMediationFyber', '${verDtExchangeIos}'\n`;
            if (enableImobile) newPods += `pod 'GoogleMobileAdsMediationIMobile', '${verImobileIos}'\n`;
            if (enableInmobi) newPods += `pod 'GoogleMobileAdsMediationInMobi', '${verInmobiIos}'\n`;
            if (enableLine) newPods += `pod 'GoogleMobileAdsMediationLine', '${verLineIos}'\n`;
            if (enableMaio) newPods += `pod 'GoogleMobileAdsMediationMaio', '${verMaioIos}'\n`;
            if (enableMintegral) newPods += `pod 'GoogleMobileAdsMediationMintegral', '${verMintegralIos}'\n`;
            if (enableMoloco) newPods += `pod 'GoogleMobileAdsMediationMoloco', '${verMolocoIos}'\n`;
            if (enableMytarget) newPods += `pod 'GoogleMobileAdsMediationMyTarget', '${verMytargetIos}'\n`;
            if (enablePangle) newPods += `pod 'GoogleMobileAdsMediationPangle', '${verPangleIos}'\n`;
            if (enablePubmatic) newPods += `pod 'GoogleMobileAdsMediationPubMatic', '${verPubmaticIos}'\n`;
            
            newPods += `${endMarker}\n`;

            podContent += newPods;
            fs.writeFileSync(podfile, podContent, 'utf-8');
            console.log("iOS: Podfile updated.");
        }

        if (fs.existsSync(plistFile)) {
            let plistContent = fs.readFileSync(plistFile, 'utf-8');
            const removeRegex = /<key>AppLovinSdkKey<\/key>\s*<string>.*?<\/string>/g;
            plistContent = plistContent.replace(removeRegex, '');

            if (enableAppLovin && keyAppLovin && keyAppLovin !== 'none') {
                const insertion = `
    <key>AppLovinSdkKey</key>
    <string>${keyAppLovin}</string>`;
                const lastDictIndex = plistContent.lastIndexOf('</dict>');
                if (lastDictIndex !== -1) {
                    plistContent = plistContent.substring(0, lastDictIndex) + insertion + plistContent.substring(lastDictIndex);
                    console.log("iOS: AppLovin Key Injected to Info.plist");
                }
            }
            fs.writeFileSync(plistFile, plistContent, 'utf-8');
        }
    }

    return Promise.resolve();
};
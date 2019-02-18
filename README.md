# appNativeCode
NativeScript application with native code in App_Resources

## Native Code for Android

The native (Java) code for Android is located in `<project dir>/app/App_Resources/Android/src/main/java` directory. It is a simple class that logs output in the logcat.

## Native Code for iOS

The native (Objective-C) code for iOS is located at `<project dir>/app/App_Resources/iOS/src` directory. Note that you need to have `module.modulemap` file to be able to call your method from JavaScript.


## Testing the application
To test this application just clone it (or use `tns create myApp --template https://github.com/rosen-vladimirov/appNativeCode/tarball/master`) and use `tns run <platform>` command.

## Prerequisites

You need [NativeScript CLI](https://www.npmjs.com/package/nativescript) 5.2.0 or later.


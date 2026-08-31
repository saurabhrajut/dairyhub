# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.

# Preserve line numbers and source file names for crash logging
-keepattributes SourceFile,LineNumberTable,*Annotation*,Signature,InnerClasses,EnclosingMethod

# Maximum R8 Optimization Passes (9 Passes for highest performance & shrinking)
-optimizationpasses 9
-allowaccessmodification
-repackageclasses ''
-overloadaggressively
-useuniqueclassmembernames

# Strip debug logging calls for max code & resource shrinking
-assumenosideeffects class android.util.Log {
    public static *** d(...);
    public static *** v(...);
    public static *** i(...);
    public static *** w(...);
}

# Keep WebView JavaScript interfaces (Required for Capacitor bridges)
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Keep Capacitor Core and Plugins
-keep public class * extends com.getcapacitor.Plugin {
    public <init>(...);
    public <methods>;
}
-keep public class com.getcapacitor.** { *; }
-keep class org.apache.cordova.** { *; }
-keep class androidx.webkit.** { *; }

# Keep Firebase Authentication and SDKs
-keep class com.google.firebase.** { *; }
-keep class com.google.android.gms.** { *; }
-keep class io.capawesome.capacitorjs.plugins.firebase.** { *; }

# Suppress R8 warnings for unused optional auth handlers
-dontwarn com.facebook.**
-dontwarn io.capawesome.capacitorjs.plugins.firebase.authentication.**

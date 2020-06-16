package com.stardust.autojs.runtime.api;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.media.AudioManager;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.BatteryManager;
import android.os.Build;
import android.os.PowerManager;
import android.os.Vibrator;
import android.provider.Settings;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import android.telephony.TelephonyManager;

import com.stardust.autojs.R;
import com.stardust.autojs.runtime.exception.ScriptException;
import com.stardust.pio.PFiles;
import com.stardust.pio.UncheckedIOException;
import com.stardust.util.ScreenMetrics;

import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.Collections;
import java.util.List;

import ezy.assist.compat.SettingsCompat;

/**
 * 获取 设备 相关的信息
 */
public class Device {

    public static final int width = ScreenMetrics.getDeviceScreenWidth();

    public static final int height = ScreenMetrics.getDeviceScreenHeight();

    public static final String buildId = Build.ID;

    public static final String buildDisplay = Build.DISPLAY;

    public static final String product = Build.PRODUCT;

    public static final String board = Build.BOARD;

    public static final String brand = Build.BRAND;

    public static final String device = Build.DEVICE;

    public static final String model = Build.MODEL;

    public static final String bootloader = Build.BOOTLOADER;

    public static final String hardware = Build.HARDWARE;

    public static final String fingerprint = Build.FINGERPRINT;

    public static final int sdkInt = Build.VERSION.SDK_INT;

    public static final String incremental = Build.VERSION.INCREMENTAL;

    public static final String release = Build.VERSION.RELEASE;

    public static final String baseOS;

    public static final String securityPatch;

    static {
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
            baseOS = Build.VERSION.BASE_OS;
            securityPatch = Build.VERSION.SECURITY_PATCH;
        } else {
            baseOS = null;
            securityPatch = null;
        }
    }

    public static final String codename = Build.VERSION.CODENAME;

    @SuppressLint("HardwareIds")
    public static final String serial = Build.SERIAL;

    private Context mContext;
    private PowerManager.WakeLock mWakeLock;
    private int mWakeLockFlag;

    public Device(Context context) {
        mContext = context;
    }

    /**
     * 取得IMEI
     * @return
     */
    @SuppressLint("HardwareIds")
    @Nullable
    public String getIMEI() {
        checkReadPhoneStatePermission();
        try {
            return ((TelephonyManager) mContext.getSystemService(Context.TELEPHONY_SERVICE)).getDeviceId();
        } catch (SecurityException e) {
            return null;
        }
    }


    /**
     * 获取Android ID
     * @return
     */
    @SuppressLint("HardwareIds")
    public String getAndroidId() {
        return Settings.Secure.getString(mContext.getContentResolver(), Settings.Secure.ANDROID_ID);
    }

    /**
     * 获得亮度
     * @return
     * @throws Settings.SettingNotFoundException
     */
    public int getBrightness() throws Settings.SettingNotFoundException {
        return Settings.System.getInt(mContext.getContentResolver(), Settings.System.SCREEN_BRIGHTNESS);
    }

    /**
     * 获取亮度模式
     * @return
     * @throws Settings.SettingNotFoundException
     */
    public int getBrightnessMode() throws Settings.SettingNotFoundException {
        return Settings.System.getInt(mContext.getContentResolver(), Settings.System.SCREEN_BRIGHTNESS_MODE);
    }

    /**
     * 设置亮度
     * @param b
     * @throws Settings.SettingNotFoundException
     */
    public void setBrightness(int b) throws Settings.SettingNotFoundException {
        checkWriteSettingsPermission();
        Settings.System.putInt(mContext.getContentResolver(), Settings.System.SCREEN_BRIGHTNESS, b);
    }

    /**
     * 设置亮度模式
     * @param b
     * @throws Settings.SettingNotFoundException
     */
    public void setBrightnessMode(int b) throws Settings.SettingNotFoundException {
        checkWriteSettingsPermission();
        Settings.System.putInt(mContext.getContentResolver(), Settings.System.SCREEN_BRIGHTNESS_MODE, b);
    }

    /**
     * 获取音乐音量
     * @return
     */
    public int getMusicVolume() {
        return ((AudioManager) getSystemService(Context.AUDIO_SERVICE))
                .getStreamVolume(AudioManager.STREAM_MUSIC);
    }

    /**
     * 获取通知 音量
     * @return
     */
    public int getNotificationVolume() {
        return ((AudioManager) getSystemService(Context.AUDIO_SERVICE))
                .getStreamVolume(AudioManager.STREAM_NOTIFICATION);
    }

    /**
     * 获取警报音量
     * @return
     */
    public int getAlarmVolume() {
        return ((AudioManager) getSystemService(Context.AUDIO_SERVICE))
                .getStreamVolume(AudioManager.STREAM_ALARM);
    }

    /**
     * 获得音乐最大音量
     * @return
     */
    public int getMusicMaxVolume() {
        return ((AudioManager) getSystemService(Context.AUDIO_SERVICE))
                .getStreamMaxVolume(AudioManager.STREAM_MUSIC);
    }

    /**
     * 获取通知最大音量
     * @return
     */
    public int getNotificationMaxVolume() {
        return ((AudioManager) getSystemService(Context.AUDIO_SERVICE))
                .getStreamMaxVolume(AudioManager.STREAM_NOTIFICATION);
    }

    /**
     * 获取警报最大音量
     * @return
     */
    public int getAlarmMaxVolume() {
        return ((AudioManager) getSystemService(Context.AUDIO_SERVICE))
                .getStreamMaxVolume(AudioManager.STREAM_ALARM);
    }

    /**
     * 设置音乐音量
     * @param i
     */
    public void setMusicVolume(int i) {
        checkWriteSettingsPermission();
        ((AudioManager) getSystemService(Context.AUDIO_SERVICE))
                .setStreamVolume(AudioManager.STREAM_MUSIC, i, 0);
    }

    /**
     * 设置警报音量
     * @param i
     */
    public void setAlarmVolume(int i) {
        checkWriteSettingsPermission();
        ((AudioManager) getSystemService(Context.AUDIO_SERVICE))
                .setStreamVolume(AudioManager.STREAM_ALARM, i, 0);
    }

    /**
     * 设置通知 音量
     * @param i
     */
    public void setNotificationVolume(int i) {
        checkWriteSettingsPermission();
        ((AudioManager) getSystemService(Context.AUDIO_SERVICE))
                .setStreamVolume(AudioManager.STREAM_NOTIFICATION, i, 0);
    }

    /**
     * 获取电池
     * @return
     */
    public float getBattery() {
        Intent batteryIntent = mContext.registerReceiver(null, new IntentFilter(Intent.ACTION_BATTERY_CHANGED));
        if (batteryIntent == null) {
            return -1;
        }
        int level = batteryIntent.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
        int scale = batteryIntent.getIntExtra(BatteryManager.EXTRA_SCALE, -1);
        float battery = ((float) level / scale) * 100.0f;
        return Math.round(battery * 10) / 10;
    }

    /**
     * 获取总内存
     * @return
     */
    public long getTotalMem() {
        ActivityManager activityManager = getSystemService(Context.ACTIVITY_SERVICE);
        ActivityManager.MemoryInfo info = new ActivityManager.MemoryInfo();
        activityManager.getMemoryInfo(info);
        return info.totalMem;
    }

    /**
     * 获取可用的 内存
     * @return
     */
    public long getAvailMem() {
        ActivityManager activityManager = getSystemService(Context.ACTIVITY_SERVICE);
        ActivityManager.MemoryInfo info = new ActivityManager.MemoryInfo();
        activityManager.getMemoryInfo(info);
        return info.availMem;
    }

    /**
     * 是否 正在充电
     * @return
     */
    public boolean isCharging() {
        Intent intent = mContext.registerReceiver(null, new IntentFilter(Intent.ACTION_BATTERY_CHANGED));
        if (intent == null) {
            throw new ScriptException("Cannot retrieve the battery state");
        }
        int plugged = intent.getIntExtra(BatteryManager.EXTRA_PLUGGED, -1);
        return plugged == BatteryManager.BATTERY_PLUGGED_AC || plugged == BatteryManager.BATTERY_PLUGGED_USB;
    }

    public void keepAwake(int flags, long timeout) {
        checkWakeLock(flags);
        mWakeLock.acquire(timeout);
    }

    /**
     * 保持清醒
     * @param flags
     */
    @SuppressLint("WakelockTimeout")
    public void keepAwake(int flags) {
        checkWakeLock(flags);
        mWakeLock.acquire();
    }

    /**
     * 屏幕是否开启
     * @return
     */
    public boolean isScreenOn() {
        //按照API文档来说不应该使用PowerManager.isScreenOn()，但是，isScreenOn()和实际不一致的情况通常只会出现在安卓智能手表的类似设备上
        //因此这里仍然使用PowerManager.isScreenOn()
        // if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT_WATCH) {
        //   return ((WindowManager) getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay().getState() == Display.STATE_ON;
        //} else {
        return ((PowerManager) getSystemService(Context.POWER_SERVICE)).isScreenOn();
        //}
    }

    /**
     * 如果需要的话 醒来
     */
    public void wakeUpIfNeeded() {
        if (!isScreenOn()) {
            wakeUp();
        }
    }

    /**
     * 醒来
     */
    public void wakeUp() {
        keepScreenOn(200);
    }

    /**
     * 保持萤幕开启
     */
    public void keepScreenOn() {
        keepAwake(PowerManager.SCREEN_BRIGHT_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP);
    }

    /**
     * 保持萤幕开启
     * @param timeout
     */
    public void keepScreenOn(long timeout) {
        keepAwake(PowerManager.SCREEN_BRIGHT_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP, timeout);
    }

    /**
     * 保持屏幕暗淡
     */
    public void keepScreenDim() {
        keepAwake(PowerManager.SCREEN_DIM_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP);
    }

    /**
     * 保持屏幕暗淡
     * @param timeout
     */
    public void keepScreenDim(long timeout) {
        keepAwake(PowerManager.SCREEN_DIM_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP, timeout);
    }

    /**
     * 检查唤醒锁
     * @param flags
     */
    private void checkWakeLock(int flags) {
        if (mWakeLock == null || flags != mWakeLockFlag) {
            cancelKeepingAwake();
            mWakeLock = ((PowerManager) getSystemService(Context.POWER_SERVICE)).newWakeLock(flags, Device.class.getName());
        }
    }

    /**
     * 取消保持清醒
     */
    public void cancelKeepingAwake() {
        if (mWakeLock != null && mWakeLock.isHeld())
            mWakeLock.release();
    }

    /**
     * 震动
     * @param millis
     */
    public void vibrate(long millis) {
        ((Vibrator) getSystemService(Context.VIBRATOR_SERVICE)).vibrate(millis);
    }

    /**
     * 取消振动
     */
    public void cancelVibration() {
        ((Vibrator) getSystemService(Context.VIBRATOR_SERVICE)).cancel();
    }

    /**
     * 检查写入设置权限
     */
    private void checkWriteSettingsPermission() {
        if (SettingsCompat.canWriteSettings(mContext)) {
            return;
        }
        SettingsCompat.manageWriteSettings(mContext);
        throw new SecurityException(mContext.getString(R.string.no_write_settings_permissin));
    }


    /**
     * 检查阅读电话状态权限
     */
    private void checkReadPhoneStatePermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (mContext.checkSelfPermission(Manifest.permission.READ_PHONE_STATE)
                    != PackageManager.PERMISSION_GRANTED) {
                throw new SecurityException(mContext.getString(R.string.no_read_phone_state_permissin));
            }
        }
    }


    /**
     * 获得系统服务
     * @param service
     * @param <T>
     * @return
     */
    // 只是为了避免出现空指针警告，以使android studio感到高兴。
    @NonNull
    @SuppressWarnings("unchecked")
    private <T> T getSystemService(String service) {
        Object systemService = mContext.getSystemService(service);
        if (systemService == null) {
            throw new RuntimeException("should never happen..." + service);
        }
        return (T) systemService;
    }

    private static final String FAKE_MAC_ADDRESS = "02:00:00:00:00:00";

    /**
     * 获取Mac地址
     * @return
     * @throws Exception
     */
    @SuppressLint("HardwareIds")
    public String getMacAddress() throws Exception {
        WifiManager wifiMan = (WifiManager) mContext.getApplicationContext().getSystemService(Context.WIFI_SERVICE);
        if (wifiMan == null) {
            return null;
        }
        WifiInfo wifiInf = wifiMan.getConnectionInfo();
        if (wifiInf == null) {
            return getMacByFile();
        }

        String mac = wifiInf.getMacAddress();
        if (FAKE_MAC_ADDRESS.equals(mac)) {
            mac = null;
        }
        if (mac == null) {
            mac = getMacByInterface();
            if (mac == null) {
                mac = getMacByFile();
            }
        }
        return mac;
    }

    /**
     * 通过界面获取Mac
     * @return
     * @throws SocketException
     */
    private static String getMacByInterface() throws SocketException {
        List<NetworkInterface> networkInterfaces = Collections.list(NetworkInterface.getNetworkInterfaces());
        for (NetworkInterface networkInterface : networkInterfaces) {
            if (networkInterface.getName().equalsIgnoreCase("wlan0")) {
                byte[] macBytes = networkInterface.getHardwareAddress();
                if (macBytes == null) {
                    return null;
                }

                StringBuilder mac = new StringBuilder();
                for (byte b : macBytes) {
                    mac.append(String.format("%02X:", b));
                }

                if (mac.length() > 0) {
                    mac.deleteCharAt(mac.length() - 1);
                }
                return mac.toString();
            }
        }
        return null;
    }

    /**
     * 通过文件获取Mac
     * @return
     * @throws Exception
     */
    private static String getMacByFile() throws Exception {
        try {
            return PFiles.read("/sys/class/net/wlan0/address");
        } catch (UncheckedIOException e) {
            return null;
        }
    }

    @Override
    public String toString() {
        return "Device{" +
                "width=" + width +
                ", height=" + height +
                ", buildId='" + buildId + '\'' +
                ", buildDisplay='" + buildDisplay + '\'' +
                ", product='" + product + '\'' +
                ", board='" + board + '\'' +
                ", brand='" + brand + '\'' +
                ", device='" + device + '\'' +
                ", model='" + model + '\'' +
                ", bootloader='" + bootloader + '\'' +
                ", hardware='" + hardware + '\'' +
                ", fingerprint='" + fingerprint + '\'' +
                ", sdkInt=" + sdkInt +
                ", incremental='" + incremental + '\'' +
                ", release='" + release + '\'' +
                ", baseOS='" + baseOS + '\'' +
                ", securityPatch='" + securityPatch + '\'' +
                ", serial='" + serial + '\'' +
                '}';
    }

}

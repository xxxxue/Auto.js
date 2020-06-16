package org.autojs.autojs.myhelper;

import android.util.Log;

import com.stardust.autojs.ScriptEngineService;
import com.stardust.util.UiHandler;

import org.autojs.autojs.autojs.AutoJs;

public class Helper {

    public static AutoJs instance;


    static {
        instance= AutoJs.getInstance();
    }

    public static ScriptEngineService getScriptEngineService() {
        return instance.getScriptEngineService();
    }

    /**
     * toast
     * @param msg
     */
    public static void showToast(String msg) {
        instance.getUiHandler().toast(msg);
    }
    public static void showToast(int msg) {
        instance.getUiHandler().toast(msg);
    }

    public static void getUiHandler2() {
        instance.getUiHandler();
        instance.getScriptEngineService();
        instance.getRuntime();
        instance.getAppUtils().getCurrentActivity();
        instance.getGlobalConsole();
        instance.getScriptEngineManager();
    }

    /**
     * 获取当前 activity
     * @return
     */
    public static String getCurrentActivity()
    {
      return instance.getRuntime().info.getLatestActivity();
    }

    /**
     * 获取当前 Package
     * @return
     */
    public static String getCurrentPackage()
    {
        return instance.getRuntime().info.getLatestPackage();
    }


    /**
     * 日志 Error
     * @param msg
     */
    public static void logError(String msg)
    {
        instance.getGlobalConsole().error(msg);
    }

    /**
     * 日志 Info
     * @param msg
     */
    public static void logInfo(String msg)
    {
        instance.getGlobalConsole().error(msg);
    }

    /**
     * 日志 Debug
     * @param msg
     */
    public static void logDebug(String msg)
    {
        instance.getGlobalConsole().log(msg);
    }

    /**
     * 日志 Warn
     * @param msg
     */
    public static void logWarn(String msg)
    {
        instance.getGlobalConsole().warn(msg);
    }

//    public static AutoJs getInstance() {
//        return AutoJs.getInstance();
//    }

    //        AutoJs.getInstance().getScriptEngineService().getGlobalConsole().log("123测试");
    //        AutoJs.getInstance().getScriptEngineService().getGlobalConsole().error("123测试");
    //        AutoJs.getInstance().getScriptEngineService().getGlobalConsole().warn("123测试");
    //        AutoJs.getInstance().getScriptEngineService().getGlobalConsole().print(Log.INFO,"123测试");
    //AutoJs.getInstance().getUiHandler().toast("123测试");

}

package com.stardust.autojs.runtime.api;

import androidx.annotation.Nullable;

import com.stardust.autojs.annotation.ScriptInterface;

/**
 * Created by Stardust on 2017/4/2.
 */

public interface Console {

    @ScriptInterface
    void verbose(@Nullable Object data, Object... options);

    @ScriptInterface
    void log(@Nullable Object data, Object... options);

    /**
     * 调用 Log4j
     * @param level   Log.INFO   2,3 Debug   4 Info  5 Warn 6 Error 7 Fatal
     * @param data
     * @param options
     */
    @ScriptInterface
    void print(int level, Object data, Object... options);

    @ScriptInterface
    void info(@Nullable Object data, Object... options);

    @ScriptInterface
    void warn(@Nullable Object data, Object... options);

    @ScriptInterface
    void error(@Nullable Object data, Object... options);

    @ScriptInterface
    void assertTrue(boolean value, @Nullable Object data, Object... options);

    @ScriptInterface
    void clear();

    @ScriptInterface
    void show();

    @ScriptInterface
    void hide();

    String println(int level, CharSequence charSequence);

    void setTitle(CharSequence title);

}

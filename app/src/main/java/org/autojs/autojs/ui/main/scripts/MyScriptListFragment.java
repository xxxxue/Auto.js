package org.autojs.autojs.ui.main.scripts;

import android.app.Activity;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.Nullable;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

import com.stardust.app.GlobalAppContext;
import com.stardust.util.DeveloperUtils;
import com.stardust.util.IntentUtil;
import com.stardust.view.accessibility.AccessibilityNotificationObserver;

import org.androidannotations.annotations.AfterViews;
import org.androidannotations.annotations.EFragment;
import org.androidannotations.annotations.ViewById;
import org.autojs.autojs.Pref;
import org.autojs.autojs.R;
import org.autojs.autojs.autojs.AutoJs;
import org.autojs.autojs.external.fileprovider.AppFileProvider;
import org.autojs.autojs.model.explorer.ExplorerDirPage;
import org.autojs.autojs.model.explorer.Explorers;
import org.autojs.autojs.model.script.Scripts;
import org.autojs.autojs.myhelper.Helper;
import org.autojs.autojs.tool.SimpleObserver;
import org.autojs.autojs.ui.BaseActivity;
import org.autojs.autojs.ui.common.ScriptOperations;
import org.autojs.autojs.ui.explorer.ExplorerView;
import org.autojs.autojs.ui.main.FloatingActionMenu;
import org.autojs.autojs.ui.main.QueryEvent;
import org.autojs.autojs.ui.main.ViewPagerFragment;
import org.autojs.autojs.ui.project.ProjectConfigActivity;
import org.autojs.autojs.ui.project.ProjectConfigActivity_;
import org.autojs.autojs.ui.viewmodel.ExplorerItemList;
import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;

import io.reactivex.android.schedulers.AndroidSchedulers;

/**
 * 脚本列表
 */
@EFragment(R.layout.fragment_my_script_list)
public class MyScriptListFragment extends ViewPagerFragment implements FloatingActionMenu.OnFloatingActionButtonClickListener {

    private static final String TAG = "MyScriptListFragment";

    public MyScriptListFragment() {
        super(0);
    }

    /**
     * 资源管理器 view
     */
    @ViewById(R.id.script_file_list)
    ExplorerView mExplorerView;

    /**
     * 悬浮 操作菜单
     */
    private FloatingActionMenu mFloatingActionMenu;

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EventBus.getDefault().register(this);
    }



    /**
     * 设置 视图
     */
    @AfterViews
    void setUpViews() {

        ExplorerItemList.SortConfig sortConfig = ExplorerItemList.SortConfig.from(PreferenceManager.getDefaultSharedPreferences(getContext()));

        mExplorerView.setSortConfig(sortConfig);
        // 设置 目录
        mExplorerView.setExplorer(Explorers.workspace(), ExplorerDirPage.createRoot(Pref.getScriptDirPath()));

        //子项 点击事件
        mExplorerView.setOnItemClickListener((view, item) -> {
            if (item.isEditable()) {
                //文件 则 打开 编辑器
                Scripts.INSTANCE.edit(getActivity(), item.toScriptFile());
            } else {
                //文件夹 则进入
                IntentUtil.viewFile(GlobalAppContext.get(), item.getPath(), AppFileProvider.AUTHORITY);
            }
        });
    }

    /**
     * 左下角 "+" 展开 与 收缩
     * @param fab
     */
    @Override
    protected void onFabClick(FloatingActionButton fab) {
        initFloatingActionMenuIfNeeded(fab);
        if (mFloatingActionMenu.isExpanded()) {
            mFloatingActionMenu.collapse();
        } else {
            mFloatingActionMenu.expand();

        }
    }

    /**
     * 初始化 浮动操作菜单
     * @param fab
     */
    private void initFloatingActionMenuIfNeeded(final FloatingActionButton fab) {
        if (mFloatingActionMenu != null)
            return;
        mFloatingActionMenu = getActivity().findViewById(R.id.floating_action_menu);
        mFloatingActionMenu.getState()
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new SimpleObserver<Boolean>() {
                    @Override
                    public void onNext(@io.reactivex.annotations.NonNull Boolean expanding) {
                        fab.animate()
                                .rotation(expanding ? 45 : 0)
                                .setDuration(300)
                                .start();
                    }
                });
        mFloatingActionMenu.setOnFloatingActionButtonClickListener(this);
    }

    /**
     * 按下 返回键 事件
     * @param activity
     * @return
     */
    @Override
    public boolean onBackPressed(Activity activity) {
        if (mFloatingActionMenu != null && mFloatingActionMenu.isExpanded()) {
            mFloatingActionMenu.collapse();
            return true;
        }
        if (mExplorerView.canGoBack()) {
            mExplorerView.goBack();
            return true;
        }
        return false;
    }

    /**
     * 在页面上隐藏
     */
    @Override
    public void onPageHide() {
        super.onPageHide();
        if (mFloatingActionMenu != null && mFloatingActionMenu.isExpanded()) {
            mFloatingActionMenu.collapse();
        }
    }

    /**
     * 搜索关键词 事件
     * @param event
     */
    @Subscribe
    public void onQuerySummit(QueryEvent event) {
        if (!isShown()) {
            return;
        }
        if (event == QueryEvent.CLEAR) {
            mExplorerView.setFilter(null);
            return;
        }
        String query = event.getQuery();
        mExplorerView.setFilter((item -> item.getName().contains(query)));
    }

    @Override
    public void onStop() {
        super.onStop();
        mExplorerView.getSortConfig().saveInto(PreferenceManager.getDefaultSharedPreferences(getContext()));
    }

    @Override
    public void onDetach() {
        super.onDetach();
        if (mFloatingActionMenu != null)
            mFloatingActionMenu.setOnFloatingActionButtonClickListener(null);
    }


    @Override
    public void onDestroy() {
        super.onDestroy();
        EventBus.getDefault().unregister(this);
    }


    /**
     * 左下角 "+" 子项目 点击事件
     * @param button
     * @param pos
     */
    @Override
    public void onClick(FloatingActionButton button, int pos) {

        Helper.logDebug(Helper.instance.getRuntime().device.toString());
      //  Helper.logDebug( Helper.getCurrentPackage());

        if (mExplorerView == null)
            return;
        switch (pos) {
            case 0:
                //新建文件夹
                new ScriptOperations(getContext(), mExplorerView, mExplorerView.getCurrentPage())
                        .newDirectory();
                break;
            case 1:
                //新建 文件
                new ScriptOperations(getContext(), mExplorerView, mExplorerView.getCurrentPage())
                        .newFile();
                break;
            case 2:
                //导入 文件
                new ScriptOperations(getContext(), mExplorerView, mExplorerView.getCurrentPage())
                        .importFile();
                break;
            case 3:
                // 创建 项目
                ProjectConfigActivity_.intent(getContext())
                        .extra(ProjectConfigActivity.EXTRA_PARENT_DIRECTORY, mExplorerView.getCurrentPage().getPath())
                        .extra(ProjectConfigActivity.EXTRA_NEW_PROJECT, true)
                        .start();
                break;

        }
    }

    public void showToast(String msg) {
        Toast.makeText(getActivity(), msg, Toast.LENGTH_SHORT).show();
    }

}

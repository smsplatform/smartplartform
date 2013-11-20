/*************************************************************************
*
*			Request 对象的接口
*
**************************************************************************/
var Request = {};

Request.TotalBytes = 0;

Request.QueryString = function (variable) {
    /// <summary>QueryString 集合用于取回 HTTP 查询字符串中的变量值。</summary>
    /// <param name="variable" type="string">必需。在 HTTP 查询字符串中要取回的变量名称。</param>
    /// <returns type="variable">返回查询变量的值</returns>
};

Request.Form = function (element) {
    /// <summary>Form 集合用于从使用 POST 方法的表单获取表单元素的值。</summary>
    /// <param name="element" type="string">必需。表单元素的名称，此集合从中取回值。</param>
    /// <returns type="variable">返回对应表单元素的值</returns>
};

Request.Cookies = function (name) {
    /// <summary>Cookies 集合用于设置或取得 cookie 的值。如果 cookie 不存，就创建它，并赋予它规定的值。</summary>
    /// <param name="name" type="string">必需。cookie 的名称。</param>
};

Request.ServerVariables = function (server_variable) {
    /// <summary>ServerVariables 集合用于取回服务器变量的值。</summary>
    /// <param name="server_variable" type="string">必需。要取回的服务器变量的名称。</param>
    /// <returns type="variable">返回查询变量的值</returns>
};

Request.Read = function () {
    /// <summary>Read 方法用于获取作为 POST 请求的部分从客户机发送到服务器的文本数据。</summary>
    /// <returns type="text">返回从客户机发送到服务器的数据</returns>
};

Request.BinaryRead = function (count) {
    /// <summary>BinaryRead 方法用于获取作为 POST 请求的部分从客户机发送到服务器的数据。</summary>
    /// <param name="count" type="string">必需。规定要从客户机读取多少字节。</param>
    /// <returns type="data">返回从客户机发送到服务器的数据</returns>
};
/*************************************************************************
*
*			Response 对象的接口
*
**************************************************************************/
var Response = {};

Response.Buffer = false;
Response.ContentCode = 1;
Response.ContentType= "text/html";
Response.Status = "404 Not Found ";
Response.ContentDisposition = "";

Response.Cookies = function (name) {
    /// <summary>Cookies 集合用于设置或取得 cookie 的值。如果 cookie 不存，就创建它，并赋予它规定的值。</summary>
    /// <param name="name" type="string">必需。cookie 的名称。</param>
};

Response.Redirect = function (url) {
    /// <summary>Redirect 方法把用户重定向到一个不同的 URL 。</summary>
    /// <param name="name" type="string">必需。用户浏览器被重定向的 URL。</param>
};

Response.Write = function (text) {
    /// <summary>Write 方法向输出写一段指定的字符串。</summary>
    /// <param name="text" type="string">必需。要写的数据。</param>
};

Response.WriteFile = function (file) {
    /// <summary>WriteFile方法向输出写一个服务器文件</summary>
    /// <param name="file" type="string">必需。例如：/www/my.png</param>
    /// <returns type="bool">返回成功与否</returns>
};


Response.AppendToLog = function (logType,logEntry) {
    /// <summary>向服务器记录项目的添加日志字符串。</summary>
    /// <param name="logType" type="string">必需。日志类型。</param>
    /// <param name="logEntry" type="string">必需。日志内容。</param>
};

Response.BinaryWrite = function (data) {
    /// <summary>在没有任何字符转换的情况下直接向输出写数据。</summary>
    /// <param name="data" type="string">必需。被发送的二进制信息。</param>
};

Response.Clear = function () {
    /// <summary>清除已缓存的 HTML 输出。</summary>
};

Response.End = function () {
    /// <summary>停止处理脚本，并返回当前的结果。</summary>
};

Response.OpenMailAttachment = function (MailID,AttachmentName) {
    /// <summary>读取邮件附件。</summary>
};

/*************************************************************************
*
*			Server 对象的接口
*
**************************************************************************/
var Server = {};

Server.CreateObject = function (progID) {
    /// <summary>创建对象的实例（instance）。</summary>
    /// <param name="progID" type="string">必需。要创建的对象的类型。</param>
    /// <returns type="object">返回对象的实例</returns>
};

Server.Execute = function (path) {
    /// <summary>从另一个 FWP 文件中执行一个 FWP 文件。</summary>
    /// <param name="path" type="string">必需。要执行的 FWP 文件的位置。</param>
};

Server.GetLastError = function () {
    /// <summary>返回可描述已发生错误状态信息。</summary>
};

Server.HTMLEncode = function (html) {
    /// <summary>将 HTML 编码应用到某个指定的字符串。</summary>
    /// <param name="html" type="string">必需。要编码的字符串。</param>
    /// <returns type="string">返回编码后的字符串。</returns>
};

Server.MapPath = function (path) {
    /// <summary>将一个指定的地址映射到一个物理地址。</summary>
    /// <param name="path" type="string">必需。URL地址。</param>
    /// <returns type="string">返回物理地址</returns>
};

Server.Transfer = function (path) {
    /// <summary>把一个 FWP 文件中创建的所有信息传输到另一个 FWP 文件。</summary>
    /// <param name="path" type="string">必需。FWP 文件的位置。向这个 FWP 文件转移控制权。</param>
};

Server.URLEncode = function (url) {
    /// <summary>把 URL 编码规则应用到指定的字符串。</summary>
    /// <param name="url" type="string">必需。要编码的字符串。</param>
    /// <returns type="string">返回编码后的字符串。</returns>
};

Server.ExecuteWinApp = function (AppPath,AppParam) {
    /// <summary>执行平台应用程序。</summary>
    /// <param name="AppPath" type="string">必需。执行应用程序的路径。</param>
    /// <param name="AppParam" type="string">可选。执行应用程序的参数。</param>
    /// <returns type="bool">返回成功与否</returns>
};

Server.GetSystemStatusXML = function () {
    /// <summary>获取XML格式描述的智能平台应用工程运行信息。</summary>
    /// <returns type="string">返回XML格式描述的智能平台应用工程运行信息。</returns>
};

Server.GetOPCOrganizeXML = function () {
    /// <summary>获取XML格式描述的组织机构信息。</summary>
    /// <returns type="string">返回当前用户能访问的XML格式描述的组织机构信息。</returns>
};

Server.GetUserOPCOrganizeXML = function (RoleID) {
    /// <summary>添加注释。</summary>
};

Server.GetOPCGroupXML = function () {
    /// <summary>获取XML格式描述的全部设备分组信息。</summary>
    /// <returns type="string">返回当前用户能访问的XML格式描述的设备分组信息。</returns>
};
Server.GetOPCNodeXML = function () {
    /// <summary>获取XML格式描述的全部设备节点信息。</summary>
    /// <returns type="string">返回当前用户能访问的XML格式描述的设备节点信息。</returns>
};
Server.GetUserOPCNodeXML = function (RoleID) {
    /// <summary>添加注释。</summary>
};
Server.GetOPCTempletXML = function () {
    /// <summary>获取当前应用工程XML格式描述的设备模板信息。</summary>
    /// <returns type="string">返回当前应用工程XML格式描述的设备模板信息。</returns>
};

Server.GetOPCDTUXML = function () {
    /// <summary>获取当前应用工程XML格式描述的智能网关信息。</summary>
    /// <returns type="string">返回当前应用工程XML格式描述的智能网关信息。</returns>
};

Server.GetOPCFYSBXML = function () {
    /// <summary>获取当前应用工程XML格式描述的通讯接口信息。</summary>
    /// <returns type="string">返回当前应用工程XML格式描述的通讯接口信息。</returns>
};
Server.GetOPCDriverXML = function () {
    /// <summary>获取XML格式描述的设备驱动信息。</summary>
    /// <returns type="string">返回当前应用工程XML格式描述的设备驱动信息。</returns>
};
Server.GetOPCValueXML = function (OPCPath) {
    /// <summary>获取XML格式描述的某一设备节点变量信息。</summary>
    /// <param name="OPCPath" type="string">必需。描述智能设备节点路径的字符串。。</param>
    /// <returns type="string">返回XML格式描述的某一设备节点全部变量信息。</returns>
};
Server.GetUserListXML = function () {
    /// <summary>GetUserListXML方法用于获取当前应用工程用户XML格式描述的列表信息。</summary>
    /// <returns type="string">返回当前应用工程用户XML格式描述的列表信息。</returns>
};
Server.GetDTUNodeXML = function (DTUNO) {
    /// <summary>获取当前应用工程XML格式描述的智能网关节点信息。</summary>
    /// <param name="DTUNO" type="string">必需。描述智能智能网关节点的字符串。。</param>
    /// <returns type="string">返回当前应用工程XML格式描述的智能网关节点信息。</returns>
};
Server.GetOPCTreeXML = function (OPCPath) {
    /// <summary>GetOPCTreeXML方法用于逐层获取XML格式描述的OPC设备树信息。</summary>
    /// <param name="OPCPath" type="string">必需。指定设备路径的字符串，””表示顶层信息。</param>
    /// <returns type="string">返回当前用户能访问的XML格式描述的OPC设备树信息。</returns>
};
Server.GetOPCFlatXML = function (OPCPath) {
    /// <summary>GetOPCFlatXML方法用于获取XML格式描述的OPC设备节点及变量信息。</summary>
    /// <param name="OPCPath" type="string">必需。指定设备路径的字符串，””表示顶层信息。</param>
    /// <returns type="string">返回当前用户能访问的XML格式描述的OPC设备节点及变量信息。</returns>
};
Server.GetPortalProjectXML = function () {
    /// <summary>添加注释。</summary>
};
Server.GetPortalUserProjectXML = function (UserID) {
    /// <summary>添加注释。</summary>
};
Server.GetPortalWebUserXML = function () {
    /// <summary>添加注释。</summary>
};
Server.GetPortalWebRoleXML = function (ProjectID) {
    /// <summary>添加注释。</summary>
};
Server.GetPortalFtpUserXML = function () {
    /// <summary>添加注释。</summary>
};
Server.GetPortalSyslogJSON = function (StartTime, EndTime, Option, PageNum) {
    /// <summary>添加注释。</summary>
};
Server.DelPortalSyslogJSON = function (StartTime, EndTime, Option) {
    /// <summary>添加注释。</summary>
};
Server.GetPortalOnlineUser = function () {
    /// <summary>添加注释。</summary>
};
Server.GetPortalHttpProxyXML = function () {
    /// <summary>添加注释。</summary>
};
Server.GetPortalVideoProxyXML = function () {
    /// <summary>添加注释。</summary>
};
Server.GetPortalMapUserXML = function (ProxyID) {
    /// <summary>添加注释。</summary>
};
Server.GetPortalBlackAndWhiteXML = function () {
    /// <summary>添加注释。</summary>
};
Server.GetPortalPutSMSList = function (PageNum) {
    /// <summary>添加注释。</summary>
};
Server.GetPortalGetSMSList = function (PageNum) {
    /// <summary>添加注释。</summary>
};
Server.GetPortalErrorSMSList = function (PageNum) {
    /// <summary>添加注释。</summary>
};
Server.DelPortalHisSMSItem = function (SmsID) {
    /// <summary>添加注释。</summary>
};
Server.GetPortalSendSMSList = function () {
    /// <summary>添加注释。</summary>
};
Server.DelPortalSendSMSItem = function (SmsID) {
    /// <summary>添加注释。</summary>
};
Server.GetPortalMailList = function (AddressID, PageNum, Type) {
    /// <summary>添加注释。</summary>
};
Server.GetPortalRevokeMailList = function (PageNum) {
    /// <summary>添加注释。</summary>
};
Server.GetPortalUnreadMailList = function (PageNum) {
    /// <summary>添加注释。</summary>
};
Server.DelPortalMailItem = function (MailID) {
    /// <summary>添加注释。</summary>
};
Server.RevokePortalMailItem = function (MailID) {
    /// <summary>添加注释。</summary>
};
Server.GetPortalMailAddressList = function () {
    /// <summary>添加注释。</summary>
};
Server.GetPortalMyAddressList = function (Type) {
    /// <summary>添加注释。</summary>
};
Server.GetPortalCpuVBS = function () {
    /// <summary>添加注释。</summary>
};
Server.GetPortalMenVBS = function () {
    /// <summary>添加注释。</summary>
};
Server.GetPortalUserVBS = function () {
    /// <summary>添加注释。</summary>
};
Server.GetPortalSqlVBS = function () {
    /// <summary>添加注释。</summary>
};
Server.GetProjectOnLineNodeVBS = function (ProjectID) {
    /// <summary>添加注释。</summary>
};
Server.GetProjectOnLineDTUVBS = function (ProjectID) {
    /// <summary>添加注释。</summary>
};
Server.GetPublicMessageList = function (PageNum) {
    /// <summary>添加注释。</summary>
};
Server.GetUnReadMessageList = function (PageNum) {
    /// <summary>添加注释。</summary>
};
Server.GetReadMessageList = function (PageNum) {
    /// <summary>添加注释。</summary>
};
Server.DelUnReadMessageItem = function (MessageID) {
    /// <summary>添加注释。</summary>
};
Server.DelReadMessageItem = function (MessageID) {
    /// <summary>添加注释。</summary>
};
Server.DelPublicMessageItem = function (MessageID) {
    /// <summary>添加注释。</summary>
};
Server.SetReadMessageItem = function (MessageID) {
    /// <summary>添加注释。</summary>
};
Server.GetUnReadMessageCount = function () {
    /// <summary>添加注释。</summary>
};
Server.GetRssMessageList = function () {
    /// <summary>添加注释。</summary>
};
Server.GetSystemStatusJSON = function () {
    /// <summary>GetSystemStatusJSON方法用于获取XML格式描述的智能平台应用工程运行信息。</summary>
    /// <returns type="string">返回当前用户能访问的XML格式描述的OPC设备节点及变量信息。</returns>
};
Server.GetOPCOrganizeJSON = function () {
    /// <summary>GetOPCOrganizeJSON方法用于获取JSON格式描述的组织机构信息。</summary>
    /// <returns type="string">返回当前用户能访问的JSON格式描述的组织机构信息。</returns>
};
Server.GetOPCOrganizeVBS = function () {
    /// <summary>GetOPCOrganizeVBS方法用于获取VBS格式描述的组织机构信息，当脚本使用VBScript语言时，调用此方法将比XML接口解析运行快很多，因此适合于大规模机构组成时使用。</summary>
    /// <returns type="string">返回当前用户能访问的VBS格式描述的组织机构信息。</returns>
};
Server.GetUserOPCOrganizeJSON = function (RoleID) {
    /// <summary>添加注释。</summary>
};
Server.GetUserOPCOrganizeVBS = function (RoleID) {
    /// <summary>添加注释。</summary>
};
Server.GetOPCGroupJSON = function () {
    /// <summary>GetOPCGroupJSON方法用于获取JSON格式描述的全部设备分组信息。</summary>
    /// <returns type="string">返回当前用户能访问的JSON格式描述的设备分组信息。</returns>
};
Server.GetOPCGroupVBS = function () {
    /// <summary>GetOPCGroupVBS方法用于获取VBS格式描述的全部设备分组信息，当脚本使用VBScript语言时，调用此方法将比XML接口解析运行快很多，因此适合于大规模设备集成时使用。</summary>
    /// <returns type="string">返回当前用户能访问的VBS格式描述的设备分组信息。</returns>
};
Server.GetOPCNodeJSON = function () {
    /// <summary>GetOPCNodeJSON方法用于获取JSON格式描述的全部设备节点信息。</summary>
    /// <returns type="string">返回当前用户能访问的JSON格式描述的设备节点信息。</returns>
};
Server.GetOPCNodeVBS = function () {
    /// <summary>GetOPCNodeVBS方法用于获取VBS格式描述的全部设备节点信息，当脚本使用VBScript语言时，调用此方法将比XML接口解析运行快很多，因此适合于大规模设备集成时使用。</summary>
    /// <returns type="string">返回当前用户能访问的VBS格式描述的设备节点信息。</returns>
};
Server.GetUserOPCNodeJSON = function (RoleID) {
    /// <summary>添加注释。</summary>
};
Server.GetUserOPCNodeVBS = function (RoleID) {
    /// <summary>添加注释。</summary>
};
Server.GetOPCTempletJSON = function () {
    /// <summary>GetOPCTempletJSON方法用于获取当前应用工程JSON格式描述的设备模板信息。</summary>
    /// <returns type="string">返回当前应用工程的JSON格式描述的设备模板信息。</returns>
};
Server.GetOPCDTUJSON = function () {
    /// <summary>GetOPCDTUJSON方法用于获取当前应用工程JSON格式描述的智能网关信息。</summary>
    /// <returns type="string">返回当前应用工程JSON格式描述的智能网关信息。</returns>
};
Server.GetOPCFYSBJSON = function () {
    /// <summary>GetOPCFYSBJSON方法用于获取当前应用工程JSON格式描述的通讯接口信息。</summary>
    /// <returns type="string">返回当前应用工程JSON格式描述的通讯接口信息。</returns>
};
Server.GetOPCDriverJSON = function () {
    /// <summary>GetOPCDriverJSON方法用于获取JSON格式描述的设备驱动信息。</summary>
    /// <returns type="string">返回JSON格式描述的设备驱动信息。</returns>
};
Server.GetOPCValueJSON = function (OPCPath) {
    /// <summary>GetOPCValueJSON方法用于获取JSON格式描述的某一设备节点变量信息。</summary>
    /// <param name="OPCPath" type="string">必需。描述智能设备节点路径的字符串。</param>
    /// <returns type="string">返回XML格式描述的某一设备节点全部变量信息。</returns>
};
Server.GetUserListJSON = function () {
    /// <summary>GetUserListJSON方法用于获取当前应用工程用户JSON格式描述的列表信息。</summary>
    /// <returns type="string">返回当前应用工程用户JSON格式描述的列表信息。</returns>
};
Server.GetAdminListJSON = function () {
    /// <summary>添加注释。</summary>
};
Server.GetGroupOPCValueJSON = function (GroupID) {
    /// <summary>添加注释。</summary>
};
Server.GetGroupOPCValueXML = function (GroupID) {
    /// <summary>添加注释。</summary>
};
Server.GetVisitFunctionListXML = function () {
    /// <summary>添加注释。</summary>
};
Server.GetVisitFunctionListJSON = function () {
    /// <summary>添加注释。</summary>
};
Server.GetOnLineDTUJSON = function () {
    /// <summary>添加注释。</summary>
};

Server.GetOPCTreeJSON = function (OPCPath) {
    /// <summary>GetOPCTreeJSON方法用于逐层获取JSON格式描述的OPC设备树信息。</summary>
    /// <param name="OPCPath" type="string">必需。指定设备路径的字符串，””表示顶层信息。</param>
    /// <returns type="string">返回用户能访问的JSON格式描述的OPC设备树信息。</returns>
};
Server.GetOPCFlatJSON = function (OPCPath) {
    /// <summary>GetOPCFlatJSON方法用于获取JSON格式描述的OPC设备节点及变量信息。</summary>
    /// <param name="OPCPath" type="string">必需。指定设备路径的字符串，””表示顶层信息。</param>
    /// <returns type="string">返回用户能访问的JSON格式描述的OPC设备节点及变量信息。</returns>
};
Server.SetProjectNameSpace = function (ProjectPath) {
    /// <summary>SetProjectNameSpace方法用于设置当前脚本应用工程域，用于切换脚本指令应用执行环境。</summary>
    /// <param name="ProjectPath" type="string">必需。应用工程唯一应用标识（仅支持英文+数字）,一般即为在智能平台注册的应用工程目录。</param>
    /// <returns type="string ">返回设置的应用工程唯一标识存在，并拥有应用工程权限则返回成功，否则返回失败。</returns>
};
Server.VerifyUser = function (UserName, PassHash) {
    /// <summary>添加注释。</summary>
};
Server.SetUserProjectID = function (ProjectID) {
    /// <summary>SetUserProjectID方法用于设置当前脚本应用工程域，用于切换脚本指令应用执行环境。</summary>
    /// <param name="ProjectID" type="string">必需。应用工程ID,在智能平台注册的应用工程内部ID号。</param>
    /// <returns type="string ">设置的应用工程ID存在，并拥有应用工程权限则返回成功，否则返回失败。</returns>
};
Server.MSleep = function (SetTime) {
    /// <summary>MSleep方法将在FWP脚本中强制延时运行下一步指令。</summary>
    /// <param name="ProjectID" type="string">必需。强制延时时间，毫秒为单位。</param>
    /// <returns type="string ">执行返回成功或失败。</returns>
};
Server.RefreshOPCNodeValue = function (OPCPath) {
    /// <summary>RefreshOPCNodeValue方法用于更新某一设备变量信息，发送即时更新指令。</summary>
    /// <param name="OPCPath" type="string">必需。某一设备节点完整路径的字符串。</param>
    /// <returns type="string ">执行发送读取设备变量指令成功或失败。</returns>
};
Server.CheckOPCValueData = function (OPCPath) {
    /// <summary>CheckOPCValueData方法用于检查某一设备节点变量是否存在，为设备变量的做好准备。</summary>
    /// <param name="OPCPath" type="string">必需。某一设备节点完整路径的字符串。</param>
    /// <returns type="boolean ">返回TRUE或FALSE。</returns>
};
Server.ReadOPCValueData = function (OPCPath) {
    /// <summary>ReadOPCValueData方法用于对某一设备节点变量读取操作命令。</summary>
    /// <param name="OPCPath" type="string">必需。某一设备节点完整路径的字符串。</param>
    /// <returns type="string">如果变量不存在将返回99999999。</returns>
};
Server.ReadOPCValueTime = function (OPCPath) {
    /// <summary>ReadOPCValueTime方法用于对某一设备节点变量最新时间读取操作命令。</summary>
    /// <param name="OPCPath" type="string">必需。某一设备节点完整路径的字符串。</param>
    /// <returns type="data">如果变量不存在将返回1970-01-01 08:00:00。</returns>
};
Server.WriteOPCValueDataWithTime = function (OPCPath, ValueData, ValueTime) {
    /// <summary>WriteOPCValueDataWithTime方法用于对某一设备节点变量带时间戳的写入操作命令。</summary>
    /// <param name="OPCPath" type="string">必需。某一设备节点完整路径的字符串。</param>
    /// <param name="ValueData" type="string">必需。写入某一设备节点变量的值。</param>
    /// <param name="ValueTime" type="data">必需。写入某一设备节点变量值的时间。</param>
    /// <returns type="string">执行发送写入设备变量指令成功或失败。</returns>
};
Server.WriteOPCValueData = function (OPCPath, ValueData) {
    /// <summary>WriteOPCValueData方法用于对某一设备节点变量写入操作命令。</summary>
    /// <param name="OPCPath" type="string">必需。某一设备节点完整路径的字符串。</param>
    /// <param name="ValueData" type="string">必需。写入某一设备节点变量的值。</param>
    /// <returns type="string">执行发送写入设备变量指令成功或失败。</returns>
};
Server.WriteOPCValueOffset = function (OPCPath, OffsetData) {
    /// <summary>添加注释。</summary>
};
Server.UpdateDeviceValueData = function (OPCPath, ValueData, ValueTime) {
    /// <summary>添加注释。</summary>
};
Server.InitBatchDeviceValueData = function () {
    /// <summary>添加注释。</summary>
};
Server.PushBatchDeviceValueData = function (OPCPath, ValueData, ValueTime) {
    /// <summary>添加注释。</summary>
};
Server.CompBatchDeviceValueData = function () {
    /// <summary>添加注释。</summary>
};
Server.UpdateOPCValueData = function (OPCPath, ValueData) {
    /// <summary>UpdateOPCValueData方法用于对更新某一设备节点变量临时值。</summary>
    /// <param name="OPCPath" type="string">必需。某一设备节点完整路径的字符串。</param>
    /// <param name="ValueData" type="string">必需。写入某一设备节点变量的值。</param>
    /// <returns type="string">执行发送写入设备变量指令成功或失败。</returns>
};
Server.InitBatchValueData = function () {
    /// <summary>InitBatchValueData方法用于对某一设备节点变量批量写入的初始化操作命令。</summary>
    /// <returns type="string">返回执行指令成功或失败。</returns>
};
Server.PushBatchValueData = function (OPCPath, ValueData) {
    /// <summary>PushBatchValueData方法用于对某一设备节点变量批量写入值设定操作命令。</summary>
    /// <param name="OPCPath" type="string">必需。某一设备节点完整路径的字符串。</param>
    /// <param name="ValueData" type="string">必需。写入某一设备节点变量的值。</param>
    /// <returns type="string">执行发送写入设备变量指令成功或失败。</returns>
};
Server.PushBatchValueDataTime = function (OPCPath, ValueData, ValueTime) {
    /// <summary>PushBatchValueDataTime方法用于对某一设备节点变量带时间戳的写入值设定操作命令。</summary>
    /// <param name="OPCPath" type="string">必需。某一设备节点完整路径的字符串。</param>
    /// <param name="ValueData" type="string">必需。写入某一设备节点变量的值。</param>
    /// <param name="ValueTime" type="data">必需。写入某一设备节点变量值的时间。</param>
    /// <returns type="string">执行发送写入设备变量指令成功或失败。</returns>
};
Server.CompBatchValueData = function () {
    /// <summary>CompBatchValueData方法用于对某一设备节点变量批量写入执行操作命令。</summary>
    /// <returns type="string">返回执行指令成功或失败。</returns>
};
Server.SetOPCNodeOnLine = function (OPCPath) {
    /// <summary>SetOPCNodeOnLine方法用于动态修改设备节点在线信息，此方法不立刻生效，需调用ReloadOPCNodeMap方法。</summary>
    /// <param name="OPCPath" type="string">必需。某一设备节点路径的字符串。</param>
    /// <returns type="string">返回执行指令成功或失败。</returns>
};
Server.SetOPCNodeOffLine = function (OPCPath) {
    /// <summary>SetOPCNodeOffLine方法用于动态修改设备节点离线信息，此方法不立刻生效，需调用ReloadOPCNodeMap方法。</summary>
    /// <param name="OPCPath" type="string">必需。某一设备节点路径的字符串。</param>
    /// <returns type="string">返回执行指令成功或失败。</returns>
};
Server.UpdateNoToDTU = function (FYSBID, NO) {
    /// <summary>UpdateNoToDTU方法用于更新某一智能网关的点对点通信标识号。</summary>
    /// <param name="FYSBID" type="string">必需。通讯接口内部标识号。</param>
    /// <param name="NO" type="string">必需。智能网关唯一标识。</param>
    /// <returns type="string">返回执行更新密钥成功或失败。</returns>
};
Server.UpdateKeyToDTU = function (FYSBID, NO) {
    /// <summary>UpdateKeyToDTU方法用于更新某一智能网关的点对点通信密钥。</summary>
    /// <param name="FYSBID" type="string">必需。通讯接口内部标识号。</param>
    /// <param name="NO" type="string">必需。智能网关唯一标识。</param>
    /// <returns type="string">返回执行更新密钥成功或失败。</returns>
};
Server.SetupDTULastInfo = function (FYSBID, NO, SetupTime, SetupInfo, SetupFlag) {
    /// <summary>SetupDTULastInfo方法用于设置某一智能网关的相关配置信息。</summary>
    /// <param name="FYSBID" type="string">必需。通讯接口内部标识号。</param>
    /// <param name="NO" type="string">必需。智能网关唯一标识。</param>
    /// <param name="SetupTime" type="data">必需。配置时间。</param>
    /// <param name="SetupInfo" type="string">必需。配置信息。</param>
    /// <param name="SetupFlag" type="Boolean">必需。配置状态 0——失败 1——成功。</param>
    /// <returns type="string">返回执行指令成功或失败。</returns>
};
Server.SendXMLCmdToDTU = function (XMLCmd, FYSBID, NO) {
    /// <summary>添加注释。</summary>
};
Server.SendUserCmdToDTU = function (HexCmd, FYSBID, NO) {
    /// <summary>SendUserCmdToDTU方法用于发送某一类设备的专用通信指令到网关。</summary>
    /// <param name="HexCmd" type="string">必需。专用通信指令十六进制字符串。</param>
    /// <param name="FYSBID" type="string">必需。通讯接口内部标识号。</param>
    /// <param name="NO" type="string">必需。智能网关唯一标识。</param>
    /// <returns type="string">返回执行指令成功或失败。</returns>
};
Server.SendUserCmdToNode = function (HexCmd, NodeID, NO) {
    /// <summary>SendUserCmdToNode方法用于发送某一类设备的专用通信指令到设备。</summary>
    /// <param name="HexCmd" type="string">必需。专用通信指令十六进制字符串。</param>
    /// <param name="NodeID" type="string">必需。智能设备内部标识号。</param>
    /// <param name="NO" type="string">必需。智能网关唯一标识。</param>
    /// <returns type="string">返回执行指令成功或失败。</returns>
};
Server.SendSmsMessage = function (PhoneNum, UserMessage) {
    /// <summary>SendSmsMessage方法用于给指定手机号码发送短信。</summary>
    /// <param name="PhoneNum" type="string">必需。指定手机号码。</param>
    /// <param name="UserMessage" type="string">指定发送的短信字符串。</param>
    /// <returns type="string">返回发送短信成功或失败。</returns>
};
Server.CheckFileIsExist = function (Path) {
    /// <summary>CheckFileIsExist方法用于检查文件是否存在。</summary>
    /// <param name="Path" type="string">指定检查文件的路径。</param>
    /// <returns type="string">返回检查文件存在或不存在。</returns>
};
Server.PublishMessage = function (Title, Body) {
    /// <summary>PublishMessage方法用于在智能平台上发布内部公共消息，各应用系统内部发布的消息只有具有相关应用系统权限的用户能够查阅。</summary>
    /// <param name="Title" type="string">指定要发布的消息的标题。</param>
    /// <param name="Body" type="string">指定要发布的内部公共消息内容。</param>
    /// <returns type="string">返回发送短信成功或失败。</returns>
};
Server.GetAddressList = function () {
    /// <summary>获取联系人信息</summary>
};
Server.EditAddressInfo = function (AddressID,SurName,Name,Call,Group,Department,Mail,PhoneNum,Flag) {
    /// <summary>添加注释。</summary>
};
Server.DelAddressInfo = function (AddressID) {
    /// <summary>添加注释。</summary>
};
Server.EditMailInfo = function (AddressID,MailAddress,DispName,SMTPServer,POP3Server,MailUserName,MailPassWord,MailFlag) {
    /// <summary>添加注释。</summary>
};
Server.DelMailInfo = function (AddressID) {
    /// <summary>添加注释。</summary>
};
Server.EditMailMessage = function (AddressID,NewMailID,OldMailID,Recipient,RecipientCC,Subject,Body,Priority,HtmlFlag) {
    /// <summary>添加注释。</summary>
};
Server.NewMailMessage = function (Recipient,RecipientCC,Subject,Body,Priority,HtmlFlag) {
    /// <summary>NewMailMessage方法用于新建一个要发送的电子邮件。此方法需要FrontView智能平台配置电子邮件账号</summary>
    /// <param name="Recipient" type="string">指定邮件收件人的字符串。可以使用“;”分隔两个以上。</param>
    /// <param name="RecipientCC" type="string">指定邮件抄送人的字符串。</param>
    /// <param name="Subject" type="string">邮件主题的字符串。</param>
    /// <param name="Body" type="string">电子邮件正文的字符串。</param>
    /// <param name="Priority" type="string">电子邮件优先级（1—99）。</param>
    /// <param name="HtmlFlag" type="boolean">邮件正文是否为Html格式（true或false）。</param>
    /// <returns type="string">返回Handle 新建邮件的句柄。</returns>
};
Server.AddMailAttachment = function (MailID,AttendName,AttendType,Chunk) {
    /// <summary>AddMailAttachment方法用于为新建的电子邮件添加附件。</summary>
    /// <param name="MailID" type="string">新建邮件的句柄。</param>
    /// <param name="AttendName" type="string">添加附件的文件名称。</param>
    /// <param name="AttendType" type="string">添加附件的文件类型。</param>
    /// <param name="Chunk" type="string">添加附件的文件数据。</param>
    /// <returns type="string">返回电子邮件添加附件成功或失败。</returns>
};
Server.SendMailMessage = function (MailID) {
    /// <summary>SendMailMessage方法用于发送新建的电子邮件。</summary>
    /// <param name="MailID" type="string">新建邮件的句柄。</param>
    /// <returns type="string">返回发送电子邮件成功或失败。</returns>
};
Server.RecvMailMessage = function (AddressID) {
    /// <summary>添加注释。</summary>
};
Server.OpenMailInfo = function (MailID) {
    /// <summary>添加注释。</summary>
};
Server.DelAttachmentFile = function (MailID,AttachmentName) {
    /// <summary>添加注释。</summary>
};
Server.SetMailAdderss = function (MailAddress,MailName,TrustFlag) {
    /// <summary>添加注释。</summary>
};
Server.GetOPCValueTableJSON = function (OPCPathStartTime,EndTime) {
    /// <summary>添加注释。</summary>
};
Server.GetOPCValueDataJSON = function (OPCPath,StartTime,EndTime) {
    /// <summary>添加注释。</summary>
};
Server.GetOPCAlarmJSON = function (OPCPath,StartTime,EndTime) {
    /// <summary>添加注释。</summary>
};
Server.GetOPCValueTableXML = function (OPCPath, StartTime, EndTime) {
    /// <summary>添加注释。</summary>
};
Server.GetOPCValueDataXML = function (OPCPath, StartTime, EndTime) {
    /// <summary>添加注释。</summary>
};
Server.GetOPCAlarmXML = function (OPCPath, StartTime, EndTime) {
    /// <summary>添加注释。</summary>
};
Server.WriteXMLToDB = function (SQL) {
    /// <summary>WriteXMLToDB方法用于执行无记录集返回的SQL命令（如Insert、Update、Delete等），返回XML格式描述的操作结果信息。</summary>
    /// <param name="SQL" type="string">要执行的SQL命令语句或存储过程。</param>
    /// <returns type="string">返回XML格式描述的操作结果信息。</returns>
};
Server.WriteJSONToDB = function (SQL) {
    /// <summary>WriteJSONToDB方法用于执行无记录集返回的SQL命令（如Insert、Update、Delete等），返回JSON格式描述的操作结果信息。</summary>
    /// <param name="SQL" type="string">要执行的SQL命令语句或存储过程。</param>
    /// <returns type="string">返回执行SQL命令返回的记录集数据。</returns>
};
Server.ReadXMLFromDB = function (SQL) {
    /// <summary>ReadXMLFromDB方法用于执行返回式SQL命令（如Select 查询命令等），ReadXMLFromDB方法将根据记录集数据自动识别字段，XML格式描述的记录集数据。</summary>
    /// <param name="SQL" type="string">要执行的SQL命令语句或存储过程。</param>
    /// <returns type="string">返回执行SQL命令返回的记录集数据。</returns>
};
Server.ReadJSONFromDB = function (SQL) {
    /// <summary>ReadJSONFromDB方法用于执行返回式SQL命令（如Select 查询命令等），ReadJSONFromDB方法将根据记录集数据自动识别字段，JSON格式描述的记录集数据。</summary>
    /// <param name="SQL" type="string">要执行的SQL命令语句或存储过程。</param>
    /// <returns type="string">返回执行SQL命令返回的记录集数据。</returns>
};
Server.ReadVBSFromDB = function (SQL) {
    /// <summary>ReadVBSFromDB方法用于执行返回式SQL命令（如Select 查询命令等），ReadVBSFromDB方法将根据记录集数据自动识别字段，VBS格式描述的记录集数据。</summary>
    /// <param name="SQL" type="string">要执行的SQL命令语句或存储过程。</param>
    /// <returns type="string">返回执行SQL命令返回的记录集数据。</returns>
};
Server.ReadADOXMLFromDB = function (SQL) {
    /// <summary>添加注释。</summary>
};
Server.ExecuteSQL = function (SQL, DBID) {
    /// <summary>ExecuteSQL方法用于执行通用SQL命令执行方法，支持读写操作、多记录集返回。</summary>
    /// <param name="SQL" type="string">要执行的SQL命令语句或存储过程。</param>
    /// <param name="DBID" type="string">保留。必需填0。</param>
    /// <returns type="string">返回JSON格式描述的记录集数据。</returns>
};
Server.ExecuteSQLExt = function (SQL, ConnetName) {
    /// <summary>添加注释。</summary>
};
Server.NewAsyncPageTask = function (Path,Query) {
    /// <summary>NewAsyncPageTask方法从FWP 文件中启动执行异步一个FWP脚本任务。</summary>
    /// <param name="Path" type="string">必需。异步FWP 文件的位置。</param>
    /// <param name="Query" type="string">附加的脚本运行参数，如a=12.5&b=11.2。</param>
    /// <returns type="string">返回启动执行异步FWP文件返回成功或失败。</returns>
};
Server.ExecuteAsyncPageTask = function () {
    /// <summary>ExecuteAsyncPageTask方法执行并取回批量异步FWP脚本任务返回值。</summary>
    /// <returns type="string">返回启动执行异步FWP文件返回成功或失败。</returns>
};
Server.DebugPrint = function (DebugName,Chunk) {
    /// <summary>DebugPrint方法打印FWP脚本运行信息，输出到DbgView。</summary>
    /// <param name="DebugName" type="string">需要输出的调试信息类型字符串。</param>
    /// <param name="Chunk" type="string">需要输出的调试变量信息。</param>
    /// <returns type="string">执行返回成功或失败。</returns>
};
Server.SocketConnect = function (IPAddr,Port,TcpFlag) {
    /// <summary>SocketConnect方法用于创建Socket通讯连接。</summary>
    /// <param name="IPAddr" type="string">指定要连接的目标IP地址。</param>
    /// <param name="Port" type="string">指定要连接的目标通讯端口。</param>
    /// <param name="TcpFlag" type="string">指定要连接的通讯是否采用TCP协议。</param>
    /// <returns type="string">返回创建Socket通讯连接成功或失败。</returns>
};
Server.SendSocketText = function (Text) {
    /// <summary>SendSocketText方法用于发送Socket通讯数据。</summary>
    /// <param name="Text" type="string">发送的Socket通讯数据。</param>
    /// <returns type="string">返回发送Socket通讯成功或失败。</returns>
};
Server.ReadSocketText = function (TimeOut) {
    /// <summary>ReadSocketText方法用于接收Socket通讯数据。</summary>
    /// <param name="TimeOut" type="string">指定接收Socket通讯数据超时，单位为秒。</param>
    /// <returns type="string">返回接收的Socket通讯数据。</returns>
};
Server.CloseSocket = function () {
    /// <summary>CloseSocket方法用于关闭Socket通讯连接。</summary>
    /// <returns type="string">返回关闭Socket通讯连接成功或失败。</returns>
};
Server.ComputerCRC16 = function (Content,HexFlag) {
    /// <summary>ComputerCRC16方法用于按CRC16算法，计算指定内容摘要。</summary>
    /// <param name="Content" type="string">要计算摘要的字符串。</param>
    /// <param name="HexFlag" type="string">标识计算摘要的内容是否为十六进制字符串。</param>
    /// <returns type="string">返回执行计算的摘要值。</returns>
};
Server.ComputerCRC32 = function (Content, HexFlag) {
    /// <summary>ComputerCRC32方法用于按CRC32算法，计算指定内容摘要。</summary>
    /// <param name="Content" type="string">要计算摘要的字符串。</param>
    /// <param name="HexFlag" type="string">标识计算摘要的内容是否为十六进制字符串。</param>
    /// <returns type="string">返回执行计算的摘要值。</returns>
};
Server.ComputerFCS16 = function (Content, HexFlag) {
    /// <summary>ComputerFCS16方法用于按FCS16算法，计算指定内容摘要。</summary>
    /// <param name="Content" type="string">要计算摘要的字符串。</param>
    /// <param name="HexFlag" type="string">标识计算摘要的内容是否为十六进制字符串。</param>
    /// <returns type="string">返回执行计算的摘要值。</returns>
};
Server.ComputerFCS32 = function (Content, HexFlag) {
    /// <summary>ComputerFCS32方法用于按FCS32算法，计算指定内容摘要。</summary>
    /// <param name="Content" type="string">要计算摘要的字符串。</param>
    /// <param name="HexFlag" type="string">标识计算摘要的内容是否为十六进制字符串。</param>
    /// <returns type="string">返回执行计算的摘要值。</returns>
};
Server.ComputerMD2 = function (Content, HexFlag) {
    /// <summary>ComputerMD2方法用于按MD2算法，计算指定内容摘要。</summary>
    /// <param name="Content" type="string">要计算摘要的字符串。</param>
    /// <param name="HexFlag" type="string">标识计算摘要的内容是否为十六进制字符串。</param>
    /// <returns type="string">返回执行计算的摘要值。</returns>
};
Server.ComputerMD4 = function (Content, HexFlag) {
    /// <summary>ComputerMD4方法用于按MD4算法，计算指定内容摘要。</summary>
    /// <param name="Content" type="string">要计算摘要的字符串。</param>
    /// <param name="HexFlag" type="string">标识计算摘要的内容是否为十六进制字符串。</param>
    /// <returns type="string">返回执行计算的摘要值。</returns>
};
Server.ComputerMD5 = function (Content, HexFlag) {
    /// <summary>ComputerMD5方法用于按MD5算法，计算指定内容摘要。</summary>
    /// <param name="Content" type="string">要计算摘要的字符串。</param>
    /// <param name="HexFlag" type="string">标识计算摘要的内容是否为十六进制字符串。</param>
    /// <returns type="string">返回执行计算的摘要值。</returns>
};
Server.ComputerSHA1 = function (Content, HexFlag) {
    /// <summary>ComputerSHA1方法用于按CRC16算法，计算指定内容摘要。</summary>
    /// <param name="Content" type="string">要计算摘要的字符串。</param>
    /// <param name="HexFlag" type="string">标识计算摘要的内容是否为十六进制字符串。</param>
    /// <returns type="string">返回执行计算的摘要值。</returns>
};
Server.ComputerSHA256 = function (Content, HexFlag) {
    /// <summary>ComputerSHA256方法用于按CRC16算法，计算指定内容摘要。</summary>
    /// <param name="Content" type="string">要计算摘要的字符串。</param>
    /// <param name="HexFlag" type="string">标识计算摘要的内容是否为十六进制字符串。</param>
    /// <returns type="string">返回执行计算的摘要值。</returns>
};
Server.ComputerSHA384 = function (Content, HexFlag) {
    /// <summary>ComputerSHA384方法用于按CRC16算法，计算指定内容摘要。</summary>
    /// <param name="Content" type="string">要计算摘要的字符串。</param>
    /// <param name="HexFlag" type="string">标识计算摘要的内容是否为十六进制字符串。</param>
    /// <returns type="string">返回执行计算的摘要值。</returns>
};
Server.ComputerSHA512 = function (Content, HexFlag) {
    /// <summary>ComputerSHA512方法用于按CRC16算法，计算指定内容摘要。</summary>
    /// <param name="Content" type="string">要计算摘要的字符串。</param>
    /// <param name="HexFlag" type="string">标识计算摘要的内容是否为十六进制字符串。</param>
    /// <returns type="string">返回执行计算的摘要值。</returns>
};
Server.UploadAttachmentExt = function (AttendPath,AttendName,Chunk,ChunkIndex) {
    /// <summary>添加注释。</summary>
};
Server.UploadAttachment = function (AttendPath,AttendName,Chunk) {
    /// <summary>UploadAttachment方法用于上传附件到指定目录。</summary>
    /// <param name="AttendPath" type="string">指定上传的目录。</param>
    /// <param name="AttendName" type="string">指定上传的文件。</param>
    /// <param name="Chunk" type="string">上传附件数据。</param>
    /// <returns type="string">返回上传附件成功或失败。</returns>
};
Server.DeleteAttachment = function (AttendPath,AttendName) {
    /// <summary>DeleteAttachment方法用于删除指定目录的文件。</summary>
    /// <param name="AttendPath" type="string">指定上传的目录。</param>
    /// <param name="AttendName" type="string">指定上传的文件。</param>
    /// <returns type="string">返回删除文件成功或失败。</returns>
};
Server.UnzipAttachment = function (FileName) {
    /// <summary>添加注释。</summary>
};
Server.ListDir = function (CurrentDir,Filter) {
    /// <summary>ListDir方法用于遍历指定目录的文件信息。</summary>
    /// <param name="CurrentDir" type="string">指定遍历的目录。</param>
    /// <param name="Filter" type="string">遍历过滤选项。默认为*。</param>
    /// <returns type="string">返回JSON格式描述的文件信息。</returns>
};
Server.CreateDir = function (CurrentDir) {
    /// <summary>CreateDir方法用于创建新的指定目录。</summary>
    /// <param name="CurrentDir" type="string">创建新的指定目录。</param>
    /// <returns type="string">返回执行创建目录成功或失败。</returns>
};
Server.DeleteDir = function (CurrentDir) {
    /// <summary>CreateDir方法用于删除指定的目录。</summary>
    /// <param name="CurrentDir" type="string">指定删除的目录。</param>
    /// <returns type="string">返回执行删除目录成功或失败。</returns>
};
Server.GetImageSize = function (FileName) {
    /// <summary>GetImageSize方法用于获取图片尺寸信息。</summary>
    /// <param name="FileName" type="string">图片文件路径的字符串。</param>
    /// <returns type="string">返回JSON格式描述的图片尺寸信息。</returns>
};
Server.CreateImageThumbs = function (CurrentDir,Width) {
    /// <summary>添加注释。</summary>
};
Server.ReadTextFile = function (FileName) {
    /// <summary>ReadTextFile方法用于读取服务器上的文本类型文件，如XML或JSON格式的文件。</summary>
    /// <param name="FileName" type="string">文本文件路径的字符串。</param>
    /// <returns type="string">返回文本内容字符串。</returns>
};
Server.WriteTextFile = function (FileName,Content) {
    /// <summary>WriteTextFile方法用于在服务器上写入文本文件，如XML或JSON格式的文件。</summary>
    /// <param name="FileName" type="string">文本文件路径的字符串。</param>
    /// <param name="Content" type="string">文本文件内容的字符串。</param>
    /// <returns type="string">返回操作成功或失败。</returns>
};
Server.WriteUtf8TextFile = function (FileName, Content) {
    /// <summary>添加注释。</summary>
};

Server.WaitingSingleEvent = function (SingleName,TimeOut) {
    /// <summary>添加注释。</summary>
};
Server.ReleaseSingleEvent = function (SingleName) {
    /// <summary>添加注释。</summary>
};

Server.GetLEDScreenXML = function () {
    /// <summary>GetLEDScreenXML方法用于获取LED屏XML格式描述的列表信息。</summary>
    /// <returns type="string">返回LED屏XML格式描述的列表信息。</returns>
};
Server.GetLEDScreenJSON = function () {
    /// <summary>GetLEDScreenJSON方法用于获取LED屏JSON格式描述的列表信息。</summary>
    /// <returns type="string">返回LED屏JSON格式描述的列表信息。</returns>
};
Server.OpenLEDScreen = function (CardNum) {
    /// <summary>OpenLEDScreen方法用于远程打开指定LED屏。</summary>
    /// <param name="CardNum" type="string">LED屏控制卡号。</param>
    /// <returns type="boolean">返回True或False。</returns>
};
Server.CloseLEDScreen = function (CardNum) {
    /// <summary>OpenLEDScreen方法用于远程关闭指定LED屏。</summary>
    /// <param name="CardNum" type="string">LED屏控制卡号。</param>
    /// <returns type="boolean">返回True或False。</returns>
};
Server.PublishLEDScreen = function (CardNum,Height,Width,FontSize,AlignStyle,RowSpace,HoldTime,ActionType,ActionSpeed,Content,CoverFlag) {
    /// <summary>OpenLEDScreen方法用于远程关闭指定LED屏。</summary>
    /// <param name="CardNum" type="string">LED屏控制卡号。</param>
    /// <param name="Height" type="string">LED屏信息显示的点阵高度。</param>
    /// <param name="Width" type="string">LED屏信息显示的点阵宽度。</param>
    /// <param name="FontSize" type="string">LED屏信息显示的字体大小。</param>
    /// <param name="AlignStyle" type="string">LED屏信息显示的对齐方式。具体值表示：0——左对齐 1——居中 2——右对齐。</param>
    /// <param name="RowSpace" type="string">LED屏信息显示的行间距（一般为0）。</param>
    /// <param name="HoldTime" type="string">一幅LED屏信息显示停留时间（单位为秒）。</param>
    /// <param name="ActionType" type="string">一幅LED屏信息显示出现的方式（0——33）0—随机 1—翻页 2 － 左覆盖3 － 右覆盖4 － 上覆盖5 － 下覆盖6 － 左上角覆盖(直线)7 － 右上角覆盖(直线)8 － 左下角覆盖(直线)9 － 右下角覆盖(直线)10 － 左上角覆盖(斜线)11 － 右上角覆盖(斜线)12 － 左下角覆盖(斜线)13 － 右下角覆盖(斜线)14 － 水平百叶15 － 垂直百叶16 － 左右对开17 － 上下对开18 － 左右闭合19 － 上下闭合20 － 左移21 － 右移22 － 上移23 － 下移24 － 左上角移25 － 右上角移26 － 左下角移27 － 右下角移28 － 中间向四周(矩形)29 － 四周向中间(矩形)30 － 中间向四周(菱形)31 － 四周向中间(菱形)32 － 中间向四周(十字)33 － 四周向中间(十字)。</param>
    /// <param name="ActionSpeed" type="string">LED屏控制卡号。</param>
    /// <param name="Content" type="string">LED屏控制卡号。</param>
    /// <param name="CoverFlag" type="string">LED屏控制卡号。</param>
    /// <returns type="boolean">返回True或False。</returns>
};
    //
Server.AddOPCGroupItem = function (ParentFullPath, GroupName, GroupTag, ApplyFlag) {
    /// <summary>AddOPCGroupItem方法用于动态添加设备分组信息。</summary>
    /// <param name="ParentFullPath" type="string">添加设备分组的父级路径的字符串，顶层父节点使用工程标签。</param>
    /// <param name="GroupName" type="string">添加设备分组的名称。</param>
    /// <param name="GroupTag" type="string">添加设备分组的标签。</param>
    /// <param name="ApplyFlag" type="string">是否立即生效,批量添加时建议最后一条记录设置成true。</param>
    /// <returns type="string">失败返回0，否则返回添加设备分组的内部ID。</returns>
};
Server.SetOPCGroupName = function (GroupFullPath, GroupName) {
    /// <summary>SetOPCGroupName方法用于动态修改设备分组名称信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="GroupName" type="string">修改设备分组的名称。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupTag = function (GroupFullPath,GroupTag) {
    /// <summary>SetOPCGroupTag方法用于动态修改设备分组标签信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="GroupTag" type="string">修改设备分组的标签。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupNO = function (GroupFullPath,GroupNO) {
    /// <summary>SetOPCGroupNO方法用于动态修改设备分组编号信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="GroupNO" type="string">修改设备分组的编号。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupOrganize = function (GroupFullPath,Organize) {
    /// <summary>SetOPCGroupOrganize方法用于动态修改设备分组组织信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="Organize" type="string">修改设备分组的组织。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupUnit = function (GroupFullPath,Unit) {
    /// <summary>SetOPCGroupUnit方法用于动态修改设备分组单位信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="Unit" type="string">修改设备分组的单位。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupCountry = function (GroupFullPath,Country) {
    /// <summary>SetOPCGroupCountry方法用于动态修改设备分组国家名称信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="Country" type="string">修改设备分组的国家名称。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupProvince = function (GroupFullPath,Province) {
    /// <summary>SetOPCGroupProvince方法用于动态修改设备分组省份信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="Province" type="string">修改设备分组的省份。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupPhoneNum = function (GroupFullPath,PhoneNum) {
    /// <summary>SetOPCGroupPhoneNum方法用于动态修改设备分组联系电话信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="PhoneNum" type="string">修改设备分组的联系电话。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupAddres = function (GroupFullPath,Address) {
    /// <summary>SetOPCGroupAddres方法用于动态修改设备分组地址信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="Address" type="string">修改设备分组的地址。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupInfo = function (GroupFullPath,Info) {
    /// <summary>SetOPCGroupInfo方法用于动态修改设备分组备注信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="Info" type="string">修改设备分组的备注。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupVodPath = function (GroupFullPath,VodPath) {
    /// <summary>SetOPCGroupVodPath方法用于动态修改设备分组监控画面信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="VodPath" type="string">修改设备分组的监控画面。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupLongitude = function (GroupFullPath,longitude) {
    /// <summary>SetOPCGroupLongitude方法用于动态修改设备分组经度信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="longitude" type="string">修改设备分组的经度。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupLatitude = function (GroupFullPath,latitude) {
    /// <summary>SetOPCGroupLatitude方法用于动态修改设备分组纬度信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="longitude" type="string">修改设备分组的纬度。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupAltiyude = function (GroupFullPath,altiyude) {
    /// <summary>SetOPCGroupLatitude方法用于动态修改设备分组纬度信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="altiyude" type="string">修改设备分组的高程。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCGroupSpeed = function (GroupFullPath,speed) {
    /// <summary>SetOPCGroupSpeed方法用于动态修改设备分组速度信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="speed" type="string">修改设备分组的速度。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.DelOPCGroupItem = function (GroupFullPath,ApplyFlag) {
    /// <summary>SetOPCGroupSpeed方法用于动态修改设备分组速度信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="GroupFullPath" type="string">指定设备分组路径的字符串。</param>
    /// <param name="ApplyFlag" type="string">是否立即生效,批量添加时建议最后一条记录设置成true。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.ReloadOPCGroupMap = function () {
    /// <summary>ReloadOPCGroupMap方法用于重新加载设备分组信息。</summary>
    /// <returns type="string">返回成功或失败。</returns>
};
	//
Server.AddOPCNodeItem = function (GroupFullPath,NodeName,NodeTag,DTUNO,TypeNO,STNO,ApplyFlag) {
    /// <summary>AddOPCNodeItem方法用于动态添加设备节点信息。</summary>
    /// <param name="GroupFullPath" type="string">添加设备节点的父级路径的字符串。</param>
    /// <param name="NodeName" type="string">添加设备节点的名称。</param>
    /// <param name="NodeTag" type="string">添加设备节点的标签。</param>
    /// <param name="DTUNO" type="string">添加设备节点的智能网关标识。</param>
    /// <param name="TypeNO" type="string">添加设备节点的设备模板标识。</param>
    /// <param name="STNO" type="string">添加设备节点的通讯站号。</param>
    /// <param name="ApplyFlag" type="string">是否立即生效,批量添加时建议最后一条记录设置成true。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeName = function (NodeFullPath,NodeName) {
    /// <summary>SetOPCNodeName方法用于动态修改设备节点名称信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="NodeName" type="string">修改设备节点的名称。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeTag = function (NodeFullPath,NodeTag) {
    /// <summary>SetOPCNodeTag方法用于动态修改设备节点标签信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="NodeTag" type="string">修改设备节点的标签。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeNO = function (NodeFullPath,NodeNO) {
    /// <summary>SetOPCNodeNO方法用于动态修改设备节点编号信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="NodeNO" type="string">修改设备节点的编号。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeDTUNO = function (NodeFullPath,DTUNO) {
    /// <summary>SetOPCNodeNO方法用于动态修改设备节点编号信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="DTUNO" type="string">修改设备节点的智能网关标识。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeTypeNO = function (NodeFullPath,TypeNO) {
    /// <summary>SetOPCNodeTypeNO方法用于动态修改设备节点设备模板标识信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="TypeNO" type="string">修改设备节点的设备模板标识。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeSTNO = function (NodeFullPath,STNO) {
    /// <summary>SetOPCNodeSTNO方法用于动态修改设备节点通讯站号信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="STNO" type="string">修改设备节点的通讯站号。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeAddress = function (NodeFullPath,Address) {
    /// <summary>SetOPCNodeAddress方法用于动态修改设备节点安装地址信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="Address" type="string">修改设备节点的安装地址。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeUserPhone = function (NodeFullPath,UserPhone) {
    /// <summary>SetOPCNodeUserPhone方法用于动态修改设备节点用户电话信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="UserPhone" type="string">修改设备节点的用户电话。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeServicePhone = function (NodeFullPath,ServicePhone) {
    /// <summary>SetOPCNodeServicePhone方法用于动态修改设备节点维修电话信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="ServicePhone" type="string">修改设备节点的维修电话。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeInfo = function (NodeFullPath,Info) {
    /// <summary>SetOPCNodeInfo方法用于动态修改设备节点备注信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="Info" type="string">修改设备节点的备注。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeVodPath = function (NodeFullPath,VodPath) {
    /// <summary>SetOPCNodeVodPath方法用于动态修改设备节点监控画面信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="VodPath" type="string">修改设备节点的监控画面。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeLongitude = function (NodeFullPath,longitude) {
    /// <summary>SetOPCNodeLongitude方法用于动态修改设备节点经度信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="longitude" type="string">修改设备节点的经度。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeLatitude = function (NodeFullPath,latitude) {
    /// <summary>SetOPCNodeLatitude方法用于动态修改设备节点纬度信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="latitude" type="string">修改设备节点的纬度。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeAltiyude = function (NodeFullPath,altiyude) {
    /// <summary>SetOPCNodeAltiyude方法用于动态修改设备节点高程信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="altiyude" type="string">修改设备节点的高程。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCNodeSpeed = function (NodeFullPath,speed) {
    /// <summary>SetOPCNodeSpeed方法用于动态修改设备节点速度信息，此方法不立刻生效，需调用ReloadOPCGroupMap方法。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="speed" type="string">修改设备节点的速度。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.DelOPCNodeItem = function (NodeFullPath,ApplyFlag) {
    /// <summary>DelOPCNodeItem方法用于动态删除设备节点信息。</summary>
    /// <param name="NodeFullPath" type="string">指定设备节点路径的字符串。</param>
    /// <param name="ApplyFlag" type="string">修改设备节点的安装地址。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
	//
Server.AddOPCOrganizeItem = function (ParentFullPath,OrganizeName,OrganizeNO,ApplyFlag) {
    /// <summary>AddOPCOrganizeItem方法用于动态添加组织机构信息。</summary>
    /// <param name="ParentFullPath" type="string">添加组织机构的父级路径的字符串，顶层父节点使用“”。</param>
    /// <param name="OrganizeName" type="string">添加组织机构的名称。</param>
    /// <param name="OrganizeNO" type="string">添加组织机构的代码。</param>
    /// <param name="ApplyFlag" type="string">是否立即生效,批量添加时建议最后一条记录设置成true。</param>
    /// <returns type="string">失败返回0，否则返回添加组织机构的内部ID。</returns>
};
Server.SetOPCOrganizeName = function (OrganizeFullPath,OrganizeName) {
    /// <summary>SetOPCOrganizeName方法用于动态修改组织机构名称信息，此方法不立刻生效，需调用ReloadOPCOrganizeMap方法。</summary>
    /// <param name="OrganizeFullPath" type="string">指定组织机构路径的字符串。</param>
    /// <param name="OrganizeName" type="string">修改组织机构的名称。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCOrganizeNO = function (OrganizeFullPath,OrganizeNO) {
    /// <summary>SetOPCOrganizeNO方法用于动态修改组织机构代码信息，此方法不立刻生效，需调用ReloadOPCOrganizeMap方法。</summary>
    /// <param name="OrganizeFullPath" type="string">指定组织机构路径的字符串。</param>
    /// <param name="OrganizeNO" type="string">修改组织机构代码。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCOrganizeUser = function (OrganizeFullPath,User) {
    /// <summary>SetOPCOrganizeUser方法用于动态修改组织机构组织信息，此方法不立刻生效，需调用ReloadOPCOrganizeMap方法。</summary>
    /// <param name="OrganizeFullPath" type="string">指定组织机构路径的字符串。</param>
    /// <param name="User" type="string">修改组织机构的负责人。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCOrganizeEMail = function (OrganizeFullPath,EMail) {
    /// <summary>SetOPCOrganizeEMail方法用于动态修改组织机构电子邮件信息，此方法不立刻生效，需调用ReloadOPCOrganizeMap方法。</summary>
    /// <param name="OrganizeFullPath" type="string">指定组织机构路径的字符串。</param>
    /// <param name="EMail" type="string">修改组织机构的电子邮件。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCOrganizeHomePage = function (OrganizeFullPath,HomePage) {
    /// <summary>SetOPCOrganizeHomePage方法用于动态修改组织机构网站信息，此方法不立刻生效，需调用ReloadOPCOrganizeMap方法。</summary>
    /// <param name="OrganizeFullPath" type="string">指定组织机构路径的字符串。</param>
    /// <param name="HomePage" type="string">修改组织机构的网站。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCOrganizePhoneNum = function (OrganizeFullPath,PhoneNum) {
    /// <summary>SetOPCOrganizePhoneNum方法用于动态修改组织机构电话信息，此方法不立刻生效，需调用ReloadOPCOrganizeMap方法。</summary>
    /// <param name="OrganizeFullPath" type="string">指定组织机构路径的字符串。</param>
    /// <param name="PhoneNum" type="string">修改组织机构的电话。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.SetOPCOrganizeAddres = function (OrganizeFullPath,Address) {
    /// <summary>SetOPCOrganizeAddres方法用于动态修改组织机构地址信息，此方法不立刻生效，需调用ReloadOPCOrganizeMap方法。</summary>
    /// <param name="OrganizeFullPath" type="string">指定组织机构路径的字符串。</param>
    /// <param name="Address" type="string">修改组织机构的地址。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.DelOPCOrganizeItem = function (OrganizeFullPath,ApplyFlag) {
    /// <summary>DelOPCOrganizeItem方法用于动态删除组织机构信息，此方法必须删除相关子节点才能成功调用。</summary>
    /// <param name="OrganizeFullPath" type="string">指定组织机构路径的字符串。</param>
    /// <param name="ApplyFlag" type="string">是否立即生效,批量添加时建议最后一条记录设置成true。</param>
    /// <returns type="string">返回成功或失败。</returns>
};
Server.ReloadOPCOrganizeMap = function () {
    /// <summary>ReloadOPCOrganizeMap方法用于重新加载组织机构信息。</summary>
    /// <returns type="string">返回成功或失败。</returns>
};

Server.GetImageBase64 = function (ImageData) {
    /// <summary>用于对图片数据BASE64编码</summary>
    /// <returns type="string">返回BASE64编码字符串。</returns>
};
/*************************************************************************
*
*			Session 对象的接口
*
**************************************************************************/
var Session = {};

Session.CodePage = 0;
Session.LCID = 0;
Session.SessionID = "";
Session.Timeout = 90;

Session.Contents = function (key) {
    /// <summary>Contents 集合包含着通过脚本命令添加到 application/session 的所有项目。</summary>
    /// <param name="key" type="string">必需。要取回的项目的名称。</param>
};

Session.StaticObjects = function (key) {
    /// <summary>StaticObjects 集合包含所有使用 HTML 的 <object> 标签追加到 application/session 的对象。</summary>
    /// <param name="key" type="string">必需。要取回的项目的名称。</param>
};

Session.Abandon = function () {
    /// <summary>撤销一个用户的 session。</summary>
};

Session.Remove = function (sessionID) {
    /// <summary>HA使用时，移除指定会话</summary>
    /// <param name="sessionID" type="string">必需。会话ID。</param>
};

Session.RemoveAll = function () {
    /// <summary>HA使用时，移除所有会话</summary>
};

/*************************************************************************
*
*			Date 对象的扩展
*
**************************************************************************/
Date.Format = function (patrn) {
    /// <summary>格式化时间为字符串</summary>
    /// <param name="patrn" type="string">必需。例如："yyyy-MM-dd hh:mm:ss",其中M表示月，d表示日，h表示小时，m表示分钟，s表示秒，q表示季度，S表示毫秒</param>
    /// <returns type="string">返回对应格式时间</returns>
}

Date.DateAdd = function (interval, number) {
    /// <summary>计算时间偏移,例如:var tc = now.DateAdd("y",1);</summary>
    /// <param name="interval" type="string">必需。y表示年，m表示年，d表示日，w表示周，h表示小时，n表示分钟，s表示秒，l表示毫秒</param>
    /// <param name="number" type="int">必需。可以为负值</param>
    /// <returns type="datetime">返回时间对象</returns>
}

/*************************************************************************
*
*			核心扩展API全局命名空间
*
**************************************************************************/
var FWP = {};
/*************************************************************************
*
*			定义命名空间的方法
*
**************************************************************************/
FWP.namespace = function (ns) {
    /// <summary>自定义命名空间</summary>
    /// <param name="ns" type="string">必需。例如：Jiangnan.EMS</param>
    /// <returns type="object">返回命名空间对象</returns>
};

FWP.ns = FWP.namespace;

/*************************************************************************
*
*			继承对象类型的方法
*
**************************************************************************/
FWP.extend = function (subc, superc, overrides) {
    /// <summary>继承，并由传递的值决定是否覆盖原对象的属性 </summary>
    /// <param name="subc" type="Object">必需。用于继承（该类继承了父类所有属性，并最终返回该对象）</param>
    /// <param name="superc" type="Object">必需。父类，被继承</param>
    /// <param name="overrides" type="Object">可选; 一个对象，将它本身携带的属性对子类进行覆盖</param>
};

/*************************************************************************
*
*			JSON处理的方法（encode，decode，toDate）
*
**************************************************************************/
FWP.JSON = new function () {
    this.errorCode = 0;
    this.errorText = "";

    this.decode = function (input) {
        /// <summary>解析JSON格式字符串</summary>
        /// <param name="input" type="string">必需。例如：'[1,2,3]'</param>
        /// <returns type="object">返回JSON对象数据</returns>
    };

    this.encode = function (o) {
        /// <summary>序列化JSON对象数据为字符串</summary>
        /// <param name="o" type="object">必需。例如：[1,2,3]</param>
        /// <returns type="string">返回JSON格式字符串</returns>
    };

    this.toDate = function (d) {
        /// <summary>解析JSON对象中时间字符串数据</summary>
        /// <param name="d" type="string">必需。例如："2007-04-05T08:36:46"</param>
        /// <returns type="date">返回时间类型数据</returns>
    };
};

/*****************************************************************************************
*
*			SOAP协议辅助处理的方法（parseResquest,getSoapMethod or getSoapParameters
*                                  or getSoapParamArr or getSoapResponse or makeResponse）
*
*******************************************************************************************/
FWP.SOAP = new function () {
    this.errorCode = -1;
    this.errorText = "";
    this.xmlObj = null;

    this.parseResquest = function (xml) {
        /// <summary>解析SOAP协议请求XML</summary>
        /// <param name="xml" type="string">必需。例如：var soapRequestXml = Request.Read();</param>
        /// <returns type="object">返回SOAP协议解析器对象</returns>
    }

    this.getSoapMethod = function () {
        /// <summary>获取当前SOAP协议请求的方法</summary>
        /// <returns type="string">返回SOAP请求的方法名</returns>
    };

    this.getSoapParameters = function (parameterName) {
        /// <summary>获取当前SOAP协议请求的参数值</summary>
        /// <returns type="var">返回SOAP请求的参数值</returns>
    };

    this.getSoapParamArr = function () {
        /// <summary>获取当前SOAP协议请求的参数名列表</summary>
        /// <returns type="Array">返回SOAP请求的参数名列表数组</returns>
    };

    this.makeResponse = function (resultValue) {
        /// <summary>生成SOAP协议响应XML</summary>
        /// <param name="xml" type="var">必需。响应返回值</param>
        /// <returns type="string">返回SOAP协议解析器对象</returns>
    };

    return this;
};

/*****************************************************************************************
*
*			扩展方法工具包
*
*******************************************************************************************/
FWP.Utils = new function () {
    /* Section: Methods - Public */
    /**
    * Determines wheather or not the provided object is an array.
    * @method isArray
    * @param {any} o The object being testing
    * @return {boolean} the result
    */
    this.isArray = function (o) {
        return OP.toString.apply(o) === ARRAY_TOSTRING;
    };

    /**
    * Determines whether or not the provided object is a boolean
    * @method isBoolean
    * @param {any} o The object being testing
    * @return {boolean} the result
    */
    this.isBoolean = function (o) {
        return typeof o === 'boolean';
    };

    /**
    * Determines whether or not the provided object is a function.
    * Note: Internet Explorer thinks certain functions are objects:
    *
    * var obj = document.createElement("object");
    * YAHOO.lang.isFunction(obj.getAttribute) // reports false in IE
    *
    * var input = document.createElement("input"); // append to body
    * YAHOO.lang.isFunction(input.focus) // reports false in IE
    *
    * You will have to implement additional tests if these functions
    * matter to you.
    *
    * @method isFunction
    * @param {any} o The object being testing
    * @return {boolean} the result
    */
    this.isFunction = function (o) {
        return (typeof o === 'function') || OP.toString.apply(o) === FUNCTION_TOSTRING;
    };

    /**
    * Determines whether or not the provided object is null
    * @method isNull
    * @param {any} o The object being testing
    * @return {boolean} the result
    */
    this.isNull = function (o) {
        return o === null;
    };

    /**
    * Determines whether or not the provided object is a legal number
    * @method isNumber
    * @param {any} o The object being testing
    * @return {boolean} the result
    */
    this.isNumber = function (o) {
        return typeof o === 'number' && isFinite(o);
    };

    /**
    * Determines whether or not the provided object is of type object
    * or function
    * @method isObject
    * @param {any} o The object being testing
    * @return {boolean} the result
    */
    this.isObject = function (o) {
        return (o && (typeof o === 'object' || this.isFunction(o))) || false;
    };

    /**
    * Determines whether or not the provided object is a string
    * @method isString
    * @param {any} o The object being testing
    * @return {boolean} the result
    */
    this.isString = function (o) {
        return typeof o === 'string';
    };

    this.isUndefined = function (o) {
        return typeof o === 'undefined';
    };

    /**
    * Returns a string without any leading or trailing whitespace.  If
    * the input is not a string, the input will be returned untouched.
    * @method trim
    * @since 2.3.0
    * @param s {string} the string to trim
    * @return {string} the trimmed string
    */
    this.trim = function (s) {
        try {
            return s.replace(/^\s+|\s+$/g, "");
        } catch (e) {
            return s;
        }
    };

    /**
    * A convenience method for detecting a legitimate non-null value.
    * Returns false for null/undefined/NaN, true for other values,
    * including 0/false/''
    * @method isValue
    * @since 2.3.0
    * @param o {any} the item to test
    * @return {boolean} true if it is not null/undefined/NaN || false
    */
    this.isValue = function (o) {
        // return (o || o === false || o === 0 || o === ''); // Infinity fails
        return (this.isObject(o) || this.isString(o) || this.isNumber(o) || this.isBoolean(o));
    };

    //校验是否全由数字组成 
    this.isDigit = function (s) {
        var patrn = /^[0-9]{1,20}$/;
        if (!patrn.exec(s))
            return false;

        return true;
    }

    //校验密码：只能输入6-20个字母、数字、下划线  
    this.isPasswd = function (s) {
        var patrn = /^(\w){6,20}$/;
        if (!patrn.exec(s))
            return false;
        return true;
    }

    //校验普通电话、传真号码：可以“+”开头，除数字外，可含有“-”  
    this.isTel = function (s) {
        var patrn = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
        if (!patrn.exec(s))
            return false;
        return true;
    }

    //校验手机号码：必须以数字开头，除数字外，可含有“-”  
    this.isMobil = function (s) {
        var patrn = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
        if (!patrn.exec(s))
            return false;
        return true;
    }


    this.isIPAddr = function (s) //by zergling  
    {
        var patrn = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/;
        if (!patrn.exec(s))
            return false;
        return true;
    }
    /*
    Method: parseDate
    transforms a encoded Date string into a native Date object.
	
    Arguments:
    [String/Number] - Optional Date string or server time if this method is not a String prototype. Server time should be an integer, based on seconds since 1970/01/01 or milliseconds / 1000 since 1970/01/01.
	
    Returns:
    Date - Date object or undefined if string is not a valid Date
	
    Example [Basic]:
    >var	serverDate = Utils.parseDate("2007-04-05 08:36:46");
    >alert(serverDate.getMonth());	// 3 (months start from 0)

    */

    this.parseDate = function (strTime) {
        /// <summary>将字符串转换成时间类型</summary>
        /// <param name="strTime" type="string or number">必需。时间字符串或1970-1-1以来的秒值</param>
        /// <returns type="date">返回时间对象</returns>
    };

    this.encode64 = function (input) {
        /// <summary>Base64编码</summary>
        /// <param name="input" type="string">必需。需要编码的内容</param>
        /// <returns type="string">返回编码后的字符串</returns>
    };

    this.decode64 = function (input) {
        /// <summary>Base64解码</summary>
        /// <param name="input" type="string">必需。需要解码的内容</param>
        /// <returns type="string">返回解码后的字符串</returns>
    };
    this.formatNumber = function (num, pattern) {
        /// <summary>数字对象的格式化</summary>
        /// <param name="num" type="num">必需。格式化数字</param>
        /// <param name="pattern" type="pattern">必需。如 #,###.##  0.###</param>
        /// <returns type="string">返回数据的格式化字符串</returns>
    };

    this.xmlToJson = function (xml) {
    };
};

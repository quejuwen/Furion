﻿// -----------------------------------------------------------------------------
// Fur 是 .NET 5 平台下企业应用开发最佳实践框架。
// Copyright © 2020 Fur, Baiqian Co.,Ltd.
//
// 框架名称：Fur
// 框架作者：百小僧
// 框架版本：1.0.0-rc.final.15
// 官方网站：https://chinadot.net
// 源码地址：Gitee：https://gitee.com/monksoul/Fur
// 				    Github：https://github.com/monksoul/Fur
// 开源协议：Apache-2.0（http://www.apache.org/licenses/LICENSE-2.0）
// -----------------------------------------------------------------------------

using Fur.ConfigurableOptions;

namespace Fur.FriendlyException
{
    /// <summary>
    /// 异常配置选项，最优的方式是采用后期配置，也就是所有异常状态码先不设置（推荐）
    /// </summary>
    [OptionsSettings("ErrorCodeMessageSettings")]
    public sealed class ErrorCodeMessageSettingsOptions : IConfigurableOptions
    {
        /// <summary>
        /// 异常状态码配置列表
        /// </summary>
        public object[][] Definitions { get; set; }
    }
}
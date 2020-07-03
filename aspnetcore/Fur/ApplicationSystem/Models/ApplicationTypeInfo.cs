﻿using System;
using System.Collections.Generic;
using System.Reflection;

namespace Fur.ApplicationSystem.Models
{
    /// <summary>
    /// 应用类型信息类
    /// </summary>
    public sealed class ApplicationTypeInfo
    {
        /// <summary>
        /// 所属程序集
        /// </summary>
        public Assembly Assembly { get; set; }

        /// <summary>
        /// 类型
        /// </summary>
        public Type Type { get; set; }

        /// <summary>
        /// 类型公开实例方法
        /// </summary>
        public IEnumerable<ApplicationMethodInfo> PublicInstanceMethods { get; set; }

        /// <summary>
        /// 类型自定义特性
        /// </summary>
        public IEnumerable<Attribute> CustomAttributes { get; set; }

        /// <summary>
        /// 是否是泛型类型
        /// </summary>
        public bool IsGenericType { get; set; }

        /// <summary>
        /// 泛型类型参数
        /// </summary>
        public IEnumerable<Type> GenericArguments { get; set; }

        /// <summary>
        /// 是否控制器类型
        /// </summary>
        public bool IsControllerType { get; set; }

        /// <summary>
        /// Swagger 文档分组
        /// </summary>
        public string[] SwaggerGroups { get; set; }

        /// <summary>
        /// 是否静态类型
        /// </summary>
        public bool IsStaticType { get; set; }

        /// <summary>
        /// 能够被创建的类型
        /// </summary>
        public bool CanNewType { get; set; }
    }
}
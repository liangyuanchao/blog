function serializeToJson(form) {
    var result = {};
        // serializeArray() 方法时jq提供的获取到表单用户输入的内容
        // 把表单数据变为这样的格式 [{name: 'email', value: '用户输入的内容'}]
    var f = $(form).serializeArray();
    f.forEach(function (item) {
        result[item.name] = item.value;
    });
    return result;
}
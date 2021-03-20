// 登录
(function(){
    // 也可以使用querySelector
    var btnLogin = document.getElementById('btn-login');
    btnLogin.onclick = function(){
        var loginModel = new Model({
            el: 'login-model',
            width: 500,             
            height: 400,
            onOk: function(){ //onOk也在这里也行
                alert('haha');
            }
        });
        return false; //阻止a标签的默认跳转行为
    };

})();


// 轮播图
(function(){
    
})();
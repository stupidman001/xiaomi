var Model = (function(){
    /**
     * 合并obj对象中的属性到target对象中
     * @param target 目标对象
     * @param obj 要合并的对象
     * @returns 合并后的对象
     */
    function extend(target, obj){
        for(var p in obj){
            if(typeof obj[p] == 'object'){
                target[p] = extend({}, obj[p]);
            }else{
                target[p] = obj[p];
            }
        }
        return target;
    }
    // 模态框类
    function Model(options){
        // 合并参数
        this.settings = extend( {
            width: 600,
            height: 400
        }, options);

        // 初始化dom
        this.holder = document.getElementById(this.settings.el);
        this.holder.style.display = 'block';

        this.btnClose = this.holder.getElementsByClassName('close')[0];
        var that = this;
        this.btnClose.onclick = function(){
            that.close();
        };

        this.btnOk = this.holder.getElementsByClassName('ok')[0];
        // 点击确定按钮要执行的操作
        this.btnOk.onclick = function(){
            that.settings.onOk();
        };
    }
    Model.prototype.close = function(){
        this.holder.style.display = 'none';
    };
    Model.prototype.onOk = function(){

    };


    return Model;
})();
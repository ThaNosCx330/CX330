var that

class Tab {
    constructor (id){
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        this.tabscon = this.main.querySelector('.tabscon');
        this.init();
    }
    //init初始化让所有事件都绑定
    init () {
        this.upload ();
        this.add.onclick = this.addTab;
        for(var i = 0; i < this.lis.length; i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.changeTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        } 
    }
    upload () {
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }
    changeTab (){
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass (){
        for(let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    addTab () { 
        var rem =Math.random().toFixed(2);
        that.clearClass ();
        var li = '<li class="liactive"><span>测试'+  rem + '</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试'+ rem +'</section>';
        that.ul.insertAdjacentHTML('beforeend',li);
        that.tabscon.insertAdjacentHTML('beforeend',section);
        that.init();
    }
    removeTab (e){
        e.stopPropagation()
        var index = this.parentNode.index;
        that.ul.removeChild(this.parentNode);
        that.tabscon.removeChild(that.sections[index]);
        that.init();
        if(document.querySelector('.liactive')) return;
        index--;
        that.lis[index]&&that.lis[index].click();
    }
    editTab () {
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); 
        this.innerHTML = '<input type="text">';
        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function () {
           this.parentNode.innerHTML = this.value;
        };
        input.onkeyup = function (e) {
           if(e.keyCode === 13)this.blur();
        }
    }
}
new Tab('#tab');
window.addEventListener('load',function(){
    var focus = this.document.querySelector('.focus');
    var arrowL = this.document.querySelector('.arrow-l');
    var arrowR = this.document.querySelector('.arrow-r')
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter',function(){
        arrowL.style.display = 'block';
        arrowL.nextElementSibling.style.display = 'block';
        clearInterval(timer);
        timer = null;

    })

    focus.addEventListener('mouseleave',function(){
        arrowL.style.display = 'none';
        arrowL.nextElementSibling.style.display = 'none';
        timer = setInterval(function(){
            arrowR.click();
        },1500)
    })


    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    var num = 0;
    var circle = 0; 
    for(var i = 0; i < ul.children.length; i++ ){
        var li = this.document.createElement('li');
        li.setAttribute('index',i)
        ol.appendChild(li);
        li.addEventListener('click',function(){
            for(var i = 0; i < ol.children.length; i++){
                ol.children[i].className = '';
            }
            this.className = 'current';
            
            var index =this.getAttribute('index');
            circle = index;
            num =index;
            animate(ul,-index * focusWidth )
        })

    }
    ol.children[0].className = 'current';
    var img = ul.children[0].cloneNode(true)
    ul.appendChild(img);
    var flag = true;
    arrowR.addEventListener('click',function(){
        if(flag){
            flag = false;
            if(num == ul.children.length-1){
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul,-num * focusWidth,function(){
                flag = true;
            })
            circle++;
            if(circle == ul.children.length-1){
                circle = 0;
            }
            circleChange();
        }
    })




    arrowL.addEventListener('click',function (){
        if(flag) {
            flag = false;
            if(num == 0){
                num = ul.children.length-1;
                ul.style.left = -num * focusWidth;
                
            }
            num--;
            animate(ul,-num * focusWidth,function(){
                flag = true;
            })
            circle--;
            if(circle < 0){
                circle = ol.children.length-1;
            }
            circleChange();
        }
    })






    function circleChange(){
        for(var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }



    var timer = this.setInterval(function(){
        arrowR.click();
    },1500)



})








/*    arrowR.addEventListener('click', function() {
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth,);
    })*/
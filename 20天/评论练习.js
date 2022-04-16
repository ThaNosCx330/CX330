$(function(){
    function getlist() {
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/cmtlist',
            success: function (res) {
                var rows = [];
                if (res.status !== 200) return alert('获取失败');
                var rows = [];
                $.each(res.data,function(i,v){
                   var li =  `<li class="list-group-item">
                                <span class="badge" style="background-color: #ecaa4b;">${v.time}:</span>
                                <span class="badge" style="background-color: #59bcdb;">${v.username}:</span>
                                ${v.content}
                            </li>`
                    rows.push(li);
                })
                $('.list-group').empty().append(rows.join(''))
            }
        })


    }
    getlist();

 /*   $('#btn').on('click',function (author,text) {
        var author = $('#ipt').val().trim();
        var text = $('#text').val().trim();
        if (author.length <=0||text.length <=0) return alert('请输入内容');
        $.ajax({
            type: 'POST',
            url: 'http://www.liulongbin.top:3006/api/addcmt',
            data: {
                username:author,
                content:text,
            },
            success: function (res) {
                $('#text').val('');
                $('#ipt').val('');
                res.status !== 201? alert('添加失败'):getlist();
                
            }
        })
    })*/

    $('#formadd').on('submit',function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'http://www.liulongbin.top:3006/api/addcmt',
            data: data,
            success: function(res){
                res.status !== 201? alert('添加失败'):getlist()
            }
        });
        $('#formadd')[0].reset();
    })

})
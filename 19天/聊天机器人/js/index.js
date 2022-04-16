
$(function () {

    resetui();

    $('#btnSend').on('click',function () {
        var text =$('#ipt').val().trim();
        if (text.length <= 0) {
            return $('#ipt').val('');
        } 
    //     <!-- <li class="right_word">
    //     <img src="img/person02.png" /> <span>你好哦</span>
    //   </li> -->
        var li = `<li class="right_word">
                    <img src="img/person02.png" />
                    <span>${text}</span>
                    
                </li>`
        $('#talk_list').append(li);
        resetui();
        $('#ipt').val('');



        function getmsg(text) {
            $.ajax({
                type: 'GET',
                url: 'http://www.liulongbin.top:3006/api/robot',
                data: {
                    spoken:text
                },
                success: function (res) {

                    if (res.message === 'success') {
                        var msg = res.data.info.text;
                        var li = `<li class="left_word">
                                    <img src="img/person01.png" />
                                    <span>${msg}</span>
                                </li>`
                        $('#talk_list').append(li);
                        resetui();
                        getmusic(msg);
                    }
                }
            })
        };
        getmsg(text);

        function getmusic(text) {
            $.ajax({
                type: 'GET',
                url: 'http://www.liulongbin.top:3006/api/synthesize',
                data: {
                    text:text
                },
                success: function (res) {
                    if (res.message === 'success') {
                      $('#voice').attr('src',res.voiceUrl)
                    }
                }
            })
        };
         
    });

    $('#ipt').on('keyup',function (e) {
        if (e.keyCode === 13) $('#btnSend').click();
    })

})
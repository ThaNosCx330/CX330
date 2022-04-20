function dateFormat(data) {

    const dt = new Date(data);
    const y = dt.getFullYear();
    
    const m = zero(dt.getMonth() + 1);
    const d = zero(dt.getDate());

    const h = zero(dt.getHours());
    const f = zero(dt.getMinutes());
    const s = zero(dt.getSeconds());
    return `${y}--${m}--${d} ${h}:${f}:${s}`;
};

function zero(data) {
    return data < 10? '0' + data : data;
};

function changer(str) {
    return str.replace(/<|>/g,(math) =>{
        switch(math){
            case '<':
                return '&lt';
            case '>':
                return '&gt';
        }
    })
};


module.exports = {
    dateFormat,
    changer
}
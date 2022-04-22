
function datatime(data) {
    const dt = new Date(data);
    
    const y = dt.getFullYear();

    const m = zero(dt.getMonth() + 1);

    const d = zero(dt.getDay());

    return `${y}--${m}--${d}`
};

function zero(data) {
    if (data < 10) return '0' + data;
}
module.exports = {
    datatime
}

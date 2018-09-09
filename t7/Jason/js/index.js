/* 選擇要放置slider的節點 */
var handlesSlider = document.querySelector('.slider');

noUiSlider.create(handlesSlider, {
    /* 設定2個控制鈕的初始值 */
    start: [0, 5000],
    /* 設定範圍線條 */
    connect: [false, true, false],
    /* 設定兩個控制鈕的最小距離 */
    margin: 100,
    /* 設定控制鈕顯示值,預設小數點後2位,可以使用wNumb來控制小數點位數 */
    tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
    /* 點擊後最近的控制鈕會移動到點擊位置，並馬上可被拖曳 */
    behaviour: 'snap',
    /* 設定range */
    range: {
        'min': [0],
        'max': [12000]
    }
});
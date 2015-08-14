// 問3の答え
$(function() {
    $('div#colorZone').hover(toRed, toBlack)
})
// 問4の答え
$(document).on('click', 'button#chBtn', function() {
    var $curProf = $('p#prof')
    var name = $curProf[0].innerText
    if(name === '安永卓生') {
        $curProf[0].innerText = '西郷浩人'
    } else if (name === '西郷浩人'){
        $curProf[0].innerText = '山崎敏正'
    } else if (name === '山崎敏正') {
        $curProf[0].innerText = '安永卓生'
    }
})

//問5の答え

// todoの要素の追加
$(document).on('click', 'button#addBtn', function() {
    var content = $("input#content").val()

    addItem(content, 1) 
})

// 実行済みの要素の削除と削除済みテーブルへの追加
$(document).on('click', 'tr button.doneBtn', function(event) {
    var $tr = $(this).parent().parent()
    var content = $tr.children().first()[0].innerHTML

    // クリックしたボタンがある<tr>要素を削除する
    $tr.remove()

    // 削除済みテーブルにアイテムを追加
    addItem(content, 0)
})

// 元に戻す要素の削除とtodoテーブルへの追加
$(document).on('click', 'tr button.restoreBtn', function(event) {
    var $tr = $(this).parent().parent()
    var content = $tr.children().first()[0].innerHTML

    // クリックしたボタンがある<tr>要素を削除する
    $tr.remove()

    // 削除済みテーブルにアイテムを追加
    addItem(content, 1)
})

function addItem(content, type) { //type: { 0: done Table, 1: todo Table}
    var $table
    var $button

    // tableの種類によって、ボタンの属性を設定
    // tableの要素を取得
    if(type) {
        $button = $("<td>").append($("<button>").addClass("btn btn-default doneBtn").append("done"))
        $table = $("table#todoTable")
    } else {
        $button = $("<td>").append($("<button>").addClass("btn btn-default restoreBtn").append("元に戻す"))
        $table = $("table#doneTable")
    }

    // <tr>タグを作成
    var $row = $("<tr>")

    // <td> content </td>を作成
    var $content= $("<td>").append(content)

    //<tr>タグの中に、生成した二つの<td>タグを入れる
    $row.append($content).append($button)

    //<tr>タグをテーブルに追加
    $table.append($row)
}

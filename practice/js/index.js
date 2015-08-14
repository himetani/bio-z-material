// 問3
//二つの関数を活用してみましょう。

function toBlack() {
    $("#colorStr").css('color', 'black')
}

function toRed() {
    $("#colorStr").css('color', 'red')
}

$(function() {
    
    //ここの処理を考える

})

// 問4
$(document).on('click', 'button#chBtn', function() {
    var $curProf = $('p#prof')
    var name = $curProf[0].innerText

    // ここの処理を考える

})

//問5
// 下記の3つの関数を埋めて、適切な機能を実装しましょう。

// todoの要素の追加
$(document).on('click', 'button#addBtn', function() {
    var content = $("input#content").val()

    // ここの処理を考える

})

// 実行済みの要素の削除と削除済みテーブルへの追加
$(document).on('click', 'tr button.doneBtn', function(event) {
    var $tr = $(this).parent().parent()
    var content = $tr.children().first()[0].innerHTML

    // ここの処理を考える
})

// 元に戻す要素の削除とtodoテーブルへの追加
$(document).on('click', 'tr button.restoreBtn', function(event) {
    var $tr = $(this).parent().parent()
    var content = $tr.children().first()[0].innerHTML

    // ここの処理を考える

})

/* addItem関数の説明
// テーブルにアイテムを追加する関数
// contentは、テーブルに追加されるcontent
// ボタンは自動的に追加される
// typeを0に指定すると、削除済みテーブルに要素を追加
// typeを1にすると、todoテーブルに追加
*/

function addItem(content, type) { 
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

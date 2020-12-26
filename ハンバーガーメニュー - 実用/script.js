document.getElementById("menuButton").addEventListener("click", function() {//addEventListenerでイベントを追加。
    //クリックした後に何かアクションを起こす内容を書く場合.clickの後に,を打つ
    this.classList.toggle("active");//this(この)クリックしたものに対してアクティブというクラスに切り替える
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("mask").classList.toggle("active");
    //ページ全体からId maskという要素を取得してくる
    //activeがついてなければactiveをつけてactiveがついていればactiveを外す
})
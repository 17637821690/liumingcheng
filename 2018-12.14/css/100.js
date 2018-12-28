window.onload = function () {
    var oBigBox = document.getElementById('bigbox');
    var oA = oBigBox.getElementsByTagName('a');
    var aH5 = oBigBox.getElementsByTagName('h5');
    // var iNow = 0;
    for (var i = 0; i < oA.length; i++) {
        oA[i].index = i;
        oA[i].onmouseover = function () {
            // iNow = this.index;
            for (var i = 0; i < oA.length; i++) {
                oA[i].className = '';
                aH5[i].className = '';
            }
            this.className = 'top';
            aH5[this.index].className = 'pear';
        }
    }


    var oTupian = document.getElementById('tupian');
    var oTpian1 = document.getElementById('tupian1');
    var oXiao = document.getElementById('xiao');
    var aImg = oTpian1.getElementsByTagName('img');
    var aLi = oTupian.getElementsByTagName('li');

    var lun = 0;
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function () {
            lun = this.index;
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].className = '';
                aImg[i].className = '';
            }
            aLi[this.index].className = 'photo';
            aImg[this.index].className = 'photo1';
        }
    }
    var bian = setInterval(function () {
        lun++;
        if (lun == aLi.length) lun = 0;
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].className = '';
            aImg[i].className = '';
        }
        aLi[lun].className = 'photo';
        aImg[lun].className = 'photo1';

    }, 1000)

    oXiao.onmouseover = function () {
        clearInterval(bian)
    }
    oXiao.onmouseout = function () {
        bian = setInterval(function () {
            lun++;
            if (lun == aLi.length) lun = 0;
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].className = '';
                aImg[i].className = '';
            }
            aLi[lun].className = 'photo';
            aImg[lun].className = 'photo1';

        }, 1000)
    }


}
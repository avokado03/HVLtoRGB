var HVLtoRGB=function HVLtoRGB (Hk,c,x,m) {
    var r =[];
    if(Hk>=0 && Hk<1) r.push(c,x,0);
    else if(Hk>=1 && Hk<2) r.push(x,c,0);
    else if(Hk>=2 && Hk<3) r.push(0,c,x);
    else if(Hk>=3 && Hk<4) r.push(0,x,c);
    else if(Hk>=4 && Hk<5) r.push(x,0,c);
    else r.push(c,0,x);
    for (var i=0;i<r.length;i++){
        r[i]=Math.round((r[i]+m)*255);
    }
    return r;
};
$('#btn').click(function () {
    var h=$('#h').val();
    var s=$('#s').val();
    var l=$('#l').val();
    var Hk=h/60;
    var c=(1-Math.abs(2*l-1))*s;
    var x=c*(1-Math.abs(Hk%2-1));
    var m=l-c/2;
    var rgb= HVLtoRGB(Hk,c,x,m);
    var colorString = rgb[0]+","+rgb[1]+","+rgb[2];
    var textInp=$('#result');
    textInp.val(colorString);
    textInp.css('background-color','rgb('+colorString+')');
});

canvas =document.getElementById("myCanvas");
ctx=canvas.getcontext("2d");

ctx.beginpath();
ctx.strokestle ="grey";
ctx.lineWidth= 4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginpath();
ctx.strokestle ="red";
ctx.lineWidth= 4;
ctx.arc(250,210,40,0,2* Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestle ="black";
ctx.lineWidth= 4;
ctx.arc(350,210,40,0,2* Math.PI);
ctx.stroke();


ctx.beginpath();
ctx.strokestle ="red";
ctx.lineWidth= 4;
ctx.arc(450,210,40,0,2* Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestle ="yellow";
ctx.lineWidth= 4;
ctx.arc(300,210,40,0,2* Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestle ="green";
ctx.lineWidth= 4;
ctx.arc(400,210,40,0,2* Math.PI);
ctx.stroke();
function drawObstacle(o){

    if(o.type==="column"){

        // coluna
        ctx.fillStyle="#6b3920";
        ctx.fillRect(o.x,o.y,o.width,o.height);

        ctx.fillStyle="#9a5a2b";
        ctx.fillRect(o.x-7,o.y-8,o.width+14,12);

        ctx.fillRect(
            o.x-7,
            o.y+o.height-5,
            o.width+14,
            10
        );

        // hieróglifos
        ctx.fillStyle="#d08b3d";

        for(let y=o.y+15;y<o.y+o.height-10;y+=18){
            ctx.fillRect(o.x+18,y,7,7);
        }

    }else{

        ctx.fillStyle="#713718";
        ctx.fillRect(o.x,o.y,o.width,o.height);

        ctx.strokeStyle="#a96128";
        ctx.lineWidth=3;

        for(let y=o.y+15;y<o.y+o.height;y+=15){
            ctx.beginPath();
            ctx.moveTo(o.x,y);
            ctx.lineTo(o.x+o.width,y);
            ctx.stroke();
        }

        for(let x=o.x+15;x<o.x+o.width;x+=25){
            ctx.beginPath();
            ctx.moveTo(x,o.y);
            ctx.lineTo(x,o.y+o.height);
            ctx.stroke();
        }
    }
}

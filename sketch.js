var grass,grassEdgeRight,grassEdgeLeft,grass_img,grass_imgleft,grass_imgright,invisibleGround,invisibleGround2;
var grassRightGroup,grassLeftGroup
var player,Playerparticles,partime;
var bullet,particles,temp_bullet,bulletGroup;
var enemy,evil,evilGroup,enemyHp;
var playerHp


function preload(){
    grass_img = loadImage("ground_images/grass.png")
    grass_imgleft = loadImage("ground_images/leftgrass.PNG")
    grass_imgright = loadImage("ground_images/rightgrass.PNG")
}
function setup(){
    
    //platform

    createCanvas(windowWidth,windowHeight)

    grass = createSprite(500,600,50,50)
    grass.scale = 0.1
    grass.addImage(grass_img)
    
    grass = createSprite(450,600,50,50)
    grass.scale = 0.1
    grass.addImage(grass_img)
    grassEdgeLeft = createSprite(400,600,50,50)
    grassEdgeLeft.scale = 0.1
    grassEdgeLeft.addImage(grass_imgleft)
    grassEdgeRight= createSprite(550,600,50,50)
    grassEdgeRight.scale = 0.1
    grassEdgeRight.addImage(grass_imgright)
    invisibleGround2 = createSprite(475,600,200,75)
    invisibleGround2.visible = false
    grassLeftGroup = new Group()
    grassRightGroup = new Group()
    grassLeftGroup.add(grassEdgeLeft)
    grassRightGroup.add(grassEdgeRight)
    //endPlatform
    //enemy platform
    
    

    
    bulletGroup = new Group()
    evilGroup = new Group()
    grass = createSprite(1000,600,50,50)
    grass.scale = 0.1
    grass.addImage(grass_img)
    
    grass = createSprite(950,600,50,50)
    grass.scale = 0.1
    grass.addImage(grass_img)
    grassEdgeLeft = createSprite(900,600,50,50)
    grassEdgeLeft.scale = 0.1
    grassEdgeLeft.addImage(grass_imgleft)
    grassEdgeRight = createSprite(1050,600,50,50)
    grassEdgeRight.scale = 0.1
    grassEdgeRight.addImage(grass_imgright)
    invisibleGround = createSprite(775,600,600,75)
    invisibleGround.visible = false

    grassLeftGroup = new Group()
    grassRightGroup = new Group()
    grassLeftGroup.add(grassEdgeLeft)
    grassRightGroup.add(grassEdgeRight)
    //endPlatformenemy
    //midPlatform
    grass = createSprite(600,600,50,50)
    grass.scale=0.1
    grass.addImage(grass_img)
    grass = createSprite(650,600,50,50)
    grass.scale=0.1
    grass.addImage(grass_img)
    grass = createSprite(700,600,50,50)
    grass.scale=0.1
    grass.addImage(grass_img)
    grass = createSprite(750,600,50,50)
    grass.scale=0.1
    grass.addImage(grass_img)
    grass = createSprite(800,600,50,50)
    grass.scale=0.1
    grass.addImage(grass_img)
    grass = createSprite(850,600,50,50)
    grass.scale=0.1
    grass.addImage(grass_img)
    invisibleGround3 = createSprite(775,600,200,75)
    invisibleGround3.visible = false
    //endmidPlatform
    bullet = createSprite(1000,1000,1,1)
    evil = createSprite(1000,1000,1,1)
    
    player = createSprite(450,400,20,20)

    enemy = createSprite(1050,400,20,20)
    enemy.shapeColor = "green"
    
    playerHp = createSprite(player.x,player.y+30,40,5)
    playerHp.shapeColor = "pink"
    enemyHp = createSprite(enemy.x,enemy.y+30,20,5)
    enemyHp.shapeColor = "pink"
        
    
    
    
    
    
}
function draw(){
    
    background("cyan")
    playerControls()
    //if(!enemy.x<invisibleGround2.x+170&&!enemy.x>invisibleGround2.x-170){
    //enemyControls()
    //}
    if(player.x>enemy.x && enemy.velocityX<5){
        enemy.velocityX = enemy.velocityX +1
    }
    if(player.x<enemy.x && enemy.velocityX>-5){
        enemy.velocityX = enemy.velocityX -1
    }
    
    temp_bullet = shoot()
    if(player.y>900){
        player.position.x = 450
        player.position.y = 400
        playerHp.width = playerHp.width - 20
    
    }
    if(enemy.y>900){
        enemy.position.x = 1050
        enemy.position.y = 400
        enemyHp.width = enemyHp.width -5
    
    }
    player.velocityY = player.velocityY + 0.5
    enemy.velocityY = enemy.velocityY +0.5
    player.collide(invisibleGround)
    player.collide(invisibleGround2)
    enemy.collide(invisibleGround)
    enemy.collide(invisibleGround2)
    
        playerParticles = createSprite(player.x+(random(-4,4)),player.y+(random(-4,4)),3,3)
        playerParticles.shapeColor = "grey"
        playerParticles.lifetime = 10
        particles = createSprite(enemy.x+(random(-4,4)),enemy.y+(random(-4,4)),3,3)
        particles.shapeColor = "green"
        particles.lifetime = 10
        playerHp.position.x = player.x
        playerHp.position.y = player.y +20
        enemyHp.position.x = enemy.x
        enemyHp.position.y = enemy.y+20
        
        if(bullet.x<enemy.x+50 && bullet.x>enemy.x && enemy.collide(invisibleGround2)){
            enemy.velocityY = 10
        }
        if(playerHp.width<20){
            playerHp.shapeColor= "red"
        }
        if(playerHp.width<10){
            
            playerHp.shapeColor= "maroon"
        }
        if(playerHp.width<5){
            
            playerHp.shapeColor= "black"
        }
    
        if(enemy.x>player.x && (enemy.y-100<player.y) && frameCount%20===10){
            evil = createSprite(enemy.x,enemy.y,10,4)
            evil.shapeColor = "orange"
            evil.velocityX = -10
            evil.lifetime =100
            evilGroup.add(evil)
        }
        if(enemy.x>player.x && !(enemy.y-100<player.y) && frameCount%20===10){
            evil = createSprite(enemy.x,enemy.y,10,4)
            evil.shapeColor = "orange"
            evil.velocityX = -10
            evil.velocityY = -5
            evil.lifetime =100
            evilGroup.add(evil)
        }
        if(enemy.x<player.x&&frameCount%20===10){
            evil = createSprite(enemy.x,enemy.y,10,4)
            evil.shapeColor = "orange"
            evil.velocityX = +10
            evil.lifetime =100
            evilGroup.add(evil)
        }
    
        if(player.isTouching(evilGroup)){
            player.shapeColor = "red"
            playerParticles.shapeColor = "red"
            playerHp.width = playerHp.width -1
        }
        if(!player.isTouching(evilGroup) && !playerHp.width <=0){
            player.shapeColor = "grey"
            playerParticles.shapeColor = "grey"
            
        }
        if(playerHp.width <= 0){
            player.destroy()
            player.shapeColor = "red"
            
            playerParticles.velocityX = random(-8,8)
            playerParticles.velocityY = random(-8,8)
            
            playerParticles.shapeColor = "red"
            playerHp.destroy()
            
        }
        if(enemyHp.width <=0){
            enemy.destroy()
            enemy.shapeColor="red"
            particles.velocityX = (random(-8,8))
            particles.velocityY = (random(-8,8))
            particles.shapeColor = "blue"
            enemyHp.destroy()
            evilGroup.destroyEach()
        }
        
    drawSprites()
}
//player
function playerControls(){
    
    if(keyDown(LEFT_ARROW) && player.velocityX>-5 ){
        player.velocityX = player.velocityX -1
    }
    
    
    if(keyDown(RIGHT_ARROW) && player.velocityX<5){
        player.velocityX = player.velocityX + 1
    }
    
    if(!keyDown(LEFT_ARROW) && !keyDown(RIGHT_ARROW) && player.velocityX>0){
        player.velocityX = player.velocityX -0.5

    }
    if(!keyDown(LEFT_ARROW) && !keyDown(RIGHT_ARROW) && player.velocityX<0){
        player.velocityX = player.velocityX +0.5

    }
    if(keyDown(LEFT_ARROW)&&keyDown(RIGHT_ARROW)&&player.velocityX>0){
        player.velocityX = player.velocityX -0.5
    }
    if(keyDown(LEFT_ARROW)&&keyDown(RIGHT_ARROW)&&player.velocityX<0){
        player.velocityX = player.velocityX +0.5
    }
    
    if(keyDown(UP_ARROW) && player.collide(invisibleGround2)|| keyDown(UP_ARROW) && player.collide(invisibleGround)){
        player.velocityY = -15
        
        
        
    }
    if(keyDown("space")){
        player.velocityX = 0
        
    }
    
        
    
    
}

    
function shoot(){
    if(keyDown("space")&&keyDown(LEFT_ARROW)&&frameCount%20===1){
        bullet = createSprite(player.x,player.y,10,4)
        bullet.shapeColor="yellow"
        
        bullet.velocityX = -10
        bullet.lifetime = 100
        
        
        
    }
    if(keyDown("space")&&keyDown(RIGHT_ARROW)&&frameCount%20===10){
        bullet = createSprite(player.x,player.y,10,4)
        bullet.shapeColor="yellow"
        bullet.velocityX = 10
        bullet.lifetime = 100
        
    }
    
    
    
    
}
function enemyControls(){
    
    /*var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: if(enemy.velocityX>-5){
           enemy.velocityX = enemy.velocityX -1
        };
               break;
       case 2: if(enemy.velocityX<5){
           enemy.velocityX = enemy.velocityX +1
        };
               break;
       case 3: if(enemy.collide(invisibleGround2)||enemy.collide(invisibleGround)){
           enemy.velocityY = 10
       };

       default: break;
     }*/
        
    }
    



    
    
    

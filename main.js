class Main{
    constructor(){
       this.menuSelect();
       this.subMenuHide($('#relativeMenu > ul > li:nth-child(1)'),$('#intro'));
       this.subMenuHide($('#relativeMenu > ul > li:nth-child(3)'),$('#Blog')); 
       this.subMenuHide($('#relativeMenu > ul > li:nth-child(6)'),$('#lang')); 
    }
    subMenuHide(target, subBox){
        target.on('mouseover',()=>{
            subBox.toggleClass('hide',false);
            target.toggleClass('mouseOverRM',true);
        });
        target.on('mouseleave',()=>{
            subBox.toggleClass('hide',true);
            target.toggleClass('mouseOverRM',false);
        });

        subBox.on('mouseover',()=>{
            subBox.toggleClass('hide',false);
            target.toggleClass('mouseOverRM',true);
        })
        subBox.on('mouseleave',()=>{
            subBox.toggleClass('hide',true);
            target.toggleClass('mouseOverRM',false);
        });
    }

    menuSelect(){
        $('#menu')
        .on('mouseover',(e)=>{
            $('#menu ul li').on('mouseover',(e)=>{
                let item = Number(e.target.dataset.th);
                let widthval;
                switch(item){
                    case 0:
                        widthval = '48px';
                        break;
                    case 1:
                        widthval = '56px';
                        break;
                    case 2:
                        widthval = '45px';
                        break;
                    case 3:
                        widthval = '57px';
                        break;
                    case 4:
                        widthval = '64px';
                        break;
                }
        
                $('#menuOnMouse').css('width', `${widthval}`);
            });

            let curcol = Math.floor($('#menu').width() / 70) -1;
            let barPos= Math.floor((e.clientX-230)/70);
            
            barPos = barPos <= curcol ? barPos: curcol;

            let pos = barPos * 70;

            $('#menuOnMouse')
            .css('background-color','white')
            .css('left',`${pos}px`);

        })
        .on('mousemove',()=>{
            $('#menuOnMouse').css('transition','width 0.3s ease-in-out,left 0.3s ease-in-out');
        })
        .on('mouseleave',()=>{
            $('#menuOnMouse')
            .css('background-color','rgba(0,0,0,0)')  
            .css('transition','width 0s ease-in-out,left 0s ease-in-out');
        })
    }
}

window.onload = () => {
    new Main();
}
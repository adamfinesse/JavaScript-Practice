let draggable;
document.onmousedown = onMouseDown;

function onMouseDown(event){

    if(event.target.className == 'hero draggable' || event.target.className =='draggable'){
        let draggable = event.target;
        event.preventDefault();
        draggable.ondragstart = function() {
            return false;
        };

        let targetCoords = draggable.getBoundingClientRect();
        let shiftX = event.clientX - targetCoords.left;
        let shiftY = event.clientY - targetCoords.top;

        draggable.style.position = 'absolute';
        draggable.style.zIndex = 1000;
        document.body.append(draggable);

        moveAt(event.pageX,event.pageY);

        function moveAt(pageX,pageY){
            draggable.style.left = pageX - shiftX +'px';
            draggable.style.top = pageY -shiftY +"px";
        }

        function onMouseMove(event){
            moveAt(event.pageX,event.pageY);

            if(draggable.getBoundingClientRect().top < 0){
                draggable.style.top = 0 +"px"
                window.scrollBy(0,-10)
                // look at solution for better scrolling solution
            } 
            if(draggable.getBoundingClientRect().left <0) draggable.style.left = 0 +"px"

            if(draggable.getBoundingClientRect().right > document.documentElement.clientWidth) draggable.style.left = document.documentElement.clientWidth - draggable.offsetWidth +"px"

            if(draggable.getBoundingClientRect().bottom > document.documentElement.clientHeight){
                draggable.style.top = document.documentElement.clientHeight  +"px"
                window.scrollBy(0,10)
            }
        }

        document.addEventListener('mousemove',onMouseMove);

        draggable.onmouseup = function(){
            document.removeEventListener('mousemove',onMouseMove);
            draggable.onMouseDown = null;
            draggable.onMouseUp = null;
            draggable = null;
        }
    }
};
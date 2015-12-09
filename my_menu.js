var meiriq_menu = (function () {
    function meiriq_menu() {
        this.menuItems = new Array();
        this.isOpen = false;
        this.isMoving = false;
        this.headBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAvCAMAAADKIyriAAAA1VBMVEUAAAAAAAAkh90AAAEAAAAli+IAAAAJIzkge8gCCQ8AAwUAAAAZYJ0kiN0kid8kit8li+Ili+IXVowLKUIhfMkAAAAli+ICeN4dh+EYhOEhieP///8DAwMRgeAKfN8gIB/3/f+Fvu8SEhInJyba6/q93fdVp+ysra3p+P+46//99/BlsfAsjuTL5vulz/NgqurLvK9/endZWVnx9flHn+vPz8+l4f+Uz/p0te02lOfj5OXay7/l7vfs4trU1demoJtsY1xQS0Zvv/q5p5mjkYE/OTTGxsaop6r8AAAAFnRSTlMeAPldfvIGEeByTz29tWjs2aOWklEq1MEfGAAAAcVJREFUOMud09l2mzAQBmDFbrzX3aXRarABY8zmLd4Tp0n7/o9UGcUnRdCb/jcczsegQYzQXZH28MvneyuGhve4moI+1oAhI3U0xFaAECIL+mSJYtvZQ0AA3X23ZR6e82M0k8heiQbRYiPEr6OPWvb7wsUTn07EeIWQJcFpwzl/XI4XFZpPx1NdNRotq1WPYrLRUlMVO89iqUUcKkR30bMQYpQnFjGMyTZ6eX06h/GNgFJWXLStH2azn1QaAgIxVgrHbqxNEh3ABVGaOpx7gcJrD/AtpsrjJz9xnAyI77K/ifreXhLFXE6Vn5YIQioBM0pSlzqlKsh20nSuvIy/f8eV3PXbk+SUurJEwds9gJfKUhWmq5gAA6nb2+n6UodbJ6NK7v0VzHGZMCTc8VbcWeOsQmqXhF66LxYyG6XAEGaESEW0MHzbXkk1mcCtAeLy/PXlHLLqr5xHl99CTPKkbgCuw1Y3AMHhv4bt8D5sDcvCixk2Pdgdq8MsughzHNDXyiFyjnkeJRShXsO2vT56cwWo3R9gK/S6hwyjFmp2/nXM2/2usSq1UK87qKfCvg06DTuatPWb3Q+VaNLW/tHvNe1oMogq+QNSsnBzqViWLAAAAABJRU5ErkJggg==';
        this.headPressBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAyCAMAAADoZjIvAAABC1BMVEUAAAAAAAAAAAAAAAABBAYAAAAkiN0liuEkid8AAAABBgoAAAAAAAAjhtoDDRYigtQjhNcbZ6kdbbIge8gYWpMli+L20K8ojeIBd90Mft8moP8ch+Ilid8lku8hieMAfe0gAwAllvcDgOv/4KT/////2KsljecThOT/WWD86L//3KYmmfskfMn60q+UxfFmreslg9QjSGkhJCXj7/zT5/l8ue44k+IkdbwiMT332LQjZZ/+SlYgFQ73+v5vo9F/qc6tt8IjVH4iO07J4vi32PZNoOf/88fOwbvxzK7iQVH/OUtVm9eOrcngw6/6j4Sydnj+bm2LN0lqACncZWk/ABPXx8fUoJCaYWSPBCvyLl3FAAAAFXRSTlMHLhcATmf48/cDECNB7F/Voo3GwyzIFiscAAAC0UlEQVQ4y42V6XaiQBCFe6Kz6ESzDXQ3DQgKKIpLcI+axDUmmeyzvf+TTDU0HjUuqT8eOd+5l7pd1aCYqEQigXaVoNCPk+PU1+2FQq3ksbS7UCCWPJL2cR/DMHD7TbGURbyFtceqpqnwoy0wPXOPYih5so6pNU1SHVUVD/TMZREl0MHZKme2+6OSY3odoAO5zGXORonk99QqV2ob/ZqpDH3TCbAstm2Zc9+k1VLOjaGidM6V4B/L3hRlGaGDT++4C6Oj1Py2Gbpe5cqbOU3rGN6FX3JC17Itb+ZUEDwfhbZ65jonb+EkU/WNvmeKXsubOF3HYScjhWP5/Lwor3IszwBrMQqgVrvwgvCE64LDlOhYJ5S1KhhAVVNMlTdxXywvc5jgiWVZkxahzTFjILSIrjubua7bDThMW5bVmIwtC8BGk3ImamL+5+/b42Oox+igIRFC2GSQJ/UKEVwez233xXjt9e4KAUebDcJFKGk0mVWNOH4Ss6dft8+Fwl3AkUqVYG5Eqs2KRZmIKHtdlN2b19tCodAL9SpVGjpNK2CLl7nfISf0mpHeoEJ1KfL9mZPdZV9arecJkxgh43r4BqF6y+Z9/Cv07kI9idStKSN0Wh9P4Q2iwiBYfnh6eXt+nIv8WB0CHFgDhqvQxUIw/1B0Z263K3KGY4No6hAKiIEtPzdN5YL83MrdpfMFV0oJw1LQhaO2axvmQEyUaHRlrnTZXuLWSpN8vnKL7dg197Bu0chs45zSyGgv9ghC3MIpbcMv1XzPjEIU3JY9HyphiNkHseeptW3z+n2vpAw7YBw5B9zRu/sFELPt8whFzzbn3t1rngen4XiqEw3YVY7fQ/H1XExYNtUxF/PAMpecOzzbd+/qWZQA43jqA/c4AsH0XhDFuOBh+nQ/B4IAfj49Sn3ZXigmwHg6/XlHie/WAZCH8R0FXAByclch8fFFHN1R6IOf6f9pX7CSNovBSAAAAABJRU5ErkJggg==';
        this.onCreate();
    }
    meiriq_menu.prototype.onCreate = function () {
        this.menuIcon = document.createElement('div');
        this.menuIcon.setAttribute('id', 'menu-icon');
        this.menuIcon.style.position = 'absolute';
        this.menuIcon.style.right = '0';
        this.menuIcon.style.top = window.innerHeight/4+'px';
        this.menuIcon.style.zIndex = 999;
        this.menuIcon.style.textAlign = 'right';
        this.menuIcon.innerHTML = '<img src="'+this.headBase64+'" id="menu-icon-img" /></a>';
        this.menusBlock = document.createElement('div');
        this.menusBlock.setAttribute('id','menus-block');
        this.menusBlock.style.position = 'absolute';
        this.menusBlock.style.right = '0';
        this.menusBlock.style.top = window.innerHeight/4+53+'px';
        this.menusBlock.style.zIndex = 999;
        this.menusBlock.style.textAlign = 'right';

        var menuMoreData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAyCAMAAADoZjIvAAAAUVBMVEUAAAAkiN8AAAABBQkAAAAAAQEAAAABBgoDDBQAAAAgecUgesgjhdkLKkYli+L////X5vlWo+jj7/vz+f5zr+q41/U8luWIvO6ozfOcx/HK4viZJltjAAAADnRSTlMH9wEXL05mECRBw5HabDOoFlEAAAGfSURBVDjL1dXZbqtAEARQfG1fL4m7epn9/z80jY2JhQmgvKUeEMuhWkhopvv3nW4pT7P/uH7ufs7gTh+0nLvrTp+05ka27nzoFtedaYvrvG6T2183udN59xsnuTQ1M20xy4vr9ocXFxiv4TDvGqZpacYp3qPpzTXMhadOAMTMAJiNGYCWAiBMXASEEmUgZ83ZkP1dMbSJU38QkNw/ElMN6nds4gCqACQNTiR6HwETZ0jC3hIGVymE2t5dRPND7y3W4keqhaigvX9vFBKGJb9KCpWUKiATR8NAE+qTDPdkmjqSaNDibQ9YFeYTXtxS/r5LQWYdj4l3xqghyHxfwHimXIoiTNxQqGBPfw6LVJFpxiF439CZJZg5nXV671N3DiMim6z0ZXAJrMwGWe6TCBUKiGPf9emqSWs0RDmrFmej+17X1JBpTKqw8rIO3Z73MwNaQuin1sjDvzi6y2OwQKOkHNlgErhkmayTh+Nuy3rqhbfduusLL7fruvPCw+V4821rIe4GePy/lGHf2rt0+nPc3aHL82Eh477a04V0G7fpLzxbW+dpDn0QAAAAAElFTkSuQmCC';
        var menuShareData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAyCAMAAADoZjIvAAAAV1BMVEUAAAAkid8AAAAAAAAAAAAAAAAAAAABBgoAAAAhfcsjhNgFFyUgesgYWpMQO2Eli+L////Y5vmoy/Jzrerm8fz2+v7C3fZPnueTwe+Cuu6z0/Q6leViqOmoduGIAAAAD3RSTlMH9gEvF0xmECPH612RLIh4micXAAABeElEQVQ4y8XVUZOCIBDAcbvqSq1bQFhA/P6f83bVAxtxe+jh/g/V1G+WEZlsvkqN1J95PtrudNzqbg+Qm11za+G9K0x2ZVHZNU+o5dHZuHFNfVyyioobd2lrLirOFne7dzVnZue27lRZlRiH2TWX895FZwfkcf7A+SkBTNoFxqPxUHUJaUQcFebf625crnECkJ2bXYAPXGVd/XbdpOk6AipMkuP8sN2XkOCjfS6lUbhv4jlgJ5+r4uRzKjvwqGwE0ZX+x01HLmoPxuRj4Y6c1gBBTXyLc+POERno1dr5s1ny+3mTGuc3hzwaB04NOxedM3OWvbaaq7gUiFhjUMUJ0rDmi+sgpxFgUHzXDIVO2VBcm5lX9HWwsDQofDkHDyg7lgCMJqspq8q+8P9QnxmPA9R5HnDZrQt7ayN4rRmzMvjiaOG+W36BbZ6vdetu9ytBMXY88Nq3bx0PJPjTdvJza4XX/luKHMMLSTF2DEnez0L5ucpUiF2mQr/MpGEPVnNwNAAAAABJRU5ErkJggg==';
        var menuQuitData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAyCAMAAADoZjIvAAAAUVBMVEUAAAAkid8AAAAAAAAAAAAAAQEAAQIBBwwAAAAig9Yec7whf88MME8YWpMli+L///+pyvFzrOp3tu3T5fnz+P1Gmebh7fu72PWWwe+p0vRhpunT/Q5SAAAADnRSTlMH9gEWL0xmDiPUu4xuLH5E1aUAAAFYSURBVDjLxdXbjoIwEIBh3KqAh06HHun7P+gOUJkScdjsjf+FicmXKQ1Qmh+ukXqZ5/3Wnz5XXHvXcrNrVK+PHTPZ8aKya5+6LkJVYteozTiEOK5ZqF1fuwE0lyvXdqet8/UfdopcHbONa9R54+IgOWYgOmZZC46Z14JjFkb7avjsArjgXiVhXXu4LkPZ8dJZcpwdBPeP+4bgRbf/XEkuDWujcH0WqsatE/qGQ7/nvPEazRTqJcBdF4I3ARGDmbZtZodQuwJdMo7GOcGV/jIvGeOrec5aCDa8u4yAJiQ7TO+mT4gI9JP8+7rkbA7zq4FQ9mvN6vrKhRSty/vuxs5BSDo6X7v1HHosKjvnImoqZXK0IYjTptZzrQw0UWO0c0l7U2KnzhfhSch+PU+7y0OAurh54PV27Jq2I/igz5YQuQVermLkJqhIipFboOq6sxC5IokKza5QqV+z51rw41ouYQAAAABJRU5ErkJggg==';
        this.menusBlock.innerHTML = '<div id="menu-more" style="margin-right:-40px;"><img src="'+menuMoreData+'" /></div><div id="menu-share" style="margin-right:-40px;"><img src="'+menuShareData+'" /></div><div id="menu-quit" style="margin-right:-40px;"><img src="'+menuQuitData+'" /></div>';
        document.body.appendChild(this.menuIcon);
        document.body.appendChild(this.menusBlock);
        this.menuItems.push(document.getElementById('menu-more'));
        this.menuItems.push(document.getElementById('menu-share'));
        this.menuItems.push(document.getElementById('menu-quit'));
        var self = this;
        this.fadeOutHandler = setTimeout(function(){
            if(!self.isOpen){
                self.menuIcon.style.opacity = '0.2';
            }
        },2000);
    };
    meiriq_menu.prototype.toogle = function () {
    	if(!this.isMoving){
	        if(this.isOpen){
	        	this.close();
	        }else{
	        	this.open();
	        }
    	}
    };
    meiriq_menu.prototype.open = function () {
        clearTimeout(this.fadeOutHandler);
    	this.menusBlock.style.display = 'block';
        document.getElementById('menu-icon-img').setAttribute('src',this.headPressBase64);
        if(!this.isOpen){
            this.isActing = true;
        	this.showItem(0);
    	}
    };
    meiriq_menu.prototype.close = function () {
        var i;
        if(this.isOpen){
        	this.hideItem(this.menuItems.length-1);
    	}
    };
    meiriq_menu.prototype.showItem = function (index) {
    	if(index<this.menuItems.length){
	    	var item = this.menuItems[index];
	    	var currentMarginRight = parseInt(item.style.marginRight.replace('px',''));
	    	item.style.marginRight = (currentMarginRight+10)+"px";
	    	if(currentMarginRight>=0){
	    		item.style.marginRight = '0';
	    		index++;
	    		if(index<this.menuItems.length){
	    			this.showItem(index);
	    		}else{
	    			this.openFinished();
	    		}
	    	}
	    	var self = this;

	    	setTimeout(function(){
                if(!self.isOpen){
                	self.showItem(index);
                }
	    	},50);
    	}
    };
    meiriq_menu.prototype.hideItem = function (index) {
    	if(index>=0){
	    	var item = this.menuItems[index];
	    	var currentMarginRight = parseInt(item.style.marginRight.replace('px',''));
	    	item.style.marginRight = (currentMarginRight-10)+"px";
	    	if(currentMarginRight<=-40){
	    		item.style.marginRight = '-40px';
	    		index--;
	    		if(index>=0){
	    			this.hideItem(index);
	    		}else{
	    			this.closeFinished();
	    		}
	    	}
	    	var self = this;
	    	setTimeout(function(){
	    		self.hideItem(index);
	    	},50);
    	}
    };
    meiriq_menu.prototype.openFinished = function (event) {
    	this.isOpen = true;
    };
    meiriq_menu.prototype.closeFinished = function (event) {
    	this.isOpen = false;
    	document.getElementById('menu-icon-img').setAttribute('src',this.headBase64);
    	this.menusBlock.style.display = 'none';
        var self = this;
        clearTimeout(this.fadeOutHandler);
        this.fadeOutHandler = setTimeout(function(){
            if(!self.isOpen){
                self.menuIcon.style.opacity = '0.2';
            }
        },2000);
    };
    meiriq_menu.prototype.onMouseDown = function (event) {
        clearTimeout(this.fadeOutHandler);
        this.menuIcon.style.opacity = '1';
    	this.isMoving = true;
    };
    meiriq_menu.prototype.onMouseUp = function (event) {
    	this.isMoving = false;
        if(!this.isOpen){
            var self = this;
            this.fadeOutHandler = setTimeout(function(){
                if(!self.isOpen){
                    self.menuIcon.style.opacity = '0.2';
                }
            },2000);
        }
    };
    meiriq_menu.prototype.onMouseMove = function (event) {
    	event.preventDefault();
    	var ty = event.targetTouches?event.targetTouches[0].clientY:event.clientY;
    	if(this.isMoving){
	    	this.menuIcon.style.top = (ty-25)+'px';
	    	if(ty>window.innerHeight-250){
	    		this.menusBlock.style.top = (ty-25-160)+'px';
	    	}else{
	    		this.menusBlock.style.top = (ty-25+53)+'px';
	    	}
    	}
    };
    meiriq_menu.prototype.onMenuSelected = function (event) {
    	this.close();
    	if(event.target.outerHTML==this.menuItems[0].innerHTML){
    		cb_menu_more();
    	}else if(event.target.outerHTML==this.menuItems[1].innerHTML){
    		cb_share();
    	}else if(event.target.outerHTML==this.menuItems[2].innerHTML){
    		cb_quit();
    	}
    };
   
    meiriq_menu.prototype.listenEvent = function () {
    	var self = this;
        this.menuIcon.addEventListener('click',function(){
        	self.toogle();
        },false);
        this.menuIcon.addEventListener('mousedown',function(event){
        	self.onMouseDown(event);
        },false);
        document.body.addEventListener('mouseup',function(event){
        	self.onMouseUp(event);
        },false);
        document.body.addEventListener('mousemove',function(event){
        	self.onMouseMove(event);
        },false);
        this.menuIcon.addEventListener('touchstart',function(event){
        	self.onMouseDown(event);
        },false);
        document.body.addEventListener('touchend',function(event){
        	self.onMouseUp(event);
        },false);
        document.body.addEventListener('touchmove',function(event){
        	self.onMouseMove(event);
        },false);
        document.body.addEventListener('click',function(event){
            self.close();
        },true);
        this.menusBlock.addEventListener('click',function(event){
        	self.onMenuSelected(event);
        },true);
        
    };
    return meiriq_menu;
})();
var meiriqMenu = new meiriq_menu();
meiriqMenu.listenEvent();
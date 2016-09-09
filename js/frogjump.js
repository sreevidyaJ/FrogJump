//my js
 function $(x) { return document.querySelector(x);}
 function jq(x) { return document.querySelectorAll(x);}
 
 var resultPos = "4560123"
  $('form').addEventListener('submit',function(ev) { ev.preventDefault(); });
  $('#frogJump').addEventListener('click',frogJump);
  jq('button').addEventListener('keyup',frogJump);
  function frogJump(e){
	console.log(e.target.dataset);
	if(parseInt(e.target.dataset.curpos) > 0){
		var divs = jq('button'), secondNext, next, divPos, selectionDiv = e.target, emptyRocPos, prev, secondPrev;

		for(var j = 0; j< divs.length;j++){
			if(parseInt(divs[j].dataset.curpos) == 0){
				emptyRocPos = j;
				break;
			}
		}
		
		if(e.target.getAttribute('class').indexOf('male') > -1){
			for(var i = 0; i < divs.length;i++){
				if(divs[i] == selectionDiv){
					next = divs[i + 1];
					secondNext = divs[i + 2];
					divPos = i;
					break;
				}
			}
			if(parseInt(next.dataset.curpos) == 0){
				console.log('m one');
				$('#frogJump').insertBefore(createNewElementByAppendingChild(next), $('#frogJump').children[divPos]);
				$('#frogJump').insertBefore(createNewElementByAppendingChild(selectionDiv), $('#frogJump').children[emptyRocPos + 1]);
			}
			else if(parseInt(secondNext.dataset.curpos) == 0){
				console.log('m 2');
				//jq('button')[divPos].parentNode.replaceChild(secondNext, jq('button')[divPos]);
				//jq('button')[divPos + 2].parentNode.replaceChild(selectionDiv,jq('button')[divPos + 2]);
				$('#frogJump').insertBefore(createNewElementByAppendingChild(secondNext), $('#frogJump').children[divPos+ 1]);
				$('#frogJump').insertBefore(createNewElementByAppendingChild(selectionDiv), $('#frogJump').children[emptyRocPos + 2]);			
			}
		}else{
			for(var i = 0; i < divs.length;i++){
				if(divs[i] == selectionDiv){
					prev = divs[i - 1];
					secondPrev = divs[i - 2];
					divPos = i;
					break;
				}
			}
			if(parseInt(prev.dataset.curpos) == 0){
				console.log('f one');
				$('#frogJump').insertBefore(createNewElementByAppendingChild(prev), $('#frogJump').children[emptyRocPos + 1]);
				$('#frogJump').insertBefore(createNewElementByAppendingChild(selectionDiv), $('#frogJump').children[divPos]);
			}
			else if(parseInt(secondPrev.dataset.curpos) == 0){
				console.log('f 2');
				//jq('button')[divPos].parentNode.replaceChild(secondNext, jq('button')[divPos]);
				//jq('button')[divPos + 2].parentNode.replaceChild(selectionDiv,jq('button')[divPos + 2]);
				$('#frogJump').insertBefore(createNewElementByAppendingChild(secondPrev), $('#frogJump').children[emptyRocPos + 2]);
				$('#frogJump').insertBefore(createNewElementByAppendingChild(selectionDiv), $('#frogJump').children[divPos - 1]);			
			}	
		}
	}
	
	var newlist = jq('#frogJump li'), newFrogPos = '', newfroglist = jq('#frogJump li button');
	for(var i = 0; i < newlist.length;i++){
		if(newlist[i].innerHTML == "" || typeof(newlist[i].innerHTML)=="undefined")
			newlist[i].remove();
	}
	for(var i = 0; i < newfroglist.length;i++)
		newFrogPos += newfroglist[i].dataset.curpos;

	compareFrogPos(newFrogPos)
  }

  function compareFrogPos(newpos){
	  if(newpos == resultPos)
		  alert('YOU WON!!!');
  }
  function createNewElementByAppendingChild(ele){
	  var newItem = document.createElement("li");
	  newItem.appendChild(ele);
	  return newItem;
  }
  

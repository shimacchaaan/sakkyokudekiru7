// step表示の際に、クリックしたエレメントにclassを付加する。
document.getElementById('step1','step2','step3','step4','step5','step6','step7').addEventListener('click',function(){
  this.classList.add('active');
});

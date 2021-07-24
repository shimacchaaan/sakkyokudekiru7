// step表示の際に、クリックしたエレメントにclassを付加する。
document.getElementById('step1').addEventListener('click',function(){
  this.classList.add('active');
  getElementById('step2').removeClass('active');
  getElementById('step3').removeClass('active');
  getElementById('step4').removeClass('active');
  getElementById('step5').removeClass('active');
  getElementById('step6').removeClass('active');
  getElementById('step7').removeClass('active');
});

document.getElementById('step2').addEventListener('click',function(){
  this.classList.add('active');
  getElementById('step1').removeClass('active');
  getElementById('step3').removeClass('active');
  getElementById('step4').removeClass('active');
  getElementById('step5').removeClass('active');
  getElementById('step6').removeClass('active');
  getElementById('step7').removeClass('active');
});

document.getElementById('step3').addEventListener('click',function(){
  this.classList.add('active');
  getElementById('step1').removeClass('active');
  getElementById('step2').removeClass('active');
  getElementById('step4').removeClass('active');
  getElementById('step5').removeClass('active');
  getElementById('step6').removeClass('active');
  getElementById('step7').removeClass('active');
});

document.getElementById('step4').addEventListener('click',function(){
  this.classList.add('active');
  getElementById('step1').removeClass('active');
  getElementById('step2').removeClass('active');
  getElementById('step3').removeClass('active');
  getElementById('step5').removeClass('active');
  getElementById('step6').removeClass('active');
  getElementById('step7').removeClass('active');
});

document.getElementById('step5').addEventListener('click',function(){
  this.classList.add('active');
  getElementById('step1').removeClass('active');
  getElementById('step2').removeClass('active');
  getElementById('step3').removeClass('active');
  getElementById('step4').removeClass('active');
  getElementById('step6').removeClass('active');
  getElementById('step7').removeClass('active');
});

document.getElementById('step6').addEventListener('click',function(){
  this.classList.add('active');
  getElementById('step1').removeClass('active');
  getElementById('step2').removeClass('active');
  getElementById('step3').removeClass('active');
  getElementById('step4').removeClass('active');
  getElementById('step5').removeClass('active');
  getElementById('step7').removeClass('active');
});

document.getElementById('step7').addEventListener('click',function(){
  this.classList.add('active');
  getElementById('step1').removeClass('active');
  getElementById('step2').removeClass('active');
  getElementById('step3').removeClass('active');
  getElementById('step4').removeClass('active');
  getElementById('step5').removeClass('active');
  getElementById('step6').removeClass('active');
});

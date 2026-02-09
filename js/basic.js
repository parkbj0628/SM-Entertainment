// data- 속성 : data-로 시작하는 사용자 지정 속성

$('.menu > .item').each(function(){
  const subMenu = $(this).find('.sub')

  if(subMenu.length){ // .sub 가 있을때
    $(this).attr('data-sub-height',subMenu.height())
  }
})

const headerHeight = $('header').outerHeight()  //테두리도 포함


$('.menu > .item').mouseenter(function(){
  console.log($(this).data('sub-height'));

  if($(this).data('sub-height')){
    $('header').css( 'height', headerHeight + $(this).data('sub-height') + 'px')
  }
})
.mouseleave(function(){
  $('header').removeAttr('style')
})

//  햄버거 메뉴
$('.hamburger').click( function(){
  $('body').toggleClass("menu-opened")
})

// news 슬라이더
const swiper = new Swiper('.swiper', {
  // loop: true,
  slidesPerView: 'auto',


  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});
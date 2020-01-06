document.querySelector('#mobileMenuLink').addEventListener('click', e => {
  let mn = document.querySelector('#mobileNav')
  console.log(mn.style.height);
  if (mn.style.height == '0px' || !mn.style.height) mn.style.height = 'auto'
  else                        mn.style.height = '0'
})

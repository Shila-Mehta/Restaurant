export default function createImage(src,alt='',className=''){
  const img=document.createElement('img');
  img.src=src;
  img.alt=alt;
  if(className) img.className=className;
  return img;
}
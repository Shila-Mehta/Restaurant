import createElement from "./createElement";
export default function createMap(src){
const map=createElement('iframe','map');
map.src=src;
return map;

}
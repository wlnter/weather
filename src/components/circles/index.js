import Circle  from "./circle"

export default () => {
   const arr = [{width: 8, top: 10, right: 72}, {width: 5, top: 30, right: 140}, {width: 11, bottom: 110, left: 27}, {width: 4, bottom: 150, left: 57},{width: 5, bottom: 95, left: 94}, {width: 5, bottom: 210, right: 48}, {width: 11, bottom: 260, right: -5} ] 
   return arr.map((item, index) => <Circle key={index} style={item} />)
}
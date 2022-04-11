import Circle  from "./circle"

export default () => {
   const arr = [{width: 8, top: 10, left: 290}, {width: 5, top: 30, left: 220}, {width: 11, top: 690, left: 27}, {width: 4, top: 660, left: 57},{width: 5, top: 712, left: 94}, {width: 5, top: 600, left: 320}, {width: 11, top: 550, left: 367} ] 
   return arr.map((item, index) => <Circle key={index} style={item} />)
}
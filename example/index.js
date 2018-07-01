import { Flip } from '../number-flip.js'

const $ = s => document.querySelector(s)

const flip = new Flip({
  node: $('.flip'),
  // from: 725,
  direct: false,
  easeFn: function(pos) {
    if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,3);
    return 0.5 * (Math.pow((pos-2),3) + 2);
  },
  // maxLenNum: 3,
  // systemArr: ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
})

$('button').onclick = () => {
  const num = ~~(Math.random() * 20)
  $('.num').innerText = Math.pow(2, num)
  flip.flipTo({to: Math.pow(2, num)})
}
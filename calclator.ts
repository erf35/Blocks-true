
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="plus"
    Plus = 1,
    //% block="minus"
    Minus = 2,
    //% block="times"
    Times = 3,
    //% block="divide"
    Divide = 4,
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace haha {
    /**
     * TODO: describe your function here
     * @param e describe parameter here,
     * @param n describe parameter here
     * @param s describe parameter here
     * @param h test
     */
    //% block=" nr1 $s nr2 $n proces $e vysledek $h"
    export function test(n: number, s: number, h: number, e: MyEnum): void {
        if (e = 1) {
            let hh: number
            hh = n * s
        }
    }
}

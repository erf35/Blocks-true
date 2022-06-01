//% weight=999 color=#ffb7c5 icon=""
namespace ledfortime {
    /**
     * ledfortime
     * @param n led x position, eg: 0
     * @param s led y position, eg: 0
    *  @param g how long led will be turned on, eg: 0
     */
    //% block="led x $n led y $s time ms $g"
    export function ledtime(n: number, s: number, g: number): void {
        // Add code here
        led.plot(n, s)
        basic.pause(g)
        basic.clearScreen()
    }
}

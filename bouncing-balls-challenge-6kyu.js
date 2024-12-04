/**
 * A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
 *
 * He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
 *
 * His mother looks out of a window 1.5 meters from the ground.
 *
 * How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
 *
 * Three conditions must be met for a valid experiment:
 * Float parameter "h" in meters must be greater than 0
 * Float parameter "bounce" must be greater than 0 and less than 1
 * Float parameter "window" must be less than h.
 * If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
 *
 * Note:
 * The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
 *
 * Examples:
 * - h = 3, bounce = 0.66, window = 1.5, result is 3
 *
 * - h = 3, bounce = 1, window = 1.5, result is -1
 *
 * (Condition 2) not fulfilled).
 */

function bouncingBall(h,  bounce,  window) {
    // your code here
    if(h <= 0 || bounce >= 1 || bounce <= 0 || window >= h){
        return -1;
    }

    let times =  0;

    times += 1;

    while(h * bounce > window){
        times += 2;
        h *= bounce;
    }
    return times;
}

/**
 * This question was a hard one because it took me a while to understand that a ball is seen 2 times on a bounce
 * After getting over that initial hurdle being able to calculate the math was very easy
 * I used a while loop because the question is saying that while the height is greater than the window it will bounce twice
 * Height is calculated by the bounce and bounce has to be less than 1 and greater than zero
 * This is because a bounces energy falls off as it bounces more so using a fractional value makes sense
 * The hardest part really was understanding how the ball bounces
 */

/**
 * 
 * BATMAN's DILEMMA!


    The gotham city is again in trouble as the joker escaped the arkham asylum
    .
    The Joker this time had a new plan. He gave Batman a puzzle to solve. He has

    rigged N places in the city with bombs(Numbered 1 to N).The bombs are connected

    in a hierarchical fashion i.e If one bomb blows up ,a number of other bombs Connected

    to it are triggered and blow too and so on.The joker has the remote of the bomb that can

    trigger all the other bombs(directly or indirectly).Each bomb i has a destruction factor(D[i])

    can be NEGATIVE,if the cost of blowing up that place is very high and the destruction is less.

    He has asked Batman to identify the pair of bombs i,j where i is the ith bomb and j

    is any bomb triggered by it(directly or indirectly) for which the difference of destruction factor

    of two bombs is minimum(D[i]-D[j])(i triggers j).if the batman is able to figure out the answer.The

    Joker will surrender and the bombs will be deactivated or Otherwise the City will blow up.




    Batman has asked Chef to help him in this crisis.


    You need to help chef to figure out the Answer.


    Input Format:

    First line of input contains an integer T, the number of test cases.

    For each test case:

    The first line will contain an integer N,number of bombs

    The second line will contain N spaced integers ,Destruction factor for each bomb(D[i])

    The third Line will contain N spaced integers T[i],which gives the bomb number that triggers the ith bomb or -1 if joker triggers that bomb.

    T[i]=j i.e bomb j triggers the ith bomb.(j->i)


    Output Format:

    For each test case:

    The output contains an integer k.

    where k is the minimum difference between the pair i , j with the minimum difference

    between their destruction factors.


    Constraints:

    1 <= N <= 100000

    -107 <= D[i] <= 107

    Examples:

    Input

    2

    4

    10 9 8 7

    -1 1 1 3

    5

    11 7 10 13 2

    3 3 -1 1 2



    Output

    1

    -3

    Explanation:

    In the first test case

    joker has the remote to 1st bomb

    2 is triggered by 1

    3 is triggered by 1

    4 is triggered by 3

    The tree would be

        1

        /   \

    2     3

                \

            4

    1 triggers 2(D[1]-D[2]=10-9=1)

    1 triggers 3(D[1]-D[3]=10-8=2)

    3 triggers 4(D[3]-D[4]=8-7=1)

    1 triggers 4(indirectly)(D[1]-D[4]=10-7=3)

    1 and 3 do not trigger any bombs

    Minimum difference is 1.



    In the second test case

    joker has the remote to 3rd bomb

    The 3rd bomb triggers 1 and 2

    1st triggers 4th

    2nd triggers 5th

    D[3]-D[1]=-1

    D[3]-D[2]=2

    D[1]-D[4]=-2

    D[2]-D[5]=5

    D[3]-D[4](indirectly 3->1 ,1->4)=-3

    D[3]-D[5](indirectly 3->2, 2->5)= 5

    The answer is -3 for 3rd bomb which triggers 5th bomb.
*/

function solve(N, D, C) {
    let map = new Map();
    for(let i = 0; i < N; ++i){
        if(map.has(C[i] - 1)){
            map.get(C[i] - 1).push(i);
        }else{
            map.set(C[i] - 1, [i]);
        }
    }

    let min = [D[map.get(-2)[0]]];
    let len = 0;
    let ans = D[map.get(-2)[0]];

    preOrder(map.get(-2)[0]);

    return ans;

    function preOrder(parent){

        let children = map.get(parent);
        
        if(children === undefined){
            return;
        }

        for(let i = 0; i < children.length; ++i){
            let curr = children[i];
            
            ans = Math.min(ans, min[len] - D[curr]);
            min.push(Math.min(min[len], D[curr]));
            ++len;
            preOrder(curr);
            min.pop();
            --len;
        }
    }
}

N = 5;
C = [-1,1,1,3];
D = [10,9,8,7];

console.log(solve(N,D,C));

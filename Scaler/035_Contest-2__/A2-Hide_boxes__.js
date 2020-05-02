/**
 * Hide boxes
 * 
    
Problem Description

There are N cubical boxes and the edge length of boxes is given by an array A of size N. A box can hold another box inside it, if and only if the length of a box is at least twice as large than another box. There can be atmost one box inside any other box. The box which is inside another box is not visible. You have to minimize the number of boxes visible.  


Problem Constraints
1 <= N <= 100000
1 <= A[i] <= 109


Input Format
First argument is an integer array A of size N.


Output Format
Return an integer denoting minimum number of boxes visible.


Example Input
 A = [1, 2, 2, 4, 3]


Example Output
 3


Example Explanation
 We can put the box at index 1 into box at index 5.Also, the box at index 2 into box at index 4. 
 So, the visible boxes will be the box at index 3,4,5.
 */

function solve(A) {
    const al = A.length;
    A.sort(cmp);
    // console.log(A);
    
    let outStart = getNext(-1);
    let inStart = getNextHalf(0,0);
    let count = 0;

    while (inStart < al) {
        
        if(inStart === -1){
            break
        }
        if(inStart > 0){
            A[inStart] = 0;
            A[outStart] *= -1;
            outStart = getNext(outStart);
            inStart = getNextHalf(outStart, inStart);
        }
    }

    addRemainingElems();

    return count;

    function cmp(a, b) {
        return a === b ? 0 : (a > b ? -1 : 1);
    }

    function addRemainingElems() {
        // console.log(A);
        
        for(let i = 0; i < al; ++i){
            if(A[i] !== 0){
                ++count;
            }
        }
    }

    function getNext(x) {
        let i = 0;
        for(i = x+1; i < al; ++i){
            if(Math.abs(A[i]) > 0){
                break;
            }
        }
        return i;
    }

    function getNextHalf(x, lastIndex) {
        let i = lastIndex + 1;
        for(i; i < al; ++i){
            if(Math.abs(A[x]) >= (2 * Math.abs(A[i]))){
                break;
            }
        }
        return i;
    }
}

A = [ 1633, 2966, 2680, 4550, 2886, 2117, 3942, 1415, 510, 2483, 2367, 390, 3389, 2803, 844, 1302, 2707, 1404, 2351, 3575, 2207, 3720, 2475, 1308, 1944, 1203, 82, 2025, 1576, 1109, 1739, 1544, 4431, 2783, 1488, 3069, 6122, 858, 3283, 2298, 639, 3710, 3829, 3949, 5783, 4453, 1704, 1531, 2269, 4750, 2375, 2695, 4676, 2305, 3827, 4532, 811, 1670, 1818, 6249, 3308, 1006, 1789, 2863, 1817, 1297, 6231, 1340, 3587, 4574, 2135, 3649, 1455, 2638, 5246, 2858, 54, 3308, 101, 2094, 4254, 2530, 4038, 3700, 4173, 2587, 1038, 3960, 2287, 2589, 4688, 2726, 1818, 4542, 462, 2646, 1435, 1521, 4382, 72, 6504, 47, 1613, 3583, 2760, 2715, 1495, 2739, 3982, 3198, 2082, 4416, 976, 300, 1195, 1483, 1774, 5598, 2109, 3030, 1463, 3473, 2201, 695, 17, 3085, 1208, 1783, 914, 1859, 950, 251, 49, 608, 369, 3758, 4023, 4610, 2217, 2112, 14, 2931, 2617, 4390, 4542, 3565, 3303, 491, 1342, 4523, 3916, 3915, 2763, 1919, 3284, 3292, 2451, 4228, 3353, 2129, 2603, 69, 5753, 2626, 2712, 3601, 1172, 2332, 1337, 2694, 2217, 1539, 2415, 2264, 2676, 595, 2384, 2682, 1943, 2774, 84, 2744, 739, 5157, 2835, 1279, 1601, 3988, 3971, 3152, 3155, 2451, 2914, 3080, 3077, 3795, 140, 5848, 1156, 1293, 2977, 5074, 408, 589, 1090, 3263, 1010, 4817, 6818, 3087, 4535, 798, 3232, 1479, 512, 2533, 3875, 3016, 1862, 1889, 1391, 967, 3076, 5169, 4111, 3006, 3036, 835, 210, 4351, 1362, 2868, 4862, 1559, 1171, 3327, 3283, 4305, 3867, 1469, 1524, 681, 2300, 2697, 1640, 4217, 3224, 3009, 4428, 15, 4771, 1417, 2314, 782, 696, 3036, 2737, 3144, 760, 3615, 3408, 4031, 2991, 2979, 5476, 2364, 5449, 1575, 3013, 4103, 1569, 3441, 4109, 5326, 4554, 4470, 2715, 1174, 5403, 892, 2510, 2606, 3063, 4548, 1237, 3688, 1038, 3920, 4171, 1638, 4605, 4192, 1987, 3570, 543, 1236, 3426, 3624, 2340, 2045, 2117, 2538, 4213, 2292, 2894, 1479, 2996, 551, 857, 2018, 1074, 1072, 2256, 1545, 4701, 2672, 2778, 3049, 999, 4306, 2594, 57, 1965, 1735, 4296, 2780, 1688, 1442, 662, 1891, 3656, 4230, 1930, 411, 3417, 4144, 1434, 3538, 3208, 1283, 4687, 5211, 2166, 1393, 6257, 283, 3820, 4700, 4386, 583, 3460, 1002, 4457, 3032, 6339, 4752, 4771, 5329, 2492, 621, 4664, 2578, 1439, 3509, 1410, 640, 3350, 2681, 1342, 3572, 4948, 3385, 615, 1832, 3074, 3230, 3568, 4015, 2647, 4991, 3821, 1538, 1367, 2757, 711, 3387, 2316, 1479, 1572, 2789, 1121, 4558, 4836, 4324, 1817, 5171, 2015, 25, 4273, 82, 4295, 1766, 2204, 4433, 4009, 3066, 4259, 3506, 3952, 5019, 2698, 692, 2782, 1722, 4716, 2373, 3870, 404, 3321, 2766, 83, 4440, 4152, 3958, 1572, 2091, 1568, 3798, 775, 1650, 5121, 4669, 2072, 3140, 1815, 3025, 3361, 1547, 2340, 3414, 1914, 43, 3031, 2592, 2303, 2745, 1263, 3771, 982, 3241, 3665, 4734, 1886, 3110, 3303, 3897, 1690, 3591, 5532, 3299, 1203, 3454, 5275, 2219, 2834, 571, 4303, 3503, 5367, 2822, 4520, 2519, 1189, 1986, 960, 2126, 3474, 3820, 705, 2364, 1224, 4539, 2536, 2910, 1818, 3546, 1345, 5006, 3841, 1428, 4012, 71, 4617, 4270, 5321, 2348, 3873, 4199, 1605, 1224, 752, 1777, 950, 5469, 902, 2388, 4799, 3687, 4078, 4299, 3107, 2024, 1904, 1369, 8, 4783, 5356, 666, 2535, 3277, 1932, 2566, 2164, 1022, 3554, 4644, 4369, 534, 4753, 4247, 3455, 3765, 2276, 3780, 2142, 4269, 2620, 3381, 1742, 1026, 3475, 2429, 3188, 43, 1711, 613, 1697, 2189, 2862, 3476, 3319, 4481, 2977, 4977, 1049, 5145, 2797, 969, 3040, 1064, 2185, 4481, 2043, 5392, 95, 1644, 5391, 3905, 937, 641, 1106, 789, 3605, 647, 4359, 4266, 6588, 4417, 2755, 4156, 782, 1220, 6629, 2851, 2840, 2930, 5251, 4484, 6015, 1169, 66, 2499, 4359, 2151, 3488, 1566, 2635, 2119, 1874, 4736, 2752, 1346, 4817, 3934, 3843, 2552, 3520, 83, 2819, 2394, 1409, 6445, 5555, 6282, 4616, 5459, 4347, 4519, 5221, 4247, 2650, 3440, 1716, 2988, 24, 2170, 1606, 4559, 4148, 6650, 3730, 3692, 112, 1498, 4331, 6223, 1190, 1718, 1403, 3710, 6273, 3254, 3644, 1189, 4821, 4913, 5503, 691, 4523, 4261, 1177, 1630, 2907, 311, 4319, 1734, 4157, 1598, 2075, 2368, 2470, 6119, 1580, 2234, 2062, 1638, 1493, 4239, 4415, 5780, 1770, 1193, 2397, 2291, 3735, 2937, 2469, 4829, 5923, 2347, 1444, 4270, 4183, 2623, 4085, 1326, 1259, 4643, 3063, 4800, 2480, 1265, 2758, 111, 3445, 1453, 3811, 5337, 2728, 1267, 1781, 1137, 6, 3957, 1519, 3003, 4270, 1883, 2552, 91, 3097, 90, 2923, 2214, 1161, 1623, 779, 3345, 171, 1391, 1880, 2392, 1134, 4452, 3348, 332, 906, 4463, 40, 3976, 2416, 2572, 777, 2065, 4468, 2673, 5028, 3886, 2825, 4740, 4076, 643, 3827, 2198, 3964, 1136, 4020, 5503, 4407, 2322, 4179, 15, 4264, 1195, 3920, 2100, 793, 710, 1742, 3859, 941, 1917, 1088, 3125, 1367, 2285, 4448, 2697, 4669, 2566, 2349, 2519, 4787, 2246, 1881, 2472, 6, 4349, 3672, 651, 78, 2395, 43, 1248, 2331, 2348, 5061, 3577, 1546, 4379, 2818, 1768, 2502, 6598, 2121, 1448, 2991, 1695, 4164, 2611, 2799, 1298, 3621, 5710, 1337, 3803, 4272, 4894, 3459, 1021, 659, 3249, 2757, 1714, 4102, 4884, 1327, 1239, 5229, 3603, 3904, 89, 3689, 1049, 2920, 1062, 1322, 4485, 979, 4256, 1532, 3440, 2876, 4680, 4390, 3653, 2746, 1842, 2433, 3559, 3060, 4887, 2365, 2767, 1873, 1131, 89, 3863, 1112, 499, 3896, 2560, 703, 1092, 3344, 929, 2385, 5040, 2043, 1255, 4375, 3352, 81, 1, 2498, 2387, 4309, 3009, 3947, 1687, 4974, 4497, 4117, 2320, 2202, 4319, 1316, 1522, 2847, 4068, 4439, 5814, 3478, 967, 2249, 1008, 1965, 2704, 2040, 3941, 4218, 5191, 4340, 3502, 4307, 4476, 1775, 3155, 3911, 1826, 2663, 3628, 1162, 2143, 3966, 4154, 3071, 3747, 1874, 3210, 1932, 94, 3204, 2466, 2505, 5505, 1948, 2771, 2248, 4486, 1352, 3860, 1927, 1648, 4817, 4649, 1423, 1362, 3099, 1199, 1121, 2976, 2254, 2609, 2156, 2150, 2154, 3972, 3518, 2, 660, 1556, 848, 1938, 3044, 3026, 1112, 565, 5209, 2373, 5922, 2550, 3698, 4533, 3360, 3585, 2848, 1855, 3719, 3083, 4913, 3525 ];

console.log(solve(A));
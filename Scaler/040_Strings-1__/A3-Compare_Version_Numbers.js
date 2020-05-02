/**
 * Compare Version Numbers
 * 
Compare two version numbers version1 and version2.
If version1 > version2 return 1,
If version1 < version2 return -1,
otherwise return 0.
You may assume that the version strings are non-empty and contain only digits and the '.' character. The '.' character does not represent a decimal point and is used to separate number sequences. For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision. Here is an example of version numbers ordering:
0.1 < 1.1 < 1.2 < 1.13 < 1.13.4
 */

function solve(A, B) {
    
    let al = A.length;
    let bl = B.length;

    let i = 0;
    let j = 0;

    let ans = 0;

    let a = [];
    let b = [];

    let tmp = '';
    while(i < al){
        
        if(A[i] === '.'){
            a.push(tmp);
            tmp = '';
            ++i;
            continue;
        }
        tmp += A[i];
        ++i;
    }
    a.push(tmp);

    tmp = '';
    while(j < bl){
        
        if(B[j] === '.'){
            b.push(tmp);
            tmp = '';
            ++j;
            continue;
        }
        tmp += B[j];
        ++j;
    }
    b.push(tmp);

    for(let k = a.length - 1; k >= 0; --k){
        if(+a[k] === 0){
            a.pop();
        }else{
            break;
        }
    }

    for(let k = b.length - 1; k >= 0; --k){
        if(+b[k] === 0){
            b.pop();
        }else{
            break;
        }
    }
    
    al = a.length;
    bl = b.length;
    
    i = 0;
    j = 0;

    while(i < al && j < bl){   
        
        
        if(+a[i] < +b[j]){
            ans = -1;
            break;
        }else if(+a[i] > +b[j]){
            ans = 1;
            break;
        }
        
        ++i;
        ++j;
    }

    if(ans === 0){
        ans = al === bl ? 0 : (al > bl ? 1 : -1);
    }

    return ans;
}

A = '13.0';
B = '13.0.8';

console.log(solve(A,B));



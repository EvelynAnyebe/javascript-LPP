/** 
 * Given an integer n, 
 * generate all the valid combination 
 * of n pairs of parentheses.
 * A combination that contains 1 type of parentheses is valid
 * if every opening parenthesis has its clossing parenthesis.
 */

function is_valid(combination){
   let stack = []
    for(let par in combination){
        if(par === '(') stack.append(par);
        else{
            if(!stack.length) return false
            else stack.pop()
        }
    }

    return stack.length === 0
}

function is_valid_diff(combination){
    let diff = 0
    for(let par in combination){
        if(par === '(') diff +=1;
        else{
            if(!diff) return false
            else diff-=1;
        }
    }

    return !diff
}

function generate(n){
    function rec(n, diff,comb, combs){
        if(!diff && diff>n) return;
        else if(!n){
            if(!diff) combs.append(''.join(comb))
        }else{
            comb.append('(')
            rec(n-1,diff+1,comb,combs)
            comb.pop()
            comb.append(')')
            rec(n-1,diff-1,comb,combs)
            comb.pop()
        }

    }
    combs = []
    rec(2*n,0,[],combs)
    return combs;
}